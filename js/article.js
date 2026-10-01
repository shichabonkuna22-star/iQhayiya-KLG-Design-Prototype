import { mountChrome, escapeHtml } from "./nav.js?v=klg4";
import { getArticle } from "./articles.js?v=klg3";

mountChrome("news");

const params = new URLSearchParams(location.search);
const article = getArticle(params.get("id"));
const root = document.getElementById("article-root");

if (!article || !root) {
  if (root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">News</p>
        <h1>Story not found.</h1>
        <p class="lede"><a href="news.html">Return to news</a></p>
      </section>
    `;
  }
} else {
  document.title = `${article.title} — iQhayiya Design Workshop`;

  const paragraphs = article.paragraphs || [];
  const bodyHtml = paragraphs
    .map((paragraph, index) => {
      const quote =
        index === 0 && article.pullQuote
          ? `<blockquote class="article-pull"><p>${escapeHtml(article.pullQuote)}</p></blockquote>`
          : "";
      const cls = index === 0 ? ' class="article-lead-p"' : "";
      return `<p${cls}>${escapeHtml(paragraph)}</p>${quote}`;
    })
    .join("");

  const linkHtml =
    article.sourceHref && article.sourceLinkLabel
      ? ` <a href="${escapeHtml(article.sourceHref)}" target="_blank" rel="noopener">${escapeHtml(article.sourceLinkLabel)}</a>`
      : "";

  root.innerHTML = `
    <article class="article-page">
      <header class="article-head">
        <h1>${escapeHtml(article.title)}</h1>
        <p class="news-kicker">${escapeHtml(article.category)}</p>
        <p class="article-standfirst">${escapeHtml(article.standfirst || "")}</p>
        <p class="article-byline">
          <span>${escapeHtml(article.byline || "")}</span>
          <span class="meta-sep">|</span>
          <span>${escapeHtml(article.publication || "")}</span>
          <span class="meta-sep">|</span>
          <span>${escapeHtml(article.dateline || "")}</span>
        </p>
      </header>
      <div class="article-spread">
        <div class="article-body">
          <figure class="news-clip article-clip" data-lightbox>
            <img src="${article.image}" alt="${escapeHtml(article.imageAlt || article.title)}">
            <figcaption>${escapeHtml(article.caption || "Original page")} · Click to enlarge</figcaption>
          </figure>
          ${bodyHtml}
          <p class="news-source">${escapeHtml(article.source || "")}${linkHtml}</p>
        </div>
      </div>
    </article>

    <section class="more-projects">
      <a class="more-projects-btn" href="news.html">More News</a>
    </section>
  `;

  bindLightbox(root, article.title);
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

  root.querySelectorAll("[data-lightbox] img").forEach((img) => {
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
