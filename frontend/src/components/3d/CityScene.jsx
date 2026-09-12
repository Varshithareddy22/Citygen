import Terrain from "./Terrain";
import Buildings from "./Buildings";
import Roads from "./Roads";
import Parks from "./Parks";
import Water from "./Water";

function CityScene() {
  return (
    <group>

      <Terrain />

      <Water />

      <Roads />

      <Parks />

      <Buildings />

    </group>
  );
}

export default CityScene;