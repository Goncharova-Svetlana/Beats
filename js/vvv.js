const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

burger.addEventListener('click', function () {
  menu.classList.add('menu_opened');
});

menu.addEventListener('click', function (e) {
  if (!e.target.classList.contains('menu__item') || e.target.classList.contains('close')) {
    menu.classList.remove('menu_opened');
  }
  
  if (e.target.classList.contains('menu__item')) {
    console.log('меняем секцию');
    menu.classList.remove('menu_opened');
  }
  
});