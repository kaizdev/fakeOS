export const showModal = (modal, displayType = "block") => {
    const middleSection = document.querySelector(".middle");
    const bottomSection = document.querySelector(".bottom");
    const mainSection = document.querySelector("main");

    middleSection.style.display = "none";
    bottomSection.style.display = "none";
    mainSection.style.backgroundImage = "none";
    modal.style.display = displayType;
};
