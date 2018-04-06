// Functions
function mouseUpLeaveHandler() {
  isClicked = false;
  items.classList.remove('active');
}

function mouseMoveHandler(e) {
  if (!isClicked) return;

  e.preventDefault();
  items.scrollLeft = items.scrollLeft - e.movementX;
}

function mouseDownHandler() {
  isClicked = true;
  items.classList.add('active');
}

// DOM elements
const items = document.querySelector('.items');

// Variables
let isClicked = false;

// Events
items.addEventListener('mousedown', mouseDownHandler);
items.addEventListener('mousemove', mouseMoveHandler);
items.addEventListener('mouseup', mouseUpLeaveHandler);
items.addEventListener('mouseleave', mouseUpLeaveHandler);
