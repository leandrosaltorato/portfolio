const $ = (s, r = document) => r.querySelector(s),
  $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- dados ---------- */
const SERVICES = [
  [
    "Desenvolvimento Mobile com Flutter",
    [
      "Apps multiplataforma com Flutter e Dart",
      "Interfaces fluidas com animações",
      "Integração com APIs e banco de dados",
      "Entrega de projetos no formato de competição",
    ],
    "Construo apps mobile de ponta a ponta, da tela inicial à integração com o back-end, com foco em clareza e desempenho.",
  ],
  [
    "UI Mobile & Animação",
    [
      "Layouts responsivos fiéis ao design",
      "Microinterações e transições leves",
      "Componentes reutilizáveis",
    ],
    "Interfaces consistentes, com atenção a espaçamento, tipografia e movimento.",
  ],
  [
    "Serviços de App & Back-end",
    [
      "APIs REST com Express",
      "Modelagem com Prisma e MySQL",
      "Autenticação e regras de negócio",
    ],
    "Back-ends simples e organizados que sustentam o app sem complicação.",
  ],
  [
    "Testes & Qualidade",
    [
      "Teste de caixa branca",
      "Documentação de erros de lógica",
      "Revisão e correção de código",
    ],
    "Encontro e documento falhas de lógica antes que cheguem ao usuário.",
  ],
  [
    "Desenvolvimento Web",
    [
      "JavaScript, React e Vite",
      "Node.js com Express (full-stack)",
      "HTML e CSS puros",
      "Sites e portfólios responsivos",
    ],
    "Sites e sistemas web leves, sem dependências desnecessárias.",
  ],
  [
    "Projetos de Competição",
    [
      "4 anos de FLL (competidor) e 1 ano como mentor",
      "2 anos de OBR e 1 ano de SPSkills",
      "Entrega no prazo com escopo definido",
    ],
    "Experiência em entregar soluções completas sob pressão de tempo, em equipe e individualmente.",
  ],
];
// [título, subtítulo, descrição, arte, repositório, demo (opcional), tecnologias]
const GH = "https://github.com/leandrosaltorato/";
const PROJECTS = [
  [
    "FinanPlan",
    "Controle Financeiro Pessoal",
    "Plataforma de finanças pessoais em três frentes: site web, app Flutter e back-end em Node.js com Express, Prisma e MySQL. Cadastro e busca de despesas, visão por categoria, resumo financeiro e orçamentos com gráfico.",
    "laptop",
    GH + "project-finanplan",
    "",
    ["Flutter", "Node.js", "Express", "Prisma", "MySQL", "Firebase"],
  ],
  [
    "Consultas",
    "Agendamento Full-stack",
    "Projeto full-stack de agendamento de consultas, com front-end e back-end separados e relatório técnico do desenvolvimento.",
    "laptop",
    GH + "consultancy-project",
    "",
    ["Full-stack", "Back-end", "Front-end", "JavaScript"],
  ],
  [
    "Caminhadas",
    "App de Rotas a Pé",
    "App Flutter para registrar e acompanhar caminhadas: escolha o destino no mapa, veja a rota e estime distância, tempo e calorias. Salva cada caminhada com foto e tem tema claro e escuro.",
    "phone",
    GH + "flutter_caminhadas_maps",
    "",
    ["Flutter", "OpenStreetMap", "OSRM", "GPS", "Câmera"],
  ],
  [
    "Receitas",
    "App com API Própria",
    "App Flutter ligado a uma API própria com CRUD completo: lista, busca e filtra receitas por tipo (doce, salgada e bebida), cria, edita, exclui e guarda as favoritas no aparelho.",
    "phone",
    GH + "flutter_receitas",
    "",
    ["Flutter", "REST API", "CRUD", "shared_preferences"],
  ],
  [
    "Just in Time",
    "Controle de Produção e Estoque",
    "Sistema com login, cadastro de produtos e movimentações de produção (fabricado e pedido), com alerta quando o estoque cai abaixo do mínimo. Inclui modelagem do banco (DER) e documentação de testes.",
    "laptop",
    GH + "just_in_time_01_2026",
    "",
    ["JavaScript", "Back-end", "DER", "Testes"],
  ],
  [
    "Clothing",
    "Loja de Roupas Completa",
    "Projeto de loja de roupas completa, com front-end em HTML, CSS e JavaScript e uma pasta de back-end. Publicado online na Vercel.",
    "laptop",
    GH + "full-clothing-store",
    "https://full-clothing-store.vercel.app",
    ["HTML", "CSS", "JavaScript", "Vercel"],
  ],
];
const CMPS = [
  ["Switch", "on / off", "#6a3df0"],
  ["Magnet", "magnético", "#d86aa0"],
  ["Counter", "contador", "#2f8f7a"],
  ["Range", "slider", "#4a6ad8"],
  ["Tabs", "abas", "#22a58a"],
  ["Toast", "aviso", "#9a8f6a"],
];
// componentes reais (HTML, CSS e JS puros) que rodam dentro dos cards
const DEMOS = [
  `<button class="sw" role="switch" aria-checked="false" aria-label="Alternar"></button><p class="lb">Desligado</p>`,
  `<button class="mag">Passe o mouse</button>`,
  `<div class="ctr"><button aria-label="Diminuir">−</button><output>0</output><button aria-label="Aumentar">+</button></div>`,
  `<output class="val">50</output><input class="rng" type="range" min="0" max="100" value="50" aria-label="Valor" />`,
  `<div class="tabs"><i></i><button>Sobre</button><button>Stack</button><button>Contato</button></div><p class="lb tp"></p>`,
  `<button class="pill light tbtn">Disparar aviso</button><div class="toasts"></div>`,
];

