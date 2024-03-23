const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Botões
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Contador
let counter = 1; // Começamos de 1 para que a primeira imagem seja a segunda do array
const size = images[0].clientWidth;

// Movendo para a primeira imagem
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Botões de clique
nextBtn.addEventListener('click', () => {
  if (counter >= images.length - 1) {
    counter = 1;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  } else {
    counter++;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = images.length - 2;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  } else {
    counter--;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
