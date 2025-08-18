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

window.onload = () => {
    const list = document.getElementById('image-list');
    const items = lista.querySelectorAll('li');

    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
}

const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    if (section) {
      const topo = section.offsetTop - 100;
      window.scrollTo({
          top: topo,
          behavior: 'smooth',
      });
  }

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});