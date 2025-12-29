// Menu
  const button = document.querySelector('.button-menu-toggle');
  const menu   = document.querySelector('.menu');

  button.addEventListener('click', () => {
    button.classList.toggle('active'); // alterna a classe no botão
    menu.classList.toggle('active');   // alterna a classe no menu
  });

