const text = "Sam is good at codingschool";

let result = text.replace("good at codingschool", "bad at school");
let resultTwo = text.replace(
  "Sam is good at codingschool",
  "Susi is good at school"
);
let resultThree = text.replace("codingschool", "tennis");

document.write(result + " " + resultTwo + " " + resultThree);
