import { useState } from "react";

function Building({
  building,
  onSelect,
}) {
  const [hovered, setHovered] = useState(false);

  const colors = {
    residential: "#182024",
    commercial: "#20282d",
    tower: "#263138",
    industrial: "#171c1f",
  };

  return (
    <group
      position={[
        building.x,
        0,
        building.z,
      ]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect?.(building);
      }}
    >
      <mesh
        position={[
          0,
          building.height / 2,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            building.width,
            building.height,
            building.depth,
          ]}
        />

        <meshStandardMaterial
          color={
            hovered
              ? "#31444b"
              : colors[building.type]
          }
          roughness={0.65}
          metalness={0.25}
        />
      </mesh>

      {/* Roof */}
      <mesh
        position={[
          0,
          building.height + 0.04,
          0,
        ]}
      >
        <boxGeometry
          args={[
            building.width * 0.85,
            0.08,
            building.depth * 0.85,
          ]}
        />

        <meshStandardMaterial
          color="#354147"
          roughness={0.5}
        />
      </mesh>

      {/* Window strips */}
      {building.height > 2 && (
        <group>
          {Array.from({
            length: Math.min(
              8,
              Math.floor(
                building.height
              )
            ),
          }).map((_, index) => (
            <mesh
              key={index}
              position={[
                0,
                0.7 + index * 0.8,
                building.depth / 2 + 0.012,
              ]}
            >
              <planeGeometry
                args={[
                  building.width * 0.55,
                  0.12,
                ]}
              />

              <meshBasicMaterial
                color="#b7d4d8"
                transparent
                opacity={hovered ? 0.5 : 0.2}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* Tower antenna */}
      {building.type === "tower" && (
        <mesh
          position={[
            0,
            building.height + 0.45,
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

          <meshBasicMaterial color="#d7f4f7" />
        </mesh>
      )}
    </group>
  );
}

export default function Buildings({
  buildings,
  onSelect,
}) {
  return (
    <group>
      {buildings.map((building) => (
        <Building
          key={building.id}
          building={building}
          onSelect={onSelect}
        />
      ))}
    </group>
  );
}