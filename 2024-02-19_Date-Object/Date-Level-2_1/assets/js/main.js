const outputText = document.querySelector("div");

function aktuellesDatum() {
  const date = new Date();
  outputText.innerHTML = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
}

aktuellesDatum();
