document.addEventListener("DOMContentLoaded", () => {
    const text = "Buen día mamita";
    const container = document.getElementById("greetings");
    const colors = ['#C4FAF8', '#97A2FF', '#FFB5E8', '#85E3FF', '#FFC9DE', '#FBE4FF'];

    // Crear elementos
    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        if (char === " ") span.innerHTML = "&nbsp;";
        span.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(span);
    });

    const spans = document.querySelectorAll(".greetings span");

    // 1. Aparición secuencial de izquierda a derecha
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        }, index * 200); // 200ms entre cada letra
    });

    // 2. Iniciar el carrusel de luces una vez que todas aparecieron
    setTimeout(() => {
        let i = 0;
        setInterval(() => {
            // Quitamos la clase a todos
            spans.forEach(s => s.classList.remove('iluminar'));
            // Aplicamos a la letra actual
            if (spans[i].innerText.trim() !== "") {
                spans[i].classList.add('iluminar');
            }
            i = (i + 1) % spans.length;
        }, 600); // Velocidad del carrusel
    }, spans.length * 200 + 1000);
});
