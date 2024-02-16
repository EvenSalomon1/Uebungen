// * so funktionierts mit querySelector
// const elemente = document.querySelectorAll(".example");

// function myFunction() {
//   elemente.forEach((index) => {
//     index.style.backgroundColor = "red";
//   });
// }

// * so funktionierts mit HTML Collection
const elements = document.getElementsByClassName("example");

function myFunction() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
  }
}
