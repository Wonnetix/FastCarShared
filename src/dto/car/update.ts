import { ResponseDto } from "../../common";

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

class UpdateCarRequestDto {
  modelId: number;
  year: number;
  km: number;
  engine_size?: number;
  fuel?: FuelType;
  transmission?: TransmissionType;
  color?: number;
  vin?: string;
  visibility?: VisibilityType;
}

class UpdateCarResponseDto extends ResponseDto {}

class TransferCarRequestDto {
  newOwnerId: string;
  lastKmReading: number;
}

class TransferCarResponseDto extends ResponseDto {}

export {
  UpdateCarRequestDto,
  UpdateCarResponseDto,
  TransferCarRequestDto,
  TransferCarResponseDto,
  FuelType,
  TransmissionType,
  VisibilityType,
};
