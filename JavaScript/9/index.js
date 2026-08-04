const themeBtn = document.getElementById("themeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn");

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

const aboutSection = document.getElementById("aboutSection");
const projectSection = document.getElementById("projectSection");
const contactSection = document.getElementById("contactSection");

let darkMode = false;

function updateGreeting() {

    const currentTime = new Date();
    const hour = currentTime.getHours();

    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning";
    }

    else if (hour < 18) {
        greetingText = "Good Afternoon";
    }

    else {
        greetingText = "Good Evening";
    }

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amPm = "AM";

    if (hours >= 12) {
        amPm = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("greeting").innerHTML =
        greetingText + " - " + hours + ":" + minutes + ":" + seconds + " " + amPm;
}

updateGreeting();

setInterval(updateGreeting, 1000);

themeBtn.addEventListener("click", function () {

    if (darkMode == false) {
        document.body.style.background = "#121212";
        document.body.style.color = "white";

        header.style.background = "#1f1f1f";
        header.style.borderColor = "gray";

        main.style.background = "#121212";

        aboutSection.style.background = "#2b2b2b";
        aboutSection.style.borderColor = "gray";

        projectSection.style.background = "#2b2b2b";
        projectSection.style.borderColor = "gray";

        contactSection.style.background = "#2b2b2b";
        contactSection.style.borderColor = "gray";

        footer.style.background = "#1f1f1f";
        footer.style.color = "white";
        footer.style.borderColor = "gray";

        themeBtn.innerHTML = "Switch to Light Mode";
        darkMode = true;
    }

    else {
        document.body.style.background = "whitesmoke";
        document.body.style.color = "black";

        header.style.background = "lightblue";
        header.style.borderColor = "darkblue";

        main.style.background = "whitesmoke";

        aboutSection.style.background = "white";
        aboutSection.style.borderColor = "darkblue";

        projectSection.style.background = "white";
        projectSection.style.borderColor = "darkblue";

        contactSection.style.background = "white";
        contactSection.style.borderColor = "darkblue";

        footer.style.background = "lightblue";
        footer.style.color = "darkblue";
        footer.style.borderColor = "darkblue";

        themeBtn.innerHTML = "Switch to Dark Mode";
        darkMode = false;
    }
})

function hideSections() {

    aboutSection.style.display = "none";
    projectSection.style.display = "none";
    contactSection.style.display = "none";
}

aboutBtn.addEventListener("click", function (event) {

    event.preventDefault();

    hideSections();
    aboutSection.style.display = "block";
})

projectBtn.addEventListener("click", function (event) {

    event.preventDefault();

    hideSections();
    projectSection.style.display = "block";
})

contactBtn.addEventListener("click", function (event) {

    event.preventDefault();

    hideSections();
    contactSection.style.display = "block";
})

function validateForm() {

    let hasErr = false;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const messageErr = document.getElementById("messageErr");
    const successMessage = document.getElementById("successMessage");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    messageErr.innerHTML = "";
    successMessage.innerHTML = "";

    if (name === "") {
        nameErr.innerHTML = "name cannot be empty";
        hasErr = true;
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        emailErr.innerHTML = "email cannot be empty";
        hasErr = true;
    }

    else {
        if (!emailRegex.test(email)) {
            emailErr.innerHTML = "invalid email format";
            hasErr = true;
        }
    }

    if (message === "") {
        messageErr.innerHTML = "message cannot be empty";
        hasErr = true;
    }

    else {
        if (message.length < 10) {
            messageErr.innerHTML = "message must be at least 10 characters";
            hasErr = true;
        }
    }

    if (!hasErr) {
        successMessage.innerHTML = "Message Sent Successfully";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        return false;
    }

    else {
        return false;
    }
}
