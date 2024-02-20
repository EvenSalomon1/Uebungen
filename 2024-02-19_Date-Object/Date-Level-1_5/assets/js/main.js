// *So kommt der falsche Monat raus (immer einer später, wegen indexbasiert)
// function getMonth(year, month, day) {
//   const date = new Date(year, month, day);
//   const whichMonth = date.toLocaleString("default", { month: "long" });
//   console.log(whichMonth);
// }

// getMonth(2001, 3, 4);
// getMonth(2019, 12, 24);
// getMonth(1410, 7, 15);

// *So kommt der richtige Monat raus (wenn man Datum in Anführungsstrichen eingibt)
function getMonth(datum) {
  const date = new Date(datum);
  const whichMonth = date.toLocaleString("default", { month: "long" });
  console.log(whichMonth);
}

getMonth("2001-3-4");
getMonth("2019-12-24");
getMonth("1410-07-15");
