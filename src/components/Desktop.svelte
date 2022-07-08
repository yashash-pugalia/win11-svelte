<script>
  import Calculator from "../apps/Calculator.svelte";
  import Camera from "../apps/Camera.svelte";
  import Edge from "../apps/Edge.svelte";
  import Notepad from "../apps/Notepad.svelte";
  import Settings from "../apps/Settings.svelte";
  import Store from "../apps/Store.svelte";
  import { activeThing, brightness, openedApps } from "../store";
  import ActionCenter from "./ActionCenter.svelte";
  import Calendar from "./Calendar.svelte";
  import Search from "./Search.svelte";
  import Start from "./Start.svelte";
  import Widgets from "./Widgets.svelte";

  const dskApps = ["Recycle Bin", "Microsoft Edge", "Settings"];
</script>

<div class="desktop">
  <div class="dskAppGrid" on:click={() => ($activeThing = "")}>
    {#each dskApps as app}
      <button class="dskApp">
        <img src="img/icon/{app}.png" alt="" height="48" width="48" />
        {app}
      </button>
    {/each}
  </div>

  <div class="apps" on:click={() => ($activeThing = "")}>
    {#each $openedApps as e}
      {#if e === "Calculator"}<Calculator />{/if}
      {#if e === "Camera"}<Camera />{/if}
      {#if e === "Microsoft Edge"}<Edge />{/if}
      {#if e === "Microsoft Store"}<Store />{/if}
      {#if e === "Notepad"}<Notepad />{/if}
      {#if e === "Settings"}<Settings />{/if}
    {/each}
  </div>

  {#if $activeThing === "ActionCenter"}<ActionCenter />{/if}
  {#if $activeThing === "Calendar"}<Calendar />{/if}
  {#if $activeThing === "Search"}<Search />{/if}
  {#if $activeThing === "Start"}<Start />{/if}
  {#if $activeThing === "Widgets"}<Widgets />{/if}
</div>
<div
  class="brightoverlay"
  style:background="rgb(0 0 0 / {100 - $brightness}%)"
/>

<style>
  .desktop {
    width: 100vw;
    height: calc(100vh - 48px); /* 48px is taskbars height */
    position: relative;
    overflow: hidden;
  }

  .dskAppGrid {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 74px);
    grid-template-rows: repeat(auto-fill, 70px);
    grid-auto-flow: column;
    padding-top: 6px;
    gap: 28px 1px;
  }
  .dskApp {
    background: unset;
    border: 1px solid transparent;
    height: min-content;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
    color: white;
    text-shadow: 0 0 1px black, 0 0 2px black, 0 0 3px black, 0 0 4px black,
      0 1px 1px black, 0 1px 2px black;
    -webkit-user-drag: element;
  }
  .dskApp:focus,
  .dskApp:focus-visible {
    background: rgb(255 255 255 / 24%);
    outline: none;
  }
  .dskApp:hover {
    background: rgb(255 255 255 / 12%);
  }
  .dskApp:focus,
  .dskApp:focus-visible {
    border: 1px dotted;
  }
  .dskApp img {
    margin-bottom: 4px;
  }

  .brightoverlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 99999;
  }
</style>
