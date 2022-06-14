<script>
  import { activeComponent, date, openedApps } from "../store";
  import Battery from "./shared/Battery.svelte";
  import Speaker from "./shared/Speaker.svelte";

  const toggleActiveComponent = (componentName) => {
    $activeComponent === componentName
      ? ($activeComponent = "")
      : ($activeComponent = componentName);
  };

  // thanks a lot posandu
  const toggleOpenApp = (appName) => {
    if ($openedApps.includes(appName)) {
      $openedApps = $openedApps.filter((app) => app !== appName);
    } else {
      $openedApps = [...new Set([...$openedApps, appName])];
    }
  };
</script>

<div class="taskbar">
  <div class="center">
    <div on:click={() => toggleActiveComponent("Start")}>Start</div>
    <div on:click={() => toggleActiveComponent("Search")}>Search</div>
    <div class="widgetBtn" on:click={() => toggleActiveComponent("Widgets")}>
      Widgets
    </div>
    <div on:click={() => toggleOpenApp("Settings")}>Settings</div>
    <div on:click={() => toggleOpenApp("File Explorer")}>File Explorer</div>
  </div>
  <div class="right">
    <div
      class="actionCenterBtn hvrLight"
      on:click={() => toggleActiveComponent("ActionCenter")}
    >
      <img
        class="icon"
        src="assets/icon/ui/wifi.svg"
        height="20"
        width="20"
        alt=""
      />
      <Speaker />
      <Battery />
    </div>
    <div
      class="date hvrLight"
      on:click={() => toggleActiveComponent("Calendar")}
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
    padding: 4px 12px;
    display: flex;
    justify-content: center;
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
  }
  .widgetBtn {
    position: absolute;
    left: 12px;
  }
  .right {
    right: 12px;
    position: absolute;
    display: flex;
    height: calc(100% - 8px);
  }
  .actionCenterBtn,
  .date {
    display: flex;
    padding: 0 6px;
    border-radius: 4px;
  }
  .actionCenterBtn {
    align-items: center;
    gap: 4px;
  }
  .date {
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 12.5px;
  }
</style>
