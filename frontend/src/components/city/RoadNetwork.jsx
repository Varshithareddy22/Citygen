function Road({
  position,
  rotation = 0,
  width = 0.55,
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
      receiveShadow
    >
      <planeGeometry
        args={[width, length]}
      />

      <meshStandardMaterial
        color="#0c1012"
        roughness={0.9}
      />
    </mesh>
  );
}

function Marking({
  position,
  rotation = 0,
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
      <planeGeometry args={[0.025, 22]} />

      <meshBasicMaterial
        color="#9aa5a8"
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function RoadNetwork() {
  return (
    <group>

      <Road
        position={[0, 0.06, 0]}
        width={0.75}
      />

      <Road
        position={[0, 0.07, 0]}
        rotation={Math.PI / 2}
        width={0.75}
      />

      <Road
        position={[5, 0.06, 0]}
        rotation={Math.PI / 2}
        width={0.42}
      />

      <Road
        position={[-5, 0.06, 0]}
        rotation={Math.PI / 2}
        width={0.42}
      />

      <Road
        position={[0, 0.06, 5]}
        width={0.42}
      />

      <Road
        position={[0, 0.06, -5]}
        width={0.42}
      />

      <Road
        position={[0, 0.06, 0]}
        rotation={Math.PI / 4}
        width={0.28}
      />

      <Road
        position={[0, 0.06, 0]}
        rotation={-Math.PI / 4}
        width={0.28}
      />

      <Marking
        position={[0, 0.08, 0]}
      />

      <Marking
        position={[0, 0.08, 0]}
        rotation={Math.PI / 2}
      />

    </group>
  );
}