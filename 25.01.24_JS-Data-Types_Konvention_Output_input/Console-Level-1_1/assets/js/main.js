// 1. Beispiel

let a = 12;
let b = a * 3;
console.log(b);

let helloWorld = "Hello World";
console.log(helloWorld);

const firstName = "Anton";
let age = 28;
console.log(firstName);
console.log(age);
console.log(firstName + " " + age);

let job = "Trainer:in";
console.log(job);
let married = true;
console.log(married);

console.log(
  firstName +
    " ist " +
    age +
    " alt, von Beruf " +
    job +
    " und ist verheiratet: " +
    married
);

document.querySelector("#output").innerHTML = b;
