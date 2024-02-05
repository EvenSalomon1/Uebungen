function findTheWord() {
  const wholeText = document.querySelector("body article").innerText;
  const inputText = document.querySelector("input[type='text']").value;
  const error = document.querySelector("body p");

  if (inputText.length > 0) {
    error.textContent = " ";
    if (wholeText.indexOf(inputText) > 0) {
      document.querySelector("body article").innerHTML = wholeText.replaceAll(
        inputText,
        `<span class="highlight"> ${inputText} </span>`
      );
    } else {
      (error.textContent = "Zeichen sind nicht im Text enthalten"),
        (error.style.color = "red");
    }
  } else {
    (error.textContent = " Bitte gib etwas ein"), (error.style.color = "red");
  }
}
