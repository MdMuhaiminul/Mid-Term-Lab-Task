const backgroundBtn = document.getElementById("backgroundBtn");
const fontBtn = document.getElementById("fontBtn");
const centerBtn = document.getElementById("centerBtn");
const resetBtn = document.getElementById("resetBtn");

let fontSize = 16;

backgroundBtn.addEventListener("click", changeBackground);
fontBtn.addEventListener("click", increaseFont);
centerBtn.addEventListener("click", centerText);
resetBtn.addEventListener("click", resetStyle);

function changeBackground() {

    const p1 = document.getElementById("p1");
    p1.style.background = "lightyellow";
}

function increaseFont() {

    const p1 = document.getElementById("p1");
    fontSize = fontSize + 2;
    p1.style.fontSize = fontSize + "px";
}

function centerText() {

    const p1 = document.getElementById("p1");
    p1.style.textAlign = "center";
}

function resetStyle() {

    const p1 = document.getElementById("p1");

    fontSize = 16;

    p1.style.background = "white";
    p1.style.fontSize = "16px";
    p1.style.textAlign = "left";
}
