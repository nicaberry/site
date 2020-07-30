//CREATE CARDS 
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
