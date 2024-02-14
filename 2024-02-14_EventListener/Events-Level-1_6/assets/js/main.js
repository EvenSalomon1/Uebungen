const selectAuswahl = document.querySelector("#select");
const outputText = document.querySelector("div");

selectAuswahl.addEventListener("change", () => {
  outputText.innerHTML = selectAuswahl.value;
});
