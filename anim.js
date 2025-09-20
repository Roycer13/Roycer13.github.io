// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "Escucha la canción y manten la pantalla en movimiento (si lo ves desde el celular)", time: 2 },
  { text: "Puede que no te responda rápido", time: 6 },
  { text: "Pero te tengo presente.", time: 9 },
 
  { text: "Querida", time: 19 },
  { text: "Cada momento de mi vida", time: 22 },
  { text: "Yo pienso en ti más cada día", time: 29 },
  { text: "Mira mi soledad", time: 34 },
  { text: "Que no me sienta nada bien", time: 39 },
  { text: "Oh... ven ya", time: 42 },

  { text: "Querida", time: 46 },
  { text: "No me ha sanado bien la herida", time: 51 },
  { text: "Te extraño y lloro todavía", time: 56 },
  { text: "Mira mi soledad", time: 61 },
  { text: "Que no me sienta nada bien", time: 65 },
  { text: "Oh ven ya...", time: 70 },

  { text: "Querida", time: 72 },
  { text: "Piensa en mí... Siempre piensa en mí", time: 78 },
  { text: "Date cuenta de que el tiempo es cruel", time: 83 },
  { text: "Y lo he pasado yo sin ti, así (Ven ven ven)", time: 88 },

  { text: "Querida", time: 92 },
  { text: "Hazlo por quien más quieras tú", time: 98 },
  { text: "Yo quiero ver de nuevo luz", time: 103 },
  { text: "En todo mi casa", time: 106 },

  { text: "Oh querida", time: 111 },
  { text: "Ven a mí que estoy SUFRIENDO", time: 114 },
  { text: "Ven a mí que estoy MURIENDO", time: 119 },
  { text: "En esta soledad", time: 126 },
  { text: "Que no me sienta nada bien", time: 131 },

  { text: "Querida", time: 138 },
  { text: "Por lo que quieras tú más ven", time: 142 },
  { text: "Más compasión de mí tú ten", time: 147 },
  { text: "Mira mi soledad", time: 153 },
  { text: "Que no me sienta nada ¡BIEN!", time: 158 },

  { text: "Querida", time: 165 },
  { text: "Querida", time: 167 },
  { text: "Dime cuándo tú (dime cuándo)", time: 176 },
  { text: "Dime cuándo tú vas a volver ¡aja!", time: 178 },
  { text: "Dime cuándo tú (para cuándo dime)", time: 180 },
  { text: "Dime cuándo tú vas a ¡Volver! (para cuándo dime)", time: 185 },

  { text: "Querida", time: 201 },
  { text: "Dime cuándo tú", time: 211 },
  { text: "Dime cuándo tú vas a volver ¡aja!", time: 214 },
  { text: "Dime cuándo tú", time: 216 },
  { text: "Dime cuándo tú vas a ¡Volver...!", time: 220 },

  { text: "(Amor, amor, amor)", time: 221 },
  { text: "Ay amor", time: 228 },
  { text: "Querida (¡ay amor!)", time: 232 },

  { text: "¿Para cuándo?, dime ¿para cuándo? dime, ¿para cuándo?", time: 243 },
  { text: "¿Para cuándo?, dime ¿para cuándo? dime, ¿para cuándo?", time: 249 },
  { text: "Vas a volver", time: 254 },
  { text: "Querida", time: 256 },

  { text: "(Vas a volver) dime cuándo tú.. Dime cuándo tú", time: 260 },


  { text: "Dime cuando vas a volver", time: 268 },
  { text: "Amor amor amor", time: 274 },
];



// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

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
