const button = document.querySelector("#btn");
const outputText = document.querySelector(".zeit");

let number = 100;

button.addEventListener("click", () => {
  const countdown = setInterval(() => {
    number--;
    outputText.innerHTML = number + "%";

    if (number <= 0) {
      clearInterval(countdown);
    }
  }, 100);
});
