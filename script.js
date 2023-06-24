const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});