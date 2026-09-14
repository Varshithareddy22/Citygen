function Tree({
  position,
  scale = 1,
}) {
  return (
    <group
      position={position}
      scale={scale}
    >

      {/* trunk */}

      <mesh
        position={[0, 0.28, 0]}
      >

        <cylinderGeometry
          args={[
            0.045,
            0.07,
            0.55,
            8,
          ]}
        />

        <meshStandardMaterial
          color="#332b25"
        />

      </mesh>

      {/* crown */}

      <mesh
        position={[0, 0.72, 0]}
      >

        <sphereGeometry
          args={[0.32, 10, 10]}
        />

        <meshStandardMaterial
          color="#31543d"
          roughness={0.9}
        />

      </mesh>

    </group>
  );
}

export default function Parks() {
  const trees = [
    [-6.2, 0, -6],
    [-5.3, 0, -6.5],
    [-4.4, 0, -6],
    [-6.6, 0, -5],
    [-5.6, 0, -5.1],

    [5.2, 0, 5.4],
    [6.1, 0, 5.9],
    [6.8, 0, 5],
    [5.8, 0, 6.6],

    [-7, 0, 5],
    [-6.3, 0, 5.7],
    [-5.5, 0, 5.2],
  ];

  return (
    <group>

      {/* Main park */}

      <mesh
        position={[-5.5, 0.04, -5.5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >

        <circleGeometry
          args={[2.0, 40]}
        />

        <meshStandardMaterial
          color="#183024"
          roughness={1}
        />

      </mesh>

      {/* Secondary green area */}

      <mesh
        position={[6, 0.035, 5.6]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >

        <circleGeometry
          args={[1.55, 32]}
        />

        <meshStandardMaterial
          color="#15291f"
          roughness={1}
        />

      </mesh>

      {trees.map(
        (position, index) => (
          <Tree
            key={index}
            position={position}
            scale={
              0.7 +
              (index % 3) * 0.12
            }
          />
        )
      )}

    </group>
  );
}