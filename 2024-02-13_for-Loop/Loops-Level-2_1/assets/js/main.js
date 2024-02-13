function imageArray() {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push(`image_00${i}.jpeg`);
    } else if (i < 100) {
      returnArray.push(`image_0${i}.jpeg`);
    } else {
      returnArray.push(`image_${i}.jpeg`);
    }
  }
  //   return returnArray;
  console.table(returnArray);
}
imageArray();
// let myArray = imageArray();
// console.table(myArray);

// *Das grün auskommentierte wäre andere Variante um ans Ergebnis zu kommen (mit return)