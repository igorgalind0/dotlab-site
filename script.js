const cards = document.querySelectorAll('.lista-proj li');

cards.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('ativa');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('ativa');
    });
});