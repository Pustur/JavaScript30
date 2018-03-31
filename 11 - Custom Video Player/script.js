// Functions
function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function skip(skipAmount) {
  return () => (video.currentTime += skipAmount);
}

function handleSliderChange(e) {
  const { target, target: { value } } = e;
  const attrName = target.getAttribute('name');

  video[attrName] = value;
}

function updateProgressBar() {
  const percent = video.currentTime / video.duration * 100;

  progressBar.style.flexBasis = `${percent}%`;
}

function setVideoTime(e) {
  const percent = e.offsetX / progress.offsetWidth;

  video.currentTime = video.duration * percent;
}

function toggleFullscreen() {
  isFullscreen ? document.exitFullscreen() : video.webkitRequestFullscreen();
}

// DOM elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const playToggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fullScreenButtons = player.querySelectorAll('[data-fullscreen]');
const sliders = player.querySelectorAll('.player__slider');

// Variables
let isScrubbing = false;
let isFullscreen = false;

// Events
window.addEventListener('keydown', e => {
  const { keyCode } = e;

  if (keyCode === 32 || keyCode === 75) {
    // Spacebar or K
    e.preventDefault();
    togglePlay();
  } else if (keyCode === 74) {
    // J
    skip(-10)();
  } else if (keyCode === 76) {
    // L
    skip(10)();
  } else if (keyCode === 27) {
    // Esc
    document.exitFullscreen();
  } else if (keyCode === 70) {
    // F
    video.webkitRequestFullscreen();
  }
});

document.addEventListener(
  'fullscreenchange',
  () => (isFullscreen = !isFullscreen),
);

[video, playToggle].forEach(el => el.addEventListener('click', togglePlay));

video.addEventListener('play', () => (playToggle.textContent = '❚ ❚'));
video.addEventListener('timeupdate', updateProgressBar);
video.addEventListener('pause', () => (playToggle.textContent = '►'));

progress.addEventListener('mousedown', e => {
  isScrubbing = true;
  setVideoTime(e);
});
progress.addEventListener('mousemove', e => {
  if (isScrubbing) setVideoTime(e);
});
progress.addEventListener('mouseup', () => (isScrubbing = false));

sliders.forEach(slider => {
  slider.addEventListener('input', handleSliderChange);
});

skipButtons.forEach(button => {
  const skipAmount = parseFloat(button.dataset.skip);

  button.addEventListener('click', skip(skipAmount));
});

fullScreenButtons.forEach(button => {
  button.addEventListener('click', toggleFullscreen);
});
