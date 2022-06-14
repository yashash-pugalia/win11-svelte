<script>
  import Settings from "../apps/Settings.svelte";
  import { activeComponent, openedApps, brightness, apps } from "../store";
  import ActionCenter from "./ActionCenter.svelte";
  import Calendar from "./Calendar.svelte";
  import Search from "./Search.svelte";
  import Start from "./Start.svelte";
  import Widgets from "./Widgets.svelte";
</script>

<div class="desktop">
  <div class="dskAppGrid" on:click={() => ($activeComponent = "")}>
    {#each $apps as app}
      <div class="dskApp hvrLight">
        <img src="" alt="" height="44" width="44" />
        <span>{app}</span>
      </div>
    {/each}
  </div>

  <div class="apps" on:click={() => ($activeComponent = "")}>
    {#each $openedApps as e}
      {#if e === "Settings"}<Settings />{/if}
    {/each}
  </div>

  {#if $activeComponent === "ActionCenter"}<ActionCenter />{/if}
  {#if $activeComponent === "Calendar"}<Calendar />{/if}
  {#if $activeComponent === "Search"}<Search />{/if}
  {#if $activeComponent === "Start"}<Start />{/if}
  {#if $activeComponent === "Widgets"}<Widgets />{/if}
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
    gap: 28px 1px;
  }
  .dskApp {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    text-align: center;
    border-radius: 2px;
  }

  .brightoverlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 99999;
  }
</style>
