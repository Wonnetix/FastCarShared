import { FuelType, TransmissionType, VisibilityType } from ".";
import { ResponseDto } from "../../common";

class CreateCarRequestDto {
  id: string;
  modelId: number;
  year: number;
  km: number;
  engine_size?: number;
  fuel_type?: FuelType;
  transmission?: TransmissionType;
  color?: number;
  vin?: string;
  visibility?: VisibilityType;
}

class CreateCarResponseDto extends ResponseDto {}

export { CreateCarRequestDto, CreateCarResponseDto };
