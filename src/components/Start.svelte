<script>
  import { Button, TextBox } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { activeComponent } from "../store";

  let allApps = false;
</script>

<div
  class="start activeShadow"
  transition:fly={{ y: 700, duration: 200, opacity: 1 }}
>
  <div class="topCont">
    <TextBox
      placeholder="Type here to search"
      on:click={() => ($activeComponent = "Search")}
    />
    {#if !allApps}
      <div
        class="appCont"
        in:fly={{ x: -32, duration: 125, delay: 125 }}
        out:fly={{ x: -32, duration: 125 }}
      >
        <div class="pinned">
          <div class="head">
            <h4>Pinned</h4>
            <Button on:click={() => (allApps = true)}>All Apps &gt;</Button>
          </div>
          <div class="pinAppsGrid">
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
            <div class="pnApp hvrLight">appName</div>
          </div>
        </div>
        <div class="recommended">
          <div class="head">
            <h4>Recommended</h4>
          </div>
          <div class="recAppsGrid">
            <div class="recApp hvrLight">appName</div>
            <div class="recApp hvrLight">appName</div>
            <div class="recApp hvrLight">appName</div>
            <div class="recApp hvrLight">appName</div>
            <div class="recApp hvrLight">appName</div>
            <div class="recApp hvrLight">appName</div>
          </div>
        </div>
      </div>
    {:else}
      <div
        class="allApps"
        in:fly={{ x: 32, duration: 125, delay: 125 }}
        out:fly={{ x: 32, duration: 125 }}
      >
        <div class="head">
          <h4>All apps</h4>
          <Button on:click={() => (allApps = false)}>&lt; Back</Button>
        </div>
        <div class="appList">
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
          <div class="allApp hvrLight">appName</div>
        </div>
      </div>
    {/if}
  </div>
  <div class="bottomBar">
    <span class="hvrLight">Yashash</span>
    <span class="hvrLight">powerBtn</span>
  </div>
</div>

<style>
  .start {
    position: absolute;
    bottom: 12px;
    left: calc(50% - 320px);
    width: 640px;
    height: min(100% - 1.5rem, 720px);
    border-radius: 8px;
    overflow: hidden;
    background: rgb(var(--bg2) / 85%);
    backdrop-filter: blur(1.5rem);
  }
  /* .start.left {
    left: 12px;
  } */

  .topCont {
    background: rgb(255 255 255 / 25%);
    padding: 2rem 2rem 0;
    height: min(100% - 64px, 656px);
  }

  @media (prefers-color-scheme: dark) {
    .topCont {
      background: rgb(255 255 255 / 3.33%);
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .pinAppsGrid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  .pnApp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 84px;
    width: 96px;
    border-radius: 4px;
  }

  @media (max-height: 760px) {
    .recApp:nth-child(6),
    .recApp:nth-child(5) {
      display: none;
    }
  }
  @media (max-height: 700px) {
    .recApp:nth-child(4),
    .recApp:nth-child(3) {
      display: none;
    }
  }
  @media (max-height: 640px) {
    .recommended {
      display: none;
    }
  }

  .recAppsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 1rem;
    padding-left: 1rem;
  }
  .recApp {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 56px;
    border-radius: 4px;
  }

  .appCont,
  .allApps {
    padding-top: 1rem;
  }

  .appList {
    overflow-y: overlay;
    height: min(100vh - 280px, 512px);
    margin-right: -2rem;
  }
  .allApp {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 42px;
    border-radius: 4px;
    margin: 0 3rem 0 1rem;
  }

  .bottomBar {
    border-top: 1px solid rgb(var(--clr) / 10%);
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  }
</style>
