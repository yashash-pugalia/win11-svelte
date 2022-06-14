import { readable, writable } from "svelte/store";

export const components = readable([
  "ActionCenter",
  "Calendar",
  "Search",
  "Start",
  "Widgets",
]);
export let activeComponent = writable("");

export const apps = readable([
  "Calculator",
  "Camera",
  "Clock",
  "Cortana",
  "File Explorer",
  "Get Help",
  "Get Started",
  "Maps",
  "Microsoft Edge",
  "Microsoft Store",
  "Notepad",
  "Phone Link",
  "Photos",
  "Settings",
  "Terminal",
  "Windows Security",
  "Xbox Game Bar",
]);
export const openedApps = writable([]);

export let date = readable(new Date(), (set) => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});

export let battery = writable(100);
export let brightness = writable(100);
export let speaker = writable(50);
export let wifi = writable(4);

let th = "light";
window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  ? (th = "dark")
  : (th = "light");
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    e.matches ? (th = "dark") : (th = "light");
  });
export let theme = readable(th);
