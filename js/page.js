import { mountChrome } from "./nav.js?v=klg5";

const page = document.body.dataset.nav || "";
mountChrome(page);
