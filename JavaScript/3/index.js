const themeBtn = document.getElementById("themeBtn");
const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");

let darkMode = false;

themeBtn.addEventListener("click", function () {

    if (darkMode == false) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";

        header.style.backgroundColor = "#1f1f1f";
        header.style.color = "white";
        header.style.borderColor = "gray";

        content.style.backgroundColor = "#2b2b2b";
        content.style.color = "white";
        content.style.borderColor = "gray";

        footer.style.backgroundColor = "#1f1f1f";
        footer.style.color = "white";
        footer.style.borderColor = "gray";

        themeBtn.style.backgroundColor = "white";
        themeBtn.style.color = "black";
        themeBtn.innerHTML = "Switch to Light Mode";

        darkMode = true;
    }

    else {
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";

        header.style.backgroundColor = "lightblue";
        header.style.color = "darkblue";
        header.style.borderColor = "darkblue";

        content.style.backgroundColor = "white";
        content.style.color = "black";
        content.style.borderColor = "darkblue";

        footer.style.backgroundColor = "lightblue";
        footer.style.color = "darkblue";
        footer.style.borderColor = "darkblue";

        themeBtn.style.backgroundColor = "darkblue";
        themeBtn.style.color = "white";
        themeBtn.innerHTML = "Switch to Dark Mode";

        darkMode = false;
    }
})
