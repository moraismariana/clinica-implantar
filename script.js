// SLIDER
const initSlider = () => {
  const servicosSlider = document.querySelector(".servicos .servicos-slider");
  const slideButtons = document.querySelectorAll(".servicos .slide-botao");
  const sliderScrollbar = document.querySelector(".servicos .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = servicosSlider.scrollWidth - servicosSlider.clientWidth;

  // arrastar slide a partir do clique no botão
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "slide-esquerda" ? -1 : 0.65;
      const scrollAmount = servicosSlider.clientWidth * direction;
      servicosSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  // rolagem do scroll inferior
  const updateScrollThumbPosition = () => {
    const scrollPosition = servicosSlider.scrollLeft;
    const thumbPosition =
      (scrollPosition / maxScrollLeft) *
      (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  };

  servicosSlider.addEventListener("scroll", () => {
    updateScrollThumbPosition();
  });
};

window.addEventListener("load", initSlider);
