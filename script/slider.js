"use strict";    
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
        