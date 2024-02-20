function workOrNah(date) {
  const tag = new Date(date);
  const getDay = tag.getDay();
  if (getDay < 6 && getDay > 0) {
    console.log("Arbeitstag");
  } else {
    console.log("Weekend");
  }
}

workOrNah("12.15.2019");
workOrNah("2.16.2001");
workOrNah("2.1.2020");
workOrNah("2.29.2020");
