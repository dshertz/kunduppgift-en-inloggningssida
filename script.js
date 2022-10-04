const nameField = document.getElementById("name-field");
const passwordField = document.getElementById("password-field");
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const retryButton = document.getElementById("retry-button");
const keyName = "Sara";
const keyPassword = "qwe123";

loginButton.addEventListener("click", function () {

    if (nameField.value == keyName && passwordField.value == keyPassword) {
        localStorage.setItem("loggedIn", nameField.value);
        loggedIn();
        location.reload();
    }

    else {

        loginError();
    }
})

retryButton.addEventListener("click", function () {
    location.reload();
})

logoutButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})

function start() {
    if (checkLoggedIn() == null) {
        loggedOut();
    }
    else {
        loggedIn();
    }
}

function checkLoggedIn() {
    return localStorage.getItem("loggedIn");
}

function loggedOut() {
    const loginScreen = document.getElementById("login-screen");
    loginScreen.classList.remove("hidden");
}

function loggedIn() {
    const loggedInScreen = document.getElementById("logged-in-screen");
    loggedInScreen.classList.remove("hidden");
    const loginScreen = document.getElementById("login-screen");
    loginScreen.classList.add("hidden");


    const welcomeText = document.createTextNode("Välkommen " + localStorage.getItem("loggedIn") + ", du är nu inloggad!");
    const welcomeTextP = document.getElementById("valkommen-text");
    welcomeTextP.appendChild(welcomeText);
}

function loginError() {
    const loginErrorScreen = document.getElementById("login-error-screen");
    loginErrorScreen.classList.remove("hidden");
    const loginScreen = document.getElementById("login-screen");
    loginScreen.classList.add("hidden");

    const errorText = document.createTextNode("Felaktigt användarnamn/lösenord");
    const errorTextP = document.getElementById("felaktig-inloggning");
    errorTextP.appendChild(errorText);
}

start();