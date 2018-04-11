// Functions
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function scorePoint(e) {
  const { isTrusted, currentTarget } = e;

  if (!isTrusted) return;

  score++;
  scoreBoard.textContent = score;
  currentTarget.parentElement.classList.remove('up');
}

function showMole(index, duration) {
  const hole = holes[index];

  hole.classList.add('up');
  hole.firstElementChild.addEventListener('click', scorePoint, { once: true });

  setTimeout(() => {
    hole.classList.remove('up');

    if (!gameOver) {
      let randomIndex = randomRange(0, holes.length);

      while (randomIndex === index) randomIndex = randomRange(0, holes.length);

      showMole(randomIndex, randomRange(minTime, maxTime));
    }
  }, duration);
}

function startGame() {
  score = 0;
  scoreBoard.textContent = score;
  gameOver = false;
  showMole(randomRange(0, holes.length), randomRange(minTime, maxTime));
  setTimeout(() => (gameOver = true), gameDuration);
}

// DOM elements
const scoreBoard = document.querySelector('.score');
const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('.start-button');

// Variables
const minTime = 1300;
const maxTime = 1800;
const gameDuration = 10000;
let score = 0;
let gameOver = false;

// Events
startButton.addEventListener('click', startGame);
