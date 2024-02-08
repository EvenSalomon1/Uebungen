const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

let woerterFilter = woerter.filter((parameter) => {
  return parameter.length <= 6;
});

console.log(woerter);
console.log(woerterFilter);
