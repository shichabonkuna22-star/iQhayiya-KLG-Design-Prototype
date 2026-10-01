const HEADER = `
  <header class="site-header">
    <div class="bar">
      <a class="wordmark" href="index.html" aria-label="iQhayiya Design Workshop home">
        <img class="wordmark-logo" src="images/logo.png" alt="">
        <span class="wordmark-text">
          <span class="wordmark-name">iQhayiya</span>
          <span class="wordmark-sub">Design Workshop</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        Menu
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        <a href="index.html" data-nav="home">Home</a>
        <a href="practice.html" data-nav="practice">Contact</a>
        <a href="work.html?cat=Residential" data-nav="residential">Residential</a>
        <a href="work.html?cat=Community%20Infrastructure" data-nav="community">Community</a>
        <a href="news.html" data-nav="news">News</a>
        <a href="join.html" data-nav="join">Join</a>
        <span class="nav-social">
          <a href="https://www.instagram.com/iqhayiya_design_workshop_archi/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm11.2 1.3a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 8.2A3.8 3.8 0 1112 15.8 3.8 3.8 0 0112 8.2zm0 2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z"/></svg>
          </a>
          <a href="mailto:adminkok@iqhayiyadw.co.za" aria-label="Email the studio">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 17.5v-11zm2.2.6l6.5 4.4c.2.13.46.13.66 0l6.5-4.4H5.2zm13.3 1.5l-5.9 4a2.2 2.2 0 01-2.4 0l-5.9-4v8.4c0 .28.22.5.5.5h13.6c.28 0 .5-.22.5-.5V8.6z"/></svg>
          </a>
        </span>
      </nav>
    </div>
  </header>
`;

const FOOTER = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <p class="footer-blurb">iQhayiya Design Workshop (PTY) Ltd. is a professional architectural firm in Manaba. The studio works across South Africa for municipalities, government, private developers and home owners. IQHAYIYA translates to pride in isiXhosa.</p>
      </div>
      <div>
        <p class="eyebrow">Studio</p>
        <p>5 Darent Place<br>Manaba<br>KwaZulu-Natal</p>
      </div>
      <div>
        <p class="eyebrow">Practice</p>
        <p><a href="tel:+27393120403">+27 (0) 39 312 0403</a><br>
        <a href="https://wa.me/27737257297">WhatsApp 073 725 7297</a><br>
        <a href="mailto:adminkok@iqhayiyadw.co.za">adminkok@iqhayiyadw.co.za</a></p>
      </div>
      <div>
        <p class="eyebrow">Index</p>
        <p>
          <a href="index.html">Home</a><br>
          <a href="work.html?cat=Residential">Residential</a><br>
          <a href="work.html?cat=Community%20Infrastructure">Community</a><br>
          <a href="news.html">News</a><br>
          <a href="join.html">Join</a><br>
          <a href="practice.html">Contact</a>
        </p>
      </div>
    </div>
    <p class="footer-note">iQhayiya Design Workshop · 5 Darent Place, Manaba</p>
  </footer>
`;

const WHATSAPP = `
  <a class="wa-float" href="https://wa.me/27737257297" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
`;

export function mountChrome(active = "") {
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  if (headerHost) headerHost.innerHTML = HEADER;
  if (footerHost) footerHost.innerHTML = FOOTER;
  if (!document.querySelector(".wa-float")) {
    document.body.insertAdjacentHTML("beforeend", WHATSAPP);
  }

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === active) {
      link.setAttribute("aria-current", "page");
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      document.querySelector(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 6);
    },
    { passive: true }
  );

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }
}

export function cardMarkup(project) {
  if (!project) return "";
  const href = `project.html?id=${encodeURIComponent(project.id)}`;
  const photo = project.hero || project.gallery?.[0] || "";
  return `
    <a class="klg-tile" href="${href}">
      <span class="klg-tile-media">
        <img src="${photo}" alt="${escapeHtml(project.title)}" loading="lazy">
      </span>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.location || project.category || "")}</p>
    </a>
  `;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
