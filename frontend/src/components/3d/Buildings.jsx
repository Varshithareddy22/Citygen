import { useMemo } from "react";

function Building({
  position,
  width,
  depth,
  height,
  type = "residential",
}) {
  const materials = {
    residential: "#151a1d",
    commercial: "#1b2024",
    tower: "#20262a",
    industrial: "#111517",
  };

  const color = materials[type];

  return (
    <group position={position}>

      {/* MAIN STRUCTURE */}
      <mesh
        position={[0, height / 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[width, height, depth]}
        />

        <meshStandardMaterial
          color={color}
          roughness={0.72}
          metalness={0.2}
        />
      </mesh>

      {/* ROOF */}
      <mesh
        position={[0, height + 0.04, 0]}
      >
        <boxGeometry
          args={[
            width * 0.86,
            0.08,
            depth * 0.86,
          ]}
        />

        <meshStandardMaterial
          color="#30373b"
          roughness={0.5}
          metalness={0.4}
        />
      </mesh>

      {/* WINDOWS */}
      {height > 2 && (
        <group>

          {Array.from({
            length: Math.max(2, Math.floor(height / 1.2)),
          }).map((_, index) => (

            <mesh
              key={index}
              position={[
                0,
                0.8 + index * 1.05,
                depth / 2 + 0.012,
              ]}
            >
              <planeGeometry
                args={[
                  width * 0.62,
                  0.16,
                ]}
              />

              <meshBasicMaterial
                color="#9caeb2"
                transparent
                opacity={0.22}
              />
            </mesh>

          ))}

        </group>
      )}

    </group>
  );
}

function Buildings() {
  const buildings = useMemo(() => {

    const result = [];

    // deterministic pseudo random
    const random = (x, z) => {
      const value =
        Math.sin(x * 12.9898 + z * 78.233) *
        43758.5453;

      return value - Math.floor(value);
    };

    for (let x = -9; x <= 9; x += 1.15) {

      for (let z = -8; z <= 8; z += 1.15) {

        // central plaza
        if (
          Math.abs(x) < 2.8 &&
          Math.abs(z) < 2.8
        ) {
          continue;
        }

        // roads
        if (
          Math.abs(x % 4) < 0.65 ||
          Math.abs(z % 4) < 0.65
        ) {
          continue;
        }

        const r = random(x, z);

        const distance =
          Math.sqrt(x * x + z * z);

        let height;

        let type;

        if (distance < 5) {

          height = 3 + r * 5;
          type = r > 0.6 ? "tower" : "commercial";

        } else {

          height = 1 + r * 2.7;
          type = "residential";

        }

        result.push({
          position: [
            x,
            0,
            z,
          ],

          width:
            0.55 + random(z, x) * 0.45,

          depth:
            0.55 + random(x + 2, z + 4) * 0.45,

          height,

          type,
        });

      }
    }

    return result;

  }, []);

  return (
    <group>

      {buildings.map(
        (building, index) => (
          <Building
            key={index}
            {...building}
          />
        )
      )}

      {/* CENTRAL LANDMARK */}

      <Building
        position={[0, 0, 0]}
        width={1.3}
        depth={1.3}
        height={8}
        type="tower"
      />

      <Building
        position={[1.8, 0, 0.3]}
        width={0.9}
        depth={0.9}
        height={5.5}
        type="commercial"
      />

      <Building
        position={[-1.7, 0, 0.4]}
        width={0.9}
        depth={0.9}
        height={6.2}
        type="commercial"
      />

    </group>
  );
}

export default Buildings;