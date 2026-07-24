document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    const track = card.querySelector(".carousel-track");
    if (!track) return;

    const slides = track.querySelectorAll("img");
    const prevBtn = card.querySelector(".carousel-btn.prev");
    const nextBtn = card.querySelector(".carousel-btn.next");

    if (slides.length <= 1) {
      if (prevBtn) prevBtn.style.display = "none";
      if (nextBtn) nextBtn.style.display = "none";
      return;
    }

    let currentIndex = 0;

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlidePosition();
    });

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlidePosition();
    });
  });
});