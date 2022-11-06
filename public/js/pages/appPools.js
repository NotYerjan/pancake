import dom from "../dom.js";
import store from "../store.js";
import toogleMode from "../toogleMode.js";
import settingsPopUp from "../settingsPopUp.js";
import coinsListRender from "./coinsListRender.js";
import healthIndicator from "../healthIndicator.js";

//PAGE RENDER
const renderPage = async () => {
  //LOCAL STORAGE
  const model = await store.init();

  //VIEW
  toogleMode.renderBodyMode();
  settingsPopUp.renderSettingsPopup();
  coinsListRender.renderCoins(model);
  healthIndicator.renderHealthIndicator();

  //EVENTS
  toogleMode.eventToogleBodyMode();
  healthIndicator.eventHelthIndicator();
  settingsPopUp.eventsListPopupSettings([
    dom.openPopupBtnDOM,
    dom.exitPopupBtnDOM,
    dom.popUpBgDOM,
  ]);
  coinsListRender.eventViewToggle(dom.viewBtnDOM, model);
};

//START APP
renderPage();
