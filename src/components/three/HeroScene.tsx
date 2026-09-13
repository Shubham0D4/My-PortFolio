import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useMedia } from '../../hooks/useMedia';

function StarField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.018;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6ee7c5"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.72}
      />
    </Points>
  );
}

function MemoryGraph() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const r = 1.15 + (i % 3) * 0.22;
      pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a * 1.7) * 0.55, Math.sin(a) * r * 0.6));
    }
    return pts;
  }, []);

  const segments = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    nodes.forEach((node, i) => {
      lines.push([node, nodes[(i + 3) % nodes.length]]);
      lines.push([node, nodes[(i + 7) % nodes.length]]);
    });
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.12;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={group} position={[2.35, 0.15, -0.4]}>
      {segments.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color={i % 2 === 0 ? '#6ee7c5' : '#d4a574'}
          lineWidth={0.6}
          transparent
          opacity={0.28}
        />
      ))}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#d4a574' : '#6ee7c5'} />
        </mesh>
      ))}
    </group>
  );
}

function Artifact() {
  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh position={[-2.4, 0.35, -1.2]}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial color="#6ee7c5" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh position={[-2.4, 0.35, -1.2]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#d4a574" wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const reduceMotion = useMedia('(prefers-reduced-motion: reduce)');
  const isMobile = useMedia('(max-width: 768px)');

  if (reduceMotion) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 50 }}
        dpr={[1, isMobile ? 1.2 : 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#08090d']} />
        <ambientLight intensity={0.45} />
        <pointLight position={[4, 3, 4]} intensity={18} color="#6ee7c5" distance={18} />
        <pointLight position={[-4, -2, 2]} intensity={10} color="#d4a574" distance={16} />
        <StarField count={isMobile ? 180 : 380} />
        {!isMobile && <MemoryGraph />}
        <Artifact />
      </Canvas>
    </div>
  );
}
