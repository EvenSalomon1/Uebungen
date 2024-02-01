function showtxt() {
  const paketArt = document.querySelector("#mylist").value;
  const result = document.querySelector("#masse");
  console.log(paketArt);
  console.log("showtxt");
  switch (paketArt) {
    case "0":
      result.innerHTML = "L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
      break;
    case "1":
      result.innerHTML = "bis 60 x 30 x 15 cm";
      break;
    case "2":
      result.innerHTML = " bis 120 x 60 x 60 cm";
      break;
    case "3":
      result.innerHTML = "bis 120 x 60 x 60 cm";
      break;
    default:
      result.innerHTML = "Extra große Größe";
  }
}
