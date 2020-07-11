window.onload = (e) => {
    let divAboutMe = document.querySelector(".about-me");
    let btnOpenAboutMe = document.querySelector("#about-me__btnOpen");
    let btnCloseAboutMe = document.querySelector("#about-me__btnClose"); 

    btnCloseAboutMe.onclick = (e) => {
        divAboutMe.style.display = "none";
    }

    btnOpenAboutMe.onclick = (e) => {
        divAboutMe.style.display = "flex";
    }
}