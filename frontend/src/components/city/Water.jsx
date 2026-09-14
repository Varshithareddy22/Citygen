export default function Water() {
  return (
    <group>

      {/* Main water body */}

      <mesh
        position={[7, 0.045, -5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >

        <planeGeometry
          args={[10, 7]}
        />

        <meshStandardMaterial
          color="#102b32"
          roughness={0.12}
          metalness={0.65}
          transparent
          opacity={0.92}
        />

      </mesh>

      {/* Water reflection strip */}

      <mesh
        position={[6.2, 0.055, -5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >

        <planeGeometry
          args={[5.5, 0.025]}
        />

        <meshBasicMaterial
          color="#8fdce7"
          transparent
          opacity={0.16}
        />

      </mesh>

      <mesh
        position={[8, 0.055, -3.5]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >

        <planeGeometry
          args={[3, 0.025]}
        />

        <meshBasicMaterial
          color="#8fdce7"
          transparent
          opacity={0.12}
        />

      </mesh>

    </group>
  );
}