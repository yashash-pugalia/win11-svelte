<script lang="ts">
  import { draggable } from "@neodrag/svelte";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import Titlebar from "$components/shared/Titlebar.svelte";

  let videoSource = null;

  onMount(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoSource.srcObject = stream;
      videoSource.play();
    } catch (e) {
      console.log("Camera", e);
    }
  });
</script>

<div
  class="camera activeShadow"
  use:draggable={{
    handle: ".title-bar",
    bounds: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }}
  transition:scale={{ duration: 200 }}
>
  <Titlebar appName="Camera" darkBg />

  <div class="mainApp">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoSource} />

    <div class="shutterButton">
      <svg
        height="24"
        width="24"
        viewBox="0 0 32 32"
        xml:space="preserve"
        data-flip="false"
        data-invert="false"
        data-rounded="false"
        ><g clip-rule="evenodd" fill="#222" fill-rule="evenodd"
          ><path
            d="M16 10.001a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8zm4.555 11.905a5.998 5.998 0 01-8.459.65 5.997 5.997 0 01-.65-8.459 6 6 0 019.109 7.809z"
          /><path
            d="M16 14.001A4 4 0 0012 18v.002a.5.5 0 001 0V18a3 3 0 013-2.999.5.5 0 000-1z"
          /><path
            d="M29.492 9.042l-4.334-.723-1.373-3.434A2.988 2.988 0 0021 3H11a2.99 2.99 0 00-2.786 1.886L6.842 8.319l-4.333.723A2.989 2.989 0 000 12v15c0 1.654 1.346 3 3 3h26c1.654 0 3-1.346 3-3V12a2.989 2.989 0 00-2.508-2.958zM30 27a1 1 0 01-1 1H3a1 1 0 01-1-1V12a1 1 0 01.836-.986l5.444-.907 1.791-4.478C10.224 5.25 10.591 5 11 5h10c.408 0 .775.249.928.629l1.791 4.478 5.445.907A1 1 0 0130 12v15z"
          /></g
        ></svg
      >
    </div>
  </div>
</div>

<style>
  .camera {
    background: #202020;
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;
  }

  .mainApp {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: calc(100% - 36px);
  }

  video {
    max-height: 100%;
    max-width: calc(100% - 84px);
    transform: scaleX(-1);
    flex: 1;
  }

  .shutterButton {
    background: #fefefe;
    border: 3px solid transparent;
    outline: 4px solid #aaa;
    border-radius: 50%;
    margin: 10px;
    height: 64px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shutterButton:hover {
    border: 3px solid black;
  }
  .shutterButton:active {
    background: #888;
    border: 3px solid transparent;
  }
</style>
