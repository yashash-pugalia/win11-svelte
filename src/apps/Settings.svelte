<script>
  import data from "./settingsData.json";

  let tab = "System";
  let navOpen = false; // the nav state

  const setTab = (a) => {
    tab = a;
    navOpen = false;
  };
</script>

<div class="settings">
  <nav class:open={navOpen}>
    <div class="nav_top">
      <div class="account" on:click={() => setTab("Accounts")}>
        <img
          src="assets/apps/settings/nav/defAccount.webp"
          alt=""
          height="60"
          width="60"
        />
        <div>
          <p>Yashash</p>
          <p>Local Account</p>
        </div>
      </div>
      <input class="search" placeholder="Find a setting" />
    </div>
    <div class="nav_bottom">
      {#each Object.entries(data) as [e]}
        <div
          class="navLink"
          class:active={e === tab}
          on:click={() => setTab(e)}
        >
          <img
            src={`assets/apps/settings/nav/${e}.webp`}
            alt=""
            height="16"
            width="16"
          />
          {e}
        </div>
      {/each}
      <div class="marker" />
    </div>
  </nav>

  {#each Object.entries(data) as [i]}
    {#if tab === i}
      <main>
        <h1>{tab}</h1>
        <div class="tilesCont">
          {#each data[tab] as e}
            <div class={e.type}>
              {#if e.type === "tile" || e.type === "tile square" || e.type === "tile thin-blue"}
                <span>{e.icon ? e.icon : ""}</span>
                <div>
                  <p>{e.name}</p>
                  <p class="tile_desc">{e.desc ? e.desc : ""}</p>
                </div>
              {:else if e.type === "sysTop"}
                <div class="left">
                  <img
                    src="assets/apps/settings/wall.webp"
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
                      src="assets/apps/settings/msft.svg"
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
                  <div class="column" on:click={() => setTab("Windows Update")}>
                    <img
                      src="assets/apps/settings/nav/Windows Update.webp"
                      alt=""
                      height="20"
                      width="20"
                    />
                    <p>
                      Windows Update
                      <br />
                      <span class="column_lower"
                        >Last checked: {Math.ceil(Math.random() * 12)} hours ago</span
                      >
                    </p>
                  </div>
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

  <div class="navMenuBtn" on:click={() => (navOpen = !navOpen)}>
    <svg fill="currentColor" viewBox="0 0 48 48" height="24" width="24">
      <path
        d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z"
      />
    </svg>
  </div>
</div>

<style>
  .settings {
    background: rgb(var(--bg1));
    color: rgb(var(--clr));
    padding-left: 300px;
    position: absolute;
    height: 80%;
    width: 80%;
    top: 10%;
    left: 10%;
    border-radius: 8px;
    overflow: hidden;
    /* display: flex; */
    /* flex-direction: column; */
  }
  nav {
    height: 100%;
    left: 0;
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
    font-weight: 500;
  }
  nav .nav_top .account div p:last-child {
    font-size: smaller;
  }
  nav .nav_top .search {
    background: #fff;
    border: 0;
    border-bottom: 1px solid rgb(var(--clrPrm));
    border-radius: 4px;
    height: 32px;
    margin: 8px 16px 20px;
    padding: 8px;
    width: 268px;
  }
  nav .nav_top .search:hover {
    background: hsla(0, 0%, 100%, 0.33);
  }
  nav .nav_top .search:focus {
    border-bottom: 2px solid rgb(var(--clrPrm));
  }
  nav .nav_top .search:focus-visible {
    outline: none;
  }
  nav .nav_top .search::placeholder {
    color: rgb(var(--clr) / 66%);
  }
  nav .nav_bottom {
    display: flex;
    flex-direction: column;
    height: calc(100% - 152px);
    overflow: overlay;
    position: relative;
  }
  nav .nav_bottom .navLink {
    align-items: center;
    border-radius: 4px;
    display: flex;
    flex-shrink: 0;
    height: 36px;
    margin: 2px 16px;
    overflow: hidden;
    padding-left: 7px;
    position: relative;
  }
  nav .nav_bottom .navLink.active,
  nav .nav_bottom .navLink:hover {
    background: rgb(var(--clr) / 3.33%);
  }
  nav .nav_bottom .navLink img {
    margin: 0 10.5px 0 7px;
  }
  nav .nav_bottom .marker {
    background: rgb(var(--clrPrm));
    border-radius: 3px;
    height: 16px;
    left: 16px;
    position: absolute;
    top: 12px;
    transition: top 0.3s cubic-bezier(1, 0, 0, 1), height 75ms;
    width: 3px;
  }
  nav .nav_bottom .navLink:first-child.active ~ .marker {
    top: 12px;
  }
  nav .nav_bottom .navLink:nth-child(2).active ~ .marker {
    top: 52px;
  }
  nav .nav_bottom .navLink:nth-child(3).active ~ .marker {
    top: 92px;
  }
  nav .nav_bottom .navLink:nth-child(4).active ~ .marker {
    top: 132px;
  }
  nav .nav_bottom .navLink:nth-child(5).active ~ .marker {
    top: 172px;
  }
  nav .nav_bottom .navLink:nth-child(6).active ~ .marker {
    top: 212px;
  }
  nav .nav_bottom .navLink:nth-child(7).active ~ .marker {
    top: 252px;
  }
  nav .nav_bottom .navLink:nth-child(8).active ~ .marker {
    top: 292px;
  }
  nav .nav_bottom .navLink:nth-child(9).active ~ .marker {
    top: 332px;
  }
  nav .nav_bottom .navLink:nth-child(10).active ~ .marker {
    top: 372px;
  }
  nav .nav_bottom .navLink:nth-child(11).active ~ .marker {
    top: 412px;
  }

  main {
    overflow: hidden;
    height: 100%;
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
    font-weight: 500;
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
    font-weight: 500;
    padding: 0 12px;
  }
  main .sysTop .right .column p .column_lower {
    color: rgb(var(--clr) / 60%);
    font-size: 13px;
    font-weight: 400;
  }
  main h1 {
    font-size: 28px;
    font-weight: 500;
    padding: 14px 24px;
  }
  main .tilesCont {
    animation: slideUp 0.2s;
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: calc(100% - 66px);
    overflow-y: overlay;
    padding: 0 24px 44px;
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
  main .tilesCont .tile span {
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
    font-weight: 500;
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
    font-weight: 500;
    height: 45px;
  }
  main .tilesCont .spacer {
    padding: 8px;
  }
  .navMenuBtn {
    display: none;
  }
  @media (max-width: 800px) {
    .navMenuBtn {
      border-radius: 6px;
      display: flex;
      padding: 12px;
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 99;
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
    .settings {
      padding-left: 0;
    }
    nav {
      background: rgb(var(--bg1));
      transform: translateX(-100%);
      transition: all 0.2s cubic-bezier(0, 0, 0, 1);
      z-index: 9;
    }
    nav.open {
      transform: translateX(0);
    }
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --clr: 255 255 255;
    }
    nav .nav_top .search {
      background: hsla(0, 0%, 100%, 0.033);
    }
    main .tilesCont .tile,
    nav .nav_top .search:hover {
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
