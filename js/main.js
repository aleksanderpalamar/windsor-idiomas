import { renderHeader } from './header.js';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';
import { renderCursoIngles } from './curso-ingles.js';
import { renderCursoEspanhol } from './curso-espanhol.js';
import { renderContato } from './contato.js';
import { renderFooter } from './footer.js';

document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  
  // Verifica se está na página do quiz
  if (window.location.pathname.includes('quiz.html')) {
    // Se estiver na página do quiz, apenas renderiza o header e o footer
    renderFooter();
  } else {
    // Se não estiver na página do quiz, renderiza todas as seções
    renderHome();
    renderAbout();
    renderCursoIngles();
    renderCursoEspanhol();
    renderContato();
    renderFooter();
  }

  initializeCarousel();
  initializeGoTopButton();
  initializeNavigation();
});

function initializeCarousel() {
  let currentSlide = 0;
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel img");
  const totalSlides = slides.length;

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
  }

  function updateCarousel() {
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(nextSlide, 5000);
}

function initializeGoTopButton() {
  const goTopButton = document.getElementById("goTop");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
          goTopButton.classList.remove("invisible", "opacity-0");
      } else {
          goTopButton.classList.add("invisible", "opacity-0");
      }
  });

  goTopButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
}

function initializeNavigation() {
  const navLinks = document.querySelectorAll("a[data-section]");

  navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const sectionId = this.getAttribute("data-section");
          navigateToSection(sectionId);
      });
  });

  // Handle initial load and hash change
  function handleHashChange() {
      const hash = window.location.hash.substring(1);
      navigateToSection(hash || "home", true);
  }

  window.addEventListener("hashchange", handleHashChange);

  // Delay the initial navigation to ensure all content is loaded
  setTimeout(handleHashChange, 100);

  function navigateToSection(sectionId, isInitialLoad = false) {
      const section = document.getElementById(sectionId);
      if (section) {
          if (!isInitialLoad) {
              window.history.pushState(null, "", `#${sectionId === "home" ? "" : sectionId}`);
          }
          const headerOffset = 70; // Ajuste conforme necessário para compensar o header fixo
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          smoothScrollTo(offsetPosition, 1000);
          initializeMobileMenu(); // Reinicializa o menu mobile após a navegação
      }
  }

  function smoothScrollTo(targetPosition, duration) {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
  }

  // Set active state based on scroll position
  function setActiveNavItem() {
      const scrollPosition = window.scrollY;

      document.querySelectorAll("section").forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionBottom = sectionTop + section.offsetHeight;
          const sectionId = section.id;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              navLinks.forEach((link) => {
                  link.classList.remove("active");
                  if (link.getAttribute("data-section") === sectionId) {
                      link.classList.add("active");
                  }
              });
          }
      });
  }

  window.addEventListener("scroll", setActiveNavItem);
  setActiveNavItem(); // Set initial active state
}

