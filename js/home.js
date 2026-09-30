import { mountChrome, cardMarkup } from "./nav.js?v=meet60";
import { featuredProjects } from "./projects.js?v=meet68";

mountChrome("home");

const grid = document.getElementById("featured-grid");
if (grid) {
  grid.innerHTML = featuredProjects()
    .map((project) => cardMarkup(project))
    .join("");
}

const carousel = document.querySelector("[data-carousel]");
if (carousel) {
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const dotsHost = carousel.querySelector("[data-carousel-dots]");
  let index = 0;

  slides.forEach((_, slideIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Show slide ${slideIndex + 1}`);
    dot.addEventListener("click", () => show(slideIndex));
    dotsHost?.append(dot);
  });

  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
    dotsHost?.querySelectorAll("button").forEach((dot, slideIndex) => {
      dot.setAttribute("aria-current", String(slideIndex === index));
    });
  }

  show(0);
  if (slides.length > 1) {
    setInterval(() => show(index + 1), 6000);
  }
}
