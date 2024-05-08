<script lang="ts">
  import { ProgressRing } from "fluent-svelte";
  import { onMount } from "svelte";
  import Desktop from "./Desktop.svelte";
  import Taskbar from "./Taskbar.svelte";

  onMount(() => {
    window.onload = () => {
      setTimeout(() => {
        document.querySelector<HTMLElement>(".bootscreen").style.pointerEvents =
          "none";
        document.querySelector<HTMLElement>(".bootscreen").style.opacity = "0";
      }, 100);
    };
  });
</script>

<Desktop />
<Taskbar />

<div
  class="bootscreen absolute inset-0 flex flex-col items-center justify-center gap-[10%] bg-black"
  style="transition: opacity 750ms cubic-bezier(0.6, 0, 0.4, 1)"
>
  <img
    src="/img/icon/Start.png"
    alt="Loading..."
    class="w-40 rounded-lg"
    style="animation: fadein 1500ms linear, scalein 1000ms cubic-bezier(0, 0, 0, 1);"
  />
  <ProgressRing />
</div>
