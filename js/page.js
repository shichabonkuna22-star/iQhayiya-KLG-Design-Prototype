import { mountChrome } from "./nav.js?v=klg4";

const page = document.body.dataset.nav || "";
mountChrome(page);
