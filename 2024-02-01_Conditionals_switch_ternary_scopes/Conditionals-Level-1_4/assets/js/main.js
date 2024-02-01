function passwortüberprüfung() {
  const password = document.querySelector("input[type = 'password']");
  const result = document.querySelector("body p");

  password.value.length < 8
    ? ((result.innerText = "Passwort zu kurz"), (result.style.color = "red"))
    : ((result.innerText = "Willkommen im Account"),
      (result.style.color = "green"));
}
