import helpers from "./helpers.js";

const popUpBgDOM = helpers.qs(".nav-popup .bg-transparent");
const openPopupBtnDOM = helpers.qs(".open");
const popupDOM = helpers.qs(".nav-popup");
const exitPopupBtnDOM = helpers.qs("#exit");

const toogleModeBtnDOM = helpers.qsa(".toogler-mode");
const tooglerCircleDOM = helpers.qsa(".toogler-mode .toogler-circle");

const bodyDOM = helpers.qs("body");
const switchStakeBtnDOM = helpers.qs(".switch-stake");
const stakeTitleDOM = helpers.qs("#stake-title");

const listOfCoinsDOM = helpers.qs("ul.list-of-coins");
const tooglerBigDOM = helpers.qs(".toogler-big");

export default {
  popUpBgDOM,
  openPopupBtnDOM,
  popupDOM,
  exitPopupBtnDOM,
  toogleModeBtnDOM,
  bodyDOM,
  tooglerCircleDOM,
  switchStakeBtnDOM,
  stakeTitleDOM,
  listOfCoinsDOM,
  tooglerBigDOM,
};
