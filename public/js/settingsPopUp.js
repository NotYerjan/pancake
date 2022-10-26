import store from "./store.js";
import helpers from "./helpers.js";
import dom from "./dom.js";

// UPDATE
const changeBodyMode = async () => {
  let model = await store.get("model");
  let newModel = { ...model, isDarkMode: !model.isDarkMode };
  await store.set("model", newModel);
};

// VIEW
const openPopUp = (element) => {
  element.addEventListener("click", () => {
    dom.navPopup.style.display = "flex";
  });
};

const closePopUp = (element) => {
  element.addEventListener("click", () => {
    dom.navPopup.style.display = "none";
  });
};

const renderBodyMode = async () => {
  let model = store.get("model");
  dom.bodyDOM.className = model.isDarkMode ? "dark" : "light";
  dom.changeModeCircle.style.transform = model.isDarkMode
    ? "translateX(34px)"
    : "translateX(0px)";
};
// EVENTS
export default {
  changeBodyMode,
  openPopUp,
  closePopUp,
  renderBodyMode,
};
