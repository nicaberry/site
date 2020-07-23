window.onload = (e) => {
    // ABOUT-ME
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

    
    // CARD/DESCRIPTION
    let cards = document.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = (e) => {
            if (e.target.classList.contains("card-header__descriptionOpenButton")) {
                e.target.style.display = "none";

                let buttonClose = e.target.parentNode.querySelector(".card-header__descriptionCloseButton");
                buttonClose.style.display = "block";

                let description = e.target.parentNode.querySelector(".card-header__description");
                description.style.display = "block";
            }
            if (e.target.classList.contains("card-header__descriptionCloseButton")) {
                e.target.style.display = "none";

                let buttonOpen = e.target.parentNode.querySelector(".card-header__descriptionOpenButton");
                buttonOpen.style.display = "block";

                let description = e.target.parentNode.querySelector(".card-header__description");
                description.style.display = "none";
            }
        }
    }

    //MENU-SEARCH

    let aMenuSearch = document.querySelectorAll(".menu-search a");

    for (let i = 0; i < aMenuSearch.length; i++) {
        aMenuSearch[i].onclick = (e) => {
            let data = aMenuSearch[i].dataset.search;
            console.log(data);
            for (let i = 0; i < cards.length; i++) {
                if (data  === "all") {
                    cards[i].style.display = "flex";
                } else {
                    cards[i].style.display = "none";
                    let textSubName = cards[i].querySelector(".card-header__subname").textContent.split("/");
                    textSubName.forEach((item) => {
                       if (item.toUpperCase() === data.toUpperCase()) {
                           cards[i].style.display = "flex";
                       } 
                    });
                }
            }
        }
        
    }
}