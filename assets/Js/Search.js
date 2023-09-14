import { GamesArray, game_id } from "./Main.js"

//get elements from html
let elm_content = document.querySelector(".main > .content");
let elm_box_items = document.querySelector(".main > .content > .search-box-items");
let items;
//
// console.log(search_value);
function showResult() {

    let search_value = window.location.search.substring(1).split("=")[1];
    GamesArray.forEach(function (v) {
        let short_name = v.name.split(" ").join("").toUpperCase();
        if (v.name.toLowerCase().includes(search_value)) {
            let box = document.createElement("div");
            let image = document.createElement("img");
            let name = document.createElement("div");
            let price = document.createElement("div");
            box.className = "search-box-item";
            image.src = `./../Assets/Images/Games/${short_name}/${v.main_image}`;
            image.id = v.id;
            image.className = "";
            name.className = "name";
            price.className = "price";
            image.id = v.id;
            name.textContent = v.name;
            price.textContent = v.price;
            if (elm_content) {
                box.appendChild(image);
                box.appendChild(name);
                box.appendChild(price);
                elm_box_items.appendChild(box);
                elm_content.appendChild(elm_box_items);
            }
        }
    });
}

//
function handleClickOfResultItems() {
    items = document.querySelectorAll(".search-box-item > img ");
    // items = document.querySelectorAll(".new > .new-box-image>img ");
    Array.from(items).forEach(function (item) {
        if (item) {
            item.addEventListener("click", function (e) {
                window.location.href = `./../Games/GameInformation.html?id=${e.target.id}`;
            })
        }
    });
}

//calling functions
showResult();
handleClickOfResultItems();