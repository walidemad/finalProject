import { APPLICATIONNAME, GamesArray, Game } from "./Main.js";

let elms_options_item = document.querySelectorAll(".options > div");
let elms_content_sections = document.querySelectorAll(".content > div");
let elms_user_options = document.querySelectorAll(".content .users > div");
let elms_game_options = document.querySelectorAll(".content .games > div");
let elm_container_all_games = document.querySelector(".content > .container-games");
Array.from(elms_options_item).forEach(function (voption, i) {
    voption.addEventListener("click", function (e) {
        Array.from(elms_content_sections).forEach(function (vsection, i) {
            if (voption.className == vsection.className) {
                vsection.style.display = "flex";
            } else {

                vsection.style.display = "none";
            }
        });
    });

});
if (elms_user_options) {
    Array.from(elms_user_options).forEach(function (v, i) {
        v.addEventListener("click", function () {
            switch (v.className) {
                case "add":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/AddUser.html`;
                    break;
                case "delete":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/DeleteUser.html`;
                    break;
                case "search":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/SearchUser.html`;
                    break
                case "all":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/AllUsers.html`;
                    break;

            }
        });

    });
}
if (elms_game_options) {
    Array.from(elms_game_options).forEach(function (v, i) {
        v.addEventListener("click", function () {
            switch (v.className) {
                case "add":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/AddGame.html`;
                    break;
                case "delete":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/DeleteGame.html`;
                    break;
                case "search":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/SearchGame.html`;
                    break
                case "all":
                    window.location = window.origin + `/${APPLICATIONNAME}/Admin/AllGames.html`;
                    break;

            }
        });

    });
}
function getAllGames() {
    GamesArray.forEach(function (v, i) {
        let row = document.createElement("div");
        let id = document.createElement("div");
        let name = document.createElement("div");
        let price = document.createElement("div");
        let version = document.createElement("div");
        let date = document.createElement("div");
        id.textContent = "0";
        name.textContent = v.name;
        price.textContent = v.price;
        version.textContent = v.version;
        date.textContent = v.release_date;
        id.className = "id";
        name.className = "name";
        price.className = "price";
        version.className = "version";
        date.className = "date";
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(price);
        row.appendChild(version);
        row.appendChild(date);
        row.classList.add("row");
        if (elm_container_all_games) {

            elm_container_all_games.appendChild(row);
        }
    })
}
let elm_submit = document.querySelector(".content>.submit");
let elm_inputs = document.querySelector(".container-addgame >.inputs");
let input_name = document.querySelector(".container-addgame>.inputs>.name");
let input_version = document.querySelector(".container-addgame>.inputs>.version");
let input_date = document.querySelector(".container-addgame>.inputs>.date");
let input_requirements = document.querySelector(".container-addgame>.inputs>.requirements");
let input_description = document.querySelector(".container-addgame>.inputs>.description");
let input_platform = document.querySelector(".container-addgame>.inputs>.platform");
let input_price = document.querySelector(".container-addgame>.inputs>.price");


function addGame() {

    function test() {
        if (input_name.value != "" &&
            input_version.value != "" &&
            input_date.value != "" &&
            //input_requirements.value != "" &&
            input_description.value != "" &&
            input_platform.value != "" &&
            input_price.value != "") {

            return true;
        } else {
            return false;
        }
    }
    if (elm_inputs) {
        elm_inputs.addEventListener("keypress", add, false);
    }
    function add(e) {
        if (e.target !== e.currentTarget) {
            if (test() == true) {
                elm_submit.style.display = "block";
            } else if (test() == false) {
                elm_submit.style.display = "none";

            }
        }
    }

    // console.log(input_name.className);

}
if (elm_submit) {
    elm_submit.addEventListener("click", function () {
        let game = new Game();
        game.name = input_name.value;
        game.version = input_version.value;
        game.description = input_description.value;
        game.release_date = input_date.value;
        game.price = input_price.value;
        game.platform = input_platform.value;
        GamesArray.push(game);
    });
} else {
    console.log("submit =null");
}
addGame();
getAllGames();