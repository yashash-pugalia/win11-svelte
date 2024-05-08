import "fluent-svelte/theme.css";
import "./global.css";

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
