import allFilters from './data.js';
import data from './data/lol/lol.js';

const elements = data.data;
let allCharacters = Object.values(elements);

const index = document.getElementById("index");
const header = document.querySelector("header");

const nav = document.createElement("nav");
header.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);
const li = document.createElement("li");
ul.appendChild(li);
const a = document.createElement("a");
a.setAttribute("href", "index.html")
li.appendChild(a);
const imgLogo = document.createElement("img");
imgLogo.setAttribute("src", "img/logo.png");
imgLogo.setAttribute("id", "img-logo");
a.appendChild(imgLogo);

const menu = document.createElement("section");
menu.setAttribute("id", "menu");
index.appendChild(menu);
const divMenu = document.createElement("div");
divMenu.setAttribute("id", "div-menu");
menu.appendChild(divMenu);
const divGo = document.createElement("div");
divGo.setAttribute("id", "div-go");
divMenu.appendChild(divGo);
const pMenu = document.createElement("p");
pMenu.setAttribute("id", "p-menu");
pMenu.innerHTML = `BUSQUE<br> POR UM<br> CAMPEÃO`;
divGo.appendChild(pMenu);
const aMenu = document.createElement("a");
aMenu.setAttribute("id", "a-menu");
aMenu.setAttribute("href", "#root");
aMenu.innerHTML = `↓`;
divGo.appendChild(aMenu);
const divImgMenu = document.createElement("div");
divImgMenu.setAttribute("id", "div-img-menu");
divGo.appendChild(divImgMenu);
const imgMenu = document.createElement("img");
imgMenu.setAttribute("id", "menu-img-character");
imgMenu.setAttribute("src", "img/character.png");
divImgMenu.appendChild(imgMenu);

const filters = document.createElement("section");
filters.setAttribute("id", "filters");
index.appendChild(filters);
const divFilters = document.createElement("div");
divFilters.setAttribute("id", "div-filters");
filters.appendChild(divFilters);

const divSearch = document.createElement("div");
divSearch.setAttribute("id", "div-search");
divFilters.appendChild(divSearch);
const imgSearch = document.createElement("img");
imgSearch.setAttribute("src", "img/search.png");
imgSearch.setAttribute("id", "img-search");
divSearch.appendChild(imgSearch);
const inputSearch = document.createElement("input");
inputSearch.setAttribute("id", "input-search");
inputSearch.setAttribute("placeholder", "Digite o nome do campeão...");
divSearch.appendChild(inputSearch);

const divCategories = document.createElement("div");
divCategories.setAttribute("id", "categories");
divFilters.appendChild(divCategories);
const imgController = document.createElement("img");
imgController.setAttribute("class", "icons");
imgController.setAttribute("id", "Support");
imgController.setAttribute("src", "img/controller.png");
divCategories.appendChild(imgController);
const imgSlayer = document.createElement("img");
imgSlayer.setAttribute("class", "icons");
imgSlayer.setAttribute("id", "Assassin");
imgSlayer.setAttribute("src", "img/slayer.png");
divCategories.appendChild(imgSlayer);
const imgTank = document.createElement("img");
imgTank.setAttribute("class", "icons");
imgTank.setAttribute("id", "Tank");
imgTank.setAttribute("src", "img/tank.png");
divCategories.appendChild(imgTank);
const imgAll = document.createElement("img");
imgAll.setAttribute("class", "icons");
imgAll.setAttribute("id", "All");
imgAll.setAttribute("src", "img/all.png");
divCategories.appendChild(imgAll);
const imgMarksman = document.createElement("img");
imgMarksman.setAttribute("class", "icons");
imgMarksman.setAttribute("id", "Marksman");
imgMarksman.setAttribute("src", "img/marksman.png");
divCategories.appendChild(imgMarksman);
const imgMage = document.createElement("img");
imgMage.setAttribute("class", "icons");
imgMage.setAttribute("id", "Mage");
imgMage.setAttribute("src", "img/mage.png");
divCategories.appendChild(imgMage);
const imgFighter = document.createElement("img");
imgFighter.setAttribute("class", "icons");
imgFighter.setAttribute("id", "Fighter");
imgFighter.setAttribute("src", "img/fighter.png");
divCategories.appendChild(imgFighter);

const divDifOrd = document.createElement("div");
divDifOrd.setAttribute("id", "dif-ord");
divFilters.appendChild(divDifOrd);

