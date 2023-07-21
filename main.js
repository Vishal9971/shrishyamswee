let arr = ['/images/hero-img-2.jpg', '/images/hero-img-1.jpg'];
let index = 0;
setInterval(function () {
  let header = document.getElementById('header-id');
  header.style.backgroundImage = 'url(' + arr[index] + ')';
  index = (index + 1) % arr.length;
}, 2000);

let cakeDiv = document.querySelector('.ck-div');
let mainCake = document.querySelector('#cake-div-form');
let cross = document.querySelector('.danger');
cakeDiv.addEventListener('click', function () {
  if (mainCake.style.display === 'none') {
    mainCake.style.display = 'block';
    mainCake.style.zIndex = 2000;
  } else {
    mainCake.style.display = 'none';
  }
});

cross.addEventListener('click', function () {
  // console.log(cross.innerHTML);
  if (mainCake.style.display === 'block') {
    mainCake.style.display = 'none';
  }
});

let chocolateCake = document.querySelector('#chocolate-cake');
let chocoCake = document.querySelector('#chocolateCake-div');
let btnDanger = document.querySelector('.cross');
chocolateCake.addEventListener('click', function () {
  if (chocoCake.style.display === 'none') {
    chocoCake.style.display = 'block';
    chocoCake.style.zIndex = 2000;
  } else {
    chocoCake.style.display = 'none';
  }
});
btnDanger.addEventListener('click', function () {
  // console.log(btnDanger.innerHTML);
  chocoCake.style.display = 'none';
  mainCake.style.display = 'block';
});

let fruitDriedCake = document.querySelector('#fruit-cake');
let fruitCake = document.querySelector('#fruitCake-div');
fruitDriedCake.addEventListener('click', function () {
  if (fruitCake.style.display === 'none') {
    fruitCake.style.display = 'block';
    fruitCake.style.zIndex = 2000;
  } else {
    fruitCake.style.display = 'none';
  }
});

let snackDiv = document.querySelector('.sk-div');
let snackForm = document.querySelector('#snack-div-form');
snackDiv.addEventListener('click', function () {
  if (snackForm.style.display === 'none') {
    snackForm.style.display = 'block';
    snackForm.style.zIndex = 2000;
  } else {
    snackForm.style.display = 'none';
  }
});
