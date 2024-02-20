console.log("Start: Warten für 3 Sekunden..");

setTimeout(function threeSeconds() {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}, 3000);

let number = 10;
const intervalFunction = setInterval(function countdown() {
  if (number > 0) {
    console.log(number);
    number--;
  } else {
    clearInterval(intervalFunction);
    console.log("Endlich Feierabend!");
  }
}, 1000);
