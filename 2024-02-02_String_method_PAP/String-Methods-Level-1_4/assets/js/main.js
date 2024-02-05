const one = document.querySelector("p:first-of-type");
const two = document.querySelector("p:nth-of-type(2)");
const three = document.querySelector("p:nth-of-type(3)");
const four = document.querySelector("p:nth-of-type(4)");
const five = document.querySelector("p:nth-of-type(5)");

const A = `Susi is going to codingschool`;

one.innerHTML = A.slice(0, 4);
two.innerHTML = A.slice(5, 7);
three.innerHTML = A.slice(5, 16) + " " + A.slice(23, 29);
four.innerHTML = A.slice(23, 29);
five.innerHTML = A.slice(0, 7) + " " + A.slice(23, 29);
