function Road({
  position,
  rotation = 0,
  width = 0.65,
  length = 25,
}) {
  return (
    <mesh
      position={position}
      rotation={[
        -Math.PI / 2,
        0,
        rotation,
      ]}
      receiveShadow
    >

      <planeGeometry
        args={[width, length]}
      />

      <meshStandardMaterial
        color="#0a0d0e"
        roughness={0.92}
      />

    </mesh>
  );
}

function RoadLine({
  position,
  rotation = 0,
  length = 24,
}) {
  return (
    <mesh
      position={position}
      rotation={[
        -Math.PI / 2,
        0,
        rotation,
      ]}
    >

      <planeGeometry
        args={[0.018, length]}
      />

      <meshBasicMaterial
        color="#a9b5b7"
        transparent
        opacity={0.18}
      />

    </mesh>
  );
}

function Intersection({ position }) {
  return (
    <mesh
      position={position}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    >

      <circleGeometry
        args={[0.7, 32]}
      />

      <meshStandardMaterial
        color="#101416"
        roughness={0.9}
      />

    </mesh>
  );
}

export default function RoadNetwork() {
  return (
    <group>

      {/* Main roads */}

      <Road
        position={[0, 0.08, 0]}
        width={0.8}
      />

      <Road
        position={[0, 0.085, 0]}
        rotation={Math.PI / 2}
        width={0.8}
      />

      {/* Secondary roads */}

      <Road
        position={[-4.5, 0.07, 0]}
        rotation={Math.PI / 2}
        width={0.42}
      />

      <Road
        position={[4.5, 0.07, 0]}
        rotation={Math.PI / 2}
        width={0.42}
      />

      <Road
        position={[0, 0.07, -4.5]}
        width={0.42}
      />

      <Road
        position={[0, 0.07, 4.5]}
        width={0.42}
      />

      {/* Diagonal roads */}

      <Road
        position={[0, 0.07, 0]}
        rotation={Math.PI / 4}
        width={0.28}
      />

      <Road
        position={[0, 0.07, 0]}
        rotation={-Math.PI / 4}
        width={0.28}
      />

      {/* Road markings */}

      <RoadLine
        position={[0, 0.095, 0]}
      />

      <RoadLine
        position={[0, 0.095, 0]}
        rotation={Math.PI / 2}
      />

      <RoadLine
        position={[-4.5, 0.09, 0]}
        rotation={Math.PI / 2}
        length={22}
      />

      <RoadLine
        position={[4.5, 0.09, 0]}
        rotation={Math.PI / 2}
        length={22}
      />

      {/* Intersections */}

      <Intersection
        position={[0, 0.1, 0]}
      />

      <Intersection
        position={[-4.5, 0.1, 0]}
      />

      <Intersection
        position={[4.5, 0.1, 0]}
      />

    </group>
  );
}