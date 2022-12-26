<script>
  import { draggable } from "@neodrag/svelte";
  import { scale } from "svelte/transition";
  import Titlebar from "../components/shared/Titlebar.svelte";
</script>

<div
  class="explorer activeShadow"
  use:draggable={{
    handle: ".title-bar",
  }}
  transition:scale={{ duration: 200 }}
>
  <Titlebar appName="File Explorer" />

  <div class="mainApp">
    <h1>Work In Progress</h1>
  </div>
</div>

<style>
  .explorer {
    background: var(--mica);
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;
  }

  .mainApp {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: calc(100% - 36px);
  }
</style>
