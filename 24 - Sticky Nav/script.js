// Functions
function scroll() {
  if (window.scrollY >= navYPos) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

// DOM elements
const nav = document.querySelector('.main-nav');

// Variables
const navYPos = nav.offsetTop;

// Events
window.addEventListener('scroll', scroll);
