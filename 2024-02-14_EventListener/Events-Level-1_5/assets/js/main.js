const clickMe = document.querySelector("button");
Anzahl = 0;

clickMe.addEventListener("click", () => {
  clickMe.innerHTML = `Click me: ${(Anzahl += 1)}`;
});
