/* CQS HEADER */
const burgerMenuBtn = document.querySelector('.js_burgerMenuBtn');
const headerMenu = document.querySelector('.js_headerMenu');

const handleClickMenuBurger = () => {
  headerMenu.classList.toggle('is-open');
};

burgerMenuBtn.addEventListener('click', handleClickMenuBurger);
