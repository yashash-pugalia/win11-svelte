<script>
  import { Button, TextBox } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { activeComponent, apps } from "../store";

  let allApps = false;

  const recApp = [
    "Calculator",
    "Camera",
    "File Explorer",
    "Microsoft Store",
    "Settings",
    "Terminal",
  ];
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
            {#each $apps as app}
              <div class="pnApp hvrLight">
                <img
                  src="assets/icon/apps/{app}.png"
                  alt=""
                  height="32"
                  width="32"
                />
                {app}
              </div>
            {/each}
          </div>
        </div>
        <div class="recommended">
          <div class="head">
            <h4>Recommended</h4>
          </div>
          <div class="recAppsGrid">
            {#each recApp as app}
              <div class="recApp hvrLight">
                <img
                  src="assets/icon/apps/{app}.png"
                  alt=""
                  height="32"
                  width="32"
                />
                {app}
              </div>
            {/each}
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
          {#each $apps as app}
            <div class="allApp hvrLight">
              <img
                src="assets/icon/apps/{app}.png"
                alt=""
                height="24"
                width="24"
              />
              {app}
            </div>
          {/each}
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
    height: 252px; /* just enough for 3rows */
    overflow: hidden;
  }
  .pnApp {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    text-align: center;
    height: 84px;
    width: 96px;
    border-radius: 4px;
    padding: 16px 8px 0 8px;
  }
  .pnApp img {
    margin-bottom: 4px;
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
    height: 56px;
    font-size: 12px;
    border-radius: 4px;
  }
  .recApp img {
    margin: 0 1rem;
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
    height: 42px;
    font-size: 12px;
    border-radius: 4px;
    margin: 0 3rem 0 1rem;
  }
  .allApp img {
    margin: 0 1rem;
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
