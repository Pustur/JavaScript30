// Functions
function addClass(className) {
  return e => {
    const { currentTarget } = e;

    [...currentTarget.parentNode.children].forEach(child =>
      child.classList.remove(className),
    );
    currentTarget.classList.add(className);
  };
}

function handleTransitionEnd(e) {
  const { propertyName, currentTarget } = e;

  if (propertyName === 'flex' || propertyName === 'flex-grow') {
    if (currentTarget.classList.contains('open')) {
      addClass('active')(e);
    }
  }
}

// DOM elements
const panels = [...document.querySelectorAll('.panel')];

// Events
panels.forEach(panel => {
  panel.addEventListener('click', addClass('open'));
  panel.addEventListener('transitionend', handleTransitionEnd);
});
