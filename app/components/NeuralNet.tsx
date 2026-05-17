"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ── Topology ── */
const LAYERS = [4, 6, 6, 5, 3];
const LAYER_X = [-260, -130, 0, 130, 260]; // 3-D x position per layer
const LAYER_Z = [-50, -20, 0, 20, 50];     // depth offset per layer
const Y_GAP   = 52;
const PERSP   = 560;
const NUM_PULSES = 10;

/* ── Build node list ── */
type N3 = { x: number; y: number; z: number };

const buildNodes = (): N3[] => {
  const out: N3[] = [];
  for (let l = 0; l < LAYERS.length; l++) {
    const count = LAYERS[l];
    for (let i = 0; i < count; i++) {
      out.push({
        x: LAYER_X[l],
        y: (i - (count - 1) / 2) * Y_GAP,
        z: LAYER_Z[l],
      });
    }
  }
  return out;
};

/* ── Build edge list (fully connected adjacent layers) ── */
type Edge = [number, number];

const buildEdges = (): Edge[] => {
  const edges: Edge[] = [];
  let offset = 0;
  for (let l = 0; l < LAYERS.length - 1; l++) {
    const ac = LAYERS[l];
    const bc = LAYERS[l + 1];
    for (let ai = 0; ai < ac; ai++) {
      for (let bi = 0; bi < bc; bi++) {
        edges.push([offset + ai, offset + ac + bi]);
      }
    }
    offset += ac;
  }
  return edges;
};

/* ── Shared geometry (built once) ── */
const NODES = buildNodes();
const EDGES = buildEdges();

/* ── 3-D → 2-D projection ── */
type P2 = { sx: number; sy: number; depth: number; r: number };

const project = (ry: number, rx: number): P2[] => {
  const cy = Math.cos(ry), sy = Math.sin(ry);
  const cx = Math.cos(rx), sx = Math.sin(rx);

  return NODES.map((n) => {
    const x1 =  n.x * cy - n.z * sy;
    const z1 =  n.x * sy + n.z * cy;
    const y2 =  n.y * cx - z1 * sx;
    const z2 =  n.y * sx + z1 * cx;

    const scale = PERSP / (PERSP + z2);
    const depth = Math.max(0.1, Math.min(1, (z2 + 140) / 280));
    return { sx: x1 * scale, sy: y2 * scale, depth, r: 2 + depth * 2.4 };
  });
};

