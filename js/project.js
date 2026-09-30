import { mountChrome, escapeHtml } from "./nav.js?v=klg2";
import { getProject } from "./projects.js?v=klg1";

mountChrome("work");

const params = new URLSearchParams(location.search);
const project = getProject(params.get("id"));
const root = document.getElementById("project-root");

if (!project || !root) {
  if (root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Archive</p>
        <h1>Project not found.</h1>
        <p class="lede"><a href="work.html">Return to work</a></p>
      </section>
    `;
  }
} else {
  document.title = `${project.title} — iQhayiya Design Workshop`;

  const parts = [
    ["Project name", project.title],
    project.location ? ["Location", project.location] : null,
    (project.completed || project.year)
      ? ["Completed", project.completed || project.year]
      : null,
  ].filter(Boolean);
  const detailsHtml = parts
    .map(
      ([label, value], index) =>
        `${index ? '<span class="meta-sep">|</span>' : ""}<span class="meta-label">${escapeHtml(label)}:</span> <span class="meta-value">${escapeHtml(value)}</span>`
    )
    .join("");

  const gallery = (project.gallery || []).filter(Boolean);
  const galleryHtml = gallery.length
    ? `<section class="gallery">
      <div class="gallery-grid">
        ${gallery
          .map(
            (src) => `
          <figure class="gallery-item${src.includes("location-map") ? " gallery-item-map" : ""}">
            <img src="${src}" alt="${escapeHtml(project.title)}">
          </figure>`
          )
          .join("")}
      </div>
    </section>`
    : "";

  root.innerHTML = `
    <section class="project-hero">
      <img src="${project.hero}" alt="${escapeHtml(project.title)}">
    </section>

    <section class="project-intro">
      <h1>${escapeHtml(project.title)}</h1>
      <p class="project-copy">${detailsHtml}</p>
      <p class="lede">${escapeHtml(project.excerpt)}</p>
    </section>

    ${galleryHtml}

    <section class="more-projects">
      <a class="more-projects-btn" href="work.html">More Projects</a>
    </section>
  `;

  bindLightbox(root, project.title);
}

function bindLightbox(root, title) {
  let box = document.querySelector(".lightbox");
  if (!box) {
    box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.innerHTML = `<img alt="">`;
    document.body.appendChild(box);
  }
  const large = box.querySelector("img");

  const close = () => {
    box.hidden = true;
    large.removeAttribute("src");
    document.body.style.overflow = "";
  };

  root.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      large.src = img.currentSrc || img.src;
      large.alt = img.alt || title;
      box.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  box.addEventListener("click", (event) => {
    if (event.target === large) return;
    close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !box.hidden) close();
  });
}

