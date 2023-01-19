const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
const items = [];
for (const item of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  items.push(liItem);
}
list.append(...items);

  