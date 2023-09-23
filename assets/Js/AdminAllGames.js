import { GamesArray, } from "./Main.js";
import { DOMAdmin } from "./Admin.js";
export function getAllGames() {
    GamesArray.forEach(function (v, i) {
        let row = document.createElement("div");
        let id = document.createElement("div");
        let name = document.createElement("div");
        let price = document.createElement("div");
        let version = document.createElement("div");
        let date = document.createElement("div");
        id.innerText = v.id;
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
// let originalNames = [];
function cuttingNamesTo2Wrods() {
    let names = document.querySelectorAll(".row >.name");
    Array.from(names).map((v) => {
        let newName = v.innerText.substring(0, 8);
        v["originName"] = v.innerText;
        // console.log(v["originName"])
        v.innerText = newName + " ...";
    })
}
let temp = undefined;
function handleMouseOverOfName() {
    let row = document.querySelector(".row");
    let names = document.querySelectorAll(".row >.name");
    Array.from(names).forEach(function (v, i) {
        v.addEventListener("mouseenter", function (e) {
            let divFullName = document.createElement("div");
            divFullName.innerText = v["originName"];
            divFullName.style.position = "absolute";
            divFullName.style.top = e.clientY + "px";
            console.log(e.clientY);

            divFullName.style.width = "300px";
            divFullName.style.height = "40px";
            divFullName.style.lineHeight = "40px";
            divFullName.style.backgroundColor = "white";
            divFullName.style.borderRadius = "10px";
            divFullName.style.textAlign = "center";

            divFullName.style.opacity = "100%";
            document.body.appendChild(divFullName);
            temp = divFullName;
        })
    })
}
function handleMouseLeaveOfName() {
    let row = document.querySelector(".row");
    let names = document.querySelectorAll(".row >.name");
    Array.from(names).forEach(function (v, i) {
        v.addEventListener("mouseleave", function (e) {
            if (temp)
                // console.log(temp);

                temp.remove();
        })
    })
}
getAllGames();
cuttingNamesTo2Wrods();
handleMouseOverOfName();
handleMouseLeaveOfName()