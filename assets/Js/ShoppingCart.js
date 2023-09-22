import { GamesArray, game_id, ShoppingCartArray } from "./Main.js";





/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOM = {
    divMain: document.querySelector(".main"),
    divContent: document.querySelector(".main > .content"),
    divBoxGames: document.querySelector(".content >.box-games"),
    divBoxGame: "",
    divsRemoveGame: "",
}





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function loadingImagesFromShoppingCart() {
    let g = (JSON.parse(window.localStorage.getItem("cart")));
    ShoppingCartArray.forEach(function (v) {
        if (v !== undefined) {
            let short_name = v.name.split(" ").join("").toUpperCase();
            let box_game = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("div");
            let price = document.createElement("div");
            let remove = document.createElement("button");
            box_game.className = "box-game";
            box_game.id = v.id;
            image.src = v.image;
            image.id = v.id;
            image.className = "";
            name.className = "name";
            price.className = "price";
            remove.className = "remove";
            name.innerText = v.name;
            price.innerText = v.price;
            remove.innerText = "Remove";
            if (DOM.divContent) {
                box_game.appendChild(image);
                box_game.appendChild(name);
                box_game.appendChild(price);
                box_game.appendChild(remove)
                DOM.divBoxGames.appendChild(box_game);
                DOM.divsRemoveGame = document.getElementsByClassName("remove");
            }
        }
    });
}
function removeGame() {
    if (DOM.divsRemoveGame) {
        Array.from(DOM.divsRemoveGame).forEach(function (v) {
            v.addEventListener("click", function (e) {
                let id = e.target.parentElement.id;
                removeGameFromShoppingCart(id);
                e.target.parentElement.remove();

            });
        })
    }
}
function removeGameFromShoppingCart(id) {
    for (let i = 0; i < ShoppingCartArray.length; ++i) {
        if (ShoppingCartArray[i].id == id) {
            ShoppingCartArray[i] = "";
        }
    }
    let newShoppingCartArray = ShoppingCartArray.filter(function (v) {
        if (v.id !== "") {
            return v;
        }
    });
    window.localStorage.setItem("cart", JSON.stringify(newShoppingCartArray));
    console.log("ShoppingCartArray=", ShoppingCartArray);
    console.log("local=", window.localStorage.getItem("cart"));
}







/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
// addGameToShoppingCartArray();
loadingImagesFromShoppingCart();
removeGame();