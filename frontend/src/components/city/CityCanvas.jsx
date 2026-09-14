import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";

import CityWorld from "./CityWorld";

export default function CityCanvas({ city }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      camera={{
        position: [17, 12, 19],
        fov: 38,
      }}
    >

      <color
        attach="background"
        args={["#050708"]}
      />

      <PerspectiveCamera
        makeDefault
        position={[17, 12, 19]}
        fov={38}
      />

      {/* Ambient */}

      <ambientLight intensity={0.75} />

      {/* Main light */}

      <directionalLight
        position={[10, 18, 8]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Soft city fill */}

      <pointLight
        position={[0, 7, 2]}
        intensity={4}
        distance={30}
        color="#7baeb5"
      />

      <CityWorld city={city} />

      <ContactShadows
        position={[0, 0.02, 0]}
        opacity={0.5}
        scale={32}
        blur={2.5}
        far={18}
      />

      <OrbitControls
        enableDamping
        dampingFactor={0.045}
        enablePan={false}
        enableZoom
        minDistance={10}
        maxDistance={28}
        minPolarAngle={Math.PI / 4.2}
        maxPolarAngle={Math.PI / 2.15}
        autoRotate
        autoRotateSpeed={0.22}
      />

    </Canvas>
  );
}