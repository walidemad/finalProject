import { GamesArray, game_id } from "./Main.js"





/////////////////////////////////////////////////////////////////////////
//define public variables
/////////////////////////////////////////////////////////////////////////
let searchValue = window.location.search.substring(1).split("=")[1];





/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOMSearch = {
    divMainContent: document.querySelector(".main > .content"),
    divSearchBoxItems: document.querySelector(".main > .content > .search-box-items"),
    imagesSearchBoxItemsImg: "",
}





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function showResult() {

    GamesArray.forEach(function (v) {
        let shortName = v.name.split(" ").join("").toUpperCase();
        if (v.name.toLowerCase().includes(searchValue)) {
            let box = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("div");
            let price = document.createElement("div");
            box.className = "search-box-item";
            image.src = `./../Assets/Images/Games/${shortName}/${v.main_image}`;
            image.id = v.id;
            image.className = "";
            name.className = "name";
            price.className = "price";
            image.id = v.id;
            name.textContent = v.name;
            price.textContent = v.price;
            if (DOMSearch.divMainContent) {
                box.appendChild(image);
                box.appendChild(name);
                box.appendChild(price);
                DOMSearch.divSearchBoxItems.appendChild(box);
            }
        }
    });
    DOMSearch.imagesSearchBoxItemsImg = document.querySelectorAll(".search-box-item > img ");
}
function handleClickOfResultItems() {
    Array.from(DOMSearch.imagesSearchBoxItemsImg).forEach(function (item) {
        if (item) {
            item.addEventListener("click", function (e) {
                window.location.href = `./../Games/GameInformation.html?id=${e.target.id}`;
            })
        }
    });
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
showResult();
handleClickOfResultItems();