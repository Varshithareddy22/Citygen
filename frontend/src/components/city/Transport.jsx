import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Vehicle({ offset = 0 }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.position.z +=
      delta * 1.2;

    if (ref.current.position.z > 11) {
      ref.current.position.z = -11;
    }
  });

  return (
    <group
      ref={ref}
      position={[
        offset,
        0.18,
        -11,
      ]}
    >
      <mesh>
        <boxGeometry
          args={[
            0.18,
            0.12,
            0.4,
          ]}
        />

        <meshStandardMaterial
          color="#d9e2e4"
          roughness={0.4}
        />
      </mesh>

      <mesh
        position={[
          0,
          0.03,
          0.21,
        ]}
      >
        <boxGeometry
          args={[
            0.11,
            0.05,
            0.03,
          ]}
        />

        <meshBasicMaterial color="#d8f5fa" />
      </mesh>
    </group>
  );
}

export default function Transport() {
  return (
    <group>
      <Vehicle offset={0.18} />
      <Vehicle offset={-0.18} />
      <Vehicle offset={5.18} />
      <Vehicle offset={-4.82} />
    </group>
  );
}