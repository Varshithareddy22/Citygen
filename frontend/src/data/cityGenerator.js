export function generateCityData(input = {}) {
  const area = Number(input.area) || 50;
  const population = Number(input.population) || 250000;
  const budget = input.budget || "₹5,000 Cr";

  const density = Math.min(
    1,
    Math.max(0.25, population / 1000000)
  );

  const buildingCount = Math.floor(
    90 + density * 100
  );

  const roadCount = Math.floor(
    18 + density * 14
  );

  const parkCount = Math.floor(
    5 + density * 5
  );

  const seed = area * 17 + population * 0.0001;

  function random(index) {
    const x = Math.sin(seed + index * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  const buildings = [];

  for (let i = 0; i < buildingCount; i++) {
    const angle = random(i) * Math.PI * 2;
    const radius = 3 + random(i + 10) * 13;

    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    const centerDistance = Math.sqrt(
      x * x + z * z
    );

    let type = "residential";

    if (centerDistance < 5) {
      type = random(i + 20) > 0.35
        ? "commercial"
        : "tower";
    }

    if (random(i + 40) > 0.93) {
      type = "industrial";
    }

    let height;

    if (type === "tower") {
      height = 5 + random(i + 50) * 7;
    } else if (type === "commercial") {
      height = 2.5 + random(i + 60) * 5;
    } else if (type === "industrial") {
      height = 1.2 + random(i + 70) * 1.5;
    } else {
      height = 1 + random(i + 80) * 3;
    }

    buildings.push({
      id: `building-${i}`,
      x,
      z,
      width: 0.55 + random(i + 90) * 0.55,
      depth: 0.55 + random(i + 100) * 0.55,
      height,
      type,
    });
  }

  return {
    name: input.name || "New City",
    area,
    population,
    budget,
    climate: input.climate || "Temperate",
    terrain: input.terrain || "Plain",
    vision: input.vision || "",
    buildings,
    roads: roadCount,
    parks: parkCount,
    waterPlants: Math.max(2, Math.floor(area / 15)),
    powerStations: Math.max(2, Math.floor(area / 20)),
    wasteUnits: Math.max(3, Math.floor(area / 10)),
    transportHubs: Math.max(2, Math.floor(area / 25)),
    sustainability: Math.round(
      72 +
      random(200) * 20
    ),
  };
}