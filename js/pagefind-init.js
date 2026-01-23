(() => {
  const init = () => {
    const container = document.querySelector("#pagefind-search");
    if (!container || !window.PagefindUI) {
      return;
    }

    if (container.dataset.pagefindReady === "true") {
      return;
    }

    container.dataset.pagefindReady = "true";
    new window.PagefindUI({
      element: "#pagefind-search",
      showImages: false,
      resetStyles: false,
      autofocus: false,
      translations: {
        placeholder: "Search StreamSuites docs"
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
