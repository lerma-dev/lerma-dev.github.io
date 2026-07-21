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
  navLinks.querySelectorAll("a").forEach(link => {
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