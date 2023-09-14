import { GamesArray, elm_game_play, elm_game_play_video, game_id, elm_slider_images } from "./Main.js";

/////////////////////////////////////////////////////////////////////////
//define public variables
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//get element from html pages
let elms_slider_images;
/////////////////////////////////////////////////////////////////////////

let elms_buttons = document.querySelectorAll(".slider-for-game>.buttons>.button");
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
    elm_game_play_video.appendChild(source);
}
function addGAmesToSlider() {
    GamesArray.forEach(function (v, i) {
        if (v.id == game_id) {
            let short_name = v.name.toUpperCase().split(" ").join("");
            for (let i = 0; i < 5; ++i) {
                let image = document.createElement("img");
                image.src = `./../Assets/Images/Games/${short_name}/${short_name} (${i + 1}).jpg`;
                elm_slider_images.appendChild(image);
            }
        }
    });
}
let last = 0;
let test = 0;
function slidingImages() {
    let ar_images = Array.from(elms_slider_images);
    let ar_buttons = Array.from(elms_buttons);
    ar_buttons.forEach(function (v, i) {
        v.addEventListener("click", function (e) {
            if (test == i) {

            } else {
                ar_images[i].style.animationName = "an1";
                if (last !== -1) {

                    ar_images[last].style.animationName = "an2";
                }
            }

            last = i;
            test = last;


            ar_images.forEach(function (elm, index) {
                // if (index !== i) {
                if (ar_images[index].style.transform == "scale(1)") {
                    // console.log(ar_images[index])
                    // ar_images[index].style.animationName = "an2";
                    // ar_images[index].style.visibility = "hidden";
                }
            });
            // f();
        });
    });
    // function f() {
    // ar_images.forEach(function (v) {
    //     if (v.style.visibility == "visible") {

    //     } else {
    //         v.style.visibility = "hidden";
    //     }
    // });
    // }
}

/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
// setBodyBackgroundColor();
addGAmesToSlider();
let e = document.querySelector(".slider-for-game>.images");
let b = document.querySelector(".slider-for-game>.buttons");


elms_slider_images = document.querySelectorAll(".slider-for-game>.images>img");
slidingImages();
addGamePlay();