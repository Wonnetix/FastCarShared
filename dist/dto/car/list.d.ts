import { FuelType, TransmissionType, VisibilityType } from "./update";
import { PaginationDto } from "../../common";
import { PostRecordDto } from "../post";
interface CarRecordDto {
    brandId: number;
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
interface CarBrandDto {
    id: number;
    name: string;
    models: CarModelDto[];
}
interface CarModelDto {
    id: number;
    name: string;
}
declare class CarListRequestDto extends PaginationDto {
}
export { CarRecordDto, CarListRequestDto, CarBrandDto, CarModelDto };
