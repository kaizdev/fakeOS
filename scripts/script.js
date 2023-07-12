import { showModal } from "./dom-utils.js";
import { updateTime } from "./utils.js";

updateTime();
setInterval(updateTime, 1000);

// Main section elements
const mainSection = document.querySelector("main");
const middleSection = document.querySelector(".middle");
const bottomSection = document.querySelector(".bottom");

// Modal section elements
const settingsModal = document.querySelector("#settingsModal");
const settingsBtn = document.querySelector("#settings");

const textModal = document.querySelector("#textModal");
const textBtn = document.querySelector("#text");

const photoModal = document.querySelector("#photoModal");
const photoBtn = document.querySelector("#photos");

const notesModal = document.querySelector("#notesModal");
const notesBtn = document.querySelector("#notes");

// Back button config
const backBtn = document.querySelectorAll(".back-button");
const modals = [
    document.getElementById("settingsModal"),
    document.getElementById("textModal"),
    document.getElementById("photoModal"),
    document.getElementById("notesModal"),
];

backBtn.forEach((button) => {
    button.addEventListener("click", () => {
        modals.forEach((modal) => {
            modal.style.display = "none";
        });
        middleSection.style.display = "flex";
        bottomSection.style.display = "";
        mainSection.style.backgroundImage = "url(../images/wallpaper.jpeg)";
    });
});

// Modal display listeners
settingsBtn.addEventListener("click", () => {
    showModal(settingsModal);
});

textBtn.addEventListener("click", () => {
    showModal(textModal);
});

photoBtn.addEventListener("click", () => {
    showModal(photoModal);
});

notesBtn.addEventListener("click", () => {
    showModal(notesModal);
});
