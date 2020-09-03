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

letsCookButton.addEventListener('click', randomFoodIdea);

function randomFoodIdea() {
  if (sidesRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(sides);
  } else if (mainsRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(mains);
  } else if (dessertsRadio.checked) {
    recipeSuggestion.innerText = randomArrayIndex(desserts);
  } displayHandler();
}

function displayHandler() {
  cookpot.classList.add('hidden');
  userTitle.classList.remove('hidden');
  userCreation.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function randomArrayIndex(foodItem) {
  var random = Math.floor(Math.random() * foodItem.length)
  return foodItem[random];
}
