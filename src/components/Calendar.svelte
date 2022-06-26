<script>
  import { CalendarView, Button } from "fluent-svelte";
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
    <Button style="padding: 4px;" on:click={() => (collapse = !collapse)}>
      <img
        class="icon collapser"
        src="img/icon/ui/ChevronUp.svg"
        height="16"
        width="16"
        alt=""
      />
    </Button>
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
    height: 14px;
    width: 14px;
    transform: rotate(-180deg);
    transition: all 200ms 200ms;
  }
  .collapse .collapser {
    transform: none;
  }
</style>
