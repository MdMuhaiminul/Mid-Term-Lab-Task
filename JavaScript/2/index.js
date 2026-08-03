let images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage() {
    mainImage.src = images[currentIndex];
}

previousBtn.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
})

nextBtn.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
})

setInterval(function () {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

}, 3000);
