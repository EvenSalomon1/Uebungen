const newFunction = (parameter) => {
  let result = parameter * 2;
  return result;
};

let returnResult = newFunction(3);
console.log(returnResult);

// !so wie oben können wir den Wert global verwenden

// !alte Schreibweise (so können wir nur lokal verwenden)
// const newFunction = (parameter) => {
//   let result = parameter * 2;
//   console.log(result);
// };

// newFunction(3);
