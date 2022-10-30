let changeButton1 = document.getElementById("mainPopUpFortheMainPage1");
let changeButton2 = document.getElementById("mainPopUpFortheMainPage2");
let popUpSlide1 = document.getElementsByClassName("AllBoxContainerForPopUp");
let popUpSlide2 = document.getElementsByClassName("AllBoxContainerForPopUp2");
let popUpOpenner = document.getElementById("popUpMain");
let MainPopUp = document.getElementsByClassName("mainContainerForPopUp");
let MainPopUpCloser = document.getElementsByClassName("section-1");
let openKeeper = document.getElementsByClassName("allContainerForPopUp");
let insidebutton01 = document.getElementById("buttonsPopUpMain1");
let insidebutton02 = document.getElementById("buttonsPopUpMain2");


// addEventListener

insidebutton01.addEventListener("click", insideCSildes01);
insidebutton02.addEventListener("click", insideCSildes02);

changeButton1.addEventListener("click", changeSildes1);
changeButton2.addEventListener("click", changeSildes2);
popUpOpenner.addEventListener("click", popUpOpen);
popUpOpenner.addEventListener("onmouseover", popUpOpen);

MainPopUpCloser[0].addEventListener("click", closePopUp);
openKeeper[0].addEventListener("onmouseover", popUpOpen);


//current time
document.getElementById("popUpSilte2n04").style.display = "none";
document.getElementById("popUpSilte2n05").style.display = "none";
document.getElementById("popUpSilte2n06").style.display = "none";
popUpSlide1[0].style.display = "block";
popUpSlide2[0].style.display = "none";
MainPopUp[0].style.display = "none";
//functions

function insideCSildes01(){
  document.getElementById("popUpSilte2n01").style.display = "block";
  document.getElementById("popUpSilte2n02").style.display = "block";
  document.getElementById("popUpSilte2n03").style.display = "block";
  document.getElementById("popUpSilte2n04").style.display = "none";
  document.getElementById("popUpSilte2n05").style.display = "none";
  document.getElementById("popUpSilte2n06").style.display = "none";
  insidebutton01.style.backgroundColor = "9a6aff";
  insidebutton02.style.backgroundColor = "black";

}

function insideCSildes02() {
  document.getElementById("popUpSilte2n01").style.display = "none";
  document.getElementById("popUpSilte2n02").style.display = "none";
  document.getElementById("popUpSilte2n03").style.display = "none";
  document.getElementById("popUpSilte2n04").style.display = "block";
  document.getElementById("popUpSilte2n05").style.display = "block";
  document.getElementById("popUpSilte2n06").style.display = "block";
   insidebutton01.style.backgroundColor = "black";
   insidebutton02.style.backgroundColor = "9a6aff";
}


function closePopUp(){
  MainPopUp[0].style.display = "none";
  
}
function popUpOpen() {
  MainPopUp[0].style.display = "block";
}

function changeSildes1() {
  popUpSlide1[0].style.display = "block";
  popUpSlide2[0].style.display = "none";
  changeButton1.style.color = "#372f47";
  changeButton1.style.backgroundColor = "#b8add2";
  changeButton2.style.color = "#b8add2";
  changeButton2.style.backgroundColor = "#372f47";
  MainPopUp[0].style.display = "block";

}

function changeSildes2() {
  popUpSlide1[0].style.display = "none";
  popUpSlide2[0].style.display = "block";
  changeButton1.style.color = "#b8add2";
  changeButton1.style.backgroundColor = "#372f47";
  changeButton2.style.color = "#372f47";
  changeButton2.style.backgroundColor = "#b8add2";
  MainPopUp[0].style.display = "block";

}


