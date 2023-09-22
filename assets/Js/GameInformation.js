import { GamesArray, game_id, ShoppingCartArray } from "./Main.js";
/////////////////////////////////////////////////////////////////////////
//define public variables
/////////////////////////////////////////////////////////////////////////
let currentId = window.location.search.substring(1).split("=")[1];
let arr = JSON.parse(localStorage.getItem("cart")) || [];
let last = 0;





/////////////////////////////////////////////////////////////////////////
//get element from html pages
/////////////////////////////////////////////////////////////////////////
let DOMGameInformation = {
    divSliderForGame: document.querySelector(".slider-for-game"),
    divSliderForGameImages: document.querySelector(".slider-for-game > .images"),
    Images: "",

    buttonOptionsButtonAdd: document.querySelector(".cart >.options> .button-add"),
    ButtonsSliderForGameButtons: document.querySelectorAll(".slider-for-game>.buttons>.button"),
    divGamePlay: document.querySelector(".game-play"),
    videoGamePlay: document.querySelector(".game-play>video"),
}


/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function setBodyBackgroundColor() {
    let short_name;
    let game = (GamesArray.filter(function (v) {
        if (v.id == game_id) {
            return v;
        }
        short_name = v.name.toUpperCase().split(" ").join("");
    }))[0];
    document.body.style.backgroundImage = `url(./../Assets/Images/Games/${short_name}/Main.jpg)`;
}
function addGamePlay() {
    let source = document.createElement("source");
    let game = (GamesArray.filter(function (v) {
        if (v.id == game_id) {
            return v;
        }
    }))[0];
    source.src = `./../Assets/Images/Games/${game.name.toUpperCase().split(" ").join("")}/GamePlay.mp4`;
    source.type = "video/mp4";
    source.autoplay = "autoplay";
    DOMGameInformation.videoGamePlay.appendChild(source);
}
function addGamesToSlider() {
    GamesArray.forEach(function (v, i) {
        if (v.id == game_id) {
            let shortName = v.name.toUpperCase().split(" ").join("");
            for (let i = 0; i < 5; ++i) {
                let image = document.createElement("img");
                image.src = `./../Assets/Images/Games/${shortName}/${shortName} (${i + 1}).jpg`;
                DOMGameInformation.divSliderForGameImages.appendChild(image);
            }
        }
    });
    DOMGameInformation.Images = document.querySelectorAll(".slider-for-game>.images>img");
}
function slidingImages() {
    let arrayImages = Array.from(DOMGameInformation.Images);
    let arrayButtons = Array.from(DOMGameInformation.ButtonsSliderForGameButtons);
    arrayButtons.forEach(function (v, i) {
        v.addEventListener("click", function (e) {
            arrayImages[i].style.animationName = "an1";
            if (last !== -1) {
                arrayImages[last].style.animationName = "an2";
            }
            last = i;
        })
    });
}
function handleClickAddGameToCart() {
    // const fs = require("fs");
    DOMGameInformation.buttonOptionsButtonAdd.addEventListener("click", function (e) {
        addGameToShoppingCartArray();
        e.target.textContent = "This Game Is Added";
        // window.location.href = "./../ShoppingCart.html";
    });
}
function addGameToShoppingCartArray() {
    let game = (GamesArray.filter(function (v, index) {
        if (currentId == v.id) {
            return v;
        }
    }))[0];
    let obj = {
        id: game_id,
        name: game.name,
        price: game.price,
        image: "./Assets/Images/Games/" + game.name.split(" ").join("").toUpperCase() + "/" + game.main_image,
    }
    ShoppingCartArray.push({
        id: game.id,
        name: game.name,
        price: game.price,
        image: "./Assets/Images/Games/" + game.name.split(" ").join("").toUpperCase() + "/" + game.main_image,
    });
    arr.push({
        id: game.id,
        name: game.name,
        price: game.price,
        image: "./Assets/Images/Games/" + game.name.split(" ").join("").toUpperCase() + "/" + game.main_image,
    });
    console.log("ShoppingCartArray =", ShoppingCartArray)
    window.localStorage.setItem("cart", JSON.stringify(arr));
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
addGamesToSlider();
slidingImages();
addGamePlay();
handleClickAddGameToCart();