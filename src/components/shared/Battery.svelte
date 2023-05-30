<script lang="ts">
  import { battery } from "$store";

  const updateBatteryStatus = (bt: any) => {
    $battery = Math.round(bt.level * 100);
    if (bt.charging) {
      $battery = -$battery;
    }
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
    {#if $battery < 0}
      <div class="charger">
        <img
          class="icon"
          src="img/icon/ui/btCharge.svg"
          height="12"
          width="12"
          alt=""
        />
      </div>
    {/if}
    <img
      class="icon"
      src="img/icon/ui/btEmpty.svg"
      height="20"
      width="20"
      alt=""
    />
    <div class="btFull" style="width: {Math.abs($battery)}%">
      <img
        class="icon"
        src="img/icon/ui/btFull.svg"
        height="20"
        width="20"
        alt=""
      />
    </div>
  </div>
  {#if pct}<div class="pct">{Math.abs($battery)}%</div>{/if}
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
    margin-left: 4px;
  }
</style>
