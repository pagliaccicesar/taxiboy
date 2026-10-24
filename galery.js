const modal = document.getElementById("modalGallery");
const openModalButtonSp = document.getElementById("openModalSp");
const openModalButtonEn = document.getElementById("openModalEn");
const closeModalButton = document.getElementById("closeModal");
const prevSlideButton = document.getElementById("prevSlide");
const nextSlideButton = document.getElementById("nextSlide");
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slides");

let currentIndex = 0;


// Función para mostrar la diapositiva actual
function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


// Abrir modal
function openModal() {
    modal.style.display = "flex";
    showSlide(0);
}

// Cerrar modal
function closeModal() {
    modal.style.display = "none";
}

// Cambiar diapositivas
function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Asignar eventos a los botones según idioma
openModalButtonSp.addEventListener("click", openModal); // Sin paréntesis
openModalButtonEn.addEventListener("click", openModal); // Sin paréntesis
closeModalButton.addEventListener("click", closeModal);
prevSlideButton.addEventListener("click", prevSlide);
nextSlideButton.addEventListener("click", nextSlide);

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Navegación con teclado
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


