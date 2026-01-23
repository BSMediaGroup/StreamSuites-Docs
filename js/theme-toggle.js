(function () {
  var storageKey = "docs-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".themeToggleInput");

  if (!toggle) {
    return;
  }

  function updateBrandTitle() {
    var brandLabels = document.querySelectorAll(".site-header .brand span");
    brandLabels.forEach(function (label) {
      label.textContent = "StreamSuites\u2122";
    });
  }

  function applyTheme(theme) {
    var isLight = theme === "light";
    root.setAttribute("data-theme", isLight ? "light" : "dark");
    toggle.checked = isLight;
  }

  var storedTheme = localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else {
    applyTheme("dark");
  }

  updateBrandTitle();

  toggle.addEventListener("change", function () {
    var nextTheme = toggle.checked ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
})();
