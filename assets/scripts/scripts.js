const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const navHidden = document.getElementById("navbar");
const navLinks = document.getElementById("nav-links");
let lastScrollTop = 0;

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    // Alterna la clase active para mostrar u ocultar el menú móvil
    navLinks.classList.toggle("active");

    // Cambia el icono de hamburguesa a cruz (close) o viceversa
    if (navLinks.classList.contains("active")) {
      menuIcon.setAttribute("name", "close");
    } else {
      menuIcon.setAttribute("name", "menu");
    }
  });

  // Opcional: Cierra el menú automáticamente al hacer clic en cualquier enlace interno
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuIcon.setAttribute("name", "menu");
    });
  });
}

// Scroll para ocultar el dock de forma limpia
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navHidden.classList.add("navbar-hidden");
  } else {
    navHidden.classList.remove("navbar-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.addEventListener("DOMContentLoaded", () => {
  const botonesCompartir = document.querySelectorAll(".btn-compartir-card");

  botonesCompartir.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const urlProyecto = btn.getAttribute("data-url") || window.location.href;
      
      // Busca el elemento con la clase name-app dentro de la tarjeta actual
      const card = btn.closest(".project-card");
      const nameAppElement = card ? card.querySelector(".name-app") : null;
      const nombreApp = nameAppElement ? nameAppElement.textContent.trim() : "Aplicación";

      if (navigator.share) {
        try {
          await navigator.share({
            title: "LERMA.TECH - Aplicación",
            text: `¡Mira esta aplicación llamada ${nombreApp} de Lerma Tech, Inc!`,
            url: urlProyecto,
          });
        } catch (err) {
          console.log("Compartir cancelado o error", err);
        }
      } else {
        // Fallback por si el navegador no soporta Web Share API
        navigator.clipboard.writeText(urlProyecto);
        alert(`¡Enlace de ${nombreApp} copiado al portapapeles!`);
      }
    });
  });
});
