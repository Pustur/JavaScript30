// Functions
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function startWebcamStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(mediaStream => {
      video.srcObject = mediaStream;
      video.play();
    })
    .catch(err => alert(`${err}\nAllow camera usage for this page to work.`));
}

function paintToCanvas() {
  const { videoHeight, videoWidth } = video;

  canvas.width = videoWidth;
  canvas.height = videoHeight;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight);

    let imageData = ctx.getImageData(0, 0, videoWidth, videoHeight);
    imageData = colorManipulation(imageData);
    // imageData = colorShift(imageData);
    // imageData = greenScreen(imageData);
    // ctx.globalAlpha = 0.1;

    ctx.putImageData(imageData, 0, 0);
  }, 1000 / fps);
}

function addImageToStrip(data) {
  const link = document.createElement('a');
  const img = document.createElement('img');
  const title = `Webcam Snapshot`;

  link.setAttribute('download', title);
  link.href = data;
  img.src = data;
  img.alt = title;
  link.insertBefore(img, link.firstChild);
  strip.insertBefore(link, strip.firstChild);
}

function takePhoto() {
  const data = canvas.toDataURL('image/png');

  snap.currentTime = 0;
  snap.play();

  addImageToStrip(data);
}

function colorManipulation(pixels) {
  const { data } = pixels;
  const {
    rMin = 0,
    gMin = 0,
    bMin = 0,
    rMax = 255,
    gMax = 255,
    bMax = 255,
  } = colorModifiers;

  for (let i = 0, len = data.length; i < len; i += 4) {
    data[i] = clamp(data[i], rMin, rMax);
    data[i + 1] = clamp(data[i + 1], gMin, gMax);
    data[i + 2] = clamp(data[i + 2], bMin, bMax);
  }

  return pixels;
}

function colorShift(pixels) {
  const { data } = pixels;

  for (let i = 0, len = data.length; i < len; i += 4) {
    data[i + 300] = data[i + 0];
    data[i + 150] = data[i + 1];
    data[i - 300] = data[i + 2];
  }

  return pixels;
}

function greenScreen(pixels) {
  const { data } = pixels;
  const {
    rMin = 0,
    gMin = 0,
    bMin = 0,
    rMax = 255,
    gMax = 255,
    bMax = 255,
  } = colorModifiers;

  for (let i = 0, len = data.length; i < len; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (
      r >= rMin &&
      r <= rMax &&
      g >= gMin &&
      g <= gMax &&
      b >= bMin &&
      b <= bMax
    ) {
      data[i + 3] = 0;
    }
  }

  return pixels;
}

function changeColors(e) {
  const { target, target: { value } } = e;
  const name = target.getAttribute('name');

  colorModifiers[name] = parseInt(value, 10);
}

// DOM elements
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const photoButton = document.querySelector('.take-photo');
const sliders = document.querySelectorAll('input[type="range"]');

// Variables
const ctx = canvas.getContext('2d');
const colorModifiers = {};
const fps = 30;

// Events
photoButton.addEventListener('click', takePhoto);
video.addEventListener('canplay', paintToCanvas);
sliders.forEach(slider => slider.addEventListener('input', changeColors));

// Body
startWebcamStream();
