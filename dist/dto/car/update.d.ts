import { ResponseDto } from "../../common";
declare enum FuelType {
    GASOLINE = 0,
    DIESEL = 1,
    ELECTRIC = 2,
    HYBRID = 3,
    HYDROGEN = 4
}
declare enum TransmissionType {
    MANUAL = 0,
    AUTOMATIC = 1
}
declare enum VisibilityType {
    PRIVATE = 0,
    PUBLIC = 1,
    PUBLIC_FOR_FOLLOWERS = 2,
    LOCKED = 3
}
declare class UpdateCarRequestDto {
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
declare class UpdateCarResponseDto extends ResponseDto {
}
declare class TransferCarRequestDto {
    newOwnerId: string;
    lastKmReading: number;
}
declare class TransferCarResponseDto extends ResponseDto {
}
export { UpdateCarRequestDto, UpdateCarResponseDto, TransferCarRequestDto, TransferCarResponseDto, FuelType, TransmissionType, VisibilityType, };
