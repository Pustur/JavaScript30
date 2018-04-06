// Functions
function animate(element, name) {
  element.classList.add(name, 'animated');

  element.addEventListener(
    'animationend',
    e => e.currentTarget.classList.remove(e.animationName, 'animated'),
    { once: true },
  );
}

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime(then);

  return setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      animate(timeLeft, 'tada');
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsLeft = String(seconds % 60).padStart(2, '0');
  const time = `${minutes}:${secondsLeft}`;

  document.title = time;
  timeLeft.textContent = time;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = String(end.getHours()).padStart(2, '0');
  const minutes = String(end.getMinutes()).padStart(2, '0');

  endTime.textContent = `Be back at ${hours}:${minutes}`;
}

function buttonClickHandler(e) {
  const seconds = parseInt(e.currentTarget.dataset.time, 10);

  countdown = timer(seconds);
}

function formSubmitHandler(e) {
  const { currentTarget, currentTarget: { minutes: { value } } } = e;
  const minutes = parseInt(value, 10) || 0;

  e.preventDefault();
  countdown = timer(minutes * 60);
  currentTarget.reset();
}

// DOM elements
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// Variables
let countdown;

// Events
buttons.forEach(button => button.addEventListener('click', buttonClickHandler));
document.customForm.addEventListener('submit', formSubmitHandler);
