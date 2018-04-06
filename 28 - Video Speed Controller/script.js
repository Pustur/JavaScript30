// Functions
function mouseMoveHandler(e) {
  const { offsetY, currentTarget: { offsetHeight } } = e;
  const percent = offsetY / offsetHeight;
  const playBackRate = percent * (maxSpeed - minSpeed) + minSpeed;

  bar.style.height = `${percent * 100}%`;
  video.playbackRate = playBackRate;
  number.textContent = playBackRate.toFixed(1);
}

// DOM elements
const video = document.querySelector('video');
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const number = bar.querySelector('.speed-number');

// Variables
const minSpeed = 0.4;
const maxSpeed = 4;

// Events
speed.addEventListener('mousemove', mouseMoveHandler);
