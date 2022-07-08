import { readable, writable } from "svelte/store";

export const components = readable([
  "ActionCenter",
  "Calendar",
  "Search",
  "Start",
  "Widgets",
]);
export let activeThing = writable("");

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
  "VS Code",
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
export let speaker = writable(67);

export const themes = readable([
  "Windows/img0",
  "Windows/img19",
  "Glow/img20",
  "Captured Motion/img24",
  "Sunrise/img28",
  "Flow/img32",
]);
