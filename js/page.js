import { mountChrome } from "./nav.js?v=klg1";

const page = document.body.dataset.nav || "";
mountChrome(page);
