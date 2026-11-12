/* =========================================================
   TODO EL CONTENIDO PERSONAL VIVE AQUÍ.
   Cambia textos, fechas y fotos sin tocar el resto del código.
   Las fotos van en la carpeta /fotos (ej: "fotos/primera-cita.jpg").
   ========================================================= */

window.DATA = {
  ella: "Mi amor",          // su nombre o apodo
  yo: "Juan",               // tu nombre o firma
  // Fecha y hora en que se conocieron en persona (año, mes-1, día, hora, min)
  fechaConocimos: new Date(2020, 10, 12, 15, 0),

  titulo: "6 años desde que te vi por primera vez",
  subtitulo: "y desde entonces, todo es más bonito",

  // Música opcional: pon un mp3 en /musica y escribe la ruta, ej: "musica/cancion.mp3"
  musica: "",

  carta: {
    saludo: "Mi amor,",
    parrafos: [
      "Hace seis años te vi por primera vez en persona y no tenía idea de que ese día iba a cambiar mi vida entera.",
      "Desde entonces has sido mi lugar seguro, mi risa favorita y la persona con la que quiero compartir cada pequeña cosa.",
      "Gracias por cada abrazo, cada paciencia, cada aventura y cada día normal que contigo se vuelve especial.",
      "Hice esta página para recordarte, aunque sea un poquito, lo mucho que te amo.",
    ],
    despedida: "Por siempre tuyo,",
  },

  // Línea de tiempo. foto es opcional.
  timeline: [
    { fecha: "12 nov 2020", titulo: "El día que te conocí", texto: "La primera vez que te vi en persona. Nervios, sonrisas y el inicio de todo.", emoji: "✨", foto: "" },
    { fecha: "2021", titulo: "Nuestra primera cita", texto: "Cuéntame aquí qué pasó ese día…", emoji: "☕", foto: "" },
    { fecha: "2022", titulo: "El primer viaje juntos", texto: "Un recuerdo bonito de ese viaje.", emoji: "✈️", foto: "" },
    { fecha: "2023", titulo: "Un momento inolvidable", texto: "Algo que nunca vamos a olvidar.", emoji: "🌙", foto: "" },
    { fecha: "2024", titulo: "Creciendo juntos", texto: "Lo que aprendimos y construimos.", emoji: "🌱", foto: "" },
    { fecha: "2025", titulo: "Más aventuras", texto: "Otro recuerdo que me encanta.", emoji: "🎡", foto: "" },
    { fecha: "12 nov 2026", titulo: "6 años", texto: "Y apenas estamos empezando.", emoji: "💖", foto: "" },
  ],

  // Galería de fotos
  fotos: [
    { src: "", texto: "Nosotros 💕" },
    { src: "", texto: "Mi foto favorita" },
    { src: "", texto: "Ese día" },
    { src: "", texto: "Tu sonrisa" },
    { src: "", texto: "Aventuras" },
    { src: "", texto: "Siempre juntos" },
  ],

  // Cosas que le gustan
  gustos: [
    { emoji: "☁️", texto: "Cinnamoroll" },
    { emoji: "🌹", texto: "Las rosas" },
    { emoji: "🍰", texto: "Los postres" },
    { emoji: "🎶", texto: "Su música" },
    { emoji: "🐶", texto: "Los perritos" },
    { emoji: "🌅", texto: "Los atardeceres" },
    { emoji: "🎬", texto: "Las pelis juntos" },
    { emoji: "🍜", texto: "Su comida favorita" },
  ],

  // Razones por las que la amas (tarjetas)
  razones: [
    "Tu sonrisa, que me arregla cualquier día.",
    "Cómo me cuidas sin que te lo pida.",
    "Tu risa cuando algo te da mucha gracia.",
    "Lo dulce que eres, como Cinnamoroll.",
    "Que contigo hasta lo aburrido es divertido.",
    "Tu forma de ver el mundo.",
    "Lo valiente que eres.",
    "Que me haces querer ser mejor cada día.",
  ],

  // Frases que dice el Cinnamoroll flotante al tocarlo
  frasesMascota: [
    "¡Te ama muchísimo! 💙",
    "6 años y contando ☁️",
    "¡Abrazo de nube!",
    "Eres su persona favorita",
    "¡Feliz aniversario! 🎉",
  ],
};
