let arr = ['/images/hero-img-2.jpg', '/images/hero-img-1.jpg'];
let index = 0;
setInterval(function () {
  let header = document.getElementById('header-id');
  header.style.backgroundImage = 'url(' + arr[index] + ')';
  index = (index + 1) % arr.length;
}, 2000);
