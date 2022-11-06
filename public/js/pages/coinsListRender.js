import helpers from "../helpers.js";
import dom from "../dom.js";
import store from "../store.js";
import coinsData from "./coinsData.js";
import coinListView from "./coinListView.js";
import coinCardView from "./coinCardView.js";

let coins = coinsData.coins;
// UPDATE
const updateCoin = (coinId, coins) =>
  coins.map((coin) => {
    if (coin.id === coinId) {
      return { ...coin, isDetailsVisible: !coin.isDetailsVisible };
    }
    return coin;
  });

// VIEW
const renderCoins = (model) => {
  renderView(model);
  if (!model.poolCardView) {
    dom.listOfCoinsDOM.style = "display:flex";
    dom.cardsOfCoinsDOM.style = "display:none";
    dom.listOfCoinsDOM.innerHTML = coins
      .map((coin) =>
        coin.id === 1
          ? coinListView.listCakeView(coin)
          : coinListView.listView(coin)
      )
      .join("");
  }
  if (model.poolCardView) {
    dom.listOfCoinsDOM.style = "display:none";
    dom.cardsOfCoinsDOM.style = "display:flex";

    dom.cardsOfCoinsDOM.innerHTML = coins
      .map((coin) =>
        coin.id === 1
          ? coinCardView.cardCakeView(coin)
          : coinCardView.cardView(coin)
      )
      .join("");
  }

  const detailsBtnDOM = helpers.qsa("button.details-btn");

  detailsBtnDOM.forEach((node) => {
    node.addEventListener("click", (e) => {
      const coinId = Number(e.target.dataset.id);
      coins = updateCoin(coinId, coins);
      renderCoins(model);
    });
  });
};

const renderView = (model) => {
  dom.cardViewBtnDOM.className = model.poolCardView ? "card active" : "card";
  dom.listViewBtnDOM.className = model.poolCardView ? "list" : "list active";
};

// EVENT
const eventViewToggle = (element, model) => {
  element.addEventListener("click", () => {
    model = { ...model, poolCardView: !model.poolCardView };
    renderCoins(model);
    store.set("model", model);
  });
};
// EXPORT
export default { renderCoins, eventViewToggle };
