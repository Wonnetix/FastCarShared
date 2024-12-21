import { FuelType, TransmissionType, VisibilityType } from ".";
import { ResponseDto } from "../../common";

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

export { UpdateCarRequestDto, UpdateCarResponseDto };
