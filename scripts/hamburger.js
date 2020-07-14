const hamburger = document.querySelector(".hamburger");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");

hamburger.addEventListener('click', function () {
  burger.classList.add('burger_opened');
});

burger.addEventListener('click', function (e) {
  if (!e.target.classList.contains('burger__item') || e.target.classList.contains('close')) {
    burger.classList.remove('burger_opened');
  }
  
  if (e.target.classList.contains('burger__item')) {
    burger.classList.remove('burger_opened');
  }
  
})