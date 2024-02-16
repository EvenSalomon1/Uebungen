const button = document.querySelector("#enter");
const list = document.querySelector("ul");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const userInput = document.querySelector("#userinput").value;

  const newListItem = document.createElement("li");
  console.log(newListItem);
  newListItem.appendChild(userInput);
});

// !noch nicht fertig, funktioniert noch nicht!!!