const divDifficulty = document.createElement("div");
divDifficulty.setAttribute("id", "div-difficulty");
divDifOrd.appendChild(divDifficulty);
const selectDifficulty = document.createElement("button");
selectDifficulty.setAttribute("id", "difficulties");
selectDifficulty.innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
divDifficulty.appendChild(selectDifficulty);
const difficultyAll = document.createElement("button");
difficultyAll.setAttribute("id", "all");
difficultyAll.style.display = "none";
difficultyAll.setAttribute("class", "difficulties");
difficultyAll.innerHTML = "Todas as Dificuldades";
divDifficulty.appendChild(difficultyAll);
const difficultyEasy = document.createElement("button");
difficultyEasy.setAttribute("id", "easy");
difficultyEasy.style.display = "none";
difficultyEasy.setAttribute("class", "difficulties");
difficultyEasy.innerHTML = `<img id="easy-img" src="img/easy.png"/>`;
divDifficulty.appendChild(difficultyEasy);
const difficultyHard = document.createElement("button");
difficultyHard.setAttribute("id", "hard");
difficultyHard.style.display = "none";
difficultyHard.setAttribute("class", "difficulties");
difficultyHard.innerHTML = `<img id="hard-img" src="img/hard.png"/>`;
divDifficulty.appendChild(difficultyHard);

