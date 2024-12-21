export enum MaintenanceType {
  MAINTENANCE = 0,
  REPAIR = 1,
}

export enum FuelType {
  GASOLINE = 0,
  DIESEL = 1,
  ELECTRIC = 2,
  HYBRID = 3,
  HYDROGEN = 4,
}

export enum TransmissionType {
  MANUAL = 0,
  AUTOMATIC = 1,
}

export enum VisibilityType {
  PUBLIC = 0,
  PRIVATE = 1,
  LOCKED = 2,
}

export * from "./create";
export * from "./update";
