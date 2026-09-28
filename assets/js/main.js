// Site behaviour: theme toggle, mobile menu, publication filters.
(function () {
  var root = document.documentElement;

  // Theme toggle (remembers choice when browser storage is available)
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);

  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t) return t === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  var tbtn = document.querySelector(".theme-toggle");
  function paint() { if (tbtn) tbtn.textContent = isDark() ? "☀" : "☾"; }
  paint();
  if (tbtn) tbtn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });

  // Mobile navigation
  var nbtn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (nbtn && nav) nbtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    nbtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Publications: filter by type + free-text search
  var list = document.getElementById("publist");
  if (!list) return;
  var search = document.getElementById("pubsearch");
  var buttons = document.querySelectorAll(".filter button");
  var count = document.getElementById("pubcount");
  var type = "all";

  function apply() {
    var q = (search.value || "").toLowerCase().trim();
    var shown = 0;
    list.querySelectorAll(".pub").forEach(function (li) {
      var ok = (type === "all" || li.dataset.type === type) &&
               (!q || li.textContent.toLowerCase().indexOf(q) !== -1);
      li.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    list.querySelectorAll(".year-group").forEach(function (g) {
      g.classList.toggle("hidden", !g.querySelector(".pub:not(.hidden)"));
    });
    count.textContent = shown + (shown === 1 ? " publication" : " publications");
  }
  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      type = b.dataset.type;
      apply();
    });
  });
  search.addEventListener("input", apply);
  apply();
})();
