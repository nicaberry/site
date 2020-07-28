window.onload = (e) => {
    
        //  CARDS
        let infoAboutMyWorkForCard = [
            {
                name: "Itten Circle",
                subname: "JAVASCRIPT/CSS/HTML",
                href: "./myWork/IttienCircle/index.html",
                githubhref: "https://github.com/nicaberry/IttenCircle",
                image: "./images/myWork/IttenCircle.png",
                imageAlt: "Itten Circle",
                description: "Выпускной проект IT Academy."
            },
            {
                name: "GameXO",
                subname: "JAVASCRIPT/CSS/HTML",
                href: "./myWork/GameXO/index.html",
                githubhref: "https://github.com/nicaberry/GameXO",
                image: "./images/myWork/GameXO.png",
                imageAlt: "game XO",
                description: "Игра 'крестики и нолики'."
            },
            {
                name: "Calculator",
                subname: "JAVASCRIPT/CSS/HTML",
                href: "./myWork/Calculator/index.html",
                githubhref: "https://github.com/nicaberry/calculator",
                image: "./images/myWork/Calculator.png",
                imageAlt: "calculator",
                description: "Простой калькулятор на JavaScript. Выполняет простейшие арифметические операции."
            },
            {
                name: "Game Life", 
                subname: "JAVASCRIPT/HTML",
                href: "./myWork/GameLive/index.html",
                githubhref: "https://github.com/nicaberry/game-live",
                image: "./images/myWork/GameLife.png",
                imageAlt: "game life",
                description: "Игра 'жизнь'."
            },
            {
                name: "Barley-break",
                subname: "JAVASCRIPT/CSS/HTML",
                href: "./myWork/BarleyBreak/index.html",
                githubhref: "https://github.com/nicaberry/game-15",
                image: "./images/myWork/BarleyBreak.png",
                imageAlt: "barley-break",
                description: "Игра 'пятнашки'"
            },
            {
                name: "Snake Todo",
                subname: "JAVASCRIPT/HTML",
                href: "./myWork/SnakeTodo/index.html",
                githubhref: "https://github.com/nicaberry/game-15",
                image: "./images/myWork/SnakeTodo.png",
                imageAlt: "game Snake",
                description: "Игра 'змейка'."
            },
            {
                name: "Task",
                subname: "JAVASCRIPT/CSS/HTML",
                href: "./myWork/Task/index.html",
                githubhref: "https://github.com/nicaberry/task",
                image: "./images/myWork/Task.png",
                imageAlt: "todo list",
                description: "Приложение 'список дел'."
            },
        ];

        // CREATE CARDS 

        function createCards(info) {
            let cards = [];
            info.forEach((item) => {
                // card
                let card = document.createElement("div");
                card.classList.add("card");
                card.setAttribute("data-active", "true");

                //card-img
                let cardImg = document.createElement("div");
                cardImg.classList.add("card-img");

                let buttonOpenDescription = document.createElement("button");
                buttonOpenDescription.classList.add("card-description__button", "card-description__button_open");
                buttonOpenDescription.innerHTML = "&#8801;";

                let buttonCloseDescription = document.createElement("button");
                buttonCloseDescription.classList.add("card-description__button", "card-description__button_close");
                buttonCloseDescription.innerHTML = "&#215;";

                let cardDescription = document.createElement("p");
                cardDescription.classList.add("card-description");
                cardDescription.innerHTML = item.description;

                let image = document.createElement("img");
                image.setAttribute("src", item.image);
                image.setAttribute("alt", item.imageAlt);

                cardImg.append(buttonOpenDescription);
                cardImg.append(buttonCloseDescription);
                cardImg.append(cardDescription);
                cardImg.append(image);

                //card-header
                let cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");

                let cardName = document.createElement("a");
                cardName.classList.add("card-header__name");
                cardName.setAttribute("href", item.href);
                cardName.setAttribute("target", "_blank");
                cardName.innerHTML = item.name;

                let cardSubname = document.createElement("p");
                cardSubname.classList.add("card-header__subname");
                cardSubname.innerHTML = item.subname;

                let cardGithub = document.createElement("a");
                cardGithub.classList.add("card-header__github");
                cardGithub.setAttribute("href", item.githubhref);
                cardGithub.setAttribute("target", "_blank");
                cardGithub.innerHTML = "GITHUB";

                cardHeader.append(cardName);
                cardHeader.append(cardSubname);
                cardHeader.append(cardGithub);

                card.append(cardImg);
                card.append(cardHeader);

                cards.push(card);
            })

            return cards;
        }

        let cardsArray = createCards(infoAboutMyWorkForCard);

        function showMyCards(cards) {
            let myWorkContainer = document.querySelector(".my-work-container");

            cards.forEach((item) => {
                myWorkContainer.append(item);
            });
        }

        showMyCards(cardsArray);

        
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
            if (e.target.classList.contains("card-description__button_open")) {
                e.target.style.display = "none";

                let buttonClose = e.target.parentNode.querySelector(".card-description__button_close");
                buttonClose.style.display = "block";

                let description = e.target.parentNode.querySelector(".card-description");
                description.style.display = "block";
            }
            if (e.target.classList.contains("card-description__button_close")) {
                e.target.style.display = "none";

                let buttonOpen = e.target.parentNode.querySelector(".card-description__button_open");
                buttonOpen.style.display = "block";

                let description = e.target.parentNode.querySelector(".card-description");
                description.style.display = "none";
            }
        }
    }

    

    //MENU-SEARCH

    let menuSerchOpenButton = document.querySelector(".select-search__openButton");
    let menuLiNoActive = document.querySelectorAll(".select-search__wrap li[data-active=false]");
   
    menuSerchOpenButton.onclick = (e) => {
        for (let i = 0; i <menuLiNoActive.length; i++) {
            menuLiNoActive[i].style.display = "block"; 
        }
    }
    for (let i = 0; i < menuLiNoActive.length; i++) {
        menuLiNoActive[i].onclick = (e) => {
            for (let j = 0; j < menuLiNoActive.length; j++) {
                menuLiNoActive[j].style.display = "none"; 
            } 
        let data = menuLiNoActive[i].getAttribute("data-search");
        menuSerchOpenButton.innerHTML = "<span>#" + data + "</span> &#129171;"; 

            

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
        let sizeContainer = parseInt(window.getComputedStyle(myWorkContainer).width);
        if (sizeContainer <= sizeWindowForShowSlider) {
            slider.style.display = "flex";
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
        window.onresize = (e) => {
            sizeContainer = parseInt(window.getComputedStyle(myWorkContainer).width);
            if (sizeContainer <= sizeWindowForShowSlider) {
                slider.style.display = "flex";
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
    
    