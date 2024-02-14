const selectButton = document.querySelector("#button");
const selectList = document.querySelector("#farbeAuswahlen");

selectButton.addEventListener("click", (event) => {
  event.preventDefault();
  const index = selectList.selectedIndex;
  selectList.remove(index);
});
