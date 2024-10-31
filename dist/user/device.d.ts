interface ExpoDeviceInfo {
  deviceType: number;
  brand: string | null;
  deviceName: string | null;
  osName: string | null;
  osVersion: string | null;
  modelName: string | null;
  modelId: string | null;
  osBuildId: string | null;
}
interface ProcessedDeviceInfo {
  deviceId: string;
  deviceName: string | null;
  deviceBrand: string | null;
  deviceType: number;
  osName: string | null;
  osVersion: string | null;
}
export { ExpoDeviceInfo, ProcessedDeviceInfo };
