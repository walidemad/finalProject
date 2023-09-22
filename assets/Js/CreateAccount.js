import { UsersArray } from "./Main.js"
/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOMCreateAccount = {
    boxForm: document.getElementsByClassName("box-form")[0],
    inputUserName: document.querySelector(".box-form >form>.box>.user-name"),
    inputPassword: document.querySelector(".box-form >form>.box>.password"),
    inputSubmit: document.querySelector(".box-form >form>.box-submit>input[type='submit']"),
    divUserUsed: document.querySelector(".user-used"),
}





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
window.onload = function () {
    DOMCreateAccount.inputUserName.value = "User Name";
    DOMCreateAccount.inputPassword.value = "Password";
}
function addUser() {
    let testUser = checkUserBeforeInsert(DOMCreateAccount.inputUserName.value, DOMCreateAccount.inputPassword.value);
    if (testUser === true) {
        UsersArray.push(
            {
                username: DOMCreateAccount.inputUserName.value,
                password: DOMCreateAccount.inputPassword.value,
            }
        )
        window.localStorage.setItem("users", JSON.stringify(UsersArray));
    }
    else {

    }
}
function checkUserBeforeInsert(username, password) {
    let message = [];
    UsersArray.forEach(function (v) {
        if (UsersArray.length > 0) {
            if (v.username == username || v.password == password) {
                message.push("User Name or Password Used By Another User");
            }
        }
    });
    if (username == "") {
        message.push("User Name is Empty");
    }
    if (password == "") {
        message.push("Password is Empty");
    }
    if (password.length < 8) {
        message.push("Please Type a Password Of At Least Eight Characters");
    }
    if (message.length == 0) {
        return true;
    } else {
        for (let i = 0; i < message.length; ++i) {
            if (message[i].toLowerCase().includes("used")) {
                DOMCreateAccount.divUserUsed.style.display = "block";
                DOMCreateAccount.divUserUsed.innerText = message[i];
                DOMCreateAccount.inputUserName.style.backgroundColor = "red";
                DOMCreateAccount.inputUserName.style.color = "white";
                DOMCreateAccount.inputPassword.style.backgroundColor = "red";
                DOMCreateAccount.inputPassword.style.color = "white";
                break;
            }
            if (message[i].toLowerCase().split(" ").join("") == "usernameisempty") {

                DOMCreateAccount.inputUserName.value = message[i];
                DOMCreateAccount.inputUserName.style.backgroundColor = "red";
                DOMCreateAccount.inputUserName.style.color = "white";

            }
            if (message[i].toLowerCase().split(" ").join("") == "passwordisempty") {

                DOMCreateAccount.inputPassword.value = message[i];
                DOMCreateAccount.inputPassword.style.backgroundColor = "red";
                DOMCreateAccount.inputPassword.style.color = "white";
                break;
            }
            if (message[i].toLowerCase().split(" ").join("").includes("least")) {
                DOMCreateAccount.inputPassword.style.fontSize = "14px";
                DOMCreateAccount.inputPassword.value = message[i];
                DOMCreateAccount.inputPassword.style.backgroundColor = "red";
                DOMCreateAccount.inputPassword.style.color = "white";

            }
        }
        return message;
    }
}
function cleanInputs() {
    DOMCreateAccount.inputUserName.value = "";
    DOMCreateAccount.inputPassword.value = "";
}
function setInputbackgroundColor(color) {
    let items = [DOMCreateAccount.inputUserName, DOMCreateAccount.inputPassword];
    items.forEach(function (v) {
        v.addEventListener("click", function () {

            v.style.backgroundColor = color;
            DOMCreateAccount.divUserUsed.style.display = "none";
        });
    })
}





/////////////////////////////////////////////////////////////////////////
//handle events
/////////////////////////////////////////////////////////////////////////
DOMCreateAccount.inputSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    addUser();
});





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
setInputbackgroundColor("rgb(50,50,100)");