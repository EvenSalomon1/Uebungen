const functionOne = (yearBorn) => {
  let age = 2024 - yearBorn;
  return age;
};

let resultAge = functionOne(1998);
console.log(resultAge);

const functionTwo = (first, second) => {
  ageDiff = first - second;
  return ageDiff;
};

let resultAgeDiff = functionTwo(27, 25);
console.log(resultAgeDiff);
