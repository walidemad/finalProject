import { APPLICATIONNAME, GamesArray } from "./Main.js";
import { Game } from "./ClassGame.js";





/////////////////////////////////////////////////////////////////////////
//get elements fro html
/////////////////////////////////////////////////////////////////////////
let DOMAdmin = {
    divOptions:
        document.querySelector(".options"),
    divsOptions:
        document.querySelectorAll(".options > div"),
    divContent:
        document.querySelectorAll(".content"),
    divsContent:
        document.querySelectorAll(".content > div"),
    divUsers:
        document.querySelector(".content .users"),
    divsUsers:
        document.querySelectorAll(".content .users > div"),
    divGames:
        document.querySelector(".content .games"),
    divsGames:
        document.querySelectorAll(".content .games > div"),
    divContainerGames:
        document.querySelector(".content > .container-games"),
    inputSubmitAddGame:
        document.querySelector(".content>.container-addgame>.submit"),
    divContainerAddGameInputs:
        document.querySelector(".container-addgame >.inputs"),
    inputNameContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.name"),
    inputVersionContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.version"),
    inputDateContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.date"),
    divRequirementsContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.requirements"),
    inputDescriptionContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.description"),
    inputPlatformContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.platform"),
    inputPriceContainerAddGame:
        document.querySelector(".container-addgame>.inputs>.price"),

}





/////////////////////////////////////////////////////////////////////////
//get elements fro html
/////////////////////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function getAllGames() {
    GamesArray.forEach(function (v, i) {
        let row = document.createElement("div");
        let id = document.createElement("div");
        let name = document.createElement("div");
        let price = document.createElement("div");
        let version = document.createElement("div");
        let date = document.createElement("div");
        id.innerText = "0";
        name.innerText = v.name;
        price.innerText = v.price;
        version.innerText = v.version;
        date.innerText = v.release_date;
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
        if (DOMAdmin.divContainerGames) {

            DOMAdmin.divContainerGames.appendChild(row);
        }
    })
}
function handleClickOfEveryMainOption() {
    Array.from(DOMAdmin.divsOptions).forEach(function (voption, i) {
        voption.addEventListener("click", function (e) {
            Array.from(DOMAdmin.divsContent).forEach(function (vsection, i) {
                if (voption.className == vsection.className) {
                    vsection.style.display = "flex";
                } else {

                    vsection.style.display = "none";
                }
            });
        });

    });
}
function handleClickOfUsersOptions() {
    if (DOMAdmin.divsUser) {
        Array.from(DOMAdmin.divsUser).forEach(function (v, i) {
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
}
function handleClickOfGamesOptions() {
    if (DOMAdmin.divsGames) {
        Array.from(DOMAdmin.divsGames).forEach(function (v, i) {
            v.addEventListener("click", function () {
                switch (v.className) {
                    case "add":
                        window.location = window.origin + `/Admin/AddGame.html`;
                        break;
                    case "delete":
                        window.location = window.origin + `/Admin/DeleteGame.html`;
                        break;
                    case "search":
                        window.location = window.origin + `/Admin/SearchGame.html`;
                        break
                    case "all":
                        window.location = window.origin + `/Admin/AllGames.html`;
                        break;

                }
            });

        });
    }
}
function handleKeyPressOfAddGameInputs() {

    function test() {
        if (DOMAdmin.inputNameContainerAddGame.value != "" &&
            DOMAdmin.inputVersionContainerAddGame.value != "" &&
            DOMAdmin.inputDateContainerAddGame.value != "" &&
            //input_requirements.value != "" &&
            DOMAdmin.inputDescriptionContainerAddGame.value != "" &&
            DOMAdmin.inputPlatformContainerAddGame.value != "" &&
            DOMAdmin.inputPriceContainerAddGame.value != "") {

            return true;
        } else {
            return false;
        }
    }
    if (DOMAdmin.divContainerAddGameInputs) {
        DOMAdmin.divContainerAddGameInputs.addEventListener("keypress", add, false);
    }
    function add(e) {
        if (e.target !== e.currentTarget) {
            if (test() == true) {
                DOMAdmin.inputSubmitAddGame.style.display = "block";
            } else if (test() == false) {
                DOMAdmin.inputSubmitAddGame.style.display = "none";

            }
        }
    }
}
function addGame() {
    if (DOMAdmin.inputSubmitAddGame) {
        DOMAdmin.inputSubmitAddGame.addEventListener("click", function () {
            let game = new Game();
            game.name =
                DOMAdmin.inputNameContainerAddGame.value;
            game.version =
                DOMAdmin.inputVersionContainerAddGame.value;
            game.description =
                DOMAdmin.inputDescriptionContainerAddGame.value;
            game.release_date =
                DOMAdmin.inputDateContainerAddGame.value;
            game.price =
                DOMAdmin.inputPriceContainerAddGame.value;
            game.platform =
                DOMAdmin.inputPlatformContainerAddGame.value;
            GamesArray.push(game);
        });
    } else {
    }
}






/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
addGame();
getAllGames();
handleClickOfEveryMainOption();
handleClickOfUsersOptions();
handleClickOfGamesOptions();
handleKeyPressOfAddGameInputs();