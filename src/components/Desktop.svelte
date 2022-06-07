<script>
  import Settings from "../apps/Settings.svelte";
  import { activeComponent } from "../store";
  import ActionCenter from "./ActionCenter.svelte";
  import Calendar from "./Calendar.svelte";
  import Search from "./Search.svelte";
  import Start from "./Start.svelte";
  import Widgets from "./Widgets.svelte";
</script>

<div class="desktop">
  <Settings />

  {#if $activeComponent === "ActionCenter"}<ActionCenter />{/if}
  {#if $activeComponent === "Calendar"}<Calendar />{/if}
  {#if $activeComponent === "Search"}<Search />{/if}
  {#if $activeComponent === "Start"}<Start />{/if}
  {#if $activeComponent === "Widgets"}<Widgets />{/if}

  <!-- desktop icons here? -->
</div>

<style>
  .desktop {
    width: 100vw;
    height: calc(100vh - 48px); /* 48px is taskbars height */
    position: relative;
  }
</style>
