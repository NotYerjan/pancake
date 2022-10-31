let homePageTopBoxImg1 = document.getElementById("topBoxlotteryImgDex");
let homePageTopBoxImg2 = document.getElementById("topBoxlotteryImgDex2");
let buttonChangeImg1 = document.getElementById("topBoxButtonsSwitch1");
let buttonChangeImg2 = document.getElementById("topBoxButtonsSwitch2");
const homePageSlidesDOM = document.querySelectorAll(
  ".section-1 .topBox article"
);

//events

buttonChangeImg1.addEventListener("click", () => {
  buttonChangeImg1.style.opacity = "1";
  buttonChangeImg2.style.opacity = "0.3";
  homePageSlidesDOM[0].className = "active";
  homePageSlidesDOM[1].className = "";
});
buttonChangeImg2.addEventListener("click", () => {
  buttonChangeImg1.style.opacity = "0.3";
  buttonChangeImg2.style.opacity = "1";
  homePageSlidesDOM[1].className = "active";
  homePageSlidesDOM[0].className = "";
});

//the count down controllers and functions and others for it

let blocksecond = document.getElementById("secondss");
let blockminutes = document.getElementById("minutress");
let blockhours = document.getElementById("hours");

let sagat = 2;
let minutler = 33;
let sekuntlar = 10;

// values and declarations
//---------------------------------------------------

//functions
function timeChanger() {
  blocksecond.innerHTML = sekuntlar;
  sekuntlar--;

  if (0 === sekuntlar) {
    blockminutes.innerHTML = minutler;
    minutler--;
    sekuntlar = 60;

    if (0 === minutler) {
      blockhours.innerHTML = sagat;
      sagat--;
      minutler = 60;
    }
  }
}

// infinte

setInterval(timeChanger, 1000);
