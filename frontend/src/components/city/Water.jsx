export default function Water() {
  return (
    <group>

      <mesh
        position={[7, 0.025, -5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[9, 6]}
        />

        <meshStandardMaterial
          color="#102b35"
          roughness={0.15}
          metalness={0.55}
          transparent
          opacity={0.9}
        />
      </mesh>

      <mesh
        position={[4, 0.035, -5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[0.035, 5]}
        />

        <meshBasicMaterial
          color="#5d9ba7"
          transparent
          opacity={0.35}
        />
      </mesh>

    </group>
  );
}