import dom from "./dom.js";
import store from "./store.js";
import stakes from "./stakes.js";
import toogleMode from "./toogleMode.js";
import settingsPopUp from "./settingsPopUp.js";
import healthIndicator from "./healthIndicator.js";

//PAGE RENDER
const renderPage = async () => {
  //LOCAL STORAGE
  await store.init();

  //VIEW
  stakes.renderStakes();
  toogleMode.renderBodyMode();
  healthIndicator.renderHealthIndicator();
  settingsPopUp.renderSettingsPopup();

  //EVENTS
  stakes.eventStakeSwap();
  toogleMode.eventToogleBodyMode();
  healthIndicator.eventHelthIndicator();
  settingsPopUp.eventsListPopupSettings([
    dom.openPopupBtnDOM,
    dom.exitPopupBtnDOM,
    dom.popUpBgDOM,
  ]);
};

//START APP
renderPage();
