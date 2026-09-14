import { useMemo } from "react";

function Building({
  x,
  z,
  width,
  depth,
  height,
  type,
}) {
  const color = {
    residential: "#20282b",
    commercial: "#273236",
    tower: "#303b40",
    industrial: "#1a2022",
  }[type];

  return (
    <group
      position={[
        x,
        0,
        z,
      ]}
    >

      {/* Main building */}

      <mesh
        position={[
          0,
          height / 2,
          0,
        ]}
        castShadow
        receiveShadow
      >

        <boxGeometry
          args={[
            width,
            height,
            depth,
          ]}
        />

        <meshStandardMaterial
          color={color}
          roughness={0.65}
          metalness={0.2}
        />

      </mesh>

      {/* Roof */}

      <mesh
        position={[
          0,
          height + 0.035,
          0,
        ]}
      >

        <boxGeometry
          args={[
            width * 0.88,
            0.07,
            depth * 0.88,
          ]}
        />

        <meshStandardMaterial
          color="#3a4549"
          roughness={0.5}
          metalness={0.25}
        />

      </mesh>

      {/* Front windows */}

      {height > 1.7 && (
        <group>

          {Array.from({
            length: Math.min(
              9,
              Math.floor(
                height / 0.8
              )
            ),
          }).map(
            (_, index) => (

              <mesh
                key={index}
                position={[
                  0,
                  0.55 +
                    index * 0.72,
                  depth / 2 + 0.012,
                ]}
              >

                <planeGeometry
                  args={[
                    width * 0.58,
                    0.12,
                  ]}
                />

                <meshBasicMaterial
                  color="#a8c4c8"
                  transparent
                  opacity={0.25}
                />

              </mesh>

            )
          )}

        </group>
      )}

      {/* Side windows */}

      {height > 3 && (
        <mesh
          position={[
            width / 2 + 0.012,
            height * 0.52,
            0,
          ]}
          rotation={[
            0,
            Math.PI / 2,
            0,
          ]}
        >

          <planeGeometry
            args={[
              depth * 0.58,
              height * 0.55,
            ]}
          />

          <meshBasicMaterial
            color="#91aeb3"
            transparent
            opacity={0.12}
          />

        </mesh>
      )}

      {/* Tower antenna */}

      {type === "tower" && (
        <mesh
          position={[
            0,
            height + 0.45,
            0,
          ]}
        >

          <cylinderGeometry
            args={[
              0.025,
              0.025,
              0.8,
              8,
            ]}
          />

          <meshBasicMaterial
            color="#b9d8dc"
          />

        </mesh>
      )}

    </group>
  );
}

export default function Buildings({
  city,
}) {
  const buildings = useMemo(() => {

    const result = [];

    function random(seed) {
      const x =
        Math.sin(seed * 91.73) *
        43758.5453;

      return x - Math.floor(x);
    }

    let index = 0;

    /*
      Create a structured city rather
      than random scattered blocks.
    */

    for (
      let x = -9;
      x <= 9;
      x += 1.15
    ) {

      for (
        let z = -8;
        z <= 8;
        z += 1.15
      ) {

        /*
          Leave space for roads
        */

        const roadX =
          Math.abs(
            Math.abs(x) % 4.5
          ) < 0.72;

        const roadZ =
          Math.abs(
            Math.abs(z) % 4.5
          ) < 0.72;

        if (roadX || roadZ) {
          continue;
        }

        /*
          Leave center plaza
        */

        if (
          Math.abs(x) < 2.4 &&
          Math.abs(z) < 2.4
        ) {
          continue;
        }

        /*
          Leave park areas
        */

        if (
          x < -3.5 &&
          z < -3.5
        ) {
          continue;
        }

        if (
          x > 4 &&
          z > 4
        ) {
          continue;
        }

        const distance =
          Math.sqrt(
            x * x + z * z
          );

        const r =
          random(index++);

        let type;
        let height;

        /*
          Downtown
        */

        if (distance < 5) {

          type =
            r > 0.35
              ? "tower"
              : "commercial";

          height =
            type === "tower"
              ? 4.5 +
                r * 5.5
              : 2.5 +
                r * 3.5;

        }

        /*
          Outer city
        */

        else {

          type =
            r > 0.94
              ? "industrial"
              : "residential";

          height =
            type === "industrial"
              ? 1.1 +
                r * 1.2
              : 1.1 +
                r * 2.4;

        }

        result.push({
          x:
            x +
            (random(index++) -
              0.5) *
              0.22,

          z:
            z +
            (random(index++) -
              0.5) *
              0.22,

          width:
            0.55 +
            random(index++) *
              0.45,

          depth:
            0.55 +
            random(index++) *
              0.45,

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

      {/* Central landmark */}

      <Building
        x={0}
        z={0}
        width={1.25}
        depth={1.25}
        height={8}
        type="tower"
      />

      <Building
        x={1.7}
        z={0.4}
        width={0.9}
        depth={0.9}
        height={5.2}
        type="commercial"
      />

      <Building
        x={-1.7}
        z={0.3}
        width={0.9}
        depth={0.9}
        height={5.8}
        type="commercial"
      />

    </group>
  );
}