function getHours(date) {
  date.getHours() < 12 ? console.log("AM") : console.log("PM");
}

getHours(new Date(1999, 10, 5, 15));
getHours(new Date());
getHours(new Date(2019, 12, 3, 12));
getHours(new Date(2000, 1, 1, 11));
