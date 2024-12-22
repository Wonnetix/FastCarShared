import { MaintenanceItem } from "./maintenance";
import { AccidentItem } from "./accident";
import { FuelType, TransmissionType, VisibilityType } from "./update";
import { MediaRecordDto } from "../media";
import { PaginationDto } from "../../common";

interface CarRecordDto {
  modelId: number;
  year: number;
  km: number;
  engine_size?: number;
  fuel?: FuelType;
  transmission?: TransmissionType;
  color?: number;
  vin?: string;
  visibility?: VisibilityType;
  images: MediaRecordDto[];
  maintenanceHistory: MaintenanceItem[];
  accidentHistory: AccidentItem[];
}

class CarListRequestDto extends PaginationDto {
  userId: string;
}

export { CarRecordDto, CarListRequestDto };