document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("all").style.display == "none"){
            document.getElementById("all").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/up.png"/>`;
 
    }else{
            document.getElementById("all").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
 })
 document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("easy").style.display == "none"){
            document.getElementById("easy").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/up.png"/>`;
 
    }else{
            document.getElementById("easy").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
 })
 document.getElementById("difficulties").addEventListener("click", function(){
    if(document.getElementById("hard").style.display == "none"){
            document.getElementById("hard").style.display = "flex";
            document.getElementById("img-select").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-up" src="img/up.png"/>`;
 
    }else{
            document.getElementById("hard").style.display = "none";
            document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
 })

const orderSelector = document.createElement("div");
orderSelector.setAttribute("id", "order-selector");
divDifOrd.appendChild(orderSelector);
const ordenar = document.createElement("button");
ordenar.setAttribute("id", "ordenar");
ordenar.setAttribute("class", "order");
ordenar.innerHTML = `A-Z <img id="img-select1" src="img/select.png"/>`
orderSelector.appendChild(ordenar);
const ordenarAtoZ = document.createElement("button");
ordenarAtoZ.setAttribute("id", "A-Z");
ordenarAtoZ.setAttribute("class", "orders");
ordenarAtoZ.innerHTML = `A-Z`;
ordenarAtoZ.style.display = "none";
orderSelector.appendChild(ordenarAtoZ);
const ordenarZtoA = document.createElement("button");
ordenarZtoA.setAttribute("id", "Z-A");
ordenarZtoA.setAttribute("class", "orders");
ordenarZtoA.style.display = "none";
ordenarZtoA.innerHTML = `Z-A`;
orderSelector.appendChild(ordenarZtoA);
document.getElementById("ordenar").addEventListener("click", function(){
    ordenarZtoA.innerHTML = `Z-A`;
    if(document.getElementById("A-Z").style.display == "none"){
        document.getElementById("ordenar").style.display = "none";
        document.getElementById("A-Z").style.display = "flex";
        document.getElementById("A-Z").style.justifyContent = "center";
    } else{
        document.getElementById("A-Z").style.display = "none";
    }
    if(document.getElementById("Z-A").style.display == "none"){
        document.getElementById("Z-A").style.display = "flex";
    } else{
        document.getElementById("Z-A").style.display = "none";
    }
})

const divImgResponsive = document.createElement("div");
divImgResponsive.setAttribute("id", "div-img-responsive");
index.appendChild(divImgResponsive);
const imgController1 = document.createElement("img");
imgController1.setAttribute("class", "icons-responsivo");
imgController1.setAttribute("id", "controller1");
imgController1.setAttribute("src", "img/controller.png");
divImgResponsive.appendChild(imgController1);
const imgSlayer1 = document.createElement("img");
imgSlayer1.setAttribute("class", "icons-responsivo");
imgSlayer1.setAttribute("id", "slayer1");
imgSlayer1.setAttribute("src", "img/slayer.png");
divImgResponsive.appendChild(imgSlayer1);
const imgTank1 = document.createElement("img");
imgTank1.setAttribute("class", "icons-responsivo");
imgTank1.setAttribute("id", "tank1");
imgTank1.setAttribute("src", "img/tank.png");
divImgResponsive.appendChild(imgTank1);
const imgAll1 = document.createElement("img");
imgAll1.setAttribute("class", "icons-responsivo");
imgAll1.setAttribute("id", "all1");
imgAll1.setAttribute("src", "img/all.png");
divImgResponsive.appendChild(imgAll1);
const imgMarksman1 = document.createElement("img");
imgMarksman1.setAttribute("class", "icons-responsivo");
imgMarksman1.setAttribute("id", "marksman1");
imgMarksman1.setAttribute("src", "img/marksman.png");
divImgResponsive.appendChild(imgMarksman1);
const imgMage1 = document.createElement("img");
imgMage1.setAttribute("class", "icons-responsivo");
imgMage1.setAttribute("id", "mage1");
imgMage1.setAttribute("src", "img/mage.png");
divImgResponsive.appendChild(imgMage1);
const imgFighter1 = document.createElement("img");
imgFighter1.setAttribute("class", "icons-responsivo");
imgFighter1.setAttribute("id", "fighter1");
imgFighter1.setAttribute("src", "img/fighter.png");
divImgResponsive.appendChild(imgFighter1);

const footer = document.querySelector("footer");
const pFooter = document.createElement("p");
pFooter.setAttribute("id", "p-footer");
pFooter.innerHTML = `copyright@2021 | feito por <a href="https://github.com/LarissaSiq" 
target="blank">Larissa Siqueira</a> e <a href="https://github.com/larissavilelasobral" 
target="new">Larissa Vilela</a></p>`;
footer.appendChild(pFooter);

function showCharacters(allCharacters) {
    const divContainer = document.getElementById("root");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = ``;

    for (let i = 0; i < allCharacters.length; i++) {
        let divCards = document.createElement("div");
        divCards.setAttribute("class", "cards");
        divContainer.appendChild(divCards);

        let divFrontCard = document.createElement("div");
        divFrontCard.setAttribute("class", "front-card");
        divCards.appendChild(divFrontCard);

        let divBackCard = document.createElement("div");
        divBackCard.setAttribute("class", "back-card");
        divCards.appendChild(divBackCard);

        let imageCharacters = document.createElement("img");
        imageCharacters.setAttribute("class", "imageCharacters");

        const name = allCharacters[i].name;
        const title = allCharacters[i].title;
        const splash = allCharacters[i].splash;
        const blurb = allCharacters[i].blurb;

        divFrontCard.innerHTML = `<h1>${name}</h1><h2>${title}</h2><img class="image-characters"src="${splash}"><p>${blurb}</p>`;

        const img = allCharacters[i].img;
        const partype = allCharacters[i].partype;
        const tags = allCharacters[i].tags;
        const attack = allCharacters[i].info.attack;
        const defense = allCharacters[i].info.defense;
        const magic = allCharacters[i].info.magic;
        const difficulty = allCharacters[i].info.difficulty;

        divBackCard.innerHTML = `<h3>${name}</h3><img class="profile-characters" src="${img}"><h4>${tags}</h4><h4>${partype}</h4>
        <p id="attack">Attack: ${attack}</p><p id="defense">Defense: ${defense}</p><p id="magic">Magic: ${magic}</p>
        <p id="difficulty">Difficulty: ${difficulty}</p>`;
    }
}
showCharacters(allCharacters);

let filtersCharacters = allCharacters;
const buttonController = document.getElementById("Support");
buttonController.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Support");
    showCharacters(filtersCharacters);
});
const buttonAssassin = document.getElementById("Assassin");
buttonAssassin.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Assassin");
    showCharacters(filtersCharacters);
});
const buttonTank = document.getElementById("Tank");
buttonTank.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Tank");
    showCharacters(filtersCharacters);
});
const buttonAll = document.getElementById("All");
buttonAll.addEventListener("click", function(){
    filtersCharacters = allCharacters;
    showCharacters(filtersCharacters);
});
const buttonMarksman = document.getElementById("Marksman");
buttonMarksman.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Marksman");
    showCharacters(filtersCharacters);
});
const buttonMage = document.getElementById("Mage");
buttonMage.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Mage");
    showCharacters(filtersCharacters);
});
const buttonFighter = document.getElementById("Fighter");
buttonFighter.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Fighter");
    showCharacters(filtersCharacters);
});

