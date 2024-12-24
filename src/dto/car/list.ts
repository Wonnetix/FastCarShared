import { FuelType, TransmissionType, VisibilityType } from "./update";
import { PaginationDto } from "../../common";
import { PostRecordDto } from "../post";

interface CarRecordDto {
  modelId: number;
  brandName: string;
  modelName: string;
  colorName: string;
  year: number;
  km: number;
  engine_size?: number;
  fuel?: FuelType;
  transmission?: TransmissionType;
  color?: number;
  vin?: string;
  visibility?: VisibilityType;
  post: PostRecordDto;
}

class CarListRequestDto extends PaginationDto {}

export { CarRecordDto, CarListRequestDto };
