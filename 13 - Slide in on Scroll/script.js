// Functions
// From: https://jsfiddle.net/jonathansampson/m7G64/
// Not production ready!
function throttle(callback, limit) {
  let wait = false;

  return (...args) => {
    if (!wait) {
      callback.call(this, ...args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

function cacheWindowHeight() {
  windowHeight = window.innerHeight;
}

function isInViewport(el, options = {}) {
  const { fullyInViewport } = options;

  const top = window.pageYOffset || document.documentElement.scrollTop;
  const bottom = top + windowHeight;

  const elTop = el.offsetTop;
  const elBottom = elTop + el.clientHeight;

  const topIsInViewport = elTop >= top && elTop <= bottom;
  const bottomIsInViewport = elBottom >= top && elBottom <= bottom;
  const topIsAboveView = elTop <= top;
  const bottomIsBelowView = elBottom >= bottom;

  if (fullyInViewport) {
    return (
      (topIsInViewport && bottomIsInViewport) ||
      (topIsAboveView && bottomIsBelowView)
    );
  }

  return (
    topIsInViewport ||
    bottomIsInViewport ||
    (topIsAboveView && bottomIsBelowView)
  );
}

function handleScroll() {
  slideInImages.forEach(el => {
    if (isInViewport(el)) el.classList.add('active');
    else el.classList.remove('active');
  });
}

// DOM elements
const slideInImages = document.querySelectorAll('.slide-in');

// Variables
let windowHeight = 0;

// Events
window.addEventListener('resize', cacheWindowHeight);
window.addEventListener('scroll', throttle(handleScroll, 250));

// Body
cacheWindowHeight();
