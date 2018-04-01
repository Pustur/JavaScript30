// Functions
function cacheViewportSize() {
  viewport.width = window.innerWidth;
  viewport.height = window.innerHeight;
}

function handleMouseMove(e) {
  const { width, height } = viewport;
  const { clientX, clientY } = e;
  const x = clientX / width;
  const y = clientY / height;

  document.documentElement.style.setProperty('--mouse-x', x);
  document.documentElement.style.setProperty('--mouse-y', y);
}

// DOM elements
const hero = document.querySelector('.hero');

// Variables
const viewport = {
  width: 0,
  height: 0,
};

// Events
window.addEventListener('resize', cacheViewportSize);
hero.addEventListener('mousemove', handleMouseMove);

// Body
cacheViewportSize();
