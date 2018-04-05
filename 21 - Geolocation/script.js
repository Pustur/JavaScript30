const arrow = document.querySelector('.arrow');
const speedValue = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  data => {
    const { coords: { speed, heading } } = data;

    speedValue.textContent = speed;
    arrow.style.transform = `rotate(${heading}deg)`;
  },
  err => alert(`Allow localization for this page to work.`),
);
