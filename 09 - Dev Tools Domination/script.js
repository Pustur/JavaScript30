// Functions
function makeGreen() {
  paragraph.style.color = '#BADA55';
  paragraph.style.fontSize = '50px';
}

// DOM elements
const paragraph = document.querySelector('p');

// Variables
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

// Events
paragraph.addEventListener('click', makeGreen);

// Body
// Clearing
console.clear();

// Regular
console.log('console.log');

// Interpolated
console.log('console.log using %s', 'interpolation');

// Styled
console.log(
  '%cconsole.log with styles',
  'background-color: tomato; color: white; padding: 0.5em',
);

// Warning!
console.warn('console.warn');

// Error :|
console.error('console.error');

// Info
console.info('console.info');

// Testing
console.assert(1 === 1, "`1 === 1` This assert is true so it won't be shown");
console.assert(1 === 2, '`1 === 2` This assert is false so it will be shown');

// Viewing DOM Elements
console.dir(paragraph);

// Grouping together
dogs.forEach(dog => {
  console.group(dog.name);
  // console.groupCollapsed(dog.name);
  console.log(`Name: ${dog.name}`);
  console.log(`Age: ${dog.age} years`);
  console.groupEnd(dog.name);
});

// Counting
console.count('counter');
console.count('counter');
console.count('counter');

// Timing
console.time('timeout 100ms');
setTimeout(() => console.timeEnd('timeout 100ms'), 100);

// Table
console.table(dogs);
