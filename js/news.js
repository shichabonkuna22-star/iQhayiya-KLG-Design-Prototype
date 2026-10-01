import { mountChrome, escapeHtml } from "./nav.js?v=klg3";
import { articles } from "./articles.js?v=klg3";

mountChrome("news");

const grid = document.getElementById("news-grid");
const empty = document.getElementById("news-empty");
const buttons = document.querySelectorAll("[data-filter]");

function newsCardMarkup(article) {
  if (!article) return "";
  const href = `article.html?id=${encodeURIComponent(article.id)}`;
  return `
    <a class="klg-tile" href="${href}">
      <h3>${escapeHtml(article.title)}</h3>
      <span class="klg-tile-media">
        <img src="${article.image}" alt="${escapeHtml(article.title)}" loading="lazy">
      </span>
      <p>${escapeHtml(article.category || "")}</p>
    </a>
  `;
}

function render(filter = "All") {
  const list =
    filter === "All"
      ? articles
      : articles.filter((article) => article.category === filter);

  if (grid) {
    grid.innerHTML = list.map((article) => newsCardMarkup(article)).join("");
  }
  if (empty) {
    empty.hidden = list.length > 0;
  }
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.filter));
});

render("All");
