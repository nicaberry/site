"use strict";
//ABOUT-ME
function showAboutMeWindow() {
    let divAboutMe = document.querySelector(".about-me");
    let btnOpenAboutMeMax = document.querySelector("#about-me__buttonOpen_max");
    let btnOpenAboutMeMin = document.querySelector("#about-me__buttonOpen_min");
    let btnCloseAboutMe = document.querySelector("#about-me__buttonClose");


    btnOpenAboutMeMin.onclick = (e) => {
        divAboutMe.style.display = "grid";
    }

    btnOpenAboutMeMax.onclick = (e) => {
        divAboutMe.style.display = "grid";
    }

    btnCloseAboutMe.onclick = (e) => {
        divAboutMe.style.display = "none";
    }
}

