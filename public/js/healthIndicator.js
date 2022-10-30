import dom from "./dom.js";
import store from "./store.js";
import helpers from "./helpers.js";

const toogleHealthIndicator = async () => {
  let model = await store.get("model");
  let newModel = { ...model, isHealthIndicator: !model.isHealthIndicator };
  await store.set("model", newModel);
};

const renderHealthIndicator = async () => {
  let model = await store.get("model");
  dom.tooglerBigDOM.className = model.isHealthIndicator
    ? "toogler-big active"
    : "toogler-big";
};

const eventHelthIndicator = () => {
  dom.tooglerBigDOM.addEventListener("click", async (e) => {
    await toogleHealthIndicator();
    await renderHealthIndicator();
  });
};

export default { renderHealthIndicator, eventHelthIndicator };
