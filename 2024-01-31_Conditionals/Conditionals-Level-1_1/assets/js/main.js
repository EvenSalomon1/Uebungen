function askAge() {
  const age = Number(document.querySelector("form input:first-of-type").value);
  const result = document.querySelector("body p");

  if (age < 18) {
    result.innerHTML = "minderjährig";
  } else {
    result.innerHTML = "volljährig";
  }
}
