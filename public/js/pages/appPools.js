import dom from "../dom.js";
import store from "../store.js";
import toogleMode from "../toogleMode.js";
import settingsPopUp from "../settingsPopUp.js";

//PAGE RENDER
const renderPage = async () => {
  //LOCAL STORAGE
  await store.init();

  //VIEW
  toogleMode.renderBodyMode();
  settingsPopUp.renderSettingsPopup();

  //EVENTS
  toogleMode.eventToogleBodyMode();
  settingsPopUp.eventsListPopupSettings([
    dom.openPopupBtnDOM,
    dom.exitPopupBtnDOM,
    dom.popUpBgDOM,
  ]);
};

//START APP
renderPage();
