import { readable, writable } from "svelte/store";

export const components = readable([
  "ActionCenter",
  "Calendar",
  "Search",
  "Start",
  "Widgets",
]);
export let activeComponent = writable("");

export let date = readable(new Date(), (set) => {
  const interval = setInterval(() => set(new Date()), 1000);
  return () => clearInterval(interval);
});

export let battery = writable({ level: 100, charging: false });
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
