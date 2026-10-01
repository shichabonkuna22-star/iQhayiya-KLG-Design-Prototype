import { mountChrome } from "./nav.js?v=klg3";

const page = document.body.dataset.nav || "";
mountChrome(page);
