// let form = document.querySelector('form');
let allForm = document.querySelectorAll('form');

allForm.forEach((form) => {
  form.addEventListener('submit', function (e) {
    console.log(e);
    e.preventDefault();
  });
});

let arr = ['/images/hero-img-2.jpg', '/images/hero-img-1.jpg'];
let index = 0;
setInterval(function () {
  let header = document.getElementById('header-id');
  header.style.backgroundImage = 'url(' + arr[index] + ')';
  index = (index + 1) % arr.length;
}, 2000);

let cakeDiv = document.querySelector('.ck-div');
let mainCake = document.querySelector('#cake-div-form');

cakeDiv.addEventListener('click', function () {
  if (mainCake.style.display === 'none') {
    mainCake.style.display = 'block';
    mainCake.style.zIndex = 2000;
  } else {
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

let cross = document.querySelectorAll('.danger');

cross.forEach((btn) => {
  btn.addEventListener('click', function () {
    // console.log(btn.parentElement);

    // btn.parentElement.style.display = 'none';
    if (mainCake.style.display === 'block') {
      mainCake.style.display = 'none';
      // mainCake.style.zIndex = -1000;
    }
    else if (chocoCake.style.display === 'block') {
      chocoCake.style.display = 'none';
      mainCake.style.display = 'block';
    }
    else if (fruitCake.style.display === 'block') {
      fruitCake.style.display = 'none';
      // fruitCake.style.zIndex = -2000;
      mainCake.style.display = 'block';
    }
    else if(snackForm.style.display==='block'){
      snackForm.style.display='none';
    }
  });
});
