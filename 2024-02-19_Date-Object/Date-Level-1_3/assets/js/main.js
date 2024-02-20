const outputText = document.querySelector("div");
const today = new Date();
today.setDate(15);
today.setMonth(3);
today.setFullYear(2234);

outputText.innerHTML += `<p>
${today}</p>`;

today.setDate(3);
today.setMonth(5);
today.setFullYear(2014);

outputText.innerHTML += `<p>
${today}</p>`;
