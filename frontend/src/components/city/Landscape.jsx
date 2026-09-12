function Tree({ position, scale = 1 }) {
  return (
    <group
      position={position}
      scale={scale}
    >
      <mesh
        position={[0, 0.3, 0]}
      >
        <cylinderGeometry
          args={[
            0.04,
            0.07,
            0.6,
            7,
          ]}
        />

        <meshStandardMaterial color="#3a3129" />
      </mesh>

      <mesh
        position={[0, 0.72, 0]}
      >
        <sphereGeometry
          args={[0.32, 8, 8]}
        />

        <meshStandardMaterial color="#31553c" />
      </mesh>
    </group>
  );
}

export default function Landscape() {
  const trees = [
    [-6, 0, -6],
    [-5, 0, -6.5],
    [-4, 0, -6],
    [-6.5, 0, -5],
    [6, 0, 5],
    [6.5, 0, 5.7],
    [5.5, 0, 6],
    [5, 0, 5.3],
    [-7, 0, 5],
    [-6.4, 0, 5.8],
  ];

  return (
    <group>

      {/* Ground */}
      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        receiveShadow
      >
        <planeGeometry
          args={[34, 34, 32, 32]}
        />

        <meshStandardMaterial
          color="#101715"
          roughness={0.95}
        />
      </mesh>

      {/* Park */}
      <mesh
        position={[-5.5, 0.035, -5.5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <circleGeometry
          args={[2.1, 32]}
        />

        <meshStandardMaterial
          color="#183024"
          roughness={1}
        />
      </mesh>

      {trees.map((position, index) => (
        <Tree
          key={index}
          position={position}
          scale={
            0.7 + (index % 3) * 0.15
          }
        />
      ))}

    </group>
  );
}