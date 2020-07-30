"use strict";
//MENU-SEARCH
function openSearchMenu() {
    let menuLiNoActive = document.querySelectorAll(".select-search__wrap li[data-active=false]");
    let menuSerchOpenButton = document.querySelector(".select-search__openButton");
   
    document.onclick = (e) => {
        if (e.target.dataset.openMenu === "false") {
            for (let i = 0; i < menuLiNoActive.length; i++) {
                menuLiNoActive[i].style.display = "block"; 
            }
            menuSerchOpenButton.setAttribute("data-open-menu", "true");
        } else {
            for (let i = 0; i < menuLiNoActive.length; i++) {
                menuLiNoActive[i].style.display = "none"; 
            }
            menuSerchOpenButton.setAttribute("data-open-menu", "false");
        }  
    }
}

function clickMenuLiNoActive(cards) {
    let menuSerchOpenButton = document.querySelector(".select-search__openButton");
    let menuLiNoActive = document.querySelectorAll(".select-search__wrap li[data-active=false]");

    for (let i = 0; i < menuLiNoActive.length; i++) {
        menuLiNoActive[i].onclick = (e) => {
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