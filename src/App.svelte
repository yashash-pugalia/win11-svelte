<script>
  import data from "./data.json";

  let navState = "";
  let currentPage = "System";
</script>

<nav class={navState}>
  <div class="nav_top">
    <div
      class="account"
      on:click={() => {
        currentPage = "Accounts";
        navState = "";
      }}
    >
      <img src="img/nav/defAccount.webp" alt="" height={60} width={60} />
      <div>
        <p>Yashash</p>
        <p>Local Account</p>
      </div>
    </div>
    <input
      type="text"
      class="search"
      placeholder="Find a setting "
      name="search"
    />
  </div>
  <div class="nav_bottom">
    {#each Object.entries(data) as [e]}
      <div
        key={e}
        class={`navLink ${e === currentPage ? "active" : ""}`}
        on:click={() => {
          currentPage = e;
          navState = "";
        }}
      >
        <img src={`img/nav/${e}.webp`} alt="" height={16} width={16} />
        {e}
      </div>
    {/each}
    <div class="marker" />
  </div>
</nav>

{#each Object.entries(data) as [i]}
  {#if currentPage === i}
    <main>
      <h1>{i}</h1>
      <div class="tilesCont">
        {#each data[i] as e}
          {#if e.type === "tile" || e.type === "tile square" || e.type === "tile thin-blue"}
            <div key={e.name} class={e.type}>
              <span>{(e.icon = e.icon ? e.icon : "")}</span>
              <div>
                <p>{e.name}</p>
                <p class="tile_desc">{(e.desc = e.desc ? e.desc : "")}</p>
              </div>
            </div>
          {:else if e.type === "sysTop"}
            <div class={e.type}>
              <div class="left">
                <img
                  src="https://win11.blueedge.me/img/wallpaper/default/img0.jpg"
                  alt=""
                  class="device_img"
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
                    src="https://upload.wikimedia.org/wikipedia/commons/9/94/M_box.svg"
                    height={20}
                    alt=""
                  />
                  <p>
                    Microsoft 365
                    <br />
                    <span class="column_lower">View benefits</span>
                  </p>
                </div>
                <div
                  class="column"
                  on:click={() => (currentPage = "Windows Update")}
                >
                  <img src="img/nav/Windows Update.webp" alt="" height={20} />
                  <p>
                    Windows Update
                    <br />
                    <span class="column_lower"
                      >Last checked: {Math.ceil(Math.random() * 12)} hours ago</span
                    >
                  </p>
                </div>
              </div>
            </div>
          {:else if e.type === "subHeading" || e.type === "spacer"}
            <div class={e.type}>{(e.name = e.name ? e.name : "")}</div>
          {/if}
        {/each}
      </div>
    </main>
  {/if}
{/each}

<div class="navMenuBtn" on:click={() => (navState = navState ? "" : "open")}>
  <svg fill="currentColor" viewBox="0 0 48 48" width={24} height={24}>
    <path
      d="M5.5 9a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37zm0 13.5a1.5 1.5 0 1 0 0 3h37a1.5 1.5 0 1 0 0-3h-37z"
    />
  </svg>
</div>
