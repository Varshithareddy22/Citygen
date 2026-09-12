import {
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import Buildings from "./Buildings";
import RoadNetwork from "./RoadNetwork";
import Landscape from "./Landscape";
import Water from "./Water";
import Transport from "./Transport";

export default function CityWorld({
  city,
  onSelectBuilding,
}) {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[18, 15, 19]}
        fov={40}
      />

      <ambientLight intensity={0.65} />

      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />

      <pointLight
        position={[0, 7, 0]}
        intensity={3}
        distance={30}
      />

      <Landscape />

      <Water />

      <RoadNetwork />

      <Buildings
        buildings={city?.buildings || []}
        onSelect={onSelectBuilding}
      />

      <Transport />

      <OrbitControls
        enableDamping
        dampingFactor={0.06}
        enablePan
        enableZoom
        minDistance={10}
        maxDistance={32}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}