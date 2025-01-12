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