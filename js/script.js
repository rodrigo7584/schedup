// Menu
  const button = document.querySelector('.button-menu-toggle');
  const menu   = document.querySelector('.menu');

  button.addEventListener('click', () => {
    button.classList.toggle('active'); // alterna a classe no botão
    menu.classList.toggle('active');   // alterna a classe no menu
  });

var swiper = new Swiper(".swiper-reviews", {
    pagination: {
      el: ".swiper-reviews .swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay: 300,
      disableOnInteraction: true,
    },
    loop:true
  });