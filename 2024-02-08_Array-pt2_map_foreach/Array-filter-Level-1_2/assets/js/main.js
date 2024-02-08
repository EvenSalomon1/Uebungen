const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

let herosFilter = heros.filter((parameter) => {
  return parameter !== undefined && parameter !== null;
});

console.log(herosFilter);
