// Start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// And we want to make a copy of it.

// You might think we can just do something like this:

// However what happens when we update that array?

// Now here is the problem!

// Oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// One way

// Or create a new array and concat the old one in

// Or use the new ES6 Spread

// Now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// With Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// And think we make a copy:

// How do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
