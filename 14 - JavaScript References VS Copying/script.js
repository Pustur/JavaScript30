// Start with strings, numbers and booleans
let age = 22;
let age2 = age;

console.log('Before changing: ', age, age2);
age = 23;
console.log('After changing: ', age, age2);
console.log('\n');

let name = 'Loris';
let name2 = name;

console.log('Before changing: ', name, name2);
name = 'Pustur';
console.log('After changing: ', name, name2);
console.log('\n');

// Let's say we have an array
const players = ['Pustur', 'Sarah', 'Ryan', 'Poppy'];

// And we want to make a copy of it.
const team = players;

console.log('Before changing: ', team, players);

// You might think we can just do something like this:
team[3] = 'Andrew';
console.log('After changing reference: ', team, players);

// However what happens when we update that array?

// Now here is the problem!

// Oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// One way
const team2 = players.slice();

// Or create a new array and concat the old one in
const team3 = [].concat(players);

// Or use the new ES6 Spread
const team4 = [...players];

team4[3] = 'Luke';
console.log('After changing copy: ', team4, players);
console.log('\n');

const team5 = Array.from(players);

// Now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// With Objects
const person = {
  name: 'Loris',
  age: 22,
};

// And think we make a copy:

const captain = person;

console.log('Before changing: ', captain, person);
captain.number = 1;
console.log('After changing reference: ', captain, person);

// How do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 99, age: 23 });

console.log('After changing copy: ', captain2, person);

// We will hopefully soon see the object ...spread
const captain3 = { ...person };

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const loris = {
  name: 'Loris',
  age: 22,
  social: {
    twitter: '@LBettazza',
    facebook: 'Loris Bettazza',
  },
};
const loris2 = Object.assign({}, loris);
const loris3 = JSON.parse(JSON.stringify(loris));
