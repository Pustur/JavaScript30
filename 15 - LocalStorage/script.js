function addItem(e) {
  const { target } = e;
  const name = target.querySelector('[name="name"]').value;

  e.preventDefault();
  items.push({ name, checked: false });
  localStorage.setItem('items', JSON.stringify(items));
  target.reset();
  renderList(items);
}

function handleCheckboxClick(e) {
  const { target } = e;

  if (!target.matches('input')) return;

  const { dataset: { index } } = target;

  items[index].checked = !items[index].checked;
  localStorage.setItem('items', JSON.stringify(items));
  renderList(items);
}

function renderList(items) {
  const html = items
    .map(
      (item, i) =>
        `<li>
          <input type="checkbox" data-index="${i}" id="item-${i}" ${
          item.checked ? 'checked' : ''
        }/>
          <label for="item-${i}">${item.name}</label>
        </li>`,
    )
    .join('');

  itemsList.innerHTML = html;
}

// DOM elements
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// Variables
const items = JSON.parse(localStorage.getItem('items')) || [];

// Events
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', handleCheckboxClick);

// Body
renderList(items);
