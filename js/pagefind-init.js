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

    let wrapPending = false;
    const ensureSearchWrap = () => {
      const form = container.querySelector(".pagefind-ui__form");
      if (!form) {
        return;
      }

      const input = form.querySelector(".pagefind-ui__search-input");
      const clearButton = form.querySelector(".pagefind-ui__search-clear");
      if (!input || !clearButton) {
        return;
      }

      let wrapper = form.querySelector(".pagefind-ui__search-wrap");
      const wrapped = wrapper && wrapper.contains(input) && wrapper.contains(clearButton);
      if (wrapped) {
        return;
      }

      if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.className = "pagefind-ui__search-wrap";
        form.insertBefore(wrapper, input);
      }

      wrapper.appendChild(input);
      wrapper.appendChild(clearButton);
    };

    const scheduleWrap = () => {
      if (wrapPending) {
        return;
      }
      wrapPending = true;
      requestAnimationFrame(() => {
        wrapPending = false;
        ensureSearchWrap();
      });
    };

    const observer = new MutationObserver(scheduleWrap);
    observer.observe(container, { childList: true, subtree: true });
    scheduleWrap();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