/* ---------- render ---------- */
$("#acc").innerHTML = SERVICES.map(
  (s, i) =>
    `<li><div class="row"><span>0${i + 1}</span><b>${s[0].toUpperCase()}</b><i>↘</i></div><div class="body"><ul>${s[1].map((x) => `<li>${x}</li>`).join("")}</ul><div>${s[2]}<br><a>VER PROJETOS ↘</a></div></div></li>`,
).join("");
$$("#acc>li").forEach(
  (li) =>
    (li.onclick = () => {
      const o = li.classList.contains("open");
      $$("#acc>li").forEach((x) => x.classList.remove("open"));
      if (!o) li.classList.add("open");
    }),
);

$("#projects").innerHTML = PROJECTS.map((p, i) => {
  const art = {
    phone:
      '<div class="phone"><i style="left:22%;height:14%"></i><i style="left:44%;height:24%"></i><i style="left:66%;height:18%"></i></div>',
    laptop: '<div class="laptop"></div>',
    stars: '<div class="stars"></div>',
  }[p[3]];
  const ext = 'target="_blank" rel="noopener"',
    demo = p[5]
      ? `<a class="pill light" href="${p[5]}" ${ext}>Ver online ↗</a>`
      : "",
    tags = p[6].map((t) => `<li>${t}</li>`).join("");
  return `<article class="pj"><div class="shot rv">${art}</div><div class="meta rv"><small>0${i + 1}</small><h3>${p[0]}<br>${p[1]}</h3><p>${p[2]}</p><ul class="tags">${tags}</ul><div class="btns">${demo}<a class="pill${demo ? "" : " light"}" href="${p[4]}" ${ext}>Código no GitHub ⌥</a></div></div></article>`;
}).join("");

$("#shelf").innerHTML = CMPS.map(
  (c, i) =>
    `<div class="cmp" style="--c:${c[2]}55"><div class="art"><div class="demo">${DEMOS[i]}</div></div><div><h4>${c[0]}<span>${c[1]}</span></h4><small>HTML · CSS · JS</small></div></div>`,
).join("");

