import { GamesArray, APPLICATIONNAME } from "./Main.js";
// define variables
let elm_slider = document.querySelector(".slider");
let elm_left_arrow = document.querySelector(".slider > .arrow > img.left");
let elm_right_arrow = document.querySelector(".slider > .arrow > img.right");
let elm_game_name = document.querySelector(".slider > .name");
let elm_read_more = document.querySelector(".slider .read-more");

//
document.body.style.backgroundImage = `url(./../Assets/Images/Games/${GamesArray[0].name.split(" ").join("").toUpperCase()}/Main.jpg`;
let current_index = 0;
elm_left_arrow.addEventListener("click", function () {
    if (current_index == -1) {
        current_index = GamesArray.length - 1;
    }
    if (current_index == undefined || current_index < 0) {
        current_index = 0;
    }
    document.body.style.backgroundImage = `url(./../Assets/Images/Games/${GamesArray[current_index].name.split(" ").join("").toUpperCase()}/Main.jpg`;
    elm_game_name.textContent = GamesArray[current_index].name;
    current_index -= 1;
});
elm_right_arrow.addEventListener("click", function () {
    current_index += 1;
    if (current_index == GamesArray.length) {
        current_index = 0;
    }
    if (current_index == undefined) {
        current_index = 0;
    }
    document.body.style.backgroundImage = `url(./../Assets/Images/Games/${GamesArray[current_index].name.split(" ").join("").toUpperCase()}/Main.jpg`;
    elm_game_name.textContent = GamesArray[current_index].name;
});
elm_read_more.addEventListener("mouseenter", function (e) {
    // e.target.style.animationName = "read-more-animation1";
});
elm_read_more.addEventListener("mouseleave", function (e) {
    e.target.style.animationName = "";
});










// function HandleMouseleaveArrow(arrow) {
//     if (arrow == "left") {
//         // elm_left_arrow.src = "./assets/Images/Icons/LeftArrow.png";
//     } else if (arrow == "right") {
//         // elm_right_arrow.src = "./assets/Images/Icons/RightArrow.png";
//     }
// }
// function HandleMouseoverArrow(arrow) {
//     if (arrow == "left") {
//         // elm_left_arrow.src = "./assets/Images/Icons/LeftArrowOver.png";
//     } else if (arrow == "right") {
//         // elm_right_arrow.src = "./assets/Images/Icons/RightArrowOver.png";
//     }
// }
// elm_left_arrow.addEventListener("mouseover", function () { HandleMouseoverArrow("left") });
// elm_left_arrow.addEventListener("mouseleave", function () { HandleMouseleaveArrow("left") });

// elm_right_arrow.addEventListener("mouseover", function () { HandleMouseoverArrow("right") });
// elm_right_arrow.addEventListener("mouseleave", function () { HandleMouseleaveArrow("right") });
// document.body.style.backgroundImage = `url(${images_of_slider[0].image}`;
// elm_game_name.textContent = images_of_slider[0].name;




















// let images_of_slider = [
//     {
//         name: "game1",
//         image: "./Assets/Images/Games/g1.avif"
//     },
//     {
//         name: "game2",
//         image: "./Assets/Images/Games/g2.jpg"
//     },
//     {
//         name: "game3",
//         image: "./Assets/Images/Games/g3.jpg"
//     }
// ];