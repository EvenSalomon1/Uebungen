function age(event) {
  event.preventDefault();
  const birthyear = document.querySelector("#birth").value;
  const currentage = document.querySelector(".result");
  currentage.innerHTML = 2024 - birthyear;
}
