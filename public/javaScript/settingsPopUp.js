const qs =(selector) => document.querySelector(selector);

// DOM
const open = qs(".open");
const navPopup = qs(".nav-popup");
const exit = qs("#exit"); 
const changeMode = qs(".dark-mode");
const bodyDOM = qs("body");
const changeModeCircle = qs(".change-mode-circle");

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

const changeBodyMode = () => {
  model = { ...model, isDarkMode: !model.isDarkMode };
};

// VIEW
const openPopUp = (element) =>{
    element.addEventListener("click", () =>{
        navPopup.style.display = "flex";
     })

};

const closePopUp = (element) =>{
    element.addEventListener("click", () =>{
        navPopup.style.display = "none";
     }
)};
const renderBodyMode = () => {
  bodyDOM.className = model.isDarkMode ? "dark" : "light";
  changeModeCircle.style.transform =model.isDarkMode ? "translateX(34px)" : "translateX(0px)";
     
};


const renderPage = () => {
  setLocalModel();
  renderBodyMode();
  openPopUp(open);
  closePopUp(exit);
};

// EVENTS

changeMode.addEventListener("click", (e) => {
  changeBodyMode();
  renderPage();
});

// APP START
renderPage();

 