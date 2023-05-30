export {};

declare global {
  interface Window {
    BatteryManager: any;
  }

  interface Navigator {
    getBattery: () => Promise<{
      charging: boolean;
      chargingTime: number;
      dischargingTime: number;
      level: number;
      onchargingchange: any;
      onchargingtimechange: any;
      ondischargingtimechange: any;
      onlevelchange: any;
    }>;
  }
}
