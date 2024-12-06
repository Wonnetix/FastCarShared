import { ResponseDto } from "../../common";

class UpdatePostRequestDto {
  content: string;
}

class UpdatePostResponseDto extends ResponseDto {}

export { UpdatePostRequestDto, UpdatePostResponseDto };
