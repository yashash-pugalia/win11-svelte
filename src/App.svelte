<script>
  import "fluent-svelte/theme.css";
  import Desktop from "./components/Desktop.svelte";
  import Taskbar from "./components/Taskbar.svelte";
  import { brightness } from "./store";
</script>

<Desktop />
<Taskbar />
<div class="brightoverlay" style:background="rgb(0 0 0 / {100 - $brightness}%)">
  <!-- to change brightness -->
</div>

<style>
  .brightoverlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 99999;
  }
</style>