/* ---------- comportamento dos componentes ---------- */
(() => {
  const card = (i) => $$(".cmp")[i];
  // 1) Switch
  {
    const c = card(0),
      b = $(".sw", c),
      t = $(".lb", c);
    b.onclick = () => {
      const on = b.getAttribute("aria-checked") !== "true";
      b.setAttribute("aria-checked", on);
      t.textContent = on ? "Ligado" : "Desligado";
    };
  }
  // 2) Botão magnético: acompanha o mouse dentro do card
  {
    const d = $(".demo", card(1)),
      b = $(".mag", d);
    d.addEventListener("mousemove", (e) => {
      const r = d.getBoundingClientRect(),
        x = (e.clientX - (r.left + r.width / 2)) * 0.3,
        y = (e.clientY - (r.top + r.height / 2)) * 0.3;
      b.style.transform = `translate(${x}px,${y}px)`;
    });
    d.addEventListener("mouseleave", () => (b.style.transform = ""));
  }
  // 3) Contador
  {
    const c = card(2),
      o = $("output", c);
    let n = 0;
    $$("button", c).forEach(
      (b, k) =>
        (b.onclick = () => {
          n += k ? 1 : -1;
          o.textContent = n;
          o.animate(
            [
              { transform: `translateY(${k ? 14 : -14}px)`, opacity: 0.2 },
              { transform: "none", opacity: 1 },
            ],
            { duration: 220, easing: "ease-out" },
          );
        }),
    );
  }
  // 4) Slider com valor ao vivo
  {
    const c = card(3),
      r = $(".rng", c),
      o = $(".val", c),
      up = () => {
        o.textContent = r.value;
        r.style.setProperty("--p", r.value + "%");
      };
    r.oninput = up;
    up();
  }
  // 5) Abas com indicador deslizante
  {
    const c = card(4),
      tabs = $$(".tabs button", c),
      ind = $(".tabs i", c),
      p = $(".tp", c),
      txt = [
        "Dev júnior em JavaScript, React e Flutter.",
        "React, Node.js, Flutter, Vite, Express, Prisma e MySQL.",
        "Me chame pelo LinkedIn ou por e-mail.",
      ];
    let cur = 0;
    const go = (k) => {
      cur = k;
      tabs.forEach((t, j) => t.classList.toggle("on", j === k));
      ind.style.width = tabs[k].offsetWidth + "px";
      ind.style.transform = `translateX(${tabs[k].offsetLeft}px)`;
      p.textContent = txt[k];
    };
    tabs.forEach((t, k) => (t.onclick = () => go(k)));
    go(0);
    document.fonts?.ready.then(() => go(cur));
    addEventListener("resize", () => go(cur));
  }
  // 6) Toast empilhável
  {
    const c = card(5),
      box = $(".toasts", c),
      msgs = [
        "Salvo com sucesso ✓",
        "Mensagem enviada ✓",
        "Deploy concluído ✓",
      ];
    let k = 0;
    $(".tbtn", c).onclick = () => {
      const t = document.createElement("div");
      t.className = "toast";
      t.textContent = msgs[k++ % msgs.length];
      box.append(t);
      if (box.children.length > 3) box.firstElementChild.remove();
      setTimeout(() => t.classList.add("bye"), 1800);
      setTimeout(() => t.remove(), 2200);
    };
  }
})();

/* ---------- intro: ponto → nome → PORTFOLIO ---------- */
const INTRO_NAME = "LEANDRO", // troque aqui o nome que aparece na abertura
  INTRO_WORD = "PORTFOLIO";
const intro = $("#intro"),
  nm = $("#introName"),
  dot = $(".dot", intro),
  stem = $(".stem", intro);
