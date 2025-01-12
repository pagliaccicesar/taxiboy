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