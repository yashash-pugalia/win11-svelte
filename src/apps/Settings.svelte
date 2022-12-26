<script>
  import { draggable } from "@neodrag/svelte";
  import { Button, TextBox } from "fluent-svelte";
  import { scale } from "svelte/transition";
  import Titlebar from "../components/shared/Titlebar.svelte";
  import { themes } from "../store";
  import data from "./settingsData.json";

  let tab = "System";
  let navOpen = false;

  const setTab = (a) => {
    tab = a;
    navOpen = false;
  };
</script>

<div
  class="settings activeShadow"
  use:draggable={{
    handle: ".title-bar",
  }}
  transition:scale={{ duration: 200 }}
>
  <Titlebar appName="Settings" canGoBack={ true } />
  <div class="mainApp">
    {#each Object.entries(data) as [i]}
      {#if tab === i}
        <main>
          <h1>{tab}</h1>
          <div class="tilesCont">
            {#each data[tab] as e}
              <div class={e.type}>
                {#if e.type === "tile" || e.type === "tile square" || e.type === "tile thin-blue"}
                  <span class="settingsIcon">{e.icon ? e.icon : ""}</span>
                  <div>
                    <p>{e.name}</p>
                    <p class="tile_desc">{e.desc ? e.desc : ""}</p>
                  </div>
                {:else if e.type === "sysTop"}
                  <div class="left">
                    <img
                      src="img/Wallpaper/Windows/img0.jpg"
                      class="device_img"
                      alt=""
                      height="72"
                      width="110.5"
                    />
                    <div class="column_device">
                      <p class="device_name">Liber-V</p>
                      <p class="device_model">NS14A8</p>
                      <p class="device_rename">Rename</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="column">
                      <img
                        src="img/apps/settings/msft.svg"
                        alt=""
                        height="20"
                        width="20"
                      />
                      <p>
                        Microsoft 365
                        <br />
                        <span class="column_lower">View benefits</span>
                      </p>
                    </div>
                    <div
                      class="column"
                      on:click={() => setTab("Windows Update")}
                      on:keypress={() => setTab("Windows Update")}
                    >
                      <img
                        src="img/apps/settings/Windows Update.webp"
                        alt=""
                        height="20"
                        width="20"
                      />
                      <p>
                        Windows Update
                        <br />
                        <span class="column_lower">
                          Last checked: {Math.ceil(Math.random() * 12)} hours ago
                        </span>
                      </p>
                    </div>
                  </div>
                {:else if e.type === "netTop"}
                  <div>
                    <img
                      src="img/apps/settings/wifi.png"
                      alt=""
                      height="100"
                      width="100"
                    />
                    <div>
                      <h2>WiFi</h2>
                      <p>Connected, secured</p>
                    </div>
                  </div>
                  <div class="box">
                    <span class="settingsIcon"></span>
                    <div>
                      <h3>Properties</h3>
                      <p>Public network 5 Ghz</p>
                    </div>
                  </div>
                  <div class="box">
                    <span class="settingsIcon"></span>
                    <div>
                      <h3>Data Usage</h3>
                      <p>{Math.round(Math.random() * 100)}GB, last 30 days</p>
                    </div>
                  </div>
                {:else if e.type === "personaliseTop"}
                  <img
                    class="mainImg"
                    src="img/Wallpaper/Windows/img0.jpg"
                    alt=""
                    height="200"
                    width="310.5"
                  />
                  <div>
                    <h3>Select a theme to apply</h3>
                    <div class="bgBox">
                      {#each $themes as theme}
                        <img
                          class:selected={theme === "Windows/img0"}
                          src="img/Wallpaper/{theme}.jpg"
                          alt=""
                          height="75"
                          width="120"
                        />
                      {/each}
                    </div>
                  </div>
                {:else if e.type === "accountsTop"}
                  <img
                    src="img/apps/settings/defAccount.webp"
                    alt=""
                    height="90"
                    width="90"
                  />
                  <div>
                    <p>YASHASH</p>
                    <p>Local Account</p>
                    <p>Administrator</p>
                  </div>
                {:else if e.type === "timeTop"}
                  <h1>
                    {new Date().toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </h1>
                {:else if e.type === "updateTop"}
                  <div class="left">
                    <img
                      src="img/apps/settings/update.png"
                      height="90"
                      width="90"
                      alt=""
                    />
                    <div>
                      <h2>You're up to date</h2>
                      <p>Last checked: Today</p>
                    </div>
                  </div>
                  <div class="right">
                    <Button variant="accent">Check for updates</Button>
                  </div>
                {:else if e.type === "subHeading" || e.type === "spacer"}
                  {e.name ? e.name : ""}
                {/if}
              </div>
            {/each}
          </div>
        </main>
      {/if}
    {/each}

    <nav class:navOpen>
      <div class="nav_top">
        <div
          class="account"
          on:click={() => setTab("Accounts")}
          on:keypress={() => setTab("Accounts")}
        >
          <img
            src="img/apps/settings/defAccount.webp"
            alt=""
            height="60"
            width="60"
          />
          <div>
            <p>Yashash</p>
            <p>Local Account</p>
          </div>
        </div>
        <div class="search">
          <TextBox type="search" placeholder="Find a setting" />
        </div>
      </div>
      <div class="nav_bottom">
        {#each Object.keys(data) as e}
          <div
            class="navLink"
            class:selected={tab === e}
            on:click={() => setTab(e)}
            on:keypress={() => setTab(e)}
          >
            <img
              src="img/apps/settings/{e}.webp"
              alt=""
              height={16}
              width={16}
            />
            {e}
          </div>
        {/each}
        <div class="marker" />
      </div>
    </nav>

    <div
      class="navMenuBtn"
      on:click={() => (navOpen = !navOpen)}
      on:keypress={() => (navOpen = !navOpen)}
    >
      <svg fill="currentColor" viewBox="0 0 48 48" height="24" width="24">
        <path
          d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z"
        />
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
  .settings {
    background: var(--mica);
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;

    min-width: 720px;
    // container-type: inline-size;
    // container-name: settings;
  }
  @supports (container-type: inline-size) {
    .settingsApp {
      min-width: 360px;
    }
  }
  .mainApp {
    padding-left: 300px;
    position: relative;
    height: calc(100% - 36px);
  }

  nav {
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 300px;
  }
  nav .nav_top .account {
    align-items: center;
    border-radius: 4px;
    display: flex;
    gap: 16px;
    margin: 8px;
    padding: 8px;
  }
  nav .nav_top .account:hover {
    background: rgb(var(--clr) / 3.33%);
  }
  nav .nav_top .account div p:first-child {
    font-variation-settings: "wght" 600;
  }
  nav .nav_top .account div p:last-child {
    font-size: smaller;
  }
  .nav_top .search {
    height: 32px;
    margin: 8px 16px 20px;
    width: 268px;
  }

  nav .nav_bottom {
    display: flex;
    flex-direction: column;
    height: calc(100% - 144px);
    overflow-y: overlay;
    position: relative;
    padding: 0 12px;
  }
  .nav_bottom img {
    margin-right: 12px;
  }
  .navLink {
    position: relative;
    overflow: hidden;
    height: 36px;
    padding-left: 7px;
    margin: 2px 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-shrink: 0;

    &:hover,
    &.selected {
      background: rgb(var(--clr) / 5%);
    }

    img {
      margin: 0 10.5px 0 7px;
    }
  }

  .marker {
    position: absolute;
    background: rgb(var(--clrPrm));
    height: 16px;
    width: 3px;
    border-radius: 3px;
    top: 0;
    left: 16px;
    transform: translateY(12px);
    transition: transform 250ms cubic-bezier(1, 0, 0, 1);
  }

  @for $i from 1 to 12 {
    .navLink:nth-child(#{$i}).selected ~ .marker {
      transform: translateY(((40 * ($i - 1)) + 12) + px);
    }
  }

  main {
    overflow: hidden;
    height: 100%;
  }
  main h1 {
    font-size: 28px;
    font-weight: unset;
    font-variation-settings: "wght" 600;
    padding: 14px 24px;
  }
  main .tilesCont {
    animation: slideUp 0.2s;
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: calc(100% - 64px);
    overflow-y: overlay;
    padding: 0 24px 44px;
  }

  main .sysTop {
    flex-wrap: wrap;
    gap: 8px;
    justify-content: space-between;
    padding: 8px 0 14px;
    width: min(100%, 1000px);
  }
  main .sysTop,
  main .sysTop .left {
    align-items: center;
    display: flex;
  }
  main .sysTop .left .device_img {
    border: 4px solid black;
    border-radius: 4px;
  }
  main .sysTop .left .column_device {
    margin-left: 16px;
  }
  main .sysTop .left .column_device .device_name {
    font-size: 18px;
    font-variation-settings: "wght" 600;
  }
  main .sysTop .left .column_device .device_model {
    color: rgb(var(--clr) / 90%);
  }
  main .sysTop .left .column_device .device_rename {
    color: rgb(var(--clrPrm));
  }
  main .sysTop .right {
    display: flex;
  }
  main .sysTop .right .column {
    align-items: center;
    border-radius: 4px;
    display: flex;
    padding: 8px;
  }
  main .sysTop .right .column:hover {
    background: rgb(var(--clr) / 5%);
  }
  main .sysTop .right .column p {
    font-variation-settings: "wght" 600;
    padding: 0 12px;
  }
  main .sysTop .right .column p .column_lower {
    color: rgb(var(--clr) / 60%);
    font-size: 13px;
    font-variation-settings: "wght" 400;
  }

  .netTop {
    width: min(100%, 1000px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    gap: 1rem;
  }
  .netTop div:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .netTop .box {
    display: flex;
    padding: 8px;
    gap: 10px;
    align-items: center;
    border-radius: 4px;
  }
  .netTop .box .settingsIcon {
    margin: 0;
  }
  .netTop .box:hover {
    background: rgb(var(--clr) / 5%);
  }
  .netTop h2 {
    font-size: 18px;
  }
  .netTop .box h3 {
    font-weight: unset;
    font-variation-settings: "wght" 600;
    font-size: 14px;
  }
  .netTop .box p {
    font-size: 12px;
    color: rgb(var(--txt_clr-rgb) / 67%);
  }

  .personaliseTop {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 12px;
  }
  .personaliseTop .mainImg {
    border: 8px solid black;
    border-radius: 1rem;
    margin-right: 32px;
  }
  .personaliseTop div h3 {
    font-size: 14px;
    font-weight: unset;
    font-variation-settings: "wght" 600;
    padding-bottom: 8px;
  }
  .personaliseTop div .bgBox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 8px;
  }
  .personaliseTop div .bgBox img {
    width: 120px;
    border-radius: 4px;
  }
  .personaliseTop div .bgBox .selected {
    box-shadow: 0 0 0 2px rgb(var(--bg1)), 0 0 0 4px rgb(var(--clrPrm));
  }

  .accountsTop {
    display: flex;
    gap: 16px;
    align-items: center;
    margin: 1rem 0;
  }
  .accountsTop div p:first-child {
    font-size: 16px;
  }
  .accountsTop div p:nth-child(2),
  .accountsTop div p:last-child {
    color: rgb(var(--clr) / 67%);
  }

  .updateTop {
    display: flex;
    width: min(100%, 1000px);
    align-items: center;
    gap: 1rem;
  }
  .updateTop .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .updateTop .left div h2 {
    font-size: 18px;
    font-weight: 600;
  }
  .updateTop .left div p {
    font-size: 14px;
    color: rgb(var(--txt_clr-rgb) / 67%);
  }
  .updateTop .right {
    flex-shrink: 0;
    margin-left: auto;
  }

  main .tilesCont .tile {
    align-items: center;
    background: hsla(0, 0%, 100%, 0.67);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    min-height: 67px;
    padding: 7px 42px 7px 0;
    position: relative;
    width: min(100%, 1000px);
  }
  main .tilesCont .tile:hover {
    background: hsla(0, 0%, 100%, 0.33);
  }
  main .tilesCont .tile:after {
    content: ">";
    position: absolute;
    right: 16px;
    transform: scaleY(2);
  }
  main .tilesCont .settingsIcon {
    font-family: settingsIcon;
    font-size: 20px;
    margin: 0 21px 0 17.5px;
  }
  main .tilesCont .tile .tile_desc {
    color: rgb(var(--clr) / 66%);
    font-size: 12.33px;
  }
  main .tilesCont .tile.square {
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    font-variation-settings: "wght" 600;
    height: 220px;
    justify-content: center;
    padding: 0;
    width: 220px;
  }
  main .tilesCont .tile.square span {
    font-size: 48px;
  }
  main .tilesCont .tile.thin-blue {
    color: rgb(var(--clrPrm));
    height: unset;
    justify-content: center;
    margin: 4px 0;
    min-height: unset;
  }
  main .tilesCont .tile.square:after,
  main .tilesCont .tile.thin-blue:after {
    display: none;
  }
  main .tilesCont .subHeading {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    font-variation-settings: "wght" 600;
    height: 45px;
  }
  main .tilesCont .spacer {
    padding: 8px;
  }
  .navMenuBtn {
    display: none;
  }

  /* unable to use container queries due to https://github.com/sveltejs/svelte/issues/6969 */
  /* @container settings (max-width: 800px) {
    .navMenuBtn {
      border-radius: 6px;
      display: flex;
      padding: 12px;
      position: absolute;
      right: 8px;
      top: 8px;
    }
    .navMenuBtn:hover {
      background: rgb(var(--clr) / 5%);
    }
    .navMenuBtn svg {
      transition: all 0.1s;
    }
    .navMenuBtn:active svg {
      transform: scaleX(0.67);
    }
    .mainApp {
      padding-left: 0;
    }
    nav {
      background: rgb(var(--bg1));
      transform: translateX(-100%);
      transition: all 0.2s cubic-bezier(0, 0, 0, 1);
    }
    nav.navOpen {
      transform: translateX(0);
    }
  } */
  @media (prefers-color-scheme: dark) {
    main .tilesCont .tile {
      background: hsla(0, 0%, 100%, 0.05);
    }
    main .tilesCont .tile:hover {
      background: hsla(0, 0%, 100%, 0.1);
    }
  }
  @keyframes slideUp {
    0% {
      transform: translateY(70px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
