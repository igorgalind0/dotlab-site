const cards = document.querySelectorAll('.lista-proj li');

cards.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('ativa');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('ativa');
    });
});

const menuMobile = document.querySelector("[data-menu='button'");
const ulMenu = document.querySelector("[data-menu='menu-list'");

menuMobile.addEventListener('click', () => {
    ulMenu.classList.toggle('ativo');
});