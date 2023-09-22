import { UsersArray } from "./Main.js"





/////////////////////////////////////////////////////////////////////////
//get elements from html
/////////////////////////////////////////////////////////////////////////
let DOMLogIn = {
    boxForm: document.getElementsByClassName("box-form")[0],
    inputUserName: document.querySelector(".box-form >form>.box>.user-name"),
    inputPassword: document.querySelector(".box-form >form>.box>.password"),
    inputSubmit: document.querySelector(".box-form >form>.box-submit>input[type='submit']"),
    divLoginFailed: document.querySelector(".login-failed"),
}





/////////////////////////////////////////////////////////////////////////
//handle events
/////////////////////////////////////////////////////////////////////////
window.onload = function () {
    DOMLogIn.inputUserName.value = "User Name";
    DOMLogIn.inputPassword.value = "Password";
}
DOMLogIn.inputSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    logIn();
    console.log(UsersArray);
});





/////////////////////////////////////////////////////////////////////////
//functions
/////////////////////////////////////////////////////////////////////////
function logIn() {
    let testUser = checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value);
    let testInputs = checkInputs(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value);
    if (testInputs === true) {
        if (testUser === true) {
            window.location.href = "./../index.html";
        }
        else {
            DOMLogIn.divLoginFailed.style.display = "block";
            DOMLogIn.divLoginFailed.style.animationName = "show";
            DOMLogIn.divLoginFailed.innerText = "This Account is't Available";
        }
    } else {
        showWrongInputs(test_inputs);
    }
}
function checkUserBeforeLogIn(username, password) {
    let check = false;
    let counter = 0;
    if (UsersArray.length > 0) {
        let user = UsersArray.forEach(function (v) {
            if (v.username == username && v.password == password) {
                check = true;
                counter += 1;
            }
        });
    }
    if (check === true && counter == 1) {
        return check;
    } else {
        return false;
    }
}
function checkInputs(username, password) {
    let message = [];
    if (username == "") {
        message.push("User Name is Empty");
    }
    if (password == "") {
        message.push("Password is Empty");
    }
    if (message.length == 0) {
        return true;
    } else {
        return message;
    }
}
function showWrongInputs(message) {
    for (let i = 0; i < message.length; ++i) {
        if (message[i].toLowerCase().split(" ").join("") == "usernameisempty") {
            DOMLogIn.inputUserName.value = message[i];
            DOMLogIn.inputUserName.style.backgroundColor = "red";
            DOMLogIn.inputUserName.style.color = "white";
        }
        if (message[i].toLowerCase().split(" ").join("") == "passwordisempty") {
            DOMLogIn.inputPassword.value = message[i];
            DOMLogIn.inputPassword.style.backgroundColor = "red";
            DOMLogIn.inputPassword.style.color = "white";
        }
    }
}
function cleanInputs() {
    DOMLogIn.inputUserName.value = "";
    DOMLogIn.inputPassword.value = "";
}
function cleanSingleInput(input) {
    if (input.style.backgroundColor == "red")
        input.value = "";
}
function setInputbackgroundColor(color) {
    let items = [DOMLogIn.inputUserName, DOMLogIn.inputPassword];
    items.forEach(function (v) {
        v.addEventListener("click", function () {
            cleanSingleInput(v);
            v.style.backgroundColor = color;
            DOMLogIn.divLoginFailed.style.animationName = "hide";
            // DOMLogIn.divLoginFailed.style.display = "none";
        });
    })
}
function setInputbackgroundColorToGreen() {
    DOMLogIn.inputUserName.addEventListener("keydown", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
    DOMLogIn.inputPassword.addEventListener("keydown", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
    DOMLogIn.inputUserName.addEventListener("change", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
    DOMLogIn.inputPassword.addEventListener("change", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
    DOMLogIn.inputUserName.addEventListener("keyup", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
    DOMLogIn.inputPassword.addEventListener("keyup", function (e) {
        if (checkUserBeforeLogIn(DOMLogIn.inputUserName.value, DOMLogIn.inputPassword.value)) {
            DOMLogIn.inputUserName.style.backgroundColor = "green";
            DOMLogIn.inputPassword.style.backgroundColor = "green";
        }
    });
}





/////////////////////////////////////////////////////////////////////////
//calling functions
/////////////////////////////////////////////////////////////////////////
setInputbackgroundColor("rgb(50,50,100)");
setInputbackgroundColorToGreen();