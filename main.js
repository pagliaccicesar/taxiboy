function init(e) {
  if (!e.target.closest('.item')) return;
  let hero = document.querySelector('div[data-pos="0"]');
  let target = e.target.parentElement;
  [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
}

window.addEventListener('click',init,false);

/****  ingles  *****/


document.addEventListener("DOMContentLoaded", function () {
  // Elementos de idioma
  const enLangElements = document.querySelectorAll("#en_lang");
  const spLangElements = document.querySelectorAll("#sp_lang");
  
  // Botones para cambiar de idioma
  const enButton = document.querySelector(".en");
  const spButton = document.querySelector(".sp");

  // Por defecto, mostrar español y ocultar inglés
  setLanguage("es");

  // Evento para cambiar a inglés
  enButton.addEventListener("click", function () {
      setLanguage("en");
  });

  // Evento para cambiar a español
  spButton.addEventListener("click", function () {
      setLanguage("es");
  });

  function setLanguage(language) {
      if (language === "en") {
          // Mostrar elementos en inglés y ocultar en español
          enLangElements.forEach(el => el.style.display = "block");
          spLangElements.forEach(el => el.style.display = "none");
      } else {
          // Mostrar elementos en español y ocultar en inglés
          enLangElements.forEach(el => el.style.display = "none");
          spLangElements.forEach(el => el.style.display = "block");
      }
  }
});


/***  js de scroll mas lento  ***/
document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  });
});







// Selección de elementos  javascript de la galeria de fotos

const modal = document.getElementById("modalGallery");
const openModalButton = document.querySelector(".icono-centro");
const closeModalButton = document.getElementById("closeModal");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slides");

let currentIndex = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
    // Validar que el índice esté dentro de los límites
    if (index < 0) {
        currentIndex = slides.length - 1; // Última diapositiva
    } else if (index >= slides.length) {
        currentIndex = 0; // Primera diapositiva
    } else {
        currentIndex = index;
    }

    // Mover el contenedor de diapositivas
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Abrir modal y mostrar la primera imagen
function openModal() {
    modal.style.display = "flex";
    showSlide(0); // Reinicia al primer slide
}

// Cerrar modal
function closeModal() {
    modal.style.display = "none";
}

// Cambiar de diapositiva
function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Eventos
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
prevSlideButton.addEventListener("click", prevSlide);
nextSlideButton.addEventListener("click", nextSlide);

// Cerrar modal al hacer clic fuera de él
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Teclado: cerrar modal con "Esc" y navegar con flechas
window.addEventListener("keydown", (event) => {
    if (modal.style.display === "flex") {
        if (event.key === "Escape") {
            closeModal();
        } else if (event.key === "ArrowLeft") {
            prevSlide();
        } else if (event.key === "ArrowRight") {
            nextSlide();
        }
    }
});
closeModal() 




