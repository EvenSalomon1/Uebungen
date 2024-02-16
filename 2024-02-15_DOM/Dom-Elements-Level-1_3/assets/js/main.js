//* Mir alle Elemente holen
const firstElement = document.body.children[0].firstElementChild.textContent;
const lastElement = document.body.children[0].lastElementChild.textContent;
const firstNextElement =
  document.body.children[0].firstElementChild.nextElementSibling.textContent;
const lastPreviousElement =
  document.body.children[0].lastElementChild.previousElementSibling.textContent;

const outputText = document.querySelector("h1");

const button = document.querySelector(".unten");

//* Bei Klick auf Button ins Output schreiben
// so gehts auch (für den ersten Button):
// button.firstElementChild.addEventListener("click", () => {
//     outputText.innerHTML = firstElement;
//   });
button.children[0].addEventListener("click", () => {
  outputText.innerHTML = firstElement;
});

button.children[1].addEventListener("click", () => {
  outputText.innerHTML = lastElement;
});

button.children[2].addEventListener("click", () => {
  outputText.innerHTML = firstNextElement;
});

button.children[3].addEventListener("click", () => {
  outputText.innerHTML = lastPreviousElement;
});
