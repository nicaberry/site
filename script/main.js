"use strict";
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
    
    