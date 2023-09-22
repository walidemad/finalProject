import { GamesArray, APPLICATIONNAME, MainImages, GamesNames, elm_new, handleClickOfPopularAndNewImages } from "./Main.js";





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
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





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
fillNewSection();
handleClickOfPopularAndNewImages();