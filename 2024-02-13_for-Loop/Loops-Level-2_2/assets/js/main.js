const outputText = document.querySelector("p");

function loopMe() {
  const inputNumber = document.querySelector("input[type='number']").value;

  outputText.innerHTML = "L";
  for (let i = 1; i <= inputNumber; i++) {
    outputText.innerHTML += "o";
  }
  outputText.innerHTML += "p";
}
