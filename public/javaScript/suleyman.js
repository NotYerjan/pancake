let homePageTopBoxImg1 = document.getElementById("topBoxlotteryImgDex");
let homePageTopBoxImg2 = document.getElementById("topBoxlotteryImgDex2");
let buttonChangeImg1 = document.getElementById("topBoxButtonsSwitch1");
let buttonChangeImg2 = document.getElementById("topBoxButtonsSwitch2");
let mainPageTopBoxContent1 = document.getElementById("toBoxMainPage1Uppuer");
let mainPageTopBoxContent2 = document.getElementById("toBoxMainPage2Uppuer");

//current style

homePageTopBoxImg2.style.display = "none";
mainPageTopBoxContent2.style.display = "none";
//events

buttonChangeImg1.addEventListener("click", changeImgHome);
buttonChangeImg2.addEventListener("click", changeImgHome2);

//functions
function changeImgHome() {
  homePageTopBoxImg1.style.display = "block";
  homePageTopBoxImg2.style.display = "none";
  buttonChangeImg1.style.opacity = "1";
  buttonChangeImg2.style.opacity = "0.3";
  mainPageTopBoxContent1.style.display = "block";
  mainPageTopBoxContent2.style.display = "none";
}
function changeImgHome2() {
  homePageTopBoxImg1.style.display = "none";
  homePageTopBoxImg2.style.display = "block";
  buttonChangeImg1.style.opacity = "0.3";
  buttonChangeImg2.style.opacity = "1";
  mainPageTopBoxContent1.style.display = "none";
  mainPageTopBoxContent2.style.display = "block";
}

// infinte

setInterval(changeImgHome, 5000);
setInterval(changeImgHome2, 10000);


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
function timeChanger(){
  
  blocksecond.innerHTML = sekuntlar;
  sekuntlar--;

  if(0 === sekuntlar){

    blockminutes.innerHTML = minutler;
    minutler--;
    sekuntlar = 60;

    if(0 === minutler){
      blockhours.innerHTML = sagat;
      sagat--;
      minutler = 60;
    }
  }
}


// infinte

setInterval(timeChanger, 1000);