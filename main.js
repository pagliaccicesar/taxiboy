function init(e) {
  if (!e.target.closest('.item')) return;
  let hero = document.querySelector('div[data-pos="0"]');
  let target = e.target.parentElement;
  [target.dataset.pos,hero.dataset.pos] = [hero.dataset.pos,target.dataset.pos];
}

window.addEventListener('click',init,false);

/****  ingles   */


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

let currentSlide = 1;

function nextSlide() {
  const track = document.querySelector('.carousel-track');
  
  if (currentSlide === 1) {
    track.style.transform = 'translateX(-100%)'; /* Mueve el track para mostrar las siguientes 9 cards */
    currentSlide = 2;
  }
}

function prevSlide() {
  const track = document.querySelector('.carousel-track');
  
  if (currentSlide === 2) {
    track.style.transform = 'translateX(0)'; /* Regresa el track para mostrar las primeras 9 cards */
    currentSlide = 1;
  }
}


 /****js de los popup de audiovisuales *****/
 let currentAudioElement = null;
 let isPlaying = false;
 
 // Abrir el popup con un audio específico
 function openPopup(audioName, audioSrc) {
   document.getElementById("popup").style.display = "block";
   document.getElementById("popup-audio-name").textContent = audioName;
 
   // Configurar el archivo de audio
   currentAudioElement = document.getElementById("audio-element");
   currentAudioElement.src = audioSrc;
   currentAudioElement.load(); // Cargar el nuevo audio
   
   // Reiniciar el estado del botón y la barra de progreso
   isPlaying = false;
   document.getElementById("playStopButton").textContent = "Play";
   document.getElementById("progress").value = 0;
 }
 
 // Cerrar el popup y detener el audio
 function closePopup() {
   document.getElementById("popup").style.display = "none";
   if (currentAudioElement) {
     currentAudioElement.pause();
     currentAudioElement.currentTime = 0; // Reiniciar el audio al cerrarlo
   }
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
 currentAudioElement.addEventListener("timeupdate", function () {
   const progressBar = document.getElementById("progress");
   progressBar.value = (currentAudioElement.currentTime / currentAudioElement.duration) * 100;
 });
 
 // Permitir que el usuario ajuste la barra de progreso
 document.getElementById("progress").addEventListener("input", function (e) {
   const newTime = (e.target.value / 100) * currentAudioElement.duration;
   currentAudioElement.currentTime = newTime;
 });
 



