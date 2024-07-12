// SLIDER SERVIÇOS
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

// SLIDER DEPOIMENTOS

const initSlider_2 = () => {
  const depoimentosSlider = document.querySelector(
    ".depoimentos .depoimentos-slider"
  );
  const slideButtons_2 = document.querySelectorAll(".depoimentos .slide-botao");
  const maxScrollLeft =
    depoimentosSlider.scrollWidth - depoimentosSlider.clientWidth;

  // arrastar slide a partir do clique no botão
  slideButtons_2.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "slide-esquerda" ? -1 : 0.65;
      const scrollAmount = depoimentosSlider.clientWidth * direction;
      depoimentosSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", initSlider_2);

// MENU MOBILE

function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  let header = document.querySelector(".header-bg");
  menuMobile.classList.toggle("open");
  header.classList.toggle("bg-c2");
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    menuShow(); // Esconde o menu quando um link é clicado
  });
});

// CONTATO

document.addEventListener("DOMContentLoaded", function () {
  var contactLink = document.getElementById("contact-link");
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detecta dispositivos móveis
  if (/android|iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
    contactLink.href = "tel:6135730020"; // Número de telefone
  } else {
    contactLink.href =
      "mailto:clinicaimplantar@email.com?subject=Contato%20para%20consulta&body=Olá%2C%20gostaria%20de%20marcar%20uma%20consulta"; // Endereço de e-mail
  }
});

// CARREGAMENTO DE IMAGENS
window.addEventListener("load", function () {
  const images = [
    "./img/antes-depois/img1.png",
    "./img/antes-depois/antes1.png",
    "./img/antes-depois/depois1.png",
    "./img/antes-depois/img2.png",
    "./img/antes-depois/antes2.png",
    "./img/antes-depois/depois2.png",
    "./img/antes-depois/img3.png",
    "./img/antes-depois/antes3.png",
    "./img/antes-depois/depois3.png",
    "./img/antes-depois/img3.png",
    "./img/antes-depois/antes3.png",
    "./img/antes-depois/depois3.png",
    "./img/antes-depois/img4.png",
    "./img/antes-depois/antes4.png",
    "./img/antes-depois/depois4.png",
  ];

  images.forEach(function (imageSrc) {
    const img = new Image();
    img.src = imageSrc;
  });
});
