window.onload = (e) => {
    let divAboutMe = document.querySelector("#about_me");
    let btnOpenAboutMe = document.querySelector("#about_me_btnOpen");
    let btnCloseAboutMe = document.querySelector("#about_me_btnClose"); 

    btnCloseAboutMe.onclick = (e) => {
        divAboutMe.style.display = "none";
    }

    btnOpenAboutMe.onclick = (e) => {
        divAboutMe.style.display = "flex";
    }
}