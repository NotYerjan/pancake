import dom from "../dom.js";
import store from "../store.js";
import toogleMode from "../toogleMode.js";
import settingsPopUp from "../settingsPopUp.js";
import coinsListRender from "./coinsListRender.js";
import healthIndicator from "../healthIndicator.js";

//PAGE RENDER
const renderPage = async () => {
  //LOCAL STORAGE
  await store.init();

  //VIEW
  toogleMode.renderBodyMode();
  settingsPopUp.renderSettingsPopup();
  coinsListRender.renderCoins();
  healthIndicator.renderHealthIndicator();

  //EVENTS
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
