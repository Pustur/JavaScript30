// Functions
function getVariablesWithValue(variables) {
  const styles = window.getComputedStyle(document.documentElement);

  return variables.map(variable => {
    const value = styles.getPropertyValue(`--${variable}`);

    return { name: variable, value: value.trim() };
  });
}

function setInitialInputValues(inputs, variables) {
  variables.forEach(variable => {
    const { name, value } = variable;
    const input = inputs.filter(i => i.getAttribute('name') === name)[0];

    if (input.type === 'range') {
      input.value = parseInt(value, 10);
    } else {
      input.value = value;
    }
  });
}

function setVariableValue(e) {
  const { target, target: { value, dataset: { sizing } } } = e;
  const name = target.getAttribute('name');

  document.documentElement.style.setProperty(
    `--${name}`,
    `${value}${sizing || ''}`,
  );
}

// DOM elements
const inputs = [...document.querySelectorAll('.controls input')];

// Variables
const cssVariables = inputs.map(input => input.name);
const variables = getVariablesWithValue(cssVariables);

// Events
inputs.forEach(input => {
  input.addEventListener('input', setVariableValue);
});

// Body
setInitialInputValues(inputs, variables);
