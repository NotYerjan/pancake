import helpers from "./helpers.js";

const open = helpers.qs(".open");
const navPopup = helpers.qs(".nav-popup");
const exit = helpers.qs("#exit");
const changeMode = helpers.qs(".dark-mode");
const bodyDOM = helpers.qs("body");
const changeModeCircle = helpers.qs(".change-mode-circle");
const switchStake = helpers.qs(".switch-stake");
const stakeTitle = helpers.qs("#stake-title");

export default {
  open,
  navPopup,
  exit,
  changeMode,
  bodyDOM,
  changeModeCircle,
  switchStake,
  stakeTitle,
};