let started = false;
const wait = (ms) => new Promise((r) => setTimeout(r, ms)),
  rnd = (a, b) => a + Math.random() * (b - a),
  play = (el, kf, o) => el.animate(kf, { fill: "forwards", ...o }),
  ctr = (el) => {
    const r = el.getBoundingClientRect();
    return [r.left + r.width / 2, r.top + r.height / 2];
  };

function startSite() {
  // some o fundo da abertura e revela o site
  if (started) return;
  started = true;
  intro.classList.add("out");
  document.body.classList.add("reveal");
  portrait.assemble();
}
function endIntro() {
  document.body.classList.remove("loading", "reveal");
  intro.remove();
}
// clarão suave nos impactos (queda do ponto, do traço e das letras)
function pulse(x, y, r = 14, a = 0.55) {
  const g = document.createElement("i");
  g.className = "glow";
  g.style.cssText = `left:${x}px;top:${y}px;width:${r * 2}vw;height:${r * 2}vw`;
  intro.append(g);
  const c = "translate(-50%,-50%)";
  g.animate(
    [
      { opacity: 0, transform: `${c} scale(.6)` },
      { opacity: a, transform: `${c} scale(1)`, offset: 0.15 },
      { opacity: 0, transform: `${c} scale(1.15)` },
    ],
    { duration: 700, easing: "ease-out" },
  ).onfinish = () => g.remove();
}

