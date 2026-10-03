import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Building({ position, width, height, depth }) {
  return (
    <group position={position}>
      {/* Main building */}
      <mesh>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial
          color="#172033"
          roughness={0.65}
          metalness={0.35}
        />
      </mesh>

      {/* Building top */}
      <mesh position={[0, height / 2 + 0.04, 0]}>
        <boxGeometry args={[width * 0.9, 0.08, depth * 0.9]} />
        <meshStandardMaterial
          color="#26344f"
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>

      {/* Front windows */}
      <Windows
        width={width}
        height={height}
        depth={depth}
      />
    </group>
  );
}

function Windows({ width, height, depth }) {
  const windows = [];

  const columns = Math.max(2, Math.floor(width / 0.28));
  const rows = Math.max(2, Math.floor(height / 0.45));

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // Some windows remain dark
      if ((row + column) % 4 === 0) continue;

      const x =
        -width / 2 +
        0.16 +
        column * ((width - 0.32) / Math.max(1, columns - 1));

      const y =
        -height / 2 +
        0.35 +
        row * ((height - 0.7) / Math.max(1, rows - 1));

      windows.push(
        <mesh
          key={`${row}-${column}`}
          position={[x, y, depth / 2 + 0.012]}
        >
          <planeGeometry args={[0.10, 0.16]} />
          <meshBasicMaterial
            color="#67b7ff"
            transparent
            opacity={0.9}
          />
        </mesh>
      );
    }
  }

  return windows;
}

function City() {
  const cityRef = useRef();

  const target = useRef({
    x: 0,
    y: 0,
  });

  const current = useRef({
    x: 0,
    y: 0,
  });

  const buildings = useMemo(() => {
    const result = [];

    /*
      Create a city around the center.
      The central buildings are taller.
    */

    for (let x = -7; x <= 7; x++) {
      for (let z = -5; z <= 5; z++) {
        const distance = Math.sqrt(x * x + z * z);

        // Keep the center open slightly
        if (distance < 1.2) continue;

        const height =
          distance < 4
            ? 4 + Math.random() * 5
            : 2 + Math.random() * 4;

        const width = 0.8 + Math.random() * 0.45;
        const depth = 0.8 + Math.random() * 0.45;

        result.push({
          id: `${x}-${z}`,
          position: [
            x * 1.45,
            height / 2,
            z * 1.45,
          ],
          width,
          height,
          depth,
        });
      }
    }

    return result;
  }, []);

  useFrame((state) => {
    if (!cityRef.current) return;

    /*
      Mouse controls city rotation.

      Left  -> rotate left
      Right -> rotate right
      Up    -> tilt up
      Down  -> tilt down
    */

    target.current.y = state.pointer.x * 0.28;
    target.current.x = -state.pointer.y * 0.10;

    current.current.y = THREE.MathUtils.lerp(
      current.current.y,
      target.current.y,
      0.045
    );

    current.current.x = THREE.MathUtils.lerp(
      current.current.x,
      target.current.x,
      0.045
    );

    cityRef.current.rotation.y = current.current.y;
    cityRef.current.rotation.x = current.current.x;
  });

  return (
    <group ref={cityRef}>
      {buildings.map((building) => (
        <Building
          key={building.id}
          position={building.position}
          width={building.width}
          height={building.height}
          depth={building.depth}
        />
      ))}
    </group>
  );
}

function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.05, 0]}
    >
      <planeGeometry args={[35, 35]} />

      <meshStandardMaterial
        color="#070d18"
        roughness={0.85}
        metalness={0.2}
      />
    </mesh>
  );
}

function Grid() {
  return (
    <gridHelper
      args={[35, 35, "#17243a", "#0b1424"]}
      position={[0, 0, 0]}
    />
  );
}

function Scene() {
  return (
    <>
      <fog
        attach="fog"
        args={["#02050b", 12, 35]}
      />

      <ambientLight intensity={0.6} />

      <directionalLight
        position={[8, 12, 10]}
        intensity={2}
      />

      <pointLight
        position={[0, 8, 0]}
        intensity={20}
        distance={30}
        color="#2563eb"
      />

      <pointLight
        position={[-8, 5, 4]}
        intensity={10}
        distance={20}
        color="#06b6d4"
      />

      <Ground />

      <Grid />

      <City />
    </>
  );
}

export default function City3DBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [11, 7, 15],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>

      {/* Cinematic overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#03060b]/90" />
    </div>
  );
}