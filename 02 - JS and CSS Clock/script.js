// Functions
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return { hours, minutes, seconds };
}

function applyRotation({ hours, minutes, seconds }) {
  hourHand.style.transform = `rotate(${hours * (360 / 24)}deg)`;
  minuteHand.style.transform = `rotate(${minutes * (360 / 60)}deg)`;
  secondHand.style.transform = `rotate(${seconds * (360 / 60)}deg)`;
}

function updateClock() {
  applyRotation(getCurrentTime());
}

// DOM elements
const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');

// Body
updateClock();
setInterval(updateClock, 1000);
