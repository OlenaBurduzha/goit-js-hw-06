const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const newIngredients = ingredients => {
  return ingredients.map(ingredients => {
    const newItemEl = document.createElement('li');
    newItemEl.textContent= ingredients;
    newItemEl.classList.add('item');
    return newItemEl;
  })
}

const elements = newIngredients(ingredients);

ingredientsEl.append(...elements);

console.log(ingredientsEl);



