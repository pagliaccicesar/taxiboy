// Selección de elementos  javascript de la galeria de fotos

const modal = document.getElementById("modalGallery");
const openModalButton = document.querySelector(".icono-entrevistas");
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
