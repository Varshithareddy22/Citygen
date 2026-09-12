import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
} from "@react-three/drei";

import CityScene from "./3d/CityScene";

function CityPreview3D() {
  return (
    <div className="absolute inset-0">

      <Canvas
        shadows
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >

        <PerspectiveCamera
          makeDefault
          position={[18, 14, 20]}
          fov={38}
        />

        <ambientLight intensity={0.45} />

        <directionalLight
          position={[8, 18, 10]}
          intensity={2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />

        <pointLight
          position={[0, 8, 0]}
          intensity={5}
          distance={35}
        />

        <CityScene />

        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={0.4}
          scale={35}
          blur={2}
          far={15}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={13}
          maxDistance={27}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.25}
          autoRotate
          autoRotateSpeed={0.18}
          dampingFactor={0.04}
          enableDamping
        />

      </Canvas>

    </div>
  );
}

export default CityPreview3D;