const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const output = document.querySelector("#table-container");

//! Wiederverwendbare Funktion um ins HTML zu schreiben
function writeInHTML(writewhat) {
  // *Überschriften ins HTML schreiben
  output.innerHTML += `<p>Name</p>
  <p>Country</p>
  <p>Period Active</p>
  <p>Genre</p>`;

  // *Inhalt der Tabelle ins HTML schreiben
  writewhat.forEach((items) => {
    output.innerHTML += `
    <div> 
      ${items.name}
      </div>
      <div>
      ${items.country}
      </div>
      <div>
      ${items.period_active.start} - ${items.period_active.end}
      </div>
      <div>
      ${items.genre}
      </div>
      `;
  });
}

// *Funktionsaufruf, damit von Anfang an vollständige Tabelle im HTML steht
writeInHTML(singers);

// !Suchfunktion
function handleSearchClicked() {
  const inputValue = document.querySelector("#searchInput").value;

  const filteredMusic = singers.filter((parameter) => {
    return (
      parameter.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      parameter.genre.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
  output.innerHTML = " ";

  filteredMusic.length <= 0
    ? (output.innerHTML = "Not found, try again")
    : writeInHTML(filteredMusic);
}
