// alert("We are online")

let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let button = document.getElementById("submitBtn");
let form  = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const USERNAME = usernameInput.value;

    if (!check(USERNAME)) {
        alert("Sorry, you are not allowed to enter characters less than two for username");
        return

    }
    const PASSWORD  =passwordInput.value;

    if (!check(PASSWORD)) {
        alert("Sorry, you are not allowed to enter characters less than two for password");
        return
    }

    alert("Username: " + USERNAME + " password: " + PASSWORD);
})

function check(inputValue) {
    if (inputValue.length < 2) return false;

    return true
}

