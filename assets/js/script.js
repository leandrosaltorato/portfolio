(function () {
  var root = document.documentElement;

  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark")
      root.setAttribute("data-theme", saved);
  } catch (e) {}

  function updateMeta() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute(
        "content",
        root.getAttribute("data-theme") === "light" ? "#f6f7f9" : "#0c0e11",
      );
  }

  updateMeta();

  document
    .getElementById("theme-toggle")
    .addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

      root.setAttribute("data-theme", next);

      try {
        localStorage.setItem("theme", next);
      } catch (e) {}

      updateMeta();
    });

  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("nav-links");

  menuBtn.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  var items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add("in");
    });
  }

  var sections = ["sobre", "stack", "projetos", "contato"].map(function (id) {
    return document.getElementById(id);
  });

  var navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener(
    "scroll",
    function () {
      var y = window.scrollY + 120,
        current = "";

      sections.forEach(function (s) {
        if (s && s.offsetTop <= y) current = s.id;
      });

      navLinks.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    },
    { passive: true },
  );

  document.getElementById("year").textContent = new Date().getFullYear();
})();
