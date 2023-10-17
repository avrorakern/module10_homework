const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.querySelector(".body__chat-area");
const btn = document.querySelector('.body__btn');
const input = document.querySelector('.body_input');
const geoBtn = document.querySelector('.body__geo-btn');

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.className = 'body__paragraph';
  pre.innerHTML = message;
  output.appendChild(pre);
}

let websocket = new WebSocket(wsUri); 
websocket.onopen = function() {
  console.log("CONNECTED");
};
websocket.onmessage = function(evt) {
  writeToScreen(`ответ сервера: ${evt.data}`);
};
websocket.onerror = function(evt) {
  writeToScreen(`server: ${evt.data}`);
};

btn.addEventListener('click', () => {
  const message = input.value;
  writeToScreen(message);
  websocket.send(message);
});

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  let link = document.createElement("a");
  link.style.display = 'flex';
  link.className = 'body__paragraph';
  link.textContent = 'Ссылка на Вашу гео-локацию';
  link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  output.appendChild(link);
}

geoBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success);
});
