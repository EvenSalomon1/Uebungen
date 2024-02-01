function welcheNachricht() {
  const nachricht = document.querySelector("input[type='text']");
  const resultTrue = document.querySelector("body h3");
  const resultFault = document.querySelector("body p");

  nachricht.value.length > 0
    ? ((resultTrue.textContent = nachricht.value),
      (resultFault.textContent = ""))
    : ((resultFault.textContent = "Gib bitte eine Nachricht ein!"),
      (resultFault.style.color = "red"));

  console.log(nachricht);
}
