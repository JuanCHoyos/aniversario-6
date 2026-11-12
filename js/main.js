(() => {
  const D = window.DATA;
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  scrollTo(0, 0);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  /* ---------------- Cinnamoroll-style mascot SVG ---------------- */
  const mascotSVG = () => `
  <svg class="mascot" viewBox="0 0 200 175" aria-hidden="true">
    <defs>
      <radialGradient id="mg" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#eaf4ff"/></radialGradient>
    </defs>
    <g class="ear-l"><ellipse cx="42" cy="96" rx="22" ry="50" transform="rotate(38 42 96)" fill="url(#mg)" stroke="#a9cbec" stroke-width="3"/></g>
    <g class="ear-r"><ellipse cx="158" cy="96" rx="22" ry="50" transform="rotate(-38 158 96)" fill="url(#mg)" stroke="#a9cbec" stroke-width="3"/></g>
    <ellipse cx="100" cy="146" rx="32" ry="24" fill="url(#mg)" stroke="#a9cbec" stroke-width="3"/>
    <path d="M132 140 a10 10 0 1 1 10 10 a6 6 0 1 1 -4 -8" fill="#fff" stroke="#a9cbec" stroke-width="3"/>
    <ellipse cx="100" cy="82" rx="60" ry="47" fill="url(#mg)" stroke="#a9cbec" stroke-width="3"/>
    <g class="eyes">
      <ellipse cx="80" cy="86" rx="6.5" ry="8.5" fill="#4a86c8"/><circle cx="82" cy="83" r="2.4" fill="#fff"/>
      <ellipse cx="120" cy="86" rx="6.5" ry="8.5" fill="#4a86c8"/><circle cx="122" cy="83" r="2.4" fill="#fff"/>
    </g>
    <ellipse cx="66" cy="100" rx="9" ry="5.5" fill="#ffbfd3"/>
    <ellipse cx="134" cy="100" rx="9" ry="5.5" fill="#ffbfd3"/>
    <path d="M94 99 q6 6 12 0" fill="none" stroke="#4a86c8" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`;
  $$("[data-mascot]").forEach((el) => (el.innerHTML = mascotSVG()));

  /* ---------------- Particles (WAAPI) ---------------- */
  const fx = $("#fx");
  function burst(x, y, { count = 8, chars = ["💖", "💗", "✨", "💙", "🌸"], spread = 90, size = [14, 24], up = 0 } = {}) {
    if (reduce) count = Math.min(count, 3);
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.textContent = pick(chars);
      p.style.fontSize = rand(size[0], size[1]) + "px";
      fx.appendChild(p);
      const ang = rand(0, Math.PI * 2);
      const dist = rand(spread * 0.4, spread);
      const dx = Math.cos(ang) * dist;
      const dy = Math.sin(ang) * dist - up;
      const rot = rand(-60, 60);
      p.animate(
        [
          { transform: `translate(${x}px, ${y}px) translate(-50%,-50%) scale(0.6) rotate(0deg)`, opacity: 1 },
          { transform: `translate(${x + dx}px, ${y + dy}px) translate(-50%,-50%) scale(1) rotate(${rot}deg)`, opacity: 1, offset: 0.7 },
          { transform: `translate(${x + dx * 1.1}px, ${y + dy + 30}px) translate(-50%,-50%) scale(0.8) rotate(${rot * 1.3}deg)`, opacity: 0 },
        ],
        { duration: rand(700, 1100), easing: EASE_OUT, fill: "forwards" }
      ).onfinish = () => p.remove();
    }
  }
  function rain(chars = ["💖", "💗", "🌹", "💕", "☁️", "✨"], n = 60, dur = 3000) {
    for (let i = 0; i < n; i++) {
      setTimeout(() => {
        const p = document.createElement("span");
        p.className = "particle";
        p.textContent = pick(chars);
        p.style.fontSize = rand(18, 36) + "px";
        fx.appendChild(p);
        const x = rand(0, innerWidth);
        const drift = rand(-80, 80);
        p.animate(
          [
            { transform: `translate(${x}px, -50px) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${x + drift}px, ${innerHeight + 60}px) rotate(${rand(-180, 180)}deg)`, opacity: 0.9 },
          ],
          { duration: rand(2200, 3600), easing: "cubic-bezier(0.4, 0, 0.6, 1)", fill: "forwards" }
        ).onfinish = () => p.remove();
      }, rand(0, dur));
    }
  }
  // Every tap on the page leaves a tiny trail of hearts
  addEventListener("pointerdown", (e) => {
    if (e.target.closest("button, .polaroid, .like, .card, .tl-card")) return; // those have their own bursts
    burst(e.clientX, e.clientY, { count: 6, spread: 60, size: [12, 18] });
  });
  const centerOf = (el) => {
    const r = el.getBoundingClientRect();
    return [r.left + r.width / 2, r.top + r.height / 2];
  };

  /* ---------------- Roses ---------------- */
  const palettes = [
    ["#a8163a", "#e2365b", "#f05a7a"],
    ["#c2185b", "#ef6f9a", "#ff9fbf"],
    ["#b31b3c", "#e8435f", "#ff7896"],
  ];
  const roseSVG = ([dark, mid, light]) => `
  <svg class="rose" viewBox="0 0 120 300">
    <path class="stem" d="M60 300 C 48 240, 74 170, 60 95"/>
    <path class="leaf l" d="M58 215 C 40 200, 22 205, 14 216 C 30 228, 48 226, 58 215Z"/>
    <path class="leaf r" d="M62 180 C 78 162, 98 166, 106 176 C 92 190, 74 192, 62 180Z"/>
    <g class="bloom">
      <ellipse cx="40" cy="74" rx="20" ry="22" fill="${dark}"/>
      <ellipse cx="80" cy="74" rx="20" ry="22" fill="${dark}"/>
      <path class="petal" d="M28 72 Q28 108 60 110 Q92 108 92 72 Q76 86 60 84 Q44 86 28 72Z" fill="${mid}"/>
      <ellipse cx="60" cy="64" rx="24" ry="20" fill="${mid}"/>
      <path d="M48 64 a12 9 0 1 1 24 0 a8 6 0 1 1 -16 0 a4 3 0 1 1 8 0" fill="none" stroke="${dark}" stroke-width="2.4" stroke-linecap="round"/>
      <path class="petal" d="M28 72 Q36 102 60 104 Q48 86 28 72Z" fill="${light}"/>
      <path class="petal" d="M92 72 Q84 102 60 104 Q72 86 92 72Z" fill="${light}" opacity="0.85"/>
    </g>
  </svg>`;
  const garden = $("#garden");
  const roseCount = innerWidth < 600 ? 7 : 13;
  for (let i = 0; i < roseCount; i++) {
    const wrap = document.createElement("div");
    wrap.innerHTML = roseSVG(palettes[i % palettes.length]);
    const svg = wrap.firstElementChild;
    const t = roseCount === 1 ? 0.5 : i / (roseCount - 1);
    const edge = Math.abs(t - 0.5) * 2; // 0 center → 1 edges
    const scale = (0.75 + edge * 0.7) * (innerWidth < 600 ? 0.75 : 1) * (i % 2 ? 0.8 : 1.05) * rand(0.92, 1.08);
    svg.style.left = `calc(${3 + t * 94}% - 60px)`;
    svg.style.transform = `scale(${scale}) rotate(${(t - 0.5) * 18}deg)`;
    svg.style.transformOrigin = "bottom center";
    svg.style.setProperty("--d", `${0.2 + edge * 0.1 + i * 0.12}s`);
    garden.appendChild(svg);
  }

  /* ---------------- Hero text ---------------- */
  $("[data-name]").textContent = `Para ${D.ella}`;
  $("#title").innerHTML = D.titulo
    .split(" ")
    .map((w, i) => `<span class="w" style="animation-delay:${300 + i * 90}ms">${w}</span>`)
    .join(" ");
  $("#subtitle").textContent = D.subtitulo;

  // Counter since we met
  const units = { d: $('[data-u="d"]'), h: $('[data-u="h"]'), m: $('[data-u="m"]'), s: $('[data-u="s"]') };
  function updateCounter() {
    let diff = Math.max(0, Date.now() - D.fechaConocimos.getTime()) / 1000;
    const vals = { d: Math.floor(diff / 86400), h: Math.floor((diff % 86400) / 3600), m: Math.floor((diff % 3600) / 60), s: Math.floor(diff % 60) };
    for (const k in vals) {
      const txt = vals[k].toLocaleString("es");
      if (units[k].textContent !== txt) {
        units[k].textContent = txt;
        units[k].classList.remove("tick");
        void units[k].offsetWidth;
        units[k].classList.add("tick");
      }
    }
  }
  updateCounter();
  setInterval(updateCounter, 1000);

  /* ---------------- Intro ---------------- */
  const audio = $("#audio");
  const musicBtn = $("#musicBtn");
  if (D.musica) {
    audio.src = D.musica;
    musicBtn.hidden = false;
    musicBtn.addEventListener("click", () => {
      if (audio.paused) audio.play(); else audio.pause();
    });
    audio.addEventListener("play", () => musicBtn.classList.add("playing"));
    audio.addEventListener("pause", () => musicBtn.classList.remove("playing"));
  }

  $("#openBtn").addEventListener("click", (e) => {
    const [x, y] = centerOf(e.currentTarget);
    burst(x, y, { count: 36, spread: 260, size: [16, 32] });
    if (D.musica) audio.play().catch(() => {});
    const intro = $("#intro");
    intro.classList.add("gone");
    document.body.classList.remove("locked");
    document.body.classList.add("started");
    setTimeout(() => {
      intro.remove();
      $("#floaty").classList.add("show");
    }, 800);
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
  );
  const observe = (els) => els.forEach((el) => io.observe(el));

  /* ---------------- Letter ---------------- */
  const env = $("#envelope");
  const letterModal = $("#letterModal");
  const c = D.carta;
  const lines = [c.saludo, ...c.parrafos, `${c.despedida}<br><span class="sign">${D.yo}</span>`];
  $("#letterBody").innerHTML = lines.map((l, i) => `<p style="animation-delay:${250 + i * 420}ms">${l}</p>`).join("");

  function openModal(m) {
    m.classList.add("show");
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal(m) {
    m.classList.remove("show");
    m.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(m); }));
  addEventListener("keydown", (e) => { if (e.key === "Escape") $$(".modal.show").forEach(closeModal); });

  env.addEventListener("click", () => {
    const [x, y] = centerOf(env);
    if (!env.classList.contains("open")) {
      env.classList.add("open");
      burst(x, y, { count: 18, spread: 160, chars: ["💌", "💖", "💗", "🌹"] });
      setTimeout(() => openModal(letterModal), 1100);
    } else {
      burst(x, y, { count: 8 });
      openModal(letterModal);
    }
  });

  /* ---------------- Photo placeholder helper ---------------- */
  const pastel = ["#cfe8ff,#ffe0ec", "#ffe0ec,#fff4d6", "#e2f5e9,#cfe8ff", "#f1e4ff,#ffe0ec", "#fff4d6,#cfe8ff"];
  const placeholder = (i) => `<span class="ph-empty" style="display:grid;place-items:center;width:100%;height:100%;background:linear-gradient(135deg,${pastel[i % pastel.length]})">📷</span>`;
  // Si la foto aún no existe, muestra un recuadro bonito en vez de una imagen rota
  window.__phFail = (img, i) => { img.outerHTML = placeholder(i); };
  const photoHTML = (src, i, alt = "") =>
    src ? `<img src="${src}" alt="${alt}" loading="lazy" onerror="__phFail(this, ${i})">` : placeholder(i);

  /* ---------------- Timeline ---------------- */
  const tl = $("#timeline");
  tl.innerHTML = D.timeline
    .map(
      (t) => `
    <li class="tl-item">
      <span class="tl-dot">${t.emoji}</span>
      <button class="tl-card">
        <span class="tl-date">${t.fecha}</span>
        <h3 class="tl-title">${t.titulo}</h3>
        <div class="tl-more"><div>
          <p>${t.texto}</p>
          ${t.foto ? `<img class="tl-photo" src="${t.foto}" alt="" loading="lazy" onerror="this.remove()">` : ""}
        </div></div>
      </button>
    </li>`
    )
    .join("");
  $$(".tl-item", tl).forEach((item, i) => {
    $(".tl-card", item).addEventListener("click", (e) => {
      item.classList.toggle("open");
      item.classList.remove("jump");
      void item.offsetWidth;
      item.classList.add("jump");
      const [x, y] = centerOf($(".tl-dot", item));
      burst(x, y, { count: 12, spread: 100, chars: D.timeline[i].chars || [D.timeline[i].emoji, "✨", "💖"] });
    });
  });
  observe($$(".tl-item", tl));
  function tlProgress() {
    const r = tl.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / r.height));
    tl.style.setProperty("--progress", p.toFixed(3));
  }
  addEventListener("scroll", tlProgress, { passive: true });
  tlProgress();

  /* ---------------- Gallery ---------------- */
  const gal = $("#gallery");
  gal.innerHTML = D.fotos
    .map(
      (f, i) => `
    <button class="polaroid" style="--r:${rand(-6, 6).toFixed(1)}deg;--delay:${(i % 3) * 110}ms" data-i="${i}">
      <div class="ph">${photoHTML(f.src, i, f.texto)}</div>
      <div class="cap">${f.texto}</div>
    </button>`
    )
    .join("");
  observe($$(".polaroid", gal));
  const lb = $("#lightbox");
  gal.addEventListener("click", (e) => {
    const p = e.target.closest(".polaroid");
    if (!p) return;
    const f = D.fotos[+p.dataset.i];
    const [x, y] = centerOf(p);
    burst(x, y, { count: 10, chars: ["📸", "💖", "✨"] });
    $("#lbImg").innerHTML = photoHTML(f.src, +p.dataset.i, f.texto);
    $("#lbCap").textContent = f.texto;
    setTimeout(() => openModal(lb), 120);
  });

  /* ---------------- Antes y ahora ---------------- */
  const cmp = $("#compare");
  const A = D.antesAhora;
  if (A) {
    $("#cmpBefore").innerHTML = photoHTML(A.antes, 0, A.textoAntes);
    $("#cmpAfter").innerHTML = photoHTML(A.ahora, 3, A.textoAhora);
    $("#cmpTagL").textContent = A.textoAntes;
    $("#cmpTagR").textContent = A.textoAhora;
    const range = $("#cmpRange");
    const setPos = (v) => cmp.style.setProperty("--pos", v + "%");
    range.addEventListener("input", () => setPos(range.value));
    range.addEventListener("pointerdown", () => cmp.classList.add("dragging"));
    addEventListener("pointerup", () => cmp.classList.remove("dragging"));
    // Pequeña demostración la primera vez que aparece
    const demo = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting || reduce) return;
      demo.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1800);
        const v = 50 + Math.sin(k * Math.PI * 2) * 30 * (1 - k);
        setPos(v); range.value = v;
        if (k < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 700);
    }, { threshold: 0.6 });
    demo.observe(cmp);
  } else {
    $("#antes").remove();
  }

  /* ---------------- Likes ---------------- */
  const likes = $("#likes");
  likes.innerHTML = D.gustos
    .map((g, i) => {
      const isCinna = /cinnamoroll/i.test(g.texto);
      return `<button class="like" style="--delay:${i * 60}ms" data-i="${i}">
        <span class="em">${isCinna ? mascotSVG() : g.emoji}</span>
        <span class="tx">${g.texto}</span>
      </button>`;
    })
    .join("");
  observe($$(".like", likes));
  likes.addEventListener("click", (e) => {
    const b = e.target.closest(".like");
    if (!b) return;
    const g = D.gustos[+b.dataset.i];
    b.classList.remove("boing");
    void b.offsetWidth;
    b.classList.add("boing");
    const [x, y] = centerOf($(".em", b));
    const chars = g.chars || (/cinnamoroll/i.test(g.texto) ? ["☁️", "💙", "🤍"] : [g.emoji, "💖", "✨"]);
    setTimeout(() => burst(x, y - 20, { count: 12, spread: 110, chars, up: 30 }), 220);
  });

  /* ---------------- Reasons deck ---------------- */
  const deck = $("#deck");
  const order = D.razones.map((_, i) => i);
  deck.innerHTML = D.razones.map((r, i) => `<div class="card" data-i="${i}"><span class="num">#${i + 1}</span>${r}</div>`).join("");
  const cards = $$(".card", deck);
  let seen = 1;
  function layoutDeck() {
    order.forEach((idx, pos) => {
      const el = cards[idx];
      el.style.setProperty("--i", pos);
      el.style.opacity = pos > 3 ? 0 : 1;
      el.style.pointerEvents = pos === 0 ? "auto" : "none";
    });
    $("#deckCount").textContent = `${seen} de ${D.razones.length}`;
  }
  layoutDeck();
  let flying = false;
  deck.addEventListener("click", () => {
    if (flying) return;
    flying = true;
    const top = cards[order[0]];
    const [x, y] = centerOf(top);
    burst(x, y, { count: 12, spread: 130 });
    top.classList.add("fly");
    setTimeout(() => {
      order.push(order.shift());
      seen = (seen % D.razones.length) + 1;
      top.style.transition = "none";
      top.classList.remove("fly");
      layoutDeck();
      void top.offsetWidth;
      top.style.transition = "";
      flying = false;
    }, 380);
  });

  /* ---------------- Final ---------------- */
  $("#signature").textContent = `Te amo, ${D.yo} 💖`;
  const noBtn = $("#noBtn");
  const dodge = () => {
    const dx = rand(-140, 140), dy = rand(-90, 60);
    noBtn.style.transform = `translate(${dx}px, ${dy}px) rotate(${rand(-20, 20)}deg)`;
    noBtn.textContent = pick(["¿Segura?", "Nop 🙈", "Intenta otra vez", "¡No se puede!", "Mejor el Sí 💖"]);
  };
  noBtn.addEventListener("pointerenter", dodge);
  noBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); dodge(); });
  noBtn.addEventListener("click", (e) => { e.preventDefault(); dodge(); });
  let celebrated = false;
  $("#yesBtn").addEventListener("click", (e) => {
    const [x, y] = centerOf(e.currentTarget);
    burst(x, y, { count: 40, spread: 300, size: [18, 34] });
    rain(undefined, 80, 2500);
    const m = $(".final-mascot");
    m.classList.remove("squish"); void m.offsetWidth; m.classList.add("squish");
    if (!celebrated) {
      celebrated = true;
      const p = document.createElement("p");
      p.className = "celebrate";
      p.textContent = "¡Sabía que dirías que sí! Feliz aniversario, mi amor 🌹";
      $(".final-actions").after(p);
      noBtn.remove();
    }
  });

  /* ---------------- Floating mascot ---------------- */
  const floaty = $("#floaty");
  const bubble = $("#bubble");
  let bubbleTimer;
  floaty.addEventListener("click", () => {
    const inner = floaty.querySelector("[data-mascot] svg");
    inner.classList.remove("squish"); void inner.offsetWidth; inner.classList.add("squish");
    const [x, y] = centerOf(floaty);
    burst(x, y - 20, { count: 10, chars: ["☁️", "💙", "🤍", "✨"], up: 40 });
    bubble.textContent = pick(D.frasesMascota);
    bubble.classList.add("show");
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => bubble.classList.remove("show"), 2200);
  });

  // Reveal remaining simple elements
  observe($$(".reveal"));
})();
