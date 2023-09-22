import { GamesArray, APPLICATIONNAME } from "./Main.js";





/////////////////////////////////////////////////////////////////////////
// define public variables
/////////////////////////////////////////////////////////////////////////
let currentGameId = 0;





/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOMSlider = {
    divSlider: document.querySelector(".slider"),
    imgSliderArrowLeft: document.querySelector(".slider > .arrow > img.left"),
    imgSliderArrowRight: document.querySelector(".slider > .arrow > img.right"),
    divSliderName: document.querySelector(".slider > .name"),
    divSliderReadMore: document.querySelector(".slider >.read-more")
}






/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
//
function setBackgroundOfIndexPage() {
    document.body.style.backgroundImage = `url(./../Assets/Images/Games/${GamesArray[0].name.split(" ").join("").toUpperCase()}/Main.jpg`;
}
function handleClickOfReadMore() {
    DOMSlider.divSliderReadMore.addEventListener("click", function (e) {
        window.location.href = `./Games/gameInformation.html?id=${current_game_id}`;
    });
}
function handleMouseOverOfReadMore() {
    DOMSlider.divSliderReadMore.addEventListener("mouseover", function (e) {
        e.target.style.transform = "scale(1.2)";
    });
}
function handleMouseLeaveOfReadMore() {
    DOMSlider.divSliderReadMore.addEventListener("mouseleave", function (e) {
        e.target.style.transform = "scale(1)";
    });
}
function slidingAllImagesOfGamesArray() {
    // let divSlider = document.querySelector(".slider");
    // let imgSliderArrowLeft = document.querySelector(".slider > .arrow > img.left");
    // let imgSliderArrowRight = document.querySelector(".slider > .arrow > img.right");
    // let divSliderName = document.querySelector(".slider > .name");
    let currentIndex = 0;

    let shortName;
    DOMSlider.divSliderName.innerText = GamesArray[0].name;
    DOMSlider.imgSliderArrowLeft.addEventListener("click", function () {
        currentIndex -= 1;
        if (currentIndex == -1) {
            currentIndex = 0;
        }
        currentGameId = GamesArray[currentIndex].id;
        shortName = GamesArray[currentIndex].name.split(" ").join("").toUpperCase();
        document.body.style.backgroundImage = `url(./../Assets/Images/Games/${shortName}/Main.jpg`;
        DOMSlider.divSliderName.innerText = GamesArray[currentIndex].name;
    });


    DOMSlider.imgSliderArrowRight.addEventListener("click", function () {
        currentIndex += 1;
        if (currentIndex == GamesArray.length) {
            currentIndex = GamesArray.length - 1;
        }
        currentGameId = GamesArray[currentIndex].id;
        shortName = GamesArray[currentIndex].name.split(" ").join("").toUpperCase();
        document.body.style.backgroundImage = `url(./../Assets/Images/Games/${shortName}/Main.jpg`;
        DOMSlider.divSliderName.innerText = GamesArray[currentIndex].name;
    });
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
setBackgroundOfIndexPage();
slidingAllImagesOfGamesArray();
handleClickOfReadMore();