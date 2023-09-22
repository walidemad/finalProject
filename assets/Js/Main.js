import { initialGames } from "./InitialGames.js";





/////////////////////////////////////////////////////////////////////////
//define public variables
/////////////////////////////////////////////////////////////////////////
//const : application name
export const APPLICATIONNAME = "finalProject";
//array : all games in project
export let GamesArray = [];
//
export let ShoppingCartArray = (JSON.parse(window.localStorage.getItem("cart"))) || [];
//array : all main images
export let MainImages = [];
//array : all names of games
export let GamesNames = [];
//array : elements of path
let path = Array.from(window.location.pathname.split("/"));
//string : page name (name+extension)
export let page_name = path[path.length - 1];
//
export let UsersArray = JSON.parse(localStorage.getItem("users")) || [];
export let game_id = parseInt(window.location.search.substr(1).split("=")[1]);





/////////////////////////////////////////////////////////////////////////
//define classes
/////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////
//get element from html pages
/////////////////////////////////////////////////////////////////////////
//popular.html
export let elm_popular = document.querySelector(".popular");
export let elms_popular_images = undefined;
//new.html
export let elm_new = document.querySelector(".new");
export let elms_new_images = undefined;
export let elms_navbar = document.querySelectorAll(".navbar > .links > li>a");





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function globalActions() {
    GamesArray.forEach(function (v, i) {
        let item = { image: v.main_image, id: v.id }
        MainImages.push(item);
        GamesNames.push(v.name);
    });
}
//change text of div:center and text of its button
let elm_toggle_pages = document.querySelector(".toggle-popular-new");
let elm_toggle_pages_title_page_name = document.querySelector(".toggle-popular-new > .title span.name");
let elm_toggle_pages_button = document.querySelector(".toggle-popular-new > a.button");
export function changeContentsOfCenter() {
    if (page_name.toLowerCase() == "popular.html") {
        elm_toggle_pages_title_page_name.textContent = "New";
        elm_toggle_pages_button.textContent = "New";
        elm_toggle_pages_button.href = "./New.html";
    } else
        if (page_name.toLowerCase() == "new.html") {
            elm_toggle_pages_title_page_name.textContent = "Popular";
            elm_toggle_pages_button.textContent = "MOST POPULARS";
            elm_toggle_pages_button.href = "./Popular.html";
        }
}
export function handleClickOfPopularAndNewImages() {
    elms_popular_images = document.querySelectorAll(".popular > .popular-box-image>img ");
    elms_new_images = document.querySelectorAll(".new > .new-box-image>img ");
    let ar = [elms_popular_images, elms_new_images];
    ar.forEach(function (elm) {
        if (elm) {
            Array.from(elm).forEach(function (image) {
                image.addEventListener("click", function (e) {
                    console.log(e.target);
                    window.location.href = `./../Games/GameInformation.html?id=${e.target.id}`;
                });
            });
        }
    });
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
globalActions();
initialGames();