<script>
  import { scale } from "svelte/transition";
</script>

<div class="vscode activeShadow" transition:scale={{ duration: 200 }}>
  <iframe
    title="VS Code"
    src="https://stackblitz.com/github/yashash1511/win11Svelte?embed=1&file=src/App.svelte"
    frameborder="0"
  />
</div>

<style>
  .vscode {
    background: #202327;
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;
    display: flex;
  }

  iframe {
    flex-grow: 1;
  }
</style>
