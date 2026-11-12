/* =========================================================
   TODO EL CONTENIDO PERSONAL VIVE AQUÍ.
   Cambia textos, fechas y fotos sin tocar el resto del código.
   Las fotos van en la carpeta /fotos (ej: "fotos/cartagena.jpg").
   ========================================================= */

window.DATA = {
  ella: "Mi amor",          // su nombre o apodo
  yo: "Juan",               // tu nombre o firma
  // Fecha en que se conocieron en persona (año, mes-1, día, hora, min)
  fechaConocimos: new Date(2020, 10, 12, 15, 0),

  titulo: "6 años desde que te vi por primera vez",
  subtitulo: "y ese día caminé de tu casa a la mía de pura felicidad",

  // Música opcional: pon un mp3 en /musica y escribe la ruta, ej: "musica/cancion.mp3"
  musica: "",

  carta: {
    saludo: "Mi amor,",
    parrafos: [
      "El 12 de noviembre de 2020 te vi por primera vez en persona. Ese día me fui caminando desde tu casa hasta la mía, y no me importó lo lejos: iba tan feliz que ni sentí el camino.",
      "Seis años después sigo sintiendo lo mismo. Nos volvimos a ver, nos hicimos novios, llegó Sora a llenarnos la casa de amor, y conocimos juntos Cartagena y Santa Marta.",
      "Gracias por cada abrazo, cada risa, cada paciencia y cada día normal que contigo se vuelve especial.",
      "Hice esta página para recordarte, aunque sea un poquito, lo mucho que te amo. Y para decirte que quiero seguir caminando contigo, tan feliz como ese primer día.",
    ],
    despedida: "Por siempre tuyo,",
  },

  // Línea de tiempo. foto es opcional (ej: "fotos/cartagena.jpg").
  timeline: [
    { fecha: "12 nov 2020", titulo: "El día que te conocí", texto: "La primera vez que te vi en persona. Después caminé de tu casa a la mía de la felicidad 👣", emoji: "✨", chars: ["👣", "💖", "✨"], foto: "fotos/conocimos-1.jpg" },
    { fecha: "Junio 2021", titulo: "Nos volvimos a ver", texto: "Volver a verte confirmó lo que ya sabía: quería estar contigo.", emoji: "🤍", foto: "" },
    { fecha: "2021", titulo: "Nos hicimos novios", texto: "El día que dijiste que sí y empezó lo nuestro.", emoji: "💍", foto: "" },
    { fecha: "2022", titulo: "Llegó Sora", texto: "Adoptamos a Sora y nuestra familia se hizo más grande y más feliz.", emoji: "🐾", chars: ["🐾", "💙", "🤍"], foto: "fotos/sora.jpg" },
    { fecha: "2024", titulo: "Cartagena", texto: "Nuestro primer viaje juntos. Murallas, calor y tú.", emoji: "🏖️", chars: ["🏖️", "☀️", "🌴"], foto: "" },
    { fecha: "2025", titulo: "Santa Marta", texto: "Otro viaje, más mar y más recuerdos contigo.", emoji: "🌊", chars: ["🌊", "🐚", "☀️"], foto: "" },
    { fecha: "12 nov 2026", titulo: "6 años", texto: "Y apenas estamos empezando.", emoji: "💖", foto: "fotos/despues-2.jpg" },
  ],

  // Galería de fotos
  fotos: [
    { src: "fotos/conocimos-1.jpg", texto: "El primer día 🦖" },
    { src: "fotos/conocimos-2.jpg", texto: "12 · nov · 2020" },
    { src: "fotos/despues-1.jpg", texto: "¡Hola! 👋" },
    { src: "fotos/despues-2.jpg", texto: "Nosotros 💕" },
    { src: "fotos/sora.jpg", texto: "Con Sora 🐾" },
    { src: "fotos/viaje.jpg", texto: "De viaje 🌊" },
  ],

  // Sección "Antes y ahora" (deslizador)
  antesAhora: { antes: "fotos/conocimos-1.jpg", ahora: "fotos/despues-2.jpg", textoAntes: "2020", textoAhora: "Hoy" },

  // Cosas que le gustan. chars = emojis que salen al tocar (opcional)
  gustos: [
    { emoji: "☁️", texto: "Cinnamoroll" },
    { emoji: "🖤💗", texto: "BLACKPINK", chars: ["🖤", "💗", "🎤", "✨"] },
    { emoji: "💛", texto: "La maracuyá", chars: ["💛", "🍹", "💜"] },
    { emoji: "🐾", texto: "Sora", chars: ["🐾", "💙", "🤍"] },
    { emoji: "🌹", texto: "Las rosas", chars: ["🌹", "🌸", "💖"] },
    { emoji: "✈️", texto: "Viajar juntos", chars: ["✈️", "🏖️", "🌊"] },
  ],

  // Razones por las que la amas (tarjetas)
  razones: [
    "Porque desde el primer día me haces caminar feliz.",
    "Tu sonrisa, que me arregla cualquier día.",
    "Lo bonita que eres con Sora.",
    "Lo dulce que eres, como Cinnamoroll.",
    "Cómo te emocionas con BLACKPINK.",
    "Que contigo hasta lo aburrido es divertido.",
    "Que cada viaje contigo se vuelve inolvidable.",
    "Que me haces querer ser mejor cada día.",
  ],

  // Frases que dice el Cinnamoroll flotante al tocarlo
  frasesMascota: [
    "¡Te ama muchísimo! 💙",
    "6 años y contando ☁️",
    "¡Abrazo de nube!",
    "Sora también te manda besos 🐾",
    "Eres su persona favorita",
    "¡Feliz aniversario! 🎉",
  ],
};
