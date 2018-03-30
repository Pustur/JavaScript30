// Functions
function handleCheckboxClick(e) {
  const { target, shiftKey, target: { checked } } = e;
  const index = checkboxes.indexOf(target);

  if (shiftKey && checked) {
    const [min, max] = [index, lastIndex].sort((a, b) => a - b);

    checkboxes
      .slice(min, max + 1)
      .forEach(checkbox => (checkbox.checked = true));
  }

  lastIndex = index;
}

// DOM elements
const checkboxes = [...document.querySelectorAll('input[type="checkbox"]')];

// Variables
let lastIndex = 0;

// Events
checkboxes.forEach(checkbox =>
  checkbox.addEventListener('click', handleCheckboxClick),
);
