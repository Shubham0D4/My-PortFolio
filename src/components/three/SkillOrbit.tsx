import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useMedia } from '../../hooks/useMedia';

function Orbit() {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outer.current) outer.current.rotation.y = t * 0.35;
    if (inner.current) {
      inner.current.rotation.x = t * 0.4;
      inner.current.rotation.y = t * 0.25;
    }
  });

  return (
    <>
      <mesh ref={inner}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial color="#6ee7c5" wireframe transparent opacity={0.4} />
      </mesh>
      <group ref={outer}>
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.7, Math.sin(a * 2) * 0.25, Math.sin(a) * 1.7]}>
              <sphereGeometry args={[0.07, 10, 10]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#6ee7c5' : '#d4a574'}
                emissive={i % 2 === 0 ? '#6ee7c5' : '#d4a574'}
                emissiveIntensity={0.35}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

export default function SkillOrbit() {
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion) return null;

  return (
    <div className="h-[280px] w-full md:h-[340px]">
      <Canvas camera={{ position: [0, 0.4, 4.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 2, 3]} intensity={16} color="#6ee7c5" />
        <Orbit />
      </Canvas>
    </div>
  );
}
