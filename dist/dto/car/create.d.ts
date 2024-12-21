import { FuelType, TransmissionType, VisibilityType } from ".";
import { ResponseDto } from "../../common";
declare class CreateCarRequestDto {
    id: string;
    modelId: number;
    year: number;
    km: number;
    engine_size?: number;
    fuel_type?: FuelType;
    transmission?: TransmissionType;
    color?: string;
    vin?: string;
    visibility?: VisibilityType;
}
declare class CreateCarResponseDto extends ResponseDto {
}
export { CreateCarRequestDto, CreateCarResponseDto };
