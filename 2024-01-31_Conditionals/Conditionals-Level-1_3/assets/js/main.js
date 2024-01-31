function askAge() {
  event.preventDefault();
  const age = Number(document.querySelector("form input:first-of-type").value);
  const result = document.querySelector("body p");

  if (age >= 18) {
    result.innerHTML = "Ja, du kannst Shisha rauchen";
  } else {
    result.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}
