let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);
unsereHaustiere[1].names.forEach((index) => {
  console.log(index);
});

unsereHaustiere[1].names.splice(0, 1, "Miles");
console.log(unsereHaustiere[1].names);
