let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let newAlbum = album.map((things) => {
  if (things.includes(".")) {
    const remove = things.slice(0, things.indexOf("."));
    return remove.toLowerCase();
  } else {
    return "invalid";
  }
});

console.log(newAlbum);
