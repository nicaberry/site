"use strict";
//CARD-DESCRIPTION
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

