const text = "Sam is going to school";

let result = text.toUpperCase();
let result2 = text.toLowerCase();
let result3 =
  text.slice(0, 3).toUpperCase() +
  text.slice(3, 15) +
  text.slice(15).toUpperCase();
let result4 =
  text.slice(0, 3) + text.slice(3, 15).toUpperCase() + text.slice(15);
let result5 =
  text.slice(0, 1).toUpperCase() +
  text.slice(1, 4) +
  text.slice(4, 5).toUpperCase() +
  text.slice(5, 7) +
  text.slice(7, 8).toUpperCase() +
  text.slice(8, 13) +
  text.slice(13, 14).toUpperCase() +
  text.slice(14, 16) +
  text.slice(16, 17).toUpperCase() +
  text.slice(17);
document.write(
  result + " " + result2 + " " + result3 + " " + result4 + " " + result5
);
