import { GamesArray } from "./Main.js";
let elm_slider_images = document.querySelector(".slider > .images");
let game_index = parseInt(window.location.search.substr(1).split("=")[1]);
GamesArray.forEach(function (v, i) {
    // console.log(game_index)
    if (v.id == game_index) {
        console.log(v.id)
        for (let i = 0; i < v.images_from_game.length; ++i) {
            let image = document.createElement("img");
            image.src = `/${APPLICATIONNAME}/Assets/Images/Games/${v.name.toUpperCase().split(" ").join("")}/v[i].jpg`;
            elm_slider_images.appendChild(image);
        }
    }

})