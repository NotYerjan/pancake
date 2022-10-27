import store from "./store.js";
import dom from "./dom.js";

// UPDATE
const toogleBodyMode = async () => {
  let model = await store.get("model");
  let newModel = { ...model, isDarkMode: !model.isDarkMode };
  await store.set("model", newModel);
};

// VIEW
const renderBodyMode = async () => {
  let model = await store.get("model");
  dom.bodyDOM.className = model.isDarkMode ? "dark" : "light";
  dom.tooglerCircleDOM.forEach(
    (element) =>
      (element.style.transform = model.isDarkMode
        ? "translateX(26px)"
        : "translateX(0px)")
  );
};

//EVENT
const eventToogleBodyMode = () =>
  dom.toogleModeBtnDOM.forEach((element) =>
    element.addEventListener("click", async (e) => {
      await toogleBodyMode();
      await renderBodyMode();
    })
  );

// EXPORT
export default {
  eventToogleBodyMode,
  renderBodyMode,
};
