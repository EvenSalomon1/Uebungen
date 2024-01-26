// document.getElementById("info").innerHTML = "<h1> Hello World </h2>";
const mainHeadline = document.getElementById("info");
mainHeadline.innerHTML = "<h1> Hello World </h2>";

const secondHeadline = document.getElementById("info");
secondHeadline.innerHTML += "<h2> How are you? </h>";

// const beginning = document.getElementById("container");
// beginning.innerHTML = "<p> start of the element </p>";
document.getElementById("container").innerHTML =
  "<p> start of the element </p>";

document.write("<p> end of the element <p>");
