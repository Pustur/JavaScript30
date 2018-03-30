// Functions
function resizeCanvas() {
  const { innerWidth, innerHeight } = window;

  canvas.width = innerWidth * dpr;
  canvas.height = innerHeight * dpr;
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
}

function setContextDefaults() {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
}

function getLineWidth(number) {
  const frequency = 0.1;
  const min = 10;
  const max = Math.max(50, min);
  const amplitude = (max - min) / 2;

  return Math.sin(number * frequency) * amplitude + (amplitude + min);
}

function draw(e) {
  if (!isClicked) return;

  const { offsetX, offsetY } = e;

  ctx.beginPath();
  ctx.strokeStyle = `hsl(${counter * 2}, 100%, 50%)`;
  ctx.lineWidth = getLineWidth(counter);
  ctx.moveTo(lastX * dpr, lastY * dpr);
  ctx.lineTo(offsetX * dpr, offsetY * dpr);
  ctx.stroke();

  counter++;

  [lastX, lastY] = [offsetX, offsetY];
}
// DOM elements
const canvas = document.querySelector('#draw');

// Variables
const ctx = canvas.getContext('2d', { alpha: false });
const dpr = window.devicePixelRatio || 1;
let isClicked = false;
let counter = 0;
let lastX = 0;
let lastY = 0;

// Events
window.addEventListener('resize', () => {
  resizeCanvas();
  setContextDefaults();
});

canvas.addEventListener('mousedown', e => {
  const { offsetX, offsetY } = e;

  [lastX, lastY] = [offsetX, offsetY];
  isClicked = true;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseout', () => (isClicked = false));
canvas.addEventListener('mouseup', () => (isClicked = false));

// Body
resizeCanvas();
setContextDefaults();
