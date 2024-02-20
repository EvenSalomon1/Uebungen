const outputText = document.querySelector("#count");
const message = document.querySelector(".message");

let number = 10;
const countdown = setInterval(() => {
  number--;
  outputText.innerHTML = number;

  if (number <= 0) {
    clearInterval(countdown);
    message.innerHTML = `<pclass="hidden"> </p>`;
    message.classList.remove("message");
  }
}, 1000);
