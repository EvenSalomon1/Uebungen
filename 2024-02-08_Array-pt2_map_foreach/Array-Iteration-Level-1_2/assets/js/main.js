const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks = drinks.map((getraenke) => {
  return getraenke.toUpperCase();
});

console.log(upperDrinks);
