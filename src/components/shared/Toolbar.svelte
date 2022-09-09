<script>
  import { activeThing, openedApps } from "../../store";
  export let appName = "App Name";
  export let darkBg = false;
</script>

<div class="toolbar" class:text-white={darkBg}>
  <div class="mainToolbar pl-4">
    <img src="img/icon/{appName}.png" height="16" width="16" alt="" />
    <span class="appName pl-2">{appName}</span>
  </div>
  <div class="actBtns">
    <div class="px-5 py-2 hvrBgDark">-</div>
    <div class="px-5 py-2 hvrBgDark">o</div>
    <div
      class="px-5 py-2 hover:bg-red-600"
      on:click={() => {
        $activeThing = "";
        $openedApps = $openedApps.filter((oa) => oa !== appName);
      }}
      on:keypress={() => {
        $activeThing = "";
        $openedApps = $openedApps.filter((oa) => oa !== appName);
      }}
    >
      x
    </div>
  </div>
</div>

<style>
  .toolbar {
    display: flex;
    height: 36px;
  }
  .mainToolbar,
  .actBtns {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .mainToolbar {
    flex-grow: 1;
  }
</style>
