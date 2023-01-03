let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

function sumOneHome() {
    countHome += 1
    homeEl.textContent = countHome
}

function sumTwoHome() {
    countHome += 2
    homeEl.textContent = countHome
}

function sumThreeHome() {
    countHome += 3
    homeEl.textContent = countHome
}

function sumOneGuest() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function sumTwoGuest() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function sumThreeGuest() {
    countGuest += 3
    guestEl.textContent = countGuest
}

function reset() {
    countHome = 0;
    countGuest = 0;
    homeEl.textContent = countHome
    guestEl.textContent = countGuest
}