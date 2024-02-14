const grey = document.querySelector("#grauTaste");
const white = document.querySelector("#weissTaste");
const blue = document.querySelector("#blauTaste");
const yellow = document.querySelector("#gelbTaste");

const body = document.querySelector("body");

// *Allgemeine Funktion
const colorChoice = (color) => {
  body.style.backgroundColor = color;
};

// *EventListener für jede einzelne Farbe mit obiger Funktion mit Parameter ausgefüllt
grey.addEventListener("click", () => {
  colorChoice("grey");
});

white.addEventListener("click", () => {
  colorChoice("white");
});

blue.addEventListener("click", () => {
  colorChoice("blue");
});

yellow.addEventListener("click", () => {
  colorChoice("yellow");
});
