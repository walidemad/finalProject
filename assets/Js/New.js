import { GamesArray, APPLICATIONNAME, MainImages, GamesNames, elm_new } from "./Main.js";

//
function fillNewSection() {

    GamesArray.forEach(function (v) {
        if (v.is_new == true) {
            // console.log(v);
            let box = document.createElement("div");
            let image = document.createElement("img");
            let div_info = document.createElement("div");
            let div_price = document.createElement("div");
            let div_name = document.createElement("div");
            box.className = "new-box-image";
            image.src = `./../Assets/Images/Games/${v.name.split(" ").join("").toUpperCase()}/${v.main_image}`;
            image.className = "new-image";
            image.id = v.id;
            div_info.className = "new-box-info";

            div_name.textContent = v.name;
            div_price.textContent = v.price;
            if (elm_new) {
                div_info.appendChild(div_name);
                div_info.appendChild(div_price);
                box.appendChild(image);
                box.appendChild(div_info);
                elm_new.appendChild(box);
            }
        }
    })
}

//
function handleClickOfSearchInput() {
    elms_new_images.forEach(function (v) {
        v.addEventListener("click", function (e) {
            window.location.href = `./../Games/GameInformation.html?id=${e.target.id}`;
        })
    });
}
fillNewSection();
let elms_new_images = document.querySelectorAll(".new > .new-box-image>img ");
handleClickOfSearchInput();
