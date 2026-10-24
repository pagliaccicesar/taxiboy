const popup = document.getElementById("popup");
const video = document.getElementById("video-element");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const progress = document.getElementById("progressBar");

function openPopup(title, videoSource) {
    document.getElementById("popup-video-name").textContent = title;

    video.pause();
    video.currentTime = 0;
    video.src = videoSource;

    // Restablecer los controles
    playBtn.textContent = "Play";
    progress.value = 0;

    popup.style.display = "flex";
    video.load();
}

function closePopup() {
    popup.style.display = "none";

    video.pause();
    video.currentTime = 0;

    // Restablecer los controles al cerrar
    playBtn.textContent = "Play";
    progress.value = 0;
}


/* PLAY / PAUSE */
playBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playBtn.textContent = "Stop";
    } else {
        video.pause();
        playBtn.textContent = "Play";
    }
});

/* STOP */
stopBtn.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
    playBtn.textContent = "Play";
});

/* PROGRESS BAR */
video.addEventListener("timeupdate", () => {
    let porcentaje = (video.currentTime / video.duration) * 100;
    progress.value = porcentaje;
});

progress.addEventListener("input", () => {
    video.currentTime = (progress.value / 100) * video.duration;
});



// CONSTRUCTION POPUP
function openConstructionPopup() {
    const popup = document.getElementById("constructionPopup");

    if (popup) {
        popup.classList.add("active");
    }
}
function closeConstructionPopup() {
    const popup = document.getElementById("constructionPopup");

    if (popup) {
        popup.classList.remove("active");
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePopup();
        closeConstructionPopup();
    }
});


