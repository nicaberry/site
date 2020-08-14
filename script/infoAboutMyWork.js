"use strict";
let infoAboutMyWorkForCard = [
    {
        name: "Learn SASS",
        subname: "CSS/HTML/HELP",
        href: "./myWork/learnSASS/index.html",
        githubhref: "https://github.com/nicaberry/learnSASS",
        image: "./images/myWork/learnSASS.png",
        imageAlt: "SASS",
        description: "Познавала SCSS.",
    },
    {
        name: "Game Zmey 2",
        subname: "JAVASCRIPT/CSS/HTML",
        href: "./myWork/game zmey 2/index.html",
        githubhref: "https://github.com/nicaberry/game-zmey-2",
        image: "./images/myWork/gameZmey2.png",
        imageAlt: "game snake",
        description: "Опять попробовала сделать игру 'змейка', на этот раз с применением MVC. Целью было создать такую игру, в которой при достижение определенных очков, появлялся новый уровень и поле этого уровня, было отлично от предыдущего. В ходе работы было выяснено, что при установке обработчика события на пробел клавиатуры, нужно помнить о псевдо классе :focus, который может поспособствовать ошибкам."
    },
    {
        name: "Burger-JS",
        subname: "JAVASCRIPT/CSS/HTML/HELP",
        href: "./myWork/burger_menu/index.html",
        githubhref: "https://github.com/nicaberry/burger-menu-js",
        image: "./images/myWork/burgerMenuJS.png",
        imageAlt: "burger-menu JS",
        description: "Попытка создать адаптивное меню при помощи JavaScript. Здесь необходимо учитывать, что JS может создавать автоматически аттрубуты в элементах. В некоторых случаях их необходимо удалять, здесь как раз тот случай."
    },
    {
        name: "I learning Grid",
        subname: "CSS/HTML/HELP",
        href: "./myWork/learnGrid/index.html",
        githubhref: "https://github.com/nicaberry/learnGrid",
        image: "./images/myWork/learnGrid.png",
        imageAlt: "learnGrid",
        description: "Изучение Grid. Пробовала создать адаптивный сайт с применением Grid. А также сделать галерею изображений с разными размерами."
    },
    {
        name: "Units",
        subname: "JAVASCRIPT/CSS/HTML/HELP",
        href: "./myWork/Units/index.html",
        githubhref: "https://github.com/nicaberry/units",
        image: "./images/myWork/units.png",
        imageAlt: "Units",
        description: "Изучение размеров, которые используются в браузере. Плюс практика работы с 'iframe'."
    },
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

