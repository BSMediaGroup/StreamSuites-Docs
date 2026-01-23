(function () {
  var storageKey = "docs-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme__toggle");

  if (!toggle) {
    return;
  }

  function applyTheme(theme) {
    var isDark = theme === "dark";
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    toggle.checked = isDark;
  }

  var storedTheme = localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    applyTheme(storedTheme);
  } else {
    applyTheme("dark");
  }

  toggle.addEventListener("change", function () {
    var nextTheme = toggle.checked ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
})();
