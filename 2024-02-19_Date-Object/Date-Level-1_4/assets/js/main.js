function wieVieleTage(monat, jahr) {
  const millisekunden = new Date(jahr, monat + 1, 1) - new Date(jahr, monat, 1);
  const tage = millisekunden / (24 * 60 * 60 * 1000);
  return tage;
}

console.log(wieVieleTage(0, 2016));
console.log(wieVieleTage(1, 2016));
console.log(wieVieleTage(1, 2017));
console.log(wieVieleTage(11, 2017));
