import { APPLICATIONNAME } from "./Main.js";





/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOMHeader = {
    divsearchBar: document.querySelector(".search-bar"),
    InputsearchBarInput: document.querySelector(".search-bar >input"),
}





/////////////////////////////////////////////////////////////////////////
//function
/////////////////////////////////////////////////////////////////////////
function handleClickOfSearchInput() {
    if (DOMHeader.divsearchBar) {
        DOMHeader.InputsearchBarInput.addEventListener("keypress", function (e) {
            if (DOMHeader.InputsearchBarInput.value.trim().length > 0) {
                if (e.keyCode == "13") {
                    window.location.href = `/Games/Search.html?value=${e.target.value.toString().trim()}`;
                }
            }
        });
    }
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
handleClickOfSearchInput();