const buttonController1 = document.getElementById("controller1");
buttonController1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Support");
    showCharacters(filtersCharacters);
});
const buttonAssassin1 = document.getElementById("slayer1");
buttonAssassin1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Assassin");
    showCharacters(filtersCharacters);
});
const buttonTank1 = document.getElementById("tank1");
buttonTank1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Tank");
    showCharacters(filtersCharacters);
});
const buttonAll1 = document.getElementById("all1");
buttonAll1.addEventListener("click", function(){
    filtersCharacters = allCharacters;
    showCharacters(filtersCharacters);
});
const buttonMarksman1 = document.getElementById("marksman1");
buttonMarksman1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Marksman");
    showCharacters(filtersCharacters);
});
const buttonMage1 = document.getElementById("mage1");
buttonMage1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Mage");
    showCharacters(filtersCharacters);
});
const buttonFighter1 = document.getElementById("fighter1");
buttonFighter1.addEventListener("click", function(){
    filtersCharacters = allFilters.filterTag(allCharacters,"Fighter");
    showCharacters(filtersCharacters);
});

document.getElementById("all").addEventListener("click", function (){
    document.getElementById("difficulties").innerHTML = `Todas as Dificuldades <img id="img-select" src="img/select.png"/>`;
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("difficulties").style.padding = "0px";
    document.getElementById("img-select").style.padding = "0px";
    
    if(filtersCharacters !== allCharacters){
        showCharacters(filtersCharacters);
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }else{
        showCharacters(allCharacters);
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
})
document.getElementById("easy").addEventListener("click", function(){
    document.getElementById("difficulties").innerHTML = `<img id="easy-img" src="img/easy.png"/><img id="img-select" src="img/select.png"/>`;
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("easy-img").style.width = "60%";
    document.getElementById("easy-img").style.float = "left";
    document.getElementById("easy-img").style.padding = "0px 0px 0px 20px";
    document.getElementById("img-select").style.padding = "5px 0px";
    
    if(filtersCharacters !== allCharacters){
        const showEasyCharacters = allFilters.filterDifficultyEasy(filtersCharacters, 5, buttonController);    
        showCharacters(showEasyCharacters);
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }else{   
        const showEasyCharacters = allFilters.filterDifficultyEasy(allCharacters, 5, buttonController); 
        showCharacters(showEasyCharacters);
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
})
document.getElementById("hard").addEventListener("click", function(){
    document.getElementById("difficulties").innerHTML = `<img id="hard-img" src="img/hard.png"/><img id="img-select" src="img/select.png"/>`;
    document.getElementById("all").style.display = "none";
    document.getElementById("easy").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("hard-img").style.width = "60%";
    document.getElementById("hard-img").style.float = "left";
    document.getElementById("hard-img").style.padding = "0px 0px 0px 20px";
    document.getElementById("img-select").style.padding = "5px 0px";

    if(filtersCharacters !== allCharacters){
        const showHardCharacters = allFilters.filterDifficultyHard(filtersCharacters, 6);
    showCharacters(showHardCharacters)
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`
    }else{
        const showHardCharacters = allFilters.filterDifficultyHard(allCharacters, 6);
        showCharacters(showHardCharacters);
        document.getElementById("difficulties").innerHTML = `Dificuldades <img id="img-select" src="img/select.png"/>`;
    }
})

document.getElementById("A-Z").addEventListener("click", function(){
    document.getElementById("ordenar").style.display = "flex";
    document.getElementById("ordenar").innerHTML = `A-Z <img id="img-select1" src="img/select.png"/>`;
    document.getElementById("ordenar").style.padding = "2px 0px 0px 6px";
    document.getElementById("img-select1").style.padding = "3px 7px";
    document.getElementById("A-Z").style.display = "none";
    document.getElementById("Z-A").style.display = "none";

    let orderChampionsAZ = allFilters.orderAZ(filtersCharacters);
    showCharacters(orderChampionsAZ);
})
document.getElementById("Z-A").addEventListener("click", function(){
    document.getElementById("ordenar").style.display = "flex";
    document.getElementById("ordenar").innerHTML = `Z-A <img id="img-select1" src="img/select.png"/>`;
    document.getElementById("ordenar").style.padding = "2px 0px 0px 6px";
    document.getElementById("img-select1").style.padding = "3px 7px";
    document.getElementById("A-Z").style.display = "none";
    document.getElementById("Z-A").style.display = "none";

    let orderChampionsZA = allFilters.orderZA(filtersCharacters); 
    showCharacters(orderChampionsZA);
})

document.getElementById("input-search").addEventListener("input", function () {

    if(filtersCharacters !== allCharacters){
    const textName = document.getElementById("input-search").value.toLowerCase();
    const champions = allFilters.searchCharacter(filtersCharacters, textName);
    showCharacters(champions);

    }else{
        const textName = document.getElementById("input-search").value.toLowerCase();
        const champions = allFilters.searchCharacter(allCharacters, textName);
        showCharacters(champions);
    }
 })
