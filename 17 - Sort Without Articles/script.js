// Functions
function stripArticle(str) {
  return str.replace(/^(an?|the)\s+/i, '');
}

function renderList(array) {
  const html = array.map(item => `<li>${item}</li>`).join('');

  bandsList.innerHTML = html;
}

// DOM elements
const bandsList = document.querySelector('.bands');

// Variables
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

// Body
const sortedBands = [...bands].sort((a, b) =>
  stripArticle(a).localeCompare(stripArticle(b)),
);

renderList(sortedBands);
