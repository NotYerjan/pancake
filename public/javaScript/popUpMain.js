const walletConnectBtnDOM = document.getElementById("popUpMain");
const walletPopUpDOM = document.querySelector(".connect-wallet");
const bgTransparentDOM = document.querySelector(
  ".connect-wallet .bg-transparent"
);
let changeButton1 = document.getElementById("mainPopUpFortheMainPage1");
let changeButton2 = document.getElementById("mainPopUpFortheMainPage2");
const containersDOM = document.querySelectorAll(".connect-wallet .container");

const slidersBtnDOM = document.querySelectorAll(".connect-wallet .slider-btn");
const slidesDOM = document.querySelectorAll(".connect-wallet .slide");

// addEventListener
bgTransparentDOM.addEventListener("click", () => {
  walletPopUpDOM.style.display = "none";
});
walletConnectBtnDOM.addEventListener("click", () => {
  walletPopUpDOM.style.display = "flex";
});
changeButton1.addEventListener("click", () => {
  changeButton1.className = "active";
  changeButton2.className = "";
  containersDOM[0].className = "container active";
  containersDOM[1].className = "container";
});
changeButton2.addEventListener("click", () => {
  changeButton2.className = "active";
  changeButton1.className = "";
  containersDOM[1].className = "container active";
  containersDOM[0].className = "container";
});

slidersBtnDOM[0].addEventListener("click", () => {
  slidersBtnDOM[0].className = "slider-btn active";
  slidersBtnDOM[1].className = "slider-btn";
  slidesDOM[0].className = "slide active";
  slidesDOM[1].className = "slide";
});
slidersBtnDOM[1].addEventListener("click", () => {
  slidersBtnDOM[1].className = "slider-btn active";
  slidersBtnDOM[0].className = "slider-btn";
  slidesDOM[1].className = "slide active";
  slidesDOM[0].className = "slide";
});
