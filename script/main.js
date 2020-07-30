 "use strict";
 let infoAboutMyWorkForCard = [
    {
        name: "Itten Circle",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/IttienCircle/index.html",
        githubhref: "https://github.com/nicaberry/IttenCircle",
        image: "./images/myWork/IttenCircle.png",
        imageAlt: "Itten Circle",
        description: "Выпускной проект IT Academy.<br> Целями этой работы было: <br> 1. потренироваться в написание форм регистрации и входа на страницу; <br> 2. работа с LocalStorage; <br> 3. взаимодействиями на странице (обработка событий, работа с объектом события); <br> 4. поработать по принципам MVC, SPA; <br> 5. работа со звуком; <br> 6. изменеие аватара; <br> 7. попробовать сделать сладер; <br> 8. сделать игру в которой можно управлять, как с клавишей, так и при нажатии на кнопки; <br> 9. попробывать сделать адаптивный экран для мобильного формата."
    },
    {
        name: "GameXO",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/GameXO/index.html",
        githubhref: "https://github.com/nicaberry/GameXO",
        image: "./images/myWork/GameXO.png",
        imageAlt: "game XO",
        description: "Игра 'крестики и нолики'. Одна из первых игр, которые я попыталась написать с помощью применения класса (class ES6). Но что-то пошло не так, как на тот момент у меня не было понимания, что лучше разделять все на маленькие методы(функции), а не пихать всё-всё в один метод:) Но результатом, я была довольна, т.к можно было поиграть с 'искусственным интеллектом'."
    },
    {
        name: "Calculator",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/Calculator/index.html",
        githubhref: "https://github.com/nicaberry/calculator",
        image: "./images/myWork/Calculator.png",
        imageAlt: "calculator",
        description: "Простой калькулятор на JavaScript. Выполняет простейшие арифметические операции. Он на столько очень простой, что одно не верное нажатие и правильного ответа можно не получить:)"
    },
    {
        name: "Game Life", 
        subname: "JAVASCRIPT/HTML",
        href: "./myWork/GameLive/index.html",
        githubhref: "https://github.com/nicaberry/game-live",
        image: "./images/myWork/GameLife.png",
        imageAlt: "game life",
        description: "Игра 'жизнь'. Узнала что есть такое. Решила попробовать написать, что бы потренировать JavaScript."
    },
    {
        name: "Barley-break",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/BarleyBreak/index.html",
        githubhref: "https://github.com/nicaberry/game-15",
        image: "./images/myWork/BarleyBreak.png",
        imageAlt: "barley-break",
        description: "Игра 'пятнашки'. Очень захотелось поиграть в эту игру и я решила её написать:)"
    },
    {
        name: "Snake Todo",
        subname: "JAVASCRIPT/HTML",
        href: "./myWork/SnakeTodo/index.html",
        githubhref: "https://github.com/nicaberry/Snake-Todo",
        image: "./images/myWork/SnakeTodo.png",
        imageAlt: "game Snake",
        description: "Игра 'змейка'. Написана мной при самостоятельном освоении JavaScript. Для меня было главное, что оно - 'живое', т.е. двигается в разные стороны и кушает зеленный квадратик."
    },
    {
        name: "Task",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/Task/index.html",
        githubhref: "https://github.com/nicaberry/task",
        image: "./images/myWork/Task.png",
        imageAlt: "todo list",
        description: "Приложение 'список дел'. Написано при начальных знаниях о JavaScript, поэтому это трудно назвать приложением, т.к оно ничего не запоминает (тогда я еще не знала о существование LocalStorage  или о каком-то другом хранилище). Здесь я тренировалась передавать вводимые данные и создавать элементы с помощью JavaScript."
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
   

    function showMyCards(cards) {
        let myWorkContainer = document.querySelector(".my-work-container");

        cards.forEach((item) => {
            myWorkContainer.append(item);
        });
    }


    // ABOUT-ME
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

    
    // CARD/DESCRIPTION

    function toggleDescription(cards) {

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
    }
   
    

    //MENU-SEARCH

    function searchMenu(cards) {
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
            menuSerchOpenButton.innerHTML = "#" + data + " &#9662;"; 
    
                
    
                for (let i = 0; i < cards.length; i++) {
                    if (data  === "all") {
                        cards[i].style.display = "flex";
                        cards[i].setAttribute("data-active", "true");
                        doSlider(0);
                    } else {
                        cards[i].style.display = "none";
                        cards[i].setAttribute("data-active", "false");
                        let textSubName = cards[i].querySelector(".card-header__subname").textContent.split("/");
                        textSubName.forEach((item) => {
                            if (item.toUpperCase() === data.toUpperCase()) {
                                cards[i].style.display = "flex";
                                cards[i].setAttribute("data-active", "true");
                                doSlider(0);
                            } 
                        });
                    }
                }
            }
        }
    }
   

    // DO SLIDER
    function doSlider(translateX) {
        let activeCards = document.querySelectorAll(".card[data-active=true]");
        let sliderRightButton = document.querySelector(".slider__rightButton");
        let sliderLeftButton = document.querySelector(".slider__leftButton");
        let x = translateX;
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
        
        // SHOW SLIDER
        function showSlider(cards, sizeWindow) {
            let myWorkContainer = document.querySelector(".my-work-container");
            let slider = document.querySelector(".slider");
            let sliderWrap = document.querySelector(".slider__wrap");
            let sizeWindowForShowSlider = sizeWindow;
            let sizeContainer = parseInt(window.getComputedStyle(myWorkContainer).width);
            showOrHideSlider(sizeContainer, sizeWindowForShowSlider, slider, cards, sliderWrap, myWorkContainer)

            window.onresize = (e) => {
                sizeContainer = parseInt(window.getComputedStyle(myWorkContainer).width);
                showOrHideSlider(sizeContainer, sizeWindowForShowSlider, slider, cards, sliderWrap, myWorkContainer)
                doSlider(0);
            }
        }

        function addCardsInContainer(container, cards) {
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.transform = `translateX(0px)`;
                container.append(cards[i]);
            }
        }

        function showOrHideSlider(sizeContainer, sizeWindowForShowSlider, slider, cards, sliderWrap, myWorkContainer) {
            if (sizeContainer <= sizeWindowForShowSlider) {
                slider.style.display = "flex";
                addCardsInContainer(sliderWrap, cards);
            }
            if (sizeContainer > sizeWindowForShowSlider) {
                slider.style.display = "none";
                addCardsInContainer(myWorkContainer, cards);
            }
        }
        
window.onload = (e) => {
    let cardsArray = createCards(infoAboutMyWorkForCard);
    showMyCards(cardsArray);
        
    let cards = document.querySelectorAll(".card");
    showAboutMeWindow();
    toggleDescription(cards);
    searchMenu(cards);
    doSlider(0);
    showSlider(cards, 576);
}
    
    