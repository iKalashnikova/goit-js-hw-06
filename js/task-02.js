const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const arrayOfList = []

const ingredient = ingredients.map(ingredient => {
  const ingredientList = document.createElement('li');
  ingredientList.textContent = ingredient
  ingredientList.classList = 'item'
  return arrayOfList.push(ingredientList)
})

const elementsOfingredients = document.querySelector('#ingredients')

elementsOfingredients.append(...arrayOfList);

console.log(elementsOfingredients);


