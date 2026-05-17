"use client";

import { motion } from "framer-motion";

const RINGS = [
  { rx: 270, ry: 78,  tilt: 12,  dur: 24, opacity: 0.07, nodeR: 3.5 },
  { rx: 195, ry: 58,  tilt: -22, dur: 17, opacity: 0.055, nodeR: 2.8 },
  { rx: 125, ry: 38,  tilt: 6,   dur: 12, opacity: 0.04, nodeR: 2.2 },
];

export default function HeroOrbit() {
  return (
    <div className="hero-orbit-wrap" aria-hidden>
      <svg
        viewBox="-300 -150 600 300"
        className="hero-orbit-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {RINGS.map((ring, i) => (
          <motion.g
            key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "0px 0px" }}
          >
            <ellipse
              cx="0"
              cy="0"
              rx={ring.rx}
              ry={ring.ry}
              transform={`rotate(${ring.tilt})`}
              stroke={`rgba(255,255,255,${ring.opacity})`}
              strokeWidth="1"
              strokeDasharray="4 9"
            />
            {/* leading node */}
            <circle
              cx={ring.rx}
              cy="0"
              r={ring.nodeR}
              fill={`rgba(255,255,255,${ring.opacity * 6})`}
            />
            {/* trailing node on opposite end */}
            <circle
              cx={-ring.rx}
              cy="0"
              r={ring.nodeR * 0.7}
              fill={`rgba(255,255,255,${ring.opacity * 3})`}
            />
          </motion.g>
        ))}

        {/* static centre pulse */}
        <motion.circle
          cx="0" cy="0" r="3"
          fill="rgba(255,255,255,0.18)"
          animate={{ scale: [1, 1.8, 1], opacity: [0.18, 0.05, 0.18] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "0px 0px" }}
        />
      </svg>
    </div>
  );
}