async function runIntro() {
  history.scrollRestoration = "manual";
  scrollTo(0, 0);
  await Promise.race([
    document.fonts.load("900 1em Inter").catch(() => {}),
    wait(1500),
  ]);
  nm.innerHTML = [...INTRO_NAME]
    .map((c) => `<span class="ch">${c}</span>`)
    .join("");
  nm.setAttribute("aria-label", INTRO_WORD);
  const L = [...nm.children],
    n = L.length,
    mid = Math.floor(n / 2),
    vw = innerWidth / 100,
    vh = innerHeight / 100,
    [dx, dy] = ctr(dot), // posição de repouso do ponto
    stY = ctr(stem)[1], // e do traço
    slots = L.map(ctr),
    T0 = performance.now(),
    at = (t, f) => setTimeout(f, Math.max(0, t - (performance.now() - T0)));

  /* 1) o ponto cai do topo e quica */
  play(
    dot,
    [
      {
        offset: 0,
        transform: `translateY(${-54 * vh}px) scale(.85,1.25)`,
        easing: "cubic-bezier(.5,0,.9,.55)",
      },
      {
        offset: 0.27,
        transform: "translateY(0) scale(.92,1.15)",
        easing: "linear",
      },
      {
        offset: 0.31,
        transform: "translateY(0) scale(2.3,.35)",
        easing: "ease-out",
      },
      {
        offset: 0.42,
        transform: `translateY(${-7 * vh}px) scale(.95,1.08)`,
        easing: "ease-out",
      },
      {
        offset: 0.58,
        transform: `translateY(${-9.5 * vh}px) scale(1)`,
        easing: "ease-in",
      },
      {
        offset: 0.83,
        transform: "translateY(0) scale(1.05,.95)",
        easing: "ease-out",
      },
      {
        offset: 0.88,
        transform: "translateY(0) scale(1.7,.5)",
        easing: "ease-out",
      },
      { offset: 0.96, transform: "translateY(0) scale(1)" },
      { offset: 1, transform: "translateY(0) scale(1)" },
    ],
    { duration: 1000 },
  );
  at(280, () => pulse(dx, dy, 14, 0.6));
  at(860, () => pulse(dx, dy, 8, 0.3));

  /* 2) um traço cai sobre o ponto e forma um "!" */
  at(1000, () => (stem.style.opacity = 1));
  play(
    stem,
    [
      {
        transform: `translateY(${-60 * vh}px) scaleY(1.2)`,
        easing: "cubic-bezier(.5,0,.9,.6)",
      },
      { transform: "translateY(0) scaleY(1)" },
    ],
    { duration: 270, delay: 1000, fill: "both" },
  );
  at(1270, () => pulse(dx, stY, 16, 0.6));

  /* 3) o traço tomba e as letras do nome despencam em volta */
  play(
    stem,
    [
      { offset: 0, transform: "rotate(0)", easing: "cubic-bezier(.5,0,.8,.6)" },
      { offset: 0.25, transform: "rotate(-74deg)", easing: "ease-in-out" },
      { offset: 0.5, transform: "rotate(-82deg)", easing: "ease-in-out" },
      { offset: 1, transform: "rotate(-58deg)" },
    ],
    { duration: 1500, delay: 1750 },
  );
  play(stem, [{ opacity: 1 }, { opacity: 0 }], { duration: 350, delay: 2400 });
  play(dot, [{ transform: "scale(1)" }, { transform: "scale(0)" }], {
    duration: 350,
    delay: 3000,
    easing: "ease-in",
  });
  L.forEach((el, i) => {
    // esquerda (de dentro pra fora), depois direita
    const k = i < mid ? mid - 1 - i : i - mid,
      t = i < mid ? 1800 + k * 110 : 2300 + k * 95,
      [sx, sy] = slots[i],
      fx = dx + rnd(-3, 3) * vw - sx,
      fy = dy - 9 * vh - sy,
      r0 = rnd(50, 130) * (Math.random() < 0.5 ? -1 : 1);
    const a = el.animate(
      [
        {
          opacity: 0,
          transform: `translate(${fx}px,${fy}px) rotate(${r0}deg) scale(.35)`,
          filter: "blur(8px)",
          easing: "cubic-bezier(.2,.7,.3,1)",
        },
        {
          opacity: 1,
          transform: `translate(${fx * 0.45}px,${fy * 0.45 - 9 * vh}px) rotate(${r0 * 0.35}deg) scale(.9)`,
          filter: "blur(2px)",
          offset: 0.45,
          easing: "cubic-bezier(.4,0,.6,1.4)",
        },
        { opacity: 1, transform: "none", filter: "blur(0)" },
      ],
      { duration: 720, delay: t, fill: "both" },
    );
    a.onfinish = () => {
      el.style.opacity = 1;
      a.cancel();
    };
    if (k === 0) at(t + 120, () => pulse(sx, sy, 13, 0.55));
  });

  /* 4) o nome troca, letra por letra, até virar PORTFOLIO */
  const M0 = 3480,
    STEP = 120,
    total = Math.max(n, INTRO_WORD.length);
  for (let i = 0; i < total; i++)
    at(M0 + i * STEP, () => {
      if (i >= INTRO_WORD.length) return L[i].remove();
      let el = L[i];
      if (!el) {
        el = document.createElement("span");
        el.className = "ch";
        el.style.opacity = 1;
        nm.append(el);
      }
      el.textContent = INTRO_WORD[i];
      el.animate([{ transform: "translateY(14%)" }, { transform: "none" }], {
        duration: 140,
        easing: "ease-out",
      });
    });

  /* 5) PORTFOLIO desce até a posição do título e o site aparece */
  at(M0 + total * STEP + 400, () => {
    startSite();
    const a = nm.getBoundingClientRect(),
      b = $("#home .big").getBoundingClientRect(),
      s = b.width / a.width,
      mx = b.left + b.width / 2 - (a.left + a.width / 2),
      my = b.top + b.height / 2 - (a.top + a.height / 2);
    play(
      nm,
      [
        { transform: "none" },
        { transform: `translate(${mx}px,${my}px) scale(${s})` },
      ],
      { duration: 950, easing: "cubic-bezier(.7,0,.2,1)" },
    ).onfinish = endIntro;
  });
}
if (matchMedia("(prefers-reduced-motion: reduce)").matches)
  setTimeout(() => {
    startSite();
    endIntro();
  });
else
  runIntro().catch(() => {
    startSite();
    endIntro();
  });
