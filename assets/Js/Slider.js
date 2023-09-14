import { GamesArray, APPLICATIONNAME } from "./Main.js";
/////////////////////////////////////////////////////////////////////////
// define variables
let current_game_id = 0;
/////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let elm_slider = document.querySelector(".slider");
let elm_left_arrow = document.querySelector(".slider > .arrow > img.left");
let elm_right_arrow = document.querySelector(".slider > .arrow > img.right");
let elm_game_name = document.querySelector(".slider > .name");
let elm_read_more = document.querySelector(".slider .read-more");

/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
//
function setBackgroundOfIndexPage() {
    document.body.style.backgroundImage = `url(./../Assets/Images/Games/${GamesArray[0].name.split(" ").join("").toUpperCase()}/Main.jpg`;
}

//
function handleClickOfReadMore() {
    elm_read_more.addEventListener("click", function (e) {
        // e.target.style.transform = "scale(1.5)";
        window.location.href = `./Games/gameInformation.html?id=${current_game_id}`;
    });
    elm_read_more.addEventListener("mouseleave", function (e) {
        e.target.style.transform = "scale(1)";
    });
}
//
function slidingAllImagesOfGamesArray() {
    let elm_slider = document.querySelector(".slider");
    let elm_left_arrow = document.querySelector(".slider > .arrow > img.left");
    let elm_right_arrow = document.querySelector(".slider > .arrow > img.right");
    let elm_game_name = document.querySelector(".slider > .name");
    let current_index = 0;

    let short_name;
    elm_game_name.textContent = GamesArray[0].name;
    elm_left_arrow.addEventListener("click", function () {
        current_index -= 1;
        if (current_index == -1) {
            current_index = 0;
        }
        current_game_id = GamesArray[current_index].id;
        short_name = GamesArray[current_index].name.split(" ").join("").toUpperCase();
        document.body.style.backgroundImage = `url(./../Assets/Images/Games/${short_name}/Main.jpg`;
        elm_game_name.textContent = GamesArray[current_index].name;
    });


    elm_right_arrow.addEventListener("click", function () {
        current_index += 1;
        if (current_index == GamesArray.length) {
            current_index = GamesArray.length - 1;
        }
        current_game_id = GamesArray[current_index].id;
        short_name = GamesArray[current_index].name.split(" ").join("").toUpperCase();
        document.body.style.backgroundImage = `url(./../Assets/Images/Games/${short_name}/Main.jpg`;
        elm_game_name.textContent = GamesArray[current_index].name;
    });
}
//



/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
setBackgroundOfIndexPage();
slidingAllImagesOfGamesArray();
handleClickOfReadMore();