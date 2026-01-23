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

(() => {
  const injectDarkBorderOverride = () => {
    const head = document.head;
    if (!head) {
      return;
    }

    if (head.querySelector("style[data-pagefind-dark-border-override]")) {
      return;
    }

    const style = document.createElement("style");
    style.setAttribute("data-pagefind-dark-border-override", "true");
    style.textContent =
      '[data-theme="dark"] .pagefind-ui__search-input {\\n' +
      "  border-color: rgba(255, 255, 255, 0.18);\\n" +
      "}\\n\\n" +
      '[data-theme="dark"] .pagefind-ui__search-input:hover {\\n' +
      "  border-color: rgba(255, 255, 255, 0.35);\\n" +
      "}\\n\\n" +
      '[data-theme="dark"] .pagefind-ui__search-input:focus,\\n' +
      '[data-theme="dark"] .pagefind-ui__search-input:focus-visible {\\n' +
      "  border-color: rgba(255, 255, 255, 0.55);\\n" +
      "}\\n";

    const styles = head.querySelectorAll("style");
    if (styles.length > 0) {
      styles[styles.length - 1].after(style);
    } else {
      head.appendChild(style);
    }
  };

  const onReady = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(injectDarkBorderOverride);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
