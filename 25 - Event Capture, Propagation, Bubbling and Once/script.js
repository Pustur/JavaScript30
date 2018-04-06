// Functions
function logClassName(e) {
  console.log(e.currentTarget.classList.value);
}

// DOM elements
const divs = document.querySelectorAll('div');

// Events
divs.forEach(div => {
  // Bubbles up (default)
  div.addEventListener('click', logClassName);

  // Captures down
  // div.addEventListener('click', logClassName, { capture: true });

  // Runs once
  // div.addEventListener('click', logClassName, { once: true });
});
