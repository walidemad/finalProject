import { GamesArray, APPLICATIONNAME, MainImages, GamesNames } from "./Main.js";
let elm_popular = document.querySelector(".popular");
GamesArray.forEach(function (v) {
    let image = document.createElement("img");
    // image.src = `/${APPLICATIONNAME}/Assets/Images/Games/${v.name.split(" ").join("").toUpperCase()}/${v.main_image}`;
    image.src = `./../Assets/Images/Games/${v.name.split(" ").join("").toUpperCase()}/${v.main_image}`;
    image.className = "popular-image";
    elm_popular.appendChild(image);
})









// let elm_slider = document.querySelector(".slider-of-popular");
// let elm_slider_image = document.querySelectorAll(".slider-of-popular > img");
// for (let i = 0; i < MainImages.length; ++i) {
//     let img = document.createElement("img");
//     // img.src = `/${APPLICATIONNAME}/Assets/Images/Games/GODOFWAR/` + GamesArray[i].main_image;
//     img.src = `/${APPLICATIONNAME}/Assets/Images/Games/${GamesNames[i].toUpperCase().split(" ").join("")}/` + MainImages[i].image;
//     img.classList.add("slider-image");
//     img.id = `${MainImages[i].id}`;
//     elm_slider.appendChild(img);
// }
// let c = -240;
// setInterval(function () {
//     // if (Math.abs(c) > elm_slider.children.length * 240) c = 0;
//     // elm_slider.style.left = `${c}px`;
//     // c -= 240;
// }, 2000);
// Array.from(elm_slider.children).forEach(function (v, i) {
//     console.log("hellow");
//     v.addEventListener("click", function () {
//         window.location = window.location.origin + `/${APPLICATIONNAME}/Games/GameInformation.html?id=${v.id}`;
//     })
// });
// for (let i = 0; i < elm_slider.children.length; ++i) {
//     // elm_slider_image[i].addEventListener("click", function () {
//     console.log("hellow")
//     // })
// }