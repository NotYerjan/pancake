import store from "./store.js";
import helpers from "./helpers.js";
import dom from "./dom.js";

// UPDATE
const swapStakes = async () => {
  let model = await store.get("model");
  let newModel = { ...model, topStakes: helpers.swap(model.topStakes) };
  await store.set("model", newModel);
};

// VIEW
const renderStakes = async () => {
  let model = await store.get("model");
  let visStake = await helpers.qs(`#${model.topStakes[0]}`);
  let invisStake = await helpers.qs(`#${model.topStakes[1]}`);
  visStake.className = "stakes visible";
  invisStake.className = "stakes";
  dom.stakeTitle.innerText = visStake.id === "pools" ? "Syrup Pools" : "Farms";
};
//INTERVALS

// IMPORT
export default { swapStakes, renderStakes };
