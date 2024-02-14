const button = document.querySelector("#button");
const select = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const selectedColor = select.value;
  body.style.backgroundColor = selectedColor;
});
