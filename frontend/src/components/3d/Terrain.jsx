import { useMemo } from "react";
import * as THREE from "three";

function Terrain() {

  const geometry = useMemo(() => {

    const geo = new THREE.PlaneGeometry(
      32,
      32,
      32,
      32
    );

    const position = geo.attributes.position;

    for (let i = 0; i < position.count; i++) {

      const x = position.getX(i);
      const y = position.getY(i);

      const height =
        Math.sin(x * 0.35) *
        Math.cos(y * 0.3) *
        0.35;

      position.setZ(i, height);
    }

    geo.computeVertexNormals();

    return geo;

  }, []);

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >

      <meshStandardMaterial
        color="#10241d"
        roughness={0.9}
        metalness={0.05}
      />

    </mesh>
  );
}

export default Terrain;