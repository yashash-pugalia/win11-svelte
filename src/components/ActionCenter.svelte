<script>
  import { IconButton, Slider } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { brightness, speaker } from "../store";
  import Battery from "./shared/Battery.svelte";
  import Speaker from "./shared/Speaker.svelte";

  const items = [
    { title: "WiFi", active: true },
    { title: "Bluetooth", active: true },
    { title: "Flight mode", active: false },
    { title: "Battery saver", active: false },
    { title: "Focus assist", active: false },
    { title: "Accessibility", active: false },
  ];
</script>

<div
  class="actionCenter activeShadow"
  transition:fly={{ y: 450, duration: 200, opacity: 1 }}
>
  <div class="topCont">
    <div class="btnCont">
      {#each items as { title, active }}
        <div class="btn">
          <div
            class="btnIcon"
            class:active
            on:click={() => (active = !active)}
            on:keypress={() => (active = !active)}
          >
            <!-- icon here -->
          </div>
          <div class="btnText">{title}</div>
        </div>
      {/each}
    </div>
    <div class="sliderCont">
      <div class="slider">
        <IconButton>
          <img
            class="icon"
            src="img/icon/ui/sun.svg"
            height="20"
            width="20"
            alt=""
            style="transform: rotate({$brightness}deg)"
          />
        </IconButton>
        <Slider bind:value={$brightness} min={10} max={100} />
      </div>
      <div class="slider">
        <IconButton><Speaker /></IconButton>
        <Slider bind:value={$speaker} />
      </div>
    </div>
  </div>
  <div class="bottomBar">
    <IconButton><Battery pct /></IconButton>
  </div>
</div>

<style>
  .actionCenter {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 360px;
    border-radius: 8px;
    overflow: hidden;
  }

  .topCont {
    padding: 20px 20px 0 20px;
    background: rgb(var(--bg4));
  }

  .btnCont {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 1rem;
  }

  .btnIcon {
    background: rgb(var(--bg5));
    height: 3rem;
    border-radius: 4px;
  }
  .btnIcon.active {
    background: rgb(var(--clrPrm));
  }

  .btnText {
    text-align: center;
    font-size: 12px;
    padding: 8px 0 1rem;
  }

  .sliderCont {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0 1.5rem 0;
  }
  .slider {
    display: flex;
    align-items: center;
  }

  .bottomBar {
    padding: 4px;
    height: 3rem;
    display: flex;
    align-items: center;
    background: rgb(var(--bg2));
    border-top: solid 1px rgb(var(--clr) / 5%);
  }
</style>
