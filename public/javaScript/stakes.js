// HELPER FUNCTIONS
const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);
const is = (s) => document.getElementById(s);

// DOM
const switchStake = qs(".switch-stake");
const stakeTitle = is("stake-title");

// MODEL
const INIT_MODEL = {
  isDarkMode: false,
  isSettingsOpen: false,
  ads: {
    number: 1,
    amount: 3,
  },
  topStakes: ["pools", "farms"],
};

let model = localStorage.getItem("model")
  ? JSON.parse(localStorage.getItem("model"))
  : INIT_MODEL;

// UPDATE
const setLocalModel = () => {
  let myObj_serialized = JSON.stringify(model);
  localStorage.setItem("model", myObj_serialized);
};

const changeStakesOrder = () => {
  model.topStakes.push(model.topStakes.shift());
  setLocalModel();
};

const changeBodyMode = () => {
  model = { ...model, isDarkMode: !model.isDarkMode };
};

// VIEW
const renderStakes = () => {
  visStake = is(model.topStakes[0]);
  invisStake = is(model.topStakes[1]);
  invisStake.className = "stakes";
  visStake.className = "stakes visible";
  stakeTitle.innerText = visStake.id === "pools" ? "Syrop Pools" : "Farms";
};

const renderBodyMode = () => {
  bodyDOM.className = model.isDarkMode ? "dark" : "light";
};

const renderPage = () => {
  setLocalModel();
  renderStakes();
  renderBodyMode();
};

//INTERVALS
const startStakesInterval = () =>
  setInterval(() => {
    changeStakesOrder();
    renderPage();
  }, 3000);

let stakesId = startStakesInterval();

// EVENTS
switchStake.addEventListener("click", (e) => {
  clearInterval(stakesId);
  changeStakesOrder();
  renderPage();
  stakesId = startStakesInterval();
});

// APP START
renderPage();
