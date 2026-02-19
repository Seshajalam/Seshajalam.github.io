'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial
        color="#6c63ff"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}
