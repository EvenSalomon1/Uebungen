const inputWindow = Number(prompt("Schätzen Sie die Nummer zwischen 1 und 10"));
const randomNumber = Math.ceil(Math.random() * 10);

inputWindow === randomNumber ? console.log("Richtig") : console.log("Falsch");

console.log(inputWindow);
console.log(randomNumber);
