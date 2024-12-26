/*let currentTrack = 1;

function nextSlide() {
  if (currentTrack === 1) {
    // Oculta el primer grupo de elementos (1 al 9)
    document.querySelector('.carousel-track').classList.remove('active');
    // Muestra el segundo grupo de elementos (10 al 18)
    document.querySelector('.carousel-track-bis').classList.add('active');
    currentTrack = 2; // Cambia al siguiente grupo
  }
}

function prevSlide() {
  if (currentTrack === 2) {
    // Oculta el segundo grupo de elementos (10 al 18)
    document.querySelector('.carousel-track-bis').classList.remove('active');
    // Muestra el primer grupo de elementos (1 al 9)
    document.querySelector('.carousel-track').classList.add('active');
    currentTrack = 1; // Vuelve al primer grupo
  }
}

// Asegúrate de que el primer grupo esté visible al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.carousel-track').classList.add('active');
});*/

const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.izq');
const nextBtn = document.querySelector('.der');
const cardsPerPage = 9;
let currentPage = 1;

function showPage(pageNumber) {
  cards.forEach((card, index) => {
    card.style.display = index >= (pageNumber - 1) * cardsPerPage && index < pageNumber * cardsPerPage ? 'block' : 'none';
  });
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < Math.ceil(cards.length / cardsPerPage)) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);