// garantia: se algo travar, o site é liberado
setTimeout(() => {
  if (document.body.classList.contains("loading")) {
    startSite();
    endIntro();
  }
}, 9000);

/* ---------- nav / scroll ---------- */
const links = $$("#nav nav a"),
  secs = links.map((a) => $(a.getAttribute("href")));
function onScroll() {
  const y = scrollY,
    h = document.documentElement.scrollHeight - innerHeight;
  $(".progress").style.width = (y / h) * 100 + "%";
  let k = 0;
  secs.forEach((s, i) => {
    if (s.offsetTop - innerHeight * 0.4 <= y) k = i;
  });
  links.forEach((a, i) => a.classList.toggle("on", i === k));
  // prateleira horizontal
  const w = $("#shelfWrap"),
    r = w.getBoundingClientRect(),
    p = Math.min(1, Math.max(0, -r.top / (w.offsetHeight - innerHeight)));
  const sh = $("#shelf"),
    max = sh.scrollWidth - sh.parentElement.clientWidth;
  sh.style.transform = `translateX(${-Math.max(0, max) * p}px)`;
  const n = Math.min(CMPS.length - 1, Math.round(p * (CMPS.length - 1)));
  $$(".cmp").forEach((c, i) => c.classList.toggle("act", Math.abs(i - n) <= 1));
  $("#shelfBar").style.width = p * 100 + "%";
  $("#shelfCnt").textContent = `${n + 1} / ${CMPS.length}`;
}
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);
onScroll();
const io = new IntersectionObserver(
  (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("in")),
  { threshold: 0.2 },
);
$$(".rv").forEach((e) => io.observe(e));

