// Functions
function highlightLink(e) {
  const { currentTarget } = e;
  const { width, height, top, left } = currentTarget.getBoundingClientRect();
  const { scrollX, scrollY } = window;

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translateX(${left +
    scrollX}px) translateY(${top + scrollY}px)`;
}

function createHighlight() {
  const highlight = document.createElement('div');

  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  return highlight;
}

// DOM elements
const links = document.querySelectorAll('a[href]');
let highlight = createHighlight();

// Events
links.forEach(link => link.addEventListener('mouseenter', highlightLink));
