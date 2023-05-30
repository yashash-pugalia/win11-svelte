<script lang="ts">
  import { Button, MenuFlyout, MenuFlyoutItem, TextBox } from "fluent-svelte";
  import { fly } from "svelte/transition";
  import { activeThing, appList, openedApps } from "$store";

  let allApps = false;

  const recApp = [
    "Calculator",
    "Camera",
    "File Explorer",
    "Microsoft Store",
    "Settings",
    "Terminal",
  ];

  const toggleOpenApp = (app: string) => {
    if ($openedApps.includes(app)) {
      $activeThing = "";
      $openedApps = $openedApps.filter((oa) => oa !== app);
    } else {
      $activeThing = app;
      $openedApps = [...$openedApps, app];
    }
  };
</script>

<div
  class="start activeShadow"
  transition:fly={{ y: 700, duration: 200, opacity: 1 }}
>
  <div class="topCont">
    <TextBox
      placeholder="Type here to search"
      on:click={() => ($activeThing = "Search")}
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
            {#each $appList as app}
              <div
                class="pnApp hvrBgLight"
                on:click={() => toggleOpenApp(app)}
                on:keypress={() => toggleOpenApp(app)}
              >
                <img src="img/icon/{app}.png" alt="" height="32" width="32" />
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
              <div
                class="recApp hvrBgLight"
                on:click={() => toggleOpenApp(app)}
                on:keypress={() => toggleOpenApp(app)}
              >
                <img src="img/icon/{app}.png" alt="" height="32" width="32" />
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
          {#each $appList as app}
            <div
              class="allApp hvrBgLight"
              on:click={() => toggleOpenApp(app)}
              on:keypress={() => toggleOpenApp(app)}
            >
              <img src="img/icon/{app}.png" alt="" height="24" width="24" />
              {app}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
  <div class="bottomBar">
    <MenuFlyout>
      <div class="hvrBgLight flyoutBtn">
        <img
          class="mr-2"
          src="img/apps/settings/defAccount.webp"
          height="32"
          width="32"
          alt=""
        />
        Yashash
      </div>
      <svelte:fragment slot="flyout">
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/person.svg"
            height="20"
            width="20"
            alt=""
          />
          Change account settings
        </MenuFlyoutItem>
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/lock.svg"
            height="20"
            width="20"
            alt=""
          />
          Lock
        </MenuFlyoutItem>
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/signOut.svg"
            height="20"
            width="20"
            alt=""
          />
          Sign Out
        </MenuFlyoutItem>
      </svelte:fragment>
    </MenuFlyout>
    <MenuFlyout>
      <div class="hvrBgLight flyoutBtn2">
        <img
          class="icon"
          src="img/icon/ui/powerButton.svg"
          height="20"
          width="20"
          alt=""
        />
      </div>
      <svelte:fragment slot="flyout">
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/moon.svg"
            height="18"
            width="18"
            alt=""
          />
          Sleep
        </MenuFlyoutItem>
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/powerButton.svg"
            height="18"
            width="18"
            alt=""
          />
          Shut Down
        </MenuFlyoutItem>
        <MenuFlyoutItem>
          <img
            class="icon mr-2"
            src="img/icon/ui/arrowAntiClockwise.svg"
            height="18"
            width="18"
            alt=""
          />
          Restart
        </MenuFlyoutItem>
      </svelte:fragment>
    </MenuFlyout>
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
    overflow: hidden;
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
    padding: 12px 6px 0;
  }
  .pnApp img {
    margin-bottom: 4px;
    transition: all 150ms;
  }
  .pnApp:active img {
    transform: scale(75%);
  }

  .recAppsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 1rem;
    padding-left: 1rem;
    height: 168px;
    overflow: hidden;
  }
  @media (max-height: 760px) {
    .recAppsGrid {
      height: 112px;
    }
  }
  @media (max-height: 700px) {
    .recAppsGrid {
      height: 56px;
    }
  }
  @media (max-height: 640px) {
    .recAppsGrid {
      display: none;
    }
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
    height: min(100vh - 282px, 510px);
    margin-right: -2rem;
    padding-bottom: 2rem;
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

  .flyoutBtn {
    display: flex;
    gap: 4px;
    padding: 4px 12px;
    border-radius: 4px;
    align-items: center;
  }

  .flyoutBtn2 {
    padding: 8px;
    border-radius: 4px;
  }
</style>
