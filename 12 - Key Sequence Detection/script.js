// Functions
function handleKeyUp(e) {
  stack.push(e.key);

  stack = stack.slice(-code.length);

  if (stack.join('') === code) cornify_add();
}

// Variables
const code = 'unicorn';
let stack = [];

// Events
window.addEventListener('keyup', handleKeyUp);
