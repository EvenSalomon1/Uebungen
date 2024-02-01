function difference(event) {
  event.preventDefault();
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const result = document.querySelector(".result");
  result.innerHTML = first - second;
}