/* ---------- retrato em partículas ---------- */
let PHOTO = null;
function setPhoto(src, cb) {
  const i = new Image();
  i.onload = () => {
    PHOTO = i;
    cb && cb();
  };
  i.src = src;
}
const portrait = (() => {
  const cv = $("#portrait"),
    ctx = cv.getContext("2d");
  let W,
    H,
    P = [],
    mx = -999,
    my = -999,
    t0 = 0,
    run = false;
  function build() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth;
    H = cv.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // silhueta (cabeça, cabelo, ombros, gravata) desenhada fora da tela
    const s = Math.min(H * 0.95, W * 1.15),
      ow = Math.round(s * 0.8),
      oh = Math.round(s),
      o = document.createElement("canvas");
    o.width = ow;
    o.height = oh;
    const c = o.getContext("2d");
    if (PHOTO) {
      // foto: encaixa (cover), aumenta contraste e esmaece as bordas
      const k = Math.max(ow / PHOTO.width, oh / PHOTO.height);
      c.drawImage(
        PHOTO,
        (ow - PHOTO.width * k) / 2,
        (oh - PHOTO.height * k) / 2,
        PHOTO.width * k,
        PHOTO.height * k,
      );
      try {
        const im = c.getImageData(0, 0, ow, oh),
          q = im.data;
        for (let y = 0; y < oh; y++)
          for (let x = 0; x < ow; x++) {
            const i = (y * ow + x) * 4,
              l = (q[i] * 0.3 + q[i + 1] * 0.59 + q[i + 2] * 0.11) / 255,
              dx = (x / ow - 0.5) / 0.5,
              dy = (y / oh - 0.45) / 0.55,
              m = Math.max(0, 1 - Math.pow(dx * dx + dy * dy, 1.5)),
              v = Math.max(0, Math.min(1, (l - 0.1) * 1.5)) * m * 255;
            q[i] = q[i + 1] = q[i + 2] = v;
            q[i + 3] = 255;
          }
        c.putImageData(im, 0, 0);
      } catch (e) {
        PHOTO = null;
        c.clearRect(0, 0, ow, oh);
      }
    }
    if (!PHOTO) {
      const g = (x, y, r, a, b) => {
        const q = c.createRadialGradient(x, y, 0, x, y, r);
        q.addColorStop(0, a);
        q.addColorStop(1, b);
        c.fillStyle = q;
      };
      g(ow / 2, oh * 0.3, ow * 0.3, "#ddd", "#333");
      c.beginPath();
      c.ellipse(ow / 2, oh * 0.3, ow * 0.17, oh * 0.17, 0, 0, 7);
      c.fill(); // rosto
      c.fillStyle = "#262626";
      c.beginPath();
      c.ellipse(ow / 2, oh * 0.2, ow * 0.2, oh * 0.12, 0, 0, 7);
      c.fill(); // cabelo
      g(ow / 2, oh * 0.75, ow * 0.55, "#555", "#0a0a0a");
      c.beginPath();
      c.moveTo(ow * 0.05, oh);
      c.quadraticCurveTo(ow * 0.1, oh * 0.52, ow / 2, oh * 0.5);
      c.quadraticCurveTo(ow * 0.9, oh * 0.52, ow * 0.95, oh);
      c.fill(); // ombros
      c.fillStyle = "#e8e8e8";
      c.beginPath();
      c.moveTo(ow * 0.43, oh * 0.5);
      c.lineTo(ow * 0.57, oh * 0.5);
      c.lineTo(ow * 0.6, oh);
      c.lineTo(ow * 0.4, oh);
      c.fill(); // camisa
    }
    const d = c.getImageData(0, 0, ow, oh).data,
      step = Math.max(5, Math.round(s / 110)),
      ox = (W - ow) / 2,
      oy = H - oh + 20;
    P = [];
    for (let y = 0; y < oh; y += step)
      for (let x = 0; x < ow; x += step) {
        const i = (y * ow + x) * 4,
          l = d[i] / 255;
        if (d[i + 3] > 10 && l > 0.08) {
          const hx = ox + x,
            hy = oy + y;
          P.push({
            hx,
            hy,
            x: Math.random() * W,
            y: Math.random() * H * 0.3 + H * 0.6,
            vx: 0,
            vy: 0,
            l,
            sz: step * 0.72,
            h: 200 + Math.random() * 30,
            d: Math.random() * 1.2,
          });
        }
      }
  }
  function frame(t) {
    if (!run) return;
    requestAnimationFrame(frame);
    const e = (t - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    for (const p of P) {
      if (e < p.d) {
        continue;
      }
      const tx = p.hx - p.x,
        ty = p.hy - p.y;
      p.vx += tx * 0.012;
      p.vy += ty * 0.012;
      const dx = p.x - mx,
        dy = p.y - my,
        r2 = dx * dx + dy * dy;
      if (r2 < 9000) {
        const f = (1 - r2 / 9000) * 2.2,
          m = Math.sqrt(r2) || 1;
        p.vx += (dx / m) * f;
        p.vy += (dy / m) * f;
      }
      p.vx *= 0.86;
      p.vy *= 0.86;
      p.x += p.vx;
      p.y += p.vy;
      const sp = Math.min(1, Math.hypot(p.vx, p.vy) / 3),
        sparkle = Math.random() < 0.08 ? 1 : 0;
      ctx.fillStyle = `hsl(${p.h} ${40 + sparkle * 30}% ${Math.min(95, p.l * 70 + sparkle * 25 + sp * 30)}%)`;
      ctx.fillRect(p.x, p.y, p.sz, p.sz);
    }
  }
  cv.parentElement.addEventListener("mousemove", (e) => {
    const r = cv.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  cv.parentElement.addEventListener("mouseleave", () => {
    mx = my = -999;
  });
  addEventListener("resize", () => {
    if (run) build();
  });
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !run && started) {
      run = true;
      requestAnimationFrame(frame);
    } else if (!e.isIntersecting) run = false;
  }).observe(cv);
  const rebuild = () => {
    build();
    t0 = performance.now();
    if (!run) {
      run = true;
      requestAnimationFrame(frame);
    }
  };
  const home = cv.parentElement;
  home.addEventListener("dragover", (e) => e.preventDefault());
  home.addEventListener("drop", (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (!f || !f.type.startsWith("image/")) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        localStorage.setItem("foto", r.result);
      } catch (_) {}
      setPhoto(r.result, rebuild);
    };
    r.readAsDataURL(f);
  });
  let saved = null;
  try {
    saved = localStorage.getItem("foto");
  } catch (_) {}
  setPhoto(saved || "foto.jpg", () => started && rebuild());
  return {
    assemble() {
      build();
      t0 = performance.now();
      run = true;
      requestAnimationFrame(frame);
    },
  };
})();

