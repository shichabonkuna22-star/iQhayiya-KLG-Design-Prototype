import { mountChrome } from "./nav.js?v=klg2";

const page = document.body.dataset.nav || "";
mountChrome(page);
