const outputText = document.querySelector("p");

function loopMe() {
  const inputNumber = document.querySelector("input[type='number']").value;

  if (inputNumber > 0 && inputNumber % 2 === 0) {
    outputText.innerHTML = "L";
    for (let i = 1; i <= inputNumber; i++) {
      outputText.innerHTML += "o";
    }
    outputText.innerHTML += "P";
  } else if (inputNumber > 0 && inputNumber % 2 !== 0) {
    outputText.innerHTML = "L";
    for (let i = 1; i <= inputNumber; i++) {
      if (i % 2 !== 0) {
        outputText.innerHTML += "o";
      } else {
        outputText.innerHTML += "O";
      }
    }
    outputText.innerHTML += "P";
  } else {
    outputText.innerHTML = "Bitte gib eine Zahl größer 0 ein.";
  }
}
