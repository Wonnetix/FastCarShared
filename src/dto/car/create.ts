import { UpdateCarRequestDto } from "./update";
import { ResponseDto } from "../../common";

class CreateCarRequestDto extends UpdateCarRequestDto {
  id: string;
}

class CreateCarResponseDto extends ResponseDto {}

export { CreateCarRequestDto, CreateCarResponseDto };
