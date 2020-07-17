window.onload = (e) => {
    let divAboutMe = document.querySelector(".about-me");
    let btnOpenAboutMe = document.querySelector("#about-me__buttonOpen");
    let btnCloseAboutMe = document.querySelector("#about-me__buttonClose");


    btnCloseAboutMe.onclick = (e) => {
        divAboutMe.style.display = "none";
    }

    btnOpenAboutMe.onclick = (e) => {
        divAboutMe.style.display = "grid";
    }
    
}