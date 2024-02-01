function askAge() {
  const age = document.querySelector("#number").value;
  const result = document.querySelector("body p");

  age < 18
    ? (result.innerText = "minderjährig")
    : (result.innerText = "volljährig");
}
