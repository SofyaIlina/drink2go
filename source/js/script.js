const nav = document.querySelector('.site-list');
const toggle = document.querySelector('.header__toggle');

// Бургер-меню

  nav.classList.remove('site-list--no-js');
  toggle.classList.remove('header__toggle--no-js');

  const toggleMenu = () => {
    nav.classList.toggle('site-list--close');
    toggle.classList.toggle('header__toggle--close');
    toggle.classList.toggle('header__toggle--open');
  }

  toggle.addEventListener('click', toggleMenu);
