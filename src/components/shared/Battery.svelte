<script>
  import { battery } from "../../store";

  const updateBatteryStatus = (bt) => {
    $battery.level = Math.round(bt.level * 100);
    $battery.charging = bt.charging;
  };

  if (window.BatteryManager) {
    (async () => {
      let bt = await navigator.getBattery();
      updateBatteryStatus(bt);
      bt.onlevelchange = () => updateBatteryStatus(bt);
      bt.onchargingchange = () => updateBatteryStatus(bt);
    })();
  }

  export let pct = false;
</script>

<span>
  <div class="battery">
    {#if $battery.charging}
      <div class="charger">
        <img
          class="icon"
          src="assets/icon/ui/btCharge.svg"
          height="12"
          width="12"
          alt=""
        />
      </div>
    {/if}
    <img
      class="icon"
      src="assets/icon/ui/btEmpty.svg"
      height="20"
      width="20"
      alt=""
    />
    <div class="btFull" style="width: {$battery.level}%">
      <img
        class="icon"
        src="assets/icon/ui/btFull.svg"
        height="20"
        width="20"
        alt=""
      />
    </div>
  </div>
  {#if pct}
    <div class="pct">{$battery.level}%</div>
  {/if}
</span>

<style>
  span {
    display: flex;
    align-items: center;
  }

  .battery {
    display: flex;
    position: relative;
  }
  .btFull {
    overflow: hidden;
    position: absolute;
    z-index: 0;
  }
  .charger img {
    position: absolute;
    z-index: 1;
  }

  .pct {
    font-size: 12px;
  }
</style>
