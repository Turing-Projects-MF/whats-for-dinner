var radioButtons = document.getElementsByName('food');
var letsCookButton = document.querySelector('#letsCook');
var recipeSuggestion = document.querySelector('.recipe-suggestion');
var sidesRadio = document.querySelector('#side-food');
var mainsRadio = document.querySelector('#main-food');
var dessertsRadio = document.querySelector('#dessert-food');
var cookpot = document.querySelector('#pot-image');
var userTitle = document.querySelector('.user-title');
var userCreation = document.querySelector('.user-creation');
var clearButton = document.querySelector('.clear');
var entireMeal = document.querySelector('#entire-meal');
var inputs = document.getElementsByTagName('input');

var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caeser Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies',
  'Mac and Cheese'
];
var mains = [
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza'
];
var desserts = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs',
  'Fudge',
  'Chocolate Chip Cookies'
];
var randomSide = randomArrayIndex(sides);
var randomMain = randomArrayIndex(mains);
var randomDessert = randomArrayIndex(desserts);

letsCookButton.addEventListener('mousedown', randomFoodIdea);
letsCookButton.addEventListener('mouseup', disableOnSubmit);
clearButton.addEventListener('click', clearFood);

function randomFoodIdea() {
  if (sidesRadio.checked) {
    recipeSuggestion.innerText = randomSide;
  } else if (mainsRadio.checked) {
    recipeSuggestion.innerText = randomMain;
  } else if (dessertsRadio.checked) {
    recipeSuggestion.innerText = randomDessert;
  } else if (entireMeal.checked) {
    randomWholeMeal();
  } displayHandler();
}

function randomWholeMeal() {
  var wholeMeal = `
    ${randomMain} with a side of ${randomSide}
    and ${randomDessert} for dessert!
  `;
  recipeSuggestion.innerText = wholeMeal;
}

function displayHandler() {
  cookpot.classList.add('hidden');
  userTitle.classList.remove('hidden');
  userCreation.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function clearFood() {
  cookpot.classList.remove('hidden');
  userTitle.classList.add('hidden');
  userCreation.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function enableButton() {
  letsCookButton.disabled = false;
}

function disableOnSubmit() {
  letsCookButton.disabled = true;
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

function randomArrayIndex(foodItem) {
  var random = Math.floor(Math.random() * foodItem.length)
  return foodItem[random];
}
