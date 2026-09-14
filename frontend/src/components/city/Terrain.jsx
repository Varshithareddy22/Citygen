import { useMemo } from "react";
import * as THREE from "three";

export default function Terrain() {
  const geometry = useMemo(() => {

    const geometry =
      new THREE.PlaneGeometry(
        32,
        32,
        40,
        40
      );

    const position =
      geometry.attributes.position;

    for (
      let i = 0;
      i < position.count;
      i++
    ) {
      const x = position.getX(i);
      const y = position.getY(i);

      const height =
        Math.sin(x * 0.28) *
        Math.cos(y * 0.24) *
        0.18;

      position.setZ(i, height);
    }

    geometry.computeVertexNormals();

    return geometry;

  }, []);

  return (
    <mesh
      geometry={geometry}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
      receiveShadow
    >

      <meshStandardMaterial
        color="#111615"
        roughness={0.95}
        metalness={0.02}
      />

    </mesh>
  );
}