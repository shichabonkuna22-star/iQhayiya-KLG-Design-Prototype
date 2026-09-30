import { mountChrome } from "./nav.js?v=klg1";
import { featuredProjects } from "./projects.js?v=klg1";

mountChrome("home");

const slides = featuredProjects().filter((project) => project.hero);
const image = document.getElementById("home-slide-image");
const link = document.getElementById("home-slide-link");
const prev = document.querySelector("[data-prev]");
const next = document.querySelector("[data-next]");
let index = 0;

function show(nextIndex) {
  if (!slides.length || !image || !link) return;
  index = (nextIndex + slides.length) % slides.length;
  const project = slides[index];
  image.src = project.hero;
  image.alt = project.title;
  link.href = `project.html?id=${encodeURIComponent(project.id)}`;
}

prev?.addEventListener("click", () => show(index - 1));
next?.addEventListener("click", () => show(index + 1));
show(0);
if (slides.length > 1) {
  setInterval(() => show(index + 1), 7000);
}
