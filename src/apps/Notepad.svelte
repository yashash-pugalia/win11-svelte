<script>
  import { draggable } from "@neodrag/svelte";
  import { scale } from "svelte/transition";
  import Toolbar from "../components/shared/Toolbar.svelte";

  import {
    MenuBar,
    MenuBarItem,
    MenuFlyoutDivider,
    MenuFlyoutItem,
  } from "fluent-svelte";
</script>

<div
  class="notepad activeShadow"
  use:draggable={{
    handle: ".mainToolbar",
  }}
  transition:scale={{ duration: 200 }}
>
  <Toolbar appName="Notepad" />

  <div class="mainApp">
    <MenuBar>
      <MenuBarItem>
        File
        <svelte:fragment slot="flyout">
          <MenuFlyoutItem hint="Ctrl+N">New</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+Shift+N">New window</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+O">Open</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+S">Save</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+Shift+S">Save as</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem>Page setup</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+P">Print</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem>Exit</MenuFlyoutItem>
        </svelte:fragment>
      </MenuBarItem>
      <MenuBarItem>
        Edit
        <svelte:fragment slot="flyout">
          <MenuFlyoutItem hint="Ctrl+Z">Undo</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem hint="Ctrl+X">Cut</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+C">Copy</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+V">Paste</MenuFlyoutItem>
          <MenuFlyoutItem hint="Del">Delete</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem hint="Ctrl+F">Find</MenuFlyoutItem>
          <MenuFlyoutItem hint="F3">Find next</MenuFlyoutItem>
          <MenuFlyoutItem hint="Shift+F3">Find previous</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+H">Replace</MenuFlyoutItem>
          <MenuFlyoutItem hint="Ctrl+G">Go to</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem hint="Ctrl+A">Select all</MenuFlyoutItem>
          <MenuFlyoutItem hint="F5">Time/Date</MenuFlyoutItem>
          <MenuFlyoutDivider />
          <MenuFlyoutItem>Font</MenuFlyoutItem>
        </svelte:fragment>
      </MenuBarItem>
      <MenuBarItem>
        View
        <svelte:fragment slot="flyout">
          <MenuFlyoutItem indented cascading>
            Zoom
            <svelte:fragment slot="flyout">
              <MenuFlyoutItem hint="Ctrl+Plus">Zoom in</MenuFlyoutItem>
              <MenuFlyoutItem hint="Ctrl+Minus">Zoom out</MenuFlyoutItem>
              <MenuFlyoutItem hint="Ctrl+0">Restore default zoom</MenuFlyoutItem
              >
            </svelte:fragment>
          </MenuFlyoutItem>
          <MenuFlyoutItem variant="toggle" checked>Status bar</MenuFlyoutItem>
          <MenuFlyoutItem variant="toggle" checked>Word wrap</MenuFlyoutItem>
        </svelte:fragment>
      </MenuBarItem>
    </MenuBar>
    <textarea />
  </div>
</div>

<style>
  .notepad {
    background: var(--mica);
    position: absolute;
    inset: 10%;
    border-radius: 8px;
    overflow: hidden;
    resize: both;
  }
  .mainApp {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: calc(100% - 36px);
  }

  textarea {
    background: rgb(var(--bg9));
    color: var(--clr);
    height: 100%;
    width: 100%;
    font-family: Consolas, monospace;
    padding: 1rem;
    border: none;
    outline: none;
    overflow: overlay;
  }
  textarea::selection {
    background: rgb(var(--clrPrm));
    color: rgb(var(--bg9));
  }
</style>
