// Functions
function logTitle(text) {
  const consoleStyle = 'font-weight: bold; font-size: 140%';

  console.log(`\n\n%c${text}`, consoleStyle);
}

function isAdult(person) {
  const currentYear = new Date().getFullYear();

  return currentYear - person.year >= 18;
}

function findComment(id) {
  return comment => comment.id === id;
}

// Variables
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Body
// Array.prototype.some() // is at least one person 18 or older?
const someAdults = people.some(isAdult);
logTitle('Is at least one person 18 or older?');
console.log(someAdults);

// Array.prototype.every() // is everyone 18 or older?
const allAdults = people.every(isAdult);
logTitle('Is every person 18 or older?');
console.log(allAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// Find the comment with the ID of 823423
const comment = comments.find(findComment(823423));
logTitle('Comment with ID of 823423');
console.table(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(findComment(823423));

// Delete the comment with the ID of 823423
const newComments = [...comments];
newComments.splice(index, 1);
logTitle('Comment with ID of 823423 has been removed from the comments array');
console.table(newComments);
