import { Canvas } from "@react-three/fiber";
import CityWorld from "./CityWorld";

export default function CityCanvas({
  city,
  onSelectBuilding,
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [18, 15, 19],
        fov: 40,
      }}
      gl={{
        antialias: true,
      }}
    >
      <color
        attach="background"
        args={["#050708"]}
      />

      <CityWorld
        city={city}
        onSelectBuilding={onSelectBuilding}
      />
    </Canvas>
  );
}