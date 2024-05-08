import "fluent-svelte/theme.css";
import App from "./App.svelte";
import "./global.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
