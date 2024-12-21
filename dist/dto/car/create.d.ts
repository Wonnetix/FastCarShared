import { UpdateCarRequestDto } from "./update";
import { ResponseDto } from "../../common";
declare class CreateCarRequestDto extends UpdateCarRequestDto {
    id: string;
}
declare class CreateCarResponseDto extends ResponseDto {
}
export { CreateCarRequestDto, CreateCarResponseDto };
