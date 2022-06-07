<script>
  import { CalendarView } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { date } from "../store";

  let collapse = false;
</script>

<div
  class="calnpane activeShadow"
  class:collapse
  transition:fly={{ x: 400, duration: 200, opacity: 1 }}
>
  <div class="topBar">
    <div class="date">
      {$date.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
      })}
    </div>
    <div class="collapser" on:click={() => (collapse = !collapse)}>
      <img
        class="icon"
        src="assets/icon/ui/ChevronUp.svg"
        height="16"
        width="16"
        alt=""
      />
    </div>
  </div>
  <CalendarView />
</div>

<style>
  .calnpane {
    position: absolute;
    bottom: 12px;
    right: 12px;
    border-radius: 8px;
    width: 300px;
    max-height: 400px;
    transition: all 200ms;
    background: rgb(var(--bg2));
    overflow: hidden;

    --fds-solid-background-quarternary: rgb(var(--bg4));
    --fds-layer-on-acrylic-background-default: none;
    --fds-card-stroke-default: none;
  }
  .calnpane.collapse {
    max-height: 50px;
    transition: all 200ms;
  }

  .topBar {
    height: 50px;
    border-bottom: 1px solid var(--comp-txt);
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .collapser {
    background: rgb(var(--bg3));
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 4px;
  }
  .collapser img {
    transition: all 200ms 200ms;
  }
  .collapse .collapser img {
    transform: rotate(-180deg);
  }
</style>