/* ── Component ── */
const NeuralNet = () => {
  const reduceMotion = useReducedMotion();
  const svgRef   = useRef<SVGSVGElement>(null);
  const dotRefs  = useRef<(SVGCircleElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const pulseRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    /* Static fallback for reduced-motion */
    if (reduceMotion) {
      const pts = project(0, 0.15);
      NODES.forEach((_, i) => {
        const d = dotRefs.current[i];
        if (!d) return;
        d.setAttribute("cx", String(pts[i].sx));
        d.setAttribute("cy", String(pts[i].sy));
        d.setAttribute("r",  String(pts[i].r));
        d.setAttribute("opacity", String(0.3 + pts[i].depth * 0.7));
      });
      EDGES.forEach(([a, b], i) => {
        const ln = lineRefs.current[i];
        if (!ln) return;
        ln.setAttribute("x1", String(pts[a].sx));
        ln.setAttribute("y1", String(pts[a].sy));
        ln.setAttribute("x2", String(pts[b].sx));
        ln.setAttribute("y2", String(pts[b].sy));
        ln.setAttribute("stroke-opacity",
          String(0.05 + Math.min(pts[a].depth, pts[b].depth) * 0.18));
      });
      return;
    }

    /* Animated mode */
    let ry   = 0;
    let rx   = 0;
    let last = performance.now();
    let visible = false;
    let rafId = 0;

    /* Spread pulses evenly across edges to start */
    type Pulse = { edge: number; t: number; speed: number };
    const pulses: Pulse[] = Array.from({ length: NUM_PULSES }, (_, i) => ({
      edge:  Math.floor((i / NUM_PULSES) * EDGES.length),
      t:      i / NUM_PULSES,
      speed: 0.0022 + Math.random() * 0.0028,
    }));

    const obs = new IntersectionObserver(
      (entries) => { visible = entries[0]?.isIntersecting ?? false; },
      { threshold: 0 }
    );
    if (svgRef.current) obs.observe(svgRef.current);

    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;

      if (visible) {
        ry += dt * 0.00020;
        rx += dt * 0.000065;

        const pts = project(ry, rx);

        /* Nodes */
        NODES.forEach((_, i) => {
          const d = dotRefs.current[i];
          if (!d) return;
          const p = pts[i];
          d.setAttribute("cx", String(p.sx));
          d.setAttribute("cy", String(p.sy));
          d.setAttribute("r",  String(p.r));
          d.setAttribute("opacity", String(0.2 + p.depth * 0.8));
        });

        /* Edges */
        EDGES.forEach(([a, b], i) => {
          const ln = lineRefs.current[i];
          if (!ln) return;
          const pa = pts[a], pb = pts[b];
          ln.setAttribute("x1", String(pa.sx));
          ln.setAttribute("y1", String(pa.sy));
          ln.setAttribute("x2", String(pb.sx));
          ln.setAttribute("y2", String(pb.sy));
          const minD = Math.min(pa.depth, pb.depth);
          ln.setAttribute("stroke-opacity", String(0.04 + minD * 0.22));
        });

        /* Pulses */
        pulses.forEach((pulse, pi) => {
          pulse.t += pulse.speed * dt;
          if (pulse.t >= 1) {
            pulse.t     = 0;
            pulse.edge  = Math.floor(Math.random() * EDGES.length);
            pulse.speed = 0.002 + Math.random() * 0.003;
          }
          const pc = pulseRefs.current[pi];
          if (!pc) return;
          const [a, b] = EDGES[pulse.edge];
          const pa = pts[a], pb = pts[b];
          const cx = pa.sx + (pb.sx - pa.sx) * pulse.t;
          const cy = pa.sy + (pb.sy - pa.sy) * pulse.t;
          const opacity = Math.sin(pulse.t * Math.PI) * 0.9;
          pc.setAttribute("cx", String(cx));
          pc.setAttribute("cy", String(cy));
          pc.setAttribute("opacity", String(opacity));
        });
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      obs.disconnect();
    };
  }, [reduceMotion]);

  return (
    <section className="neural-scene" aria-label="Animated neural network">
      <div className="neural-scene-head">
        <div className="neural-help">
          <span className="neural-help-trigger" tabIndex={0}>
            What&apos;s this?
          </span>
          <div
            className="neural-help-popover"
            role="tooltip"
          >
            <p className="neural-help-title">Feedforward MLP (toy)</p>
            <p className="neural-help-body">
              A <strong>5-layer dense network</strong>: each neuron in one layer connects to every neuron in the next (fully-connected blocks). The animation is a visualization — signals pulse along weighted edges like forward passes during inference.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="neural-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          ref={svgRef}
          viewBox="-430 -200 860 400"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <radialGradient id="nn-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Ambient glow behind the network */}
          <ellipse cx="0" cy="0" rx="340" ry="160" fill="url(#nn-glow)" />

          {/* Edges */}
          {EDGES.map((_, i) => (
            <line
              key={`e${i}`}
              ref={(el) => { lineRefs.current[i] = el; }}
              x1="0" y1="0" x2="0" y2="0"
              stroke="white"
              strokeWidth="0.55"
              strokeLinecap="round"
              strokeOpacity="0.08"
            />
          ))}

          {/* Nodes */}
          {NODES.map((_, i) => (
            <circle
              key={`n${i}`}
              ref={(el) => { dotRefs.current[i] = el; }}
              cx="0" cy="0" r="3"
              fill="white"
              opacity="0.5"
            />
          ))}

          {/* Signal pulses */}
          {Array.from({ length: NUM_PULSES }, (_, i) => (
            <circle
              key={`p${i}`}
              ref={(el) => { pulseRefs.current[i] = el; }}
              cx="0" cy="0" r="2.2"
              fill="white"
              opacity="0"
              style={{ filter: "drop-shadow(0 0 5px rgba(255,255,255,0.95))" }}
            />
          ))}
        </svg>

        {/* Edge-fade mask */}
        <div className="neural-mask" aria-hidden />
      </motion.div>
    </section>
  );
};

export default NeuralNet;
