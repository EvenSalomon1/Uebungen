function checkAirQuality() {
  console.log(checkAirQuality);
  const quality = Number(document.querySelector("body input").value);
  const mySpan = document.querySelector("#span");
  mySpan.innerText = quality;
  const resultOne = document.querySelector("body p:first-of-type");
  const resultTwo = document.querySelector("body p:nth-of-type(2)");
  const bgColor = document.querySelector("body");

  console.log(quality);

  if (quality <= 50) {
    resultOne.innerHTML = "Level of health concern: Good";
    resultTwo.innerHTML = "Level of health effect: Little or no risk";
    bgColor.style.backgroundColor = "green";
  } else if (quality > 50 && quality <= 100) {
    resultOne.innerHTML = "Level of health concern: Moderate";
    resultTwo.innerHTML = "Level of health effect: Acceptable quality";
    bgColor.style.backgroundColor = "yellow";
  } else {
    resultOne.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    resultTwo.innerHTML =
      "Level of health effect: Generable publics not likely affected";
    bgColor.style.backgroundColor = "orange";
  }
}
