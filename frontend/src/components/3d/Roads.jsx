function Road({
  position = [0, 0.04, 0],
  rotation = 0,
  width = 0.55,
  length = 20,
}) {
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, rotation]}
      receiveShadow
    >
      <planeGeometry
        args={[width, length]}
      />

      <meshStandardMaterial
        color="#0d1113"
        roughness={0.92}
      />
    </mesh>
  );
}

function RoadLine({
  position,
  rotation = 0,
  length = 20,
}) {
  return (
    <mesh
      position={position}
      rotation={[-Math.PI / 2, 0, rotation]}
    >
      <planeGeometry
        args={[0.025, length]}
      />

      <meshBasicMaterial
        color="#cbd5d8"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function Roads() {
  return (
    <group>

      {/* MAIN GRID */}

      <Road
        position={[0, 0.08, 0]}
        width={0.7}
        length={22}
      />

      <Road
        position={[0, 0.09, 0]}
        rotation={Math.PI / 2}
        width={0.7}
        length={22}
      />

      <Road
        position={[4.2, 0.08, 0]}
        rotation={Math.PI / 2}
        width={0.45}
        length={22}
      />

      <Road
        position={[-4.2, 0.08, 0]}
        rotation={Math.PI / 2}
        width={0.45}
        length={22}
      />

      <Road
        position={[0, 0.08, 4.2]}
        width={0.45}
        length={22}
      />

      <Road
        position={[0, 0.08, -4.2]}
        width={0.45}
        length={22}
      />

      {/* ROAD MARKINGS */}

      <RoadLine
        position={[0, 0.095, 0]}
        length={20}
      />

      <RoadLine
        position={[0, 0.095, 0]}
        rotation={Math.PI / 2}
        length={20}
      />

    </group>
  );
}

export default Roads;