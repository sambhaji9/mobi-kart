export interface IPhoneDetails {
  additionalFeatures: string;
  android: IAndroid;
  availability: string[];
  battery: IBattery;
  camera: ICamera;
  connectivity: IConnectivity;
  description: string;
  display: IDisplay;
  hardware: IHardware;
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: ISizeAndWeight;
  storage: IStorage;
}

interface IStorage {
  flash: string;
  ram: string;
}

interface ISizeAndWeight {
  dimensions: string[];
  weight: string;
}

interface IHardware {
  accelerometer: boolean;
  audioJack: string;
  cpu: string;
  fmRadio: boolean;
  physicalKeyboard: boolean;
  usb: string;
}

interface IDisplay {
  screenResolution: string;
  screenSize: string;
  touchScreen: boolean;
}

interface IConnectivity {
  bluetooth: string;
  cell: string;
  gps: boolean;
  infrared: boolean;
  wifi: string;
}

interface ICamera {
  features: string[];
  primary: string;
}

interface IBattery {
  standbyTime: string;
  talkTime: string;
  type: string;
}

interface IAndroid {
  os: string;
  ui: string;
}