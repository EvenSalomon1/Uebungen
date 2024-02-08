let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

getraenke.sort();

console.log(getraenke);

getraenke.forEach((drinks) => {
  console.log(drinks);
  document.write(drinks);
});
