import { mountChrome } from "./nav.js?v=meet60";

const page = document.body.dataset.nav || "";
mountChrome(page);
