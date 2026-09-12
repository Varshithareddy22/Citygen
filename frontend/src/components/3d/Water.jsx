function Water() {
  return (
    <group>

      {/* Central lake */}

      <mesh
        position={[0, 0.08, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >

        <circleGeometry args={[3.2, 64]} />

        <meshStandardMaterial
          color="#075985"
          transparent
          opacity={0.8}
          roughness={0.15}
          metalness={0.5}
        />

      </mesh>


      {/* River */}

      <mesh
        position={[0, 0.07, -7]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 4, 1]}
      >

        <planeGeometry args={[2, 5]} />

        <meshStandardMaterial
          color="#075985"
          transparent
          opacity={0.8}
          roughness={0.15}
          metalness={0.4}
        />

      </mesh>

    </group>
  );
}

export default Water;