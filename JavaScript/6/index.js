function updateClock() {

    const currentTime = new Date();

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

    const time = hours + ":" + minutes + ":" + seconds + " " + amPm;

    document.getElementById("clock").innerText = time;
}

updateClock();

setInterval(updateClock, 1000);
