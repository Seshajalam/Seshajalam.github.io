'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 1500;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      colors[i * 3] = 0.63 + t * 0.35;
      colors[i * 3 + 1] = 0.55 + t * 0.2;
      colors[i * 3 + 2] = 0.82 + t * 0.1;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.x = Math.sin(time * 0.03) * 0.1;

    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * 0.5 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * 0.5 - mouseRef.current.y) * 0.02;
    meshRef.current.rotation.y += mouseRef.current.x * 0.1;
    meshRef.current.rotation.x += mouseRef.current.y * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
