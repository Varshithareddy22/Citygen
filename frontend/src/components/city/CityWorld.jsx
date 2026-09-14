import Buildings from "./Buildings";
import RoadNetwork from "./RoadNetwork";
import Terrain from "./Terrain";
import Parks from "./Parks";
import Water from "./Water";
import Vehicles from "./Vehicles";

export default function CityWorld({ city }) {
  return (
    <group>

      <Terrain />

      <Water />

      <RoadNetwork />

      <Parks />

      <Buildings city={city} />

      <Vehicles />

    </group>
  );
}