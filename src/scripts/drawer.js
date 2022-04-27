const hamburger = document.querySelector('#hamburger');
const main = document.querySelector('main');
const navList = document.querySelector('.nav__list');
const menuEvent = () => {
  hamburger.addEventListener('click', (event) => {
    navList.classList.toggle('show');
    hamburger.classList.toggle('d-none');
    hamburger.classList.toggle('clicked');

    event.stopPropagation();
  });

  main.addEventListener('click', (event) => {
    navList.classList.remove('show');
    hamburger.classList.remove('clicked');

    event.stopPropagation();
  });
};

export default menuEvent;
