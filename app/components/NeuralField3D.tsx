"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const layers = [4, 6, 6, 4];

type NodePoint = {
  position: THREE.Vector3;
  layer: number;
};

const buildNodes = () => {
  const nodes: NodePoint[] = [];
  const spacingX = 2.2;
  const spacingY = 0.68;

  layers.forEach((count, layer) => {
    const x = (layer - (layers.length - 1) / 2) * spacingX;
    for (let i = 0; i < count; i += 1) {
      const y = (i - (count - 1) / 2) * spacingY;
      const z = Math.sin((layer + 1) * (i + 1)) * 0.32;
      nodes.push({ position: new THREE.Vector3(x, y, z), layer });
    }
  });

  return nodes;
};

const buildEdges = (nodes: NodePoint[]) => {
  const edges: Array<[number, number]> = [];

  for (let layer = 0; layer < layers.length - 1; layer += 1) {
    const from = nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node }) => node.layer === layer);
    const to = nodes
      .map((node, index) => ({ node, index }))
      .filter(({ node }) => node.layer === layer + 1);

    from.forEach((a) => {
      to.forEach((b) => edges.push([a.index, b.index]));
    });
  }

  return edges;
};

const NeuralField3D = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

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

    const nodeGeometry = new THREE.SphereGeometry(0.06, 18, 18);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xf0f0f0 });

    const nodeMeshes = nodes.map(({ position }) => {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial);
      mesh.position.copy(position);
      group.add(mesh);
      return mesh;
    });

    const edgePositions = new Float32Array(edges.length * 2 * 3);
    edges.forEach(([a, b], edgeIndex) => {
      const offset = edgeIndex * 6;
      const start = nodes[a].position;
      const end = nodes[b].position;
      edgePositions.set([start.x, start.y, start.z, end.x, end.y, end.z], offset);
    });

    const edgeGeometry = new THREE.BufferGeometry();
    edgeGeometry.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xb8b8b8,
      transparent: true,
      opacity: 0.32,
    });
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    group.add(edgeLines);

    const pointer = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    let frameId = 0;

    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.floor(width));
      const nextHeight = Math.max(1, Math.floor(height));
      renderer.setSize(nextWidth, nextHeight, false);
      camera.aspect = nextWidth / nextHeight;
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
      pointer.lerp(target, 0.06);
      group.rotation.y = pointer.x * 0.28 + (reduceMotion ? 0 : Math.sin(time * 0.0002) * 0.08);
      group.rotation.x = pointer.y * 0.18 - 0.05;

      nodeMeshes.forEach((mesh, index) => {
        const base = nodes[index].position;
        const pulse = reduceMotion ? 0 : Math.sin(time * 0.0014 + index * 0.7) * 0.018;
        mesh.position.set(base.x, base.y + pulse, base.z);
      });

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
      nodeGeometry.dispose();
      nodeMaterial.dispose();
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
