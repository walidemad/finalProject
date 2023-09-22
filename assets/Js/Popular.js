import { GamesArray, APPLICATIONNAME, MainImages, GamesNames, elm_popular, elms_navbar, handleClickOfPopularAndNewImages, changeContentsOfCenter } from "./Main.js";





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function fillPopularSection() {
    GamesArray.forEach(function (v) {
        if (v.is_popular == true) {
            let box = document.createElement("div");
            let image = document.createElement("img");
            let div_info = document.createElement("div");
            let div_price = document.createElement("div");
            let div_name = document.createElement("div");
            box.className = "popular-box-image";
            image.src = `./../Assets/Images/Games/${v.name.split(" ").join("").toUpperCase()}/${v.main_image}`;
            image.className = "popular-image";
            image.id = v.id;
            div_info.className = "popular-box-info";

            div_name.textContent = v.name;
            div_price.textContent = v.price;
            if (elm_popular) {
                div_info.appendChild(div_name);
                div_info.appendChild(div_price);
                box.appendChild(image);
                box.appendChild(div_info);
                elm_popular.appendChild(box);
            }
        }
    });

}




/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
fillPopularSection();
changeContentsOfCenter();
handleClickOfPopularAndNewImages();