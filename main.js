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

/***   carousel de audiovisuales  ***/

/*let currentSlide = 1;

function nextSlide() {
  const track = document.querySelector('.carousel-track');
  
  if (currentSlide === 1) {
    track.style.transform = 'translateX(-100%)'; 
    currentSlide = 2;
  }
}

function prevSlide() {
  const track = document.querySelector('.carousel-track');
  
  if (currentSlide === 2) {
    track.style.transform = 'translateX(0)'; 
    currentSlide = 1;
  }
}*/

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



 /****js de los popup de entrevistas *****/

let currentAudioElement = null;
let isPlaying = false;

// Abrir el popup con un audio específico
function openPopup(audioName, audioSrc) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-audio-name").textContent = audioName;

  // Configurar el archivo de audio
  currentAudioElement = document.getElementById("audio-element");
  currentAudioElement.src = audioSrc;
  
  // Reiniciar el tiempo y la barra de progreso al abrir el popup
  currentAudioElement.currentTime = 0;
  document.getElementById("progress").value = 0;
  
  // Cargar el nuevo audio
  currentAudioElement.load();

  // Asegúrate de que los event listeners se agregan después de cargar el audio
  currentAudioElement.addEventListener("timeupdate", updateProgressBar);
  document.getElementById("progress").addEventListener("input", seekAudio);

  // Reiniciar el estado del botón
  isPlaying = false;
  document.getElementById("playStopButton").textContent = "Play";
}

// Cerrar el popup y detener el audio
function closePopup() {
  document.getElementById("popup").style.display = "none";
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0; // Reiniciar el audio al cerrarlo
  }

  // Remover event listeners para evitar duplicados
  currentAudioElement.removeEventListener("timeupdate", updateProgressBar);
  document.getElementById("progress").removeEventListener("input", seekAudio);
}

// Reproducir o detener el audio
function toggleAudio() {
  if (currentAudioElement) {
    if (isPlaying) {
      currentAudioElement.pause();
      document.getElementById("playStopButton").textContent = "Play";
    } else {
      currentAudioElement.play();
      document.getElementById("playStopButton").textContent = "Stop";
    }
    isPlaying = !isPlaying;
  }
}

// Actualizar la barra de progreso mientras el audio se reproduce
function updateProgressBar() {
  const progressBar = document.getElementById("progress");
  if (currentAudioElement.duration) {
    progressBar.value = (currentAudioElement.currentTime / currentAudioElement.duration) * 100;
  }
}

// Permitir que el usuario ajuste la barra de progreso
function seekAudio(e) {
  if (currentAudioElement.duration) {
    const newTime = (e.target.value / 100) * currentAudioElement.duration;
    currentAudioElement.currentTime = newTime;
  }
}

//   js del modal de la galeria de fotos  //
/*document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalGallery");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  const slides = document.querySelectorAll(".slide");
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");

  let currentSlide = 0;  

  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
  };
  const next = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  };
  const prev = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  };
  openModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      showSlide(currentSlide);
  });
  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
  });
  nextSlide.addEventListener("click", next);
  prevSlide.addEventListener("click", prev);
 
  modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
  });
});*/





/*let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const modal = document.getElementById("modalGallery");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");


// Ajustar la posición del contenedor de diapositivas para centrar la imagen
const slider = document.querySelector(".slides");
slider.style.transform = `translateX(-${currentIndex * 100}%)`;



// Open Modal
openModal.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close Modal
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Update Slide Position
function updateSlidePosition() {
    const slider = document.querySelector(".slides");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next Slide
nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
});

// Previous Slide
prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});

// Close modal on outside click
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});*/

// Selección de elementos
// Selección de elementos
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




