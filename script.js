document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(slideIndex) {
      slides[currentSlide].style.display = "none";
      slides[slideIndex].style.display = "block";
      currentSlide = slideIndex;
  }

  function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
  }

  // Iniciar o carrossel
  showSlide(currentSlide);
  setInterval(nextSlide, 3000); // Altere o valor (em milissegundos) para controlar a velocidade de rotação
});
