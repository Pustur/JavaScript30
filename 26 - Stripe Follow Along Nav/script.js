// Functions
function positionBackground(element) {
  const dropdown = element.querySelector('.dropdown');
  const { width, height, top, left } = dropdown.getBoundingClientRect();
  const { top: navTop, left: navLeft } = nav.getBoundingClientRect();

  background.classList.add('open');
  background.style.width = `${width}px`;
  background.style.height = `${height}px`;
  background.style.transform = `translateX(${left -
    navLeft}px) translateY(${top - navTop}px)`;
}

function mouseEnterHandler(e) {
  const { currentTarget } = e;

  requestAnimationFrame(() => {
    currentTarget.classList.add('trigger-enter');
    positionBackground(currentTarget);

    requestAnimationFrame(() => {
      if (currentTarget.classList.contains('trigger-enter')) {
        currentTarget.classList.add('trigger-enter-active');
      }
    });
  });
}

function mouseLeaveHandler(e) {
  const { currentTarget } = e;

  background.classList.remove('open');
  currentTarget.classList.remove('trigger-enter', 'trigger-enter-active');
}

// DOM elements
const listItems = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdown-background');
const nav = document.querySelector('.top');

// Events
listItems.forEach(listItem => {
  listItem.addEventListener('mouseenter', mouseEnterHandler);
  listItem.addEventListener('mouseleave', mouseLeaveHandler);
});
