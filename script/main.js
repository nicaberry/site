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
            for (let j = 0; j < aMenuSearch.length; j++) {
                aMenuSearch[j].style.color = "grey";
                aMenuSearch[j].style.fontWeight = "normal";
            }
            aMenuSearch[i].style.color = "pink";
            aMenuSearch[i].style.fontWeight = "bold";
            let data = aMenuSearch[i].dataset.search;
            for (let i = 0; i < cards.length; i++) {
                if (data  === "all") {
                    cards[i].style.display = "flex";
                    cards[i].setAttribute("data-active", "true");
                    doSlider();
                } else {
                    cards[i].style.display = "none";
                    cards[i].setAttribute("data-active", "false");
                    let textSubName = cards[i].querySelector(".card-header__subname").textContent.split("/");
                    textSubName.forEach((item) => {
                       if (item.toUpperCase() === data.toUpperCase()) {
                           cards[i].style.display = "flex";
                           cards[i].setAttribute("data-active", "true");
                           doSlider();
                       } 
                    });
                }
            }
        }
    }

    // DO SLIDER
    function doSlider() {
        let activeCards = document.querySelectorAll(".card[data-active=true]");
        let sliderRightButton = document.querySelector(".slider__rightButton");
        let sliderLeftButton = document.querySelector(".slider__leftButton");
        let x = 0;
        for (let i = 0; i < activeCards.length; i++) {
            activeCards[i].style.transform = `translateX(${x}px)`;
        }
        let sizeSlider = 256;
        let stopEnd = sizeSlider * activeCards.length;
        sliderRightButton.onclick = (e) => {
            x += -sizeSlider;
                if (x - sizeSlider < -stopEnd) {
                    x = 0; 
                }  
                for (let i = 0; i < activeCards.length; i++) {
                        activeCards[i].style.transform = `translateX(${x}px)`;
                }
            }

        sliderLeftButton.onclick = (e) => {
            x += sizeSlider;
                if (x > 0) {
                    x += -stopEnd;
                }
                for (let i = 0; i < activeCards.length; i++) {
                    activeCards[i].style.transform = `translateX(${x}px)`;
                }
            }
        
        }
        
        doSlider();

        // SHOW SLIDER
        let myWorkContainer = document.querySelector(".my-work-container");
        let slider = document.querySelector(".slider");
        let sliderWrap = document.querySelector(".slider__wrap");
        let sizeWindowForShowSlider = 576;
        window.onresize = (e) => {
            let sizeContainer = parseInt(window.getComputedStyle(myWorkContainer).width);
            if (sizeContainer <= sizeWindowForShowSlider) {
                slider.style.display = "block";
                for (let i = 0; i < cards.length; i++) {
                    sliderWrap.append(cards[i]);
                }

            }
            if (sizeContainer > sizeWindowForShowSlider) {
                slider.style.display = "none";
                for (let i = 0; i < cards.length; i++) {
                    cards[i].style.transform = `translateX(0px)`;
                    myWorkContainer.append(cards[i]);
                }

            }
        }
        
    }
    
    