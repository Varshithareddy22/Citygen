function Tree({ position, scale = 1 }) {
  return (
    <group position={position} scale={scale}>

      {/* trunk */}

      <mesh position={[0, 0.3, 0]}>

        <cylinderGeometry
          args={[0.05, 0.08, 0.6, 8]}
        />

        <meshStandardMaterial color="#3f2d20" />

      </mesh>


      {/* leaves */}

      <mesh position={[0, 0.75, 0]}>

        <sphereGeometry
          args={[0.35, 8, 8]}
        />

        <meshStandardMaterial color="#22c55e" />

      </mesh>

    </group>
  );
}


function Parks() {

  const trees = [
    [-5, 0, -4],
    [-4, 0, -4.5],
    [-3.5, 0, -3.5],
    [4.5, 0, 4],
    [5.2, 0, 4.5],
    [4, 0, 5],
    [-6, 0, 5],
    [-5.5, 0, 5.7],
  ];

  return (
    <group>

      <mesh
        position={[-5, 0.05, -4]}
        rotation={[-Math.PI / 2, 0, 0]}
      >

        <circleGeometry args={[2, 32]} />

        <meshStandardMaterial
          color="#14532d"
        />

      </mesh>


      {trees.map((position, index) => (
        <Tree
          key={index}
          position={position}
          scale={0.7 + (index % 3) * 0.15}
        />
      ))}

    </group>
  );
}

export default Parks;