/* ---------- mini jogo (quebra-tijolos com "HELLO WORLD") ---------- */
(() => {
  const G = {
    H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
    E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
    W: ["10001", "10001", "10001", "10101", "10101", "11011", "10001"],
    R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
    D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  };
  const cv = $("#game"),
    ctx = cv.getContext("2d"),
    btn = $("#play");
  let W,
    H,
    bricks,
    ball,
    px,
    going = false,
    raf;
  function init() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth;
    H = cv.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bricks = [];
    const cs = Math.min(W / 29, (H * 0.62) / 15),
      gap = cs * 0.12;
    ["HELLO", "WORLD"].forEach((w, ri) => {
      const tw = w.length * 6 * cs - cs;
      [...w].forEach((ch, ci) =>
        G[ch].forEach((row, y) =>
          [...row].forEach((v, x) => {
            if (v === "1")
              bricks.push({
                x: (W - tw) / 2 + (ci * 6 + x) * cs,
                y: H * 0.03 + (ri * 8 + y) * cs,
                s: cs - gap,
                a: 1,
              });
          }),
        ),
      );
    });
    px = W / 2;
    ball = { x: W / 2, y: H * 0.62, vx: 0, vy: 0 };
    draw();
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#f2f2f2";
    bricks.forEach((b) => b.a && ctx.fillRect(b.x, b.y, b.s, b.s));
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 6, 0, 7);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(px - 45, H - 24, 90, 9, 5);
    ctx.fill();
  }
  function step() {
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x < 6 || ball.x > W - 6) ball.vx *= -1;
    if (ball.y < 6) ball.vy *= -1;
    if (
      ball.y > H - 26 &&
      ball.y < H - 12 &&
      Math.abs(ball.x - px) < 50 &&
      ball.vy > 0
    ) {
      ball.vy *= -1;
      ball.vx = (ball.x - px) / 9;
    }
    for (const b of bricks)
      if (
        b.a &&
        ball.x > b.x - 4 &&
        ball.x < b.x + b.s + 4 &&
        ball.y > b.y - 4 &&
        ball.y < b.y + b.s + 4
      ) {
        b.a = 0;
        ball.vy *= -1;
        break;
      }
    if (ball.y > H + 10 || !bricks.some((b) => b.a)) {
      going = false;
      btn.classList.remove("hid");
      init();
      return;
    }
    draw();
    raf = requestAnimationFrame(step);
  }
  btn.onclick = () => {
    init();
    going = true;
    btn.classList.add("hid");
    ball.vx = 3 * (Math.random() < 0.5 ? -1 : 1);
    ball.vy = -4;
    cancelAnimationFrame(raf);
    step();
  };
  cv.addEventListener("mousemove", (e) => {
    px = Math.max(
      45,
      Math.min(W - 45, e.clientX - cv.getBoundingClientRect().left),
    );
    if (!going) {
      ball.x = px;
      draw();
    }
  });
  cv.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      px = Math.max(
        45,
        Math.min(
          W - 45,
          e.touches[0].clientX - cv.getBoundingClientRect().left,
        ),
      );
      if (!going) {
        ball.x = px;
        draw();
      }
    },
    { passive: false },
  );
  addEventListener("resize", () => !going && init());
  init();
})();
