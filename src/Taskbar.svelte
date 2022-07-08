<script>
  import { activeThing, date, openedApps } from "./store";
  import Battery from "./components/shared/Battery.svelte";
  import Speaker from "./components/shared/Speaker.svelte";

  const toggleActiveThing = (e) => ($activeThing = $activeThing === e ? "" : e);

  // thanks a lot posandu
  const toggleOpenApp = (app) => {
    if ($openedApps.includes(app)) {
      $openedApps = $openedApps.filter((oa) => oa !== app);
    } else {
      $openedApps = [...$openedApps, app];
    }
  };

  const taskApps = [
    "Calculator",
    "Camera",
    "Microsoft Edge",
    "Microsoft Store",
    "Notepad",
    "Settings",
    "VS Code",
  ];
</script>

<div class="taskbar">
  <div class="center">
    <div class="taskIcon hvrLight" on:click={() => toggleActiveThing("Start")}>
      <img src="img/icon/Start.png" alt="Start" height="24" width="24" />
    </div>
    <div class="taskIcon hvrLight" on:click={() => toggleActiveThing("Search")}>
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
    <div class="taskIcon hvrLight">
      <img
        src="img/icon/Task View.png"
        alt="Task View"
        height="24"
        width="24"
      />
    </div>
    <div
      class="taskIcon widgetBtn hvrLight"
      on:click={() => toggleActiveThing("Widgets")}
    >
      <img src="img/icon/Widgets.png" alt="Widgets" height="24" width="24" />
    </div>
    {#each taskApps as app}
      <div class="taskIcon hvrLight" on:click={() => toggleOpenApp(app)}>
        <img src="img/icon/{app}.png" alt={app} height="24" width="24" />
      </div>
    {/each}
  </div>

  <div class="right">
    <div
      class="actionCenterBtn hvrLight"
      on:click={() => toggleActiveThing("ActionCenter")}
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
    <div class="date hvrLight" on:click={() => toggleActiveThing("Calendar")}>
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

  .widgetBtn {
    position: absolute;
    left: 10px;
  }

  .taskIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 4px;
  }

  .taskIcon img,
  .taskIcon svg {
    transition: all 150ms ease;
  }
  .taskIcon:active img,
  .taskIcon:active svg {
    transform: scale(75%);
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
