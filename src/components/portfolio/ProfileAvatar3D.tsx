import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Image } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AvatarCard() {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!group.current) return;
    const x = state.mouse.x * 0.4;
    const y = state.mouse.y * 0.25;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.08
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.08
    );
  });

  return (
    <Float
      speed={0.25}
      rotationIntensity={0.6}
      floatIntensity={1.4}
    >
      <group ref={group}>
        {/* Glow Plate */}
        {/* <mesh position={[0, 0, -0.08]}>
          <planeGeometry args={[3.15, 3.85]} />
          <meshBasicMaterial
            color="#7c3aed"
            transparent
            opacity={0.35}
          />
        </mesh> */}

        {/* Main Glass Card */}
        {/* <mesh>
          <boxGeometry args={[3, 3.7, 0.18]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={1}
            roughness={0.15}
            thickness={0.8}
            transparent
            opacity={0.22}
            metalness={0.25}
            clearcoat={1}
          />
        </mesh> */}

        {/* Image */}
        <Image
          url="/avatar.png"
          scale={[3, 3.5, 1]}
          position={[0, 0, 0.12]}
          radius={0.5}
          transparent
        />
      </group>
    </Float>
  );
}

export default function ProfileAvatar3D() {
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }}>
        {/* Lighting */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
          color="#8b5cf6"
        />

        <pointLight
          position={[-4, -2, 3]}
          intensity={2}
          color="#06b6d4"
        />

        <Environment preset="city" />

        <AvatarCard />
      </Canvas>
 
    </div>
  );
}