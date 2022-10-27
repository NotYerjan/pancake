import store from "./store.js";
import dom from "./dom.js";

// UPDATE
const openPopup = async () => {
  let model = await store.get("model");
  let newModel = { ...model, isSettingsOpen: !model.isSettingsOpen };
  await store.set("model", newModel);
};

// VIEW
const renderSettingsPopup = () => {
  let model = store.get("model");
  dom.popupDOM.style.display = model.isSettingsOpen ? "block" : "none";
};

// EVENTS
const eventPopupSettings = (element) => {
  element.addEventListener("click", async () => {
    await openPopup();
    renderSettingsPopup();
  });
};

const eventsListPopupSettings = (list) => {
  list.map((element) => eventPopupSettings(element));
};

// EXPORT
export default {
  renderSettingsPopup,
  eventsListPopupSettings,
};
