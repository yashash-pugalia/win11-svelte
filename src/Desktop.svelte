<script>
  import { draggable } from "@neodrag/svelte";
  import Calculator from "./apps/Calculator.svelte";
  import Camera from "./apps/Camera.svelte";
  import Edge from "./apps/Edge.svelte";
  import Explorer from "./apps/Explorer.svelte";
  import Notepad from "./apps/Notepad.svelte";
  import Settings from "./apps/Settings.svelte";
  import Store from "./apps/Store.svelte";
  import VsCode from "./apps/VSCode.svelte";
  import ActionCenter from "./components/ActionCenter.svelte";
  import Calendar from "./components/Calendar.svelte";
  import Search from "./components/Search.svelte";
  import Start from "./components/Start.svelte";
  import Widgets from "./components/Widgets.svelte";
  import { activeThing, brightness, openedApps } from "./store";

  const dskApps = ["Recycle Bin", "Microsoft Edge", "VS Code"];

  const toggleOpenApp = (app) => {
    if ($openedApps.includes(app)) {
      $activeThing = "";
      $openedApps = $openedApps.filter((oa) => oa !== app);
    } else {
      $activeThing = app;
      $openedApps = [...$openedApps, app];
    }
  };

  const openedAppcomponent = {
    Calculator,
    Camera,
    "File Explorer": Explorer,
    "Microsoft Edge": Edge,
    "Microsoft Store": Store,
    Notepad,
    Settings,
    "VS Code": VsCode
  };

  const activeThingComponent = {
      ActionCenter,
      Calendar,
      Search,
      Start,
      Widgets
  };
</script>

<div class="desktop">
  <div class="dskAppGrid">
    {#each dskApps as app}
      <button
        use:draggable={{ grid: [75, 98] }}
        class="dskApp"
        on:dblclick={() => toggleOpenApp(app)}
      >
        <img src="img/icon/{app}.png" alt="" height="48" width="48" />
        {app}
      </button>
    {/each}
  </div>

  <div class="apps">
    {#each $openedApps as e}
      <svelte:component this={openedAppcomponent[e]} />
    {/each}
  </div>

  <svelte:component this={activeThingComponent[$activeThing]} />
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
