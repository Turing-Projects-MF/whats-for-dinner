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
var addRecipeButton = document.querySelector('#addRecipe');
var addNewButton = document.querySelector('#add-new');
var rTypeInput = document.querySelector('#type-input');
var rNameInput = document.querySelector('#name-input');
var footer = document.querySelector('footer');
var overlay = document.getElementById('overlay');
var loader = document.querySelector('.loader');

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

letsCookButton.addEventListener('mousedown', randomFoodIdea);
letsCookButton.addEventListener('mouseup', disableOnSubmit);
clearButton.addEventListener('click', clearFood);
addRecipeButton.addEventListener('click', displayFooter);
addNewButton.addEventListener('click', submitUserRecipe);
addNewButton.addEventListener('mouseover', errorValidation);
loader.addEventListener('animationend', showMealSuggestion)

function randomFoodIdea() {
  if (sidesRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(sides);
  } else if (mainsRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(mains);
  } else if (dessertsRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(desserts);
  } else if (entireMeal.checked) {
    randomWholeMeal();
  } displayHandler();
}

function displayHandler() {
  loader.classList.remove('hidden');
  cookpot.classList.add('hidden');
}

function randomWholeMeal() {
  var wholeMeal = `
    ${randomMain} with a side of ${randomSide}
    and ${randomDessert} for dessert!
  `;
  recipeSuggestion.innerText = wholeMeal;
}

function showMealSuggestion() {
  userTitle.classList.remove('hidden');
  userCreation.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}


function clearFood() {
  loader.classList.add('hidden')
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

function displayFooter() {
  footer.classList.remove('hidden');
}

function submitUserRecipe() {
  displayHandler();
  footer.classList.add('hidden');
  addRecipeToStorage();
  recipeSuggestion.innerText = rNameInput.value;
  clearInputFields();
}


function addRecipeToStorage() {
  var userRecipeType = rTypeInput.value;
  var userDish = rNameInput.value
  if (userRecipeType.toLowerCase() === 'side') {
    sides.push(userDish);
  } else if (userRecipeType.toLowerCase() === 'main dish') {
    mains.push(userDish);
  } else if (userRecipeType.toLowerCase() === 'dessert') {
    desserts.push(userDish);
  }
}

function clearInputFields() {
  rNameInput.value = '';
  rTypeInput.value = '';
}

function errorValidation() {
  if (rNameInput.value === '' || rTypeInput.value === '') {
    alert `Please fill out each field!`
  }
}

function randomArrayIndex(foodItem) {
  var random = Math.floor(Math.random() * foodItem.length)
  return foodItem[random];
}
