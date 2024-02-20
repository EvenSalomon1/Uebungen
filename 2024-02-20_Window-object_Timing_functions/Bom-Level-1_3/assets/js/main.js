const outputText = document.querySelector("div");

function getData() {
  outputText.innerHTML = `
  <p>Browsername: ${window.navigator.appName}<p>
  <p>Betriebssystem-Architektur: ${window.navigator.platform}<p>
  <p>Browserversion: ${window.navigator.appVersion}<p>
  <p>Innerwidth: ${window.innerWidth}<p>
  <p>Innerheight: ${window.innerHeight}<p>
  <p>Colordepth: ${window.screen.colorDepth}<p>
  <p>Pixeldepth: ${window.screen.pixelDepth}<p>`;
}

getData();
