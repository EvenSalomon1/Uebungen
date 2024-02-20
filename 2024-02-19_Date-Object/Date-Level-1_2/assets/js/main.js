let outputText = document.querySelector("div");

const todayDate = new Date();
const todayYear = todayDate.getFullYear();
const todayMonth = todayDate.getMonth();
const todayDay = todayDate.getDate();
const todayHour = todayDate.getHours();
const todayMinutes = todayDate.getMinutes();
const todayDayName = todayDate.toLocaleString("defualt", { weekday: "long" });

outputText.innerHTML = `<p> ${todayDate}</p>
<p> ${todayYear}</p>
<p> ${todayMonth}</p>
<p> ${todayDay}</p>
<p> ${todayHour}</p>
<p> ${todayMinutes}</p>
<p> ${todayDayName}</p>`;
