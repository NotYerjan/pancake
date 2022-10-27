import store from "./store.js";
import helpers from "./helpers.js";
import dom from "./dom.js";

// UPDATE
const swapStakes = async () => {
  let model = await store.get("model");
  let newModel = { ...model, topStakes: helpers.swap(model.topStakes) };
  await store.set("model", newModel);
};

//INTERVAL
const startStakesInterval = () =>
  setInterval(async () => {
    await swapStakes();
    await renderStakes();
  }, 3000);

let stakesId = startStakesInterval();

// VIEW
const renderStakes = async () => {
  clearInterval(stakesId);
  let model = await store.get("model");
  let visStake = await helpers.qs(`#${model.topStakes[0]}`);
  let invisStake = await helpers.qs(`#${model.topStakes[1]}`);
  visStake.className = "stakes visible";
  invisStake.className = "stakes";
  dom.stakeTitleDOM.innerText =
    visStake.id === "pools" ? "Syrup Pools" : "Farms";
  stakesId = startStakesInterval();
};

// EVENT
const eventStakeSwap = () => {
  dom.switchStakeBtnDOM.addEventListener("click", async (e) => {
    await swapStakes();
    await renderStakes();
  });
};

// EXPORT
export default { eventStakeSwap, renderStakes };
