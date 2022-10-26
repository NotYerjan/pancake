import helpers from "./helpers.js";
import dom from "./dom.js";
import store from "./store.js";
import stakes from "./stakes.js";
import settings from "./settingsPopUp.js";

//MODEL
store.init();

//PAGE RENDER
const renderPage = () => {
  stakes.renderStakes();
  settings.openPopUp(dom.open);
  settings.closePopUp(dom.exit);
  settings.renderBodyMode();
};

// EVENTS
const startStakesInterval = () =>
  setInterval(async () => {
    await stakes.swapStakes();
    await stakes.renderStakes();
  }, 3000);

let stakesId = startStakesInterval();

dom.switchStake.addEventListener("click", async (e) => {
  clearInterval(stakesId);
  await stakes.swapStakes();
  await stakes.renderStakes();
  stakesId = startStakesInterval();
});

dom.changeMode.addEventListener("click", async (e) => {
  await settings.changeBodyMode();
  await settings.renderBodyMode();
});

//START APP
renderPage();
