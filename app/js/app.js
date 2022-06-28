const burgerButton = document.querySelector('#menu-container');
const headerMenu = document.querySelector('.header__menu');
const linksContainer = document.querySelector('#links-container');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    linksContainer.classList.toggle('active');
    overlay.classList.toggle('active');
});