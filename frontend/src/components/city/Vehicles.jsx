import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Vehicle({
  x,
  z,
  direction = 1,
}) {
  const ref = useRef();

  useFrame((_, delta) => {

    if (!ref.current) {
      return;
    }

    ref.current.position.z +=
      delta * 1.2 * direction;

    if (
      direction === 1 &&
      ref.current.position.z > 11
    ) {
      ref.current.position.z = -11;
    }

    if (
      direction === -1 &&
      ref.current.position.z < -11
    ) {
      ref.current.position.z = 11;
    }

  });

  return (
    <group
      ref={ref}
      position={[
        x,
        0.2,
        z,
      ]}
    >

      <mesh castShadow>

        <boxGeometry
          args={[
            0.16,
            0.12,
            0.34,
          ]}
        />

        <meshStandardMaterial
          color="#d8e0e1"
          roughness={0.35}
        />

      </mesh>

      {/* headlights */}

      <mesh
        position={[
          0,
          0,
          direction > 0
            ? 0.18
            : -0.18,
        ]}
      >

        <boxGeometry
          args={[
            0.08,
            0.04,
            0.025,
          ]}
        />

        <meshBasicMaterial
          color="#e6f8fa"
        />

      </mesh>

    </group>
  );
}

export default function Vehicles() {
  return (
    <group>

      <Vehicle
        x={0.18}
        z={-10}
        direction={1}
      />

      <Vehicle
        x={-0.18}
        z={-5}
        direction={1}
      />

      <Vehicle
        x={0.18}
        z={5}
        direction={-1}
      />

      <Vehicle
        x={4.68}
        z={-9}
        direction={1}
      />

      <Vehicle
        x={-4.32}
        z={8}
        direction={-1}
      />

    </group>
  );
}