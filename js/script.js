// Menu
  const button = document.querySelector('.button-menu-toggle');
  const menu   = document.querySelector('.menu');

  button.addEventListener('click', () => {
    button.classList.toggle('active'); // alterna a classe no botão
    menu.classList.toggle('active');   // alterna a classe no menu
  });

var swiper = new Swiper(".swiper-reviews .swiper", {
    slidesPerView: 1, 
    spaceBetween: 20,
    pagination: {
      el: ".swiper-reviews .swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints:{
      578: {
        slidesPerView: 2, 
      },
      990: {
        slidesPerView: 3, 
      }
    },
    loop:true
  });