// Functions
function initSearch(input) {
  const placeholder = input.getAttribute('placeholder');

  input.setAttribute('disabled', true);
  input.setAttribute('placeholder', 'Loading Cities…');

  return placeholder;
}

function restoreSearch(input) {
  input.removeAttribute('disabled');
  input.setAttribute('placeholder', initialPlaceholder);
  input.focus();
}

function highlightMatch(match) {
  return `<span class="highlight">${match}</span>`;
}

function renderMatches(input, places) {
  const regex = new RegExp(input, 'gi');
  const html = places
    .map(place => {
      const { city, state, population } = place;
      const cityName = city.replace(regex, highlightMatch);
      const stateName = state.replace(regex, highlightMatch);

      return `<li>
        <span class="city-state">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
      </li>`;
    })
    .join('');

  suggestions.innerHTML = html;
}

function findMatches(input, places) {
  const regex = new RegExp(input, 'gi');

  return places.filter(
    place => place.city.match(regex) || place.state.match(regex),
  );
}

function handleInputChange(e) {
  const { target: { value } } = e;

  if (value === '') {
    suggestions.innerHTML = initialSuggestions;
  } else {
    const matchedPlaces = findMatches(value, places);

    renderMatches(value, matchedPlaces);
  }
}

// DOM elements
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// Variables
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const initialPlaceholder = initSearch(search);
const initialSuggestions = suggestions.innerHTML;
let places = [];

// Events
search.addEventListener('input', handleInputChange);

// Body
fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    places = data;
    restoreSearch(search);
  });
