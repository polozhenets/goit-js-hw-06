const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');
for (const item of ingredients) {
  const liItem = document.createElement("li");
  liItem.textContent = item;
  list.appendChild(liItem);
}

  