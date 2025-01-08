/*  js de audiovisuales  */
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

