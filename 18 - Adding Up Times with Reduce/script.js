// Functions
function unreliableGetTotalTimeString(totalSeconds) {
  const date = new Date(totalSeconds * 1000);

  return `Total time: ${date.toISOString().slice(11, -5)}`;
}

function getTotalTimeString(totalSeconds) {
  let seconds = totalSeconds;

  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;

  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  const [h, m, s] = [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ];

  return `Total time: ${h}:${m}:${s}`;
}

// DOM elements
const videos = [...document.querySelectorAll('[data-time]')];

// Body
const totalSeconds = videos.reduce((total, video) => {
  const { dataset: { time } } = video;
  const timeArray = time.split(':').map(parseFloat);
  const [s = 0, m = 0, h = 0] = timeArray.reverse();

  return total + h * 3600 + m * 60 + s;
}, 0);

// Fails with more than 24 hours, but it simplifies the conversion
console.log(unreliableGetTotalTimeString(totalSeconds));

// Works with more than 24 hours
console.log(getTotalTimeString(totalSeconds));
