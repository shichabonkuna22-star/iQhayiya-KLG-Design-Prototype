import { mountChrome, escapeHtml } from "./nav.js?v=meet60";
import { articles } from "./articles.js?v=meet50";

mountChrome("news");

const grid = document.getElementById("news-grid");
const empty = document.getElementById("news-empty");
const buttons = document.querySelectorAll("[data-filter]");

function newsCardMarkup(article) {
  if (!article) return "";
  const href = `article.html?id=${encodeURIComponent(article.id)}`;
  return `
    <a class="card news-tile" href="${href}">
      <h3>${escapeHtml(article.title)}</h3>
      <div class="card-media card-media-fill">
        <img src="${article.image}" alt="${escapeHtml(article.title)}">
      </div>
      <p class="card-meta">${escapeHtml(article.category || "")}</p>
      <p class="card-loc">${escapeHtml([article.publication, article.dateline].filter(Boolean).join(" · "))}</p>
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
