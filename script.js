let display = document.getElementById("display");
let laps = document.getElementById("laps");

let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");

let timer = null;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

/* Start */

startBtn.addEventListener("click", () => {

    if (timer !== null) {
        return;
    }

    timer = setInterval(updateTime, 10);
});

/* Pause */

pauseBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;
});

/* Reset */

resetBtn.addEventListener("click", () => {

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    display.innerHTML = "00:00:00:000";
    laps.innerHTML = "";
});

/* Lap */

lapBtn.addEventListener("click", () => {

    if (display.innerHTML === "00:00:00:000")
        return;

    let li = document.createElement("li");

    li.innerHTML =
        "Lap " +
        (laps.children.length + 1) +
        " : " +
        display.innerHTML;

    laps.prepend(li);
});

/* Stopwatch */

function updateTime() {

    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    display.innerHTML = `${h}:${m}:${s}:${ms}`;

    display.style.transform = "scale(1.05)";

    setTimeout(() => {
        display.style.transform = "scale(1)";
    }, 80);
}

/* Theme Change */

function changeTheme(theme) {
    document.body.className = theme;
}