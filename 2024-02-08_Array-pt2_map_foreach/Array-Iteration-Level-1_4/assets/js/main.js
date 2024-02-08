let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map((temperaturen) => {
  return Math.round((temperaturen - 32) / 1.8);
});

console.log(celsius);

// function change(einheit) {
//   einheit.map((temperaturen) => {
//     return Math.round((temperaturen - 32) / 1.8);
//   });
// }

// const result = change(fahrenheit);
// console.log(result);
