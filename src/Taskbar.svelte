<script>
  import Battery from "./components/shared/Battery.svelte";
  import Speaker from "./components/shared/Speaker.svelte";
  import { activeThing, date, openedApps } from "./store";

  const toggleActiveThing = (e) => ($activeThing = $activeThing === e ? "" : e);

  const toggleOpenApp = (app) => {
    if ($openedApps.includes(app)) {
      $activeThing = "";
      $openedApps = $openedApps.filter((oa) => oa !== app);
    } else {
      $activeThing = app;
      $openedApps = [...$openedApps, app];
    }
  };

  const taskApps = [
    "File Explorer",
    "Microsoft Edge",
    "Microsoft Store",
    "Settings",
  ];
</script>

<div class="taskbar">
  <div class="center">
    <div
      class="taskIcon hvrBgLight"
      class:bgLight={$activeThing === "Start"}
      on:click={() => toggleActiveThing("Start")}
      on:keypress={() => toggleActiveThing("Start")}
    >
      <img src="img/icon/Start.png" alt="Start" height="24" width="24" />
    </div>
    <div
      class="taskIcon hvrBgLight"
      class:bgLight={$activeThing === "Search"}
      on:click={() => toggleActiveThing("Search")}
      on:keypress={() => toggleActiveThing("Search")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -1 26 26"
        height="28"
        width="28"
      >
        <circle cx="13" cy="11" r="8" fill="#ffffff24" /><g
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="13" cy="11" r="8" />
          <path d="M3 21l4-4" stroke-linecap="round" />
        </g>
      </svg>
    </div>
    <div
      class="taskIcon hvrBgLight"
      class:bgLight={$activeThing === "Task View"}
      on:click={() => toggleActiveThing("Task View")}
      on:keypress={() => toggleActiveThing("Task View")}
    >
      <img
        src="img/icon/Task View.png"
        alt="Task View"
        height="24"
        width="24"
      />
    </div>
    <div
      class="taskIcon widgetBtn hvrBgLight"
      on:click={() => toggleActiveThing("Widgets")}
      on:keypress={() => toggleActiveThing("Widgets")}
    >
      <img src="img/icon/Widgets.png" alt="Widgets" height="24" width="24" />
    </div>

    {#each taskApps as app}
      <div
        class="taskIcon hvrBgLight"
        class:openedApp={$openedApps.includes(app)}
        class:bgLight={app === $activeThing}
        class:activeApp={app === $activeThing}
        on:click={() => toggleOpenApp(app)}
        on:keypress={() => toggleOpenApp(app)}
      >
        <img src="img/icon/{app}.png" alt={app} height="24" width="24" />
      </div>
    {/each}

    {#each $openedApps as app}
      {#if !taskApps.includes(app)}
        <div
          class="taskIcon hvrBgLight"
          class:openedApp={$openedApps.includes(app)}
          class:bgLight={app === $activeThing}
          class:activeApp={app === $activeThing}
          on:click={() => toggleOpenApp(app)}
          on:keypress={() => toggleOpenApp(app)}
        >
          <img src="img/icon/{app}.png" alt={app} height="24" width="24" />
        </div>
      {/if}
    {/each}
  </div>

  <div class="right">
    <div
      class="actionCenterBtn hvrBgLight"
      class:bgLight={$activeThing === "ActionCenter"}
      on:click={() => toggleActiveThing("ActionCenter")}
      on:keypress={() => toggleActiveThing("ActionCenter")}
    >
      <img
        class="icon"
        src="img/icon/ui/wifi.svg"
        height="20"
        width="20"
        alt=""
      />
      <Speaker />
      <Battery />
    </div>
    <div
      class="date hvrBgLight"
      class:bgLight={$activeThing === "Calendar"}
      on:click={() => toggleActiveThing("Calendar")}
      on:keypress={() => toggleActiveThing("Calendar")}
    >
      <p>
        {$date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
      <p>{$date.toLocaleDateString().replaceAll("/", "-")}</p>
    </div>
  </div>
</div>

<style>
  .taskbar {
    background: rgb(var(--bg1) / 85%);
    backdrop-filter: saturate(3) blur(1.5rem);
    position: absolute;
    bottom: 0;
    height: 48px;
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    box-shadow: inset 0 1px rgb(0 0 0 / 4%);
  }
  @media (prefers-color-scheme: dark) {
    .taskbar {
      background: rgb(var(--bg1) / 75%);
    }
  }

  .center {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .taskIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 4px;
    position: relative;
  }
  .taskIcon img,
  .taskIcon svg {
    transition: all 150ms;
  }
  .taskIcon:active img,
  .taskIcon:active svg {
    transform: scale(75%);
  }

  .taskIcon::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 0;
    border-radius: 3px;
    transition: all 200ms;
  }
  .taskIcon.openedApp::before {
    width: 6px;
    background: gray;
  }
  .taskIcon.activeApp::before {
    width: 1rem;
    background: rgb(var(--clrPrm));
  }

  .widgetBtn {
    position: absolute;
    left: 10px;
  }

  .right {
    right: 12px;
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .actionCenterBtn,
  .date {
    display: flex;
    padding: 0 6px;
    border-radius: 4px;
    height: 40px;
  }
  .actionCenterBtn {
    align-items: center;
    gap: 4px;
  }
  .date {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 12px;
  }
</style>
