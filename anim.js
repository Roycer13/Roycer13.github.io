document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    // Mostrar la primera imagen
    if(images.length > 0) {
        images[0].classList.add("active");
    }

    // Cambiar imagen cada 3 segundos
    setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }, 3000); 
});


//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
