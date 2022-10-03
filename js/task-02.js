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



// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
