// En el script de tu portal
document.querySelectorAll(".open-app").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetUrl = btn.getAttribute("data-url");

    // Si estamos dentro de un iframe, avisamos a la app contenedora
    if (window.self !== window.top) {
      e.preventDefault();
      window.parent.postMessage(
        { action: "check-navigation", url: targetUrl },
        "*",
      );
    }
  });
});
