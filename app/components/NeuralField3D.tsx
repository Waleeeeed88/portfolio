"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const layerCounts = [5, 7, 9, 7, 5];

type NodePoint = {
  position: THREE.Vector3;
  layer: number;
};

type EdgePoint = {
  start: THREE.Vector3;
  end: THREE.Vector3;
};

type Packet = {
  edgeIndex: number;
  offset: number;
  speed: number;
  mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
  glow: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
};

const buildNodes = () => {
  const nodes: NodePoint[] = [];
  const spacingX = 1.55;

  layerCounts.forEach((count, layer) => {
    const x = (layer - (layerCounts.length - 1) / 2) * spacingX;
    for (let i = 0; i < count; i += 1) {
      const row = i - (count - 1) / 2;
      const y = row * 0.46;
      const z =
        Math.sin((layer + 1) * 1.7 + i * 0.9) * 0.72 +
        Math.cos(i * 1.35) * 0.18;
      nodes.push({ position: new THREE.Vector3(x, y, z), layer });
    }
  });

  return nodes;
};

const buildEdges = (nodes: NodePoint[]) => {
  const edgeKeys = new Set<string>();
  const edges: EdgePoint[] = [];

  const addEdge = (fromIndex: number, toIndex: number) => {
    const key = `${fromIndex}-${toIndex}`;
    if (edgeKeys.has(key)) return;
    edgeKeys.add(key);
    edges.push({
      start: nodes[fromIndex].position,
      end: nodes[toIndex].position,
    });
  };

  for (let layer = 0; layer < layerCounts.length - 1; layer += 1) {
    const from = nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node }) => node.layer === layer);
    const to = nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node }) => node.layer === layer + 1);

    from.forEach((source, sourceOffset) => {
      const nearest = to
        .map((target) => ({
          ...target,
          distance:
            Math.abs(target.node.position.y - source.node.position.y) +
            Math.abs(target.node.position.z - source.node.position.z) * 0.45,
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 4);

      nearest.forEach((target) => addEdge(source.index, target.index));

      const diagonal = to[(sourceOffset * 2 + layer) % to.length];
      if (diagonal) addEdge(source.index, diagonal.index);
    });
  }

  return edges;
};

const writeLineSegment = (
  target: Float32Array,
  offset: number,
  start: THREE.Vector3,
  end: THREE.Vector3
) => {
  target[offset] = start.x;
  target[offset + 1] = start.y;
  target[offset + 2] = start.z;
  target[offset + 3] = end.x;
  target[offset + 4] = end.y;
  target[offset + 5] = end.z;
};

const NeuralField3D = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodes = buildNodes();
    const edges = buildEdges(nodes);

    const nodeGeometry = new THREE.SphereGeometry(0.065, 24, 24);
    const glowGeometry = new THREE.SphereGeometry(0.16, 24, 24);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
    });

    const nodeMeshes = nodes.map(({ position }, index) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.copy(position);

      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.scale.setScalar(index % 3 === 0 ? 1.2 : 0.82);
      nodeGroup.add(glow);

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      nodeGroup.add(node);

      group.add(nodeGroup);
      return nodeGroup;
    });

    const edgePositions = new Float32Array(edges.length * 6);
    edges.forEach((edge, edgeIndex) => {
      writeLineSegment(edgePositions, edgeIndex * 6, edge.start, edge.end);
    });

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.19,
    });
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    group.add(edgeLines);

    const trailCount = Math.min(48, Math.max(24, edges.length));
    const trailPositions = new Float32Array(trailCount * 6);
    const trailGeometry = new THREE.BufferGeometry();
    trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.78,
    });
    const trailLines = new THREE.LineSegments(trailGeometry, trailMaterial);
    group.add(trailLines);

    const packetGeometry = new THREE.SphereGeometry(0.042, 18, 18);
    const packetGlowGeometry = new THREE.SphereGeometry(0.12, 18, 18);
    const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const packetGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    });

    const packets: Packet[] = Array.from({ length: trailCount }, (_, index) => {
      const mesh = new THREE.Mesh(packetGeometry, packetMaterial);
      const glow = new THREE.Mesh(packetGlowGeometry, packetGlowMaterial);
      group.add(glow);
      group.add(mesh);

      return {
        edgeIndex: (index * 7 + Math.floor(index / 3)) % edges.length,
        offset: index / trailCount,
        speed: 0.055 + (index % 7) * 0.006,
        mesh,
        glow,
      };
    });

    const pointer = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    const tempStart = new THREE.Vector3();
    const tempEnd = new THREE.Vector3();
    const tempNow = new THREE.Vector3();
    let frameId = 0;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.floor(width));
      const nextHeight = Math.max(1, Math.floor(height));
      renderer.setSize(nextWidth, nextHeight, false);
      camera.aspect = nextWidth / nextHeight;
      camera.position.z = nextWidth < 640 ? 8.6 : 7.2;
      group.scale.setScalar(nextWidth < 640 ? 1.08 : 1.46);
      camera.updateProjectionMatrix();
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const onPointerLeave = () => {
      target.set(0, 0);
    };

    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    const render = (time = 0) => {
      const seconds = time * 0.001;
      pointer.lerp(target, 0.055);

      group.rotation.y =
        pointer.x * 0.38 + (reduceMotion ? -0.18 : Math.sin(seconds * 0.32) * 0.35);
      group.rotation.x =
        pointer.y * 0.22 + (reduceMotion ? -0.04 : Math.sin(seconds * 0.21) * 0.1 - 0.08);
      group.rotation.z = reduceMotion ? 0 : Math.sin(seconds * 0.18) * 0.035;

      nodeMeshes.forEach((mesh, index) => {
        const pulse = reduceMotion ? 1 : 1 + Math.sin(seconds * 2.8 + index * 0.55) * 0.16;
        mesh.scale.setScalar(pulse);
      });

      packets.forEach((packet, index) => {
        const edge = edges[packet.edgeIndex];
        const travel = reduceMotion
          ? packet.offset
          : (seconds * packet.speed + packet.offset) % 1;
        const trail = Math.max(0, travel - 0.12);
        tempStart.lerpVectors(edge.start, edge.end, trail);
        tempNow.lerpVectors(edge.start, edge.end, travel);
        tempEnd.lerpVectors(edge.start, edge.end, Math.min(1, travel + 0.018));

        packet.mesh.position.copy(tempNow);
        packet.glow.position.copy(tempNow);

        const scale = 0.9 + Math.sin(seconds * 9 + index) * 0.18;
        packet.mesh.scale.setScalar(scale);
        packet.glow.scale.setScalar(1.1 + scale * 0.45);

        writeLineSegment(trailPositions, index * 6, tempStart, tempEnd);
      });

      trailGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      renderer.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      trailGeometry.dispose();
      trailMaterial.dispose();
      nodeGeometry.dispose();
      glowGeometry.dispose();
      nodeMaterial.dispose();
      glowMaterial.dispose();
      packetGeometry.dispose();
      packetGlowGeometry.dispose();
      packetMaterial.dispose();
      packetGlowMaterial.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="neural-field-section" aria-label="Interactive neural field">
      <div ref={hostRef} className="neural-field-canvas" />
    </section>
  );
};

export default NeuralField3D;
