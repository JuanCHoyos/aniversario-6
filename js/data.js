/* =========================================================
   TODO EL CONTENIDO PERSONAL VIVE AQUÍ.
   Cambia textos, fechas y fotos sin tocar el resto del código.
   Las fotos van en la carpeta /fotos (ej: "fotos/cartagena.webp").
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
      "Desde el primer momento en que te conocí me gustó tu forma de ser. Ese 12 de noviembre de 2020 me fui caminando de tu casa a la mía, y no sentí el camino de lo feliz que iba.",
      "Hemos pasado tiempos difíciles, pero todavía recuerdo lo que sentí la primera vez que te vi: sentí que eras la persona para mí. Y lo sigo sintiendo.",
      "Me alegra no haberme rendido las veces que tuvimos dificultades. Me alegra haberte escogido, y que tú me hayas escogido a mí.",
      "Seis años después, lo tengo más claro que nunca: mi futuro eres tú, y sin ti no lo hay. Mi felicidad está junto a ti.",
    ],
    despedida: "Te amo, hoy y siempre,",
  },

  // Línea de tiempo. foto es opcional (ej: "fotos/cartagena.webp").
  timeline: [
    { fecha: "12 nov 2020", titulo: "El día que te conocí", texto: "La primera vez que te vi en persona. Después caminé de tu casa a la mía de la felicidad 👣", emoji: "✨", chars: ["👣", "💖", "✨"], foto: "fotos/conocimos-1.webp" },
    { fecha: "Junio 2021", titulo: "Nos volvimos a ver", texto: "Volver a verte confirmó lo que ya sabía: quería estar contigo.", emoji: "🤍", foto: "" },
    { fecha: "2021", titulo: "Nos hicimos novios", texto: "El día que dijiste que sí y empezó lo nuestro.", emoji: "💍", foto: "" },
    { fecha: "2022", titulo: "Llegó Sora", texto: "Adoptamos a Sora y nuestra familia se hizo más grande y más feliz.", emoji: "🐾", chars: ["🐾", "💙", "🤍"], foto: "fotos/sora.webp" },
    { fecha: "2024", titulo: "Cartagena", texto: "Nuestro primer viaje juntos. Murallas, calor y tú.", emoji: "🏖️", chars: ["🏖️", "☀️", "🌴"], foto: "" },
    { fecha: "2025", titulo: "Santa Marta", texto: "Otro viaje, más mar y más recuerdos contigo.", emoji: "🌊", chars: ["🌊", "🐚", "☀️"], foto: "fotos/viaje.webp" },
    { fecha: "12 nov 2026", titulo: "6 años", texto: "Y apenas estamos empezando.", emoji: "💖", foto: "fotos/despues-2.webp" },
  ],

  // Galería de fotos
  fotos: [
    { src: "fotos/conocimos-1.webp", texto: "Mi foto favorita 💖" },
    { src: "fotos/conocimos-2.webp", texto: "12 · nov · 2020" },
    { src: "fotos/despues-1.webp", texto: "Tú, siempre preciosa ✨" },
    { src: "fotos/despues-2.webp", texto: "Cuando yo era lindo 😅" },
    { src: "fotos/sonrisa.webp", texto: "Tu sonrisa ☀️" },
    { src: "fotos/sora.webp", texto: "Sora bebé 🐾" },
    { src: "fotos/viaje.webp", texto: "Nosotros, hoy 🌊" },
  ],

  // Sección "Antes y ahora" (deslizador)
  antesAhora: { antes: "fotos/conocimos-1.webp", ahora: "fotos/viaje.webp", textoAntes: "2020", textoAhora: "Hoy" },

  // Cosas que le gustan. chars = emojis que salen al tocar (opcional)
  gustos: [
    { emoji: "☁️", texto: "Cinnamoroll" },
    { emoji: "🖤💗", texto: "BLACKPINK", chars: ["🖤", "💗", "🎤", "✨"] },
    { emoji: "💜", texto: "BTS", chars: ["💜", "🎤", "✨"] },
    { emoji: "🖤🎸", texto: "The Cure", chars: ["🖤", "🎸", "🌙"] },
    { emoji: "🍓", texto: "Las fresas", chars: ["🍓", "💗", "🍓"] },
    { emoji: "💛", texto: "La maracuyá", chars: ["💛", "🍹", "💜"] },
    { emoji: "🐾", texto: "Sora", chars: ["🐾", "💙", "🤍"] },
    { emoji: "🐱", texto: "Ares", chars: ["🐱", "🐾", "🖤"] },
    { emoji: "✈️", texto: "Viajar juntos", chars: ["✈️", "🏖️", "🌊"] },
    { emoji: "🙋‍♂️", texto: "Yo 😌", chars: ["🥰", "💖", "😘", "✨"] },
  ],

  // Razones por las que me haces feliz (tarjetas)
  razones: [
    "Tu carita linda.",
    "Cuando sonríes. La misma sonrisa que me enamoró el primer día.",
    "Que cuando estoy feliz, me gusta caminar y estar a tu lado.",
    "Ver películas junto a ti.",
    "Cuando te pones tierna.",
    "Cómo amas a Ares.",
    "Lo bonita que eres con Sora.",
    "Que te escogí, y que tú me escogiste.",
    "Que mi felicidad está junto a ti.",
  ],

  // Frases que dice el Cinnamoroll flotante al tocarlo
  frasesMascota: [
    "¡Te ama muchísimo! 💙",
    "6 años y contando ☁️",
    "¡Abrazo de nube!",
    "Sora también te manda besos 🐾",
    "Ares dice miau 🐱💖",
    "Eres su persona favorita",
    "¡Feliz aniversario! 🎉",
  ],
};
