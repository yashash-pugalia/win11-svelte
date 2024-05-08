import "fluent-svelte/theme.css";
import "./global.css";
import { ProgressRing } from "fluent-svelte";
import App from "./App.svelte";

window.onload = () => {
  setTimeout(() => {
    document.querySelector<HTMLElement>(".bootscreen").style.pointerEvents =
      "none";
    document.querySelector<HTMLElement>(".bootscreen").style.opacity = "0";
  }, 100);
};

const loader = new ProgressRing({
  target: document.querySelector(".bsload"),
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
