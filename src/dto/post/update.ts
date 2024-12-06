import { ResponseDto } from "../..";

class UpdatePostRequestDto {
  content: string;
}

class UpdatePostResponseDto extends ResponseDto {}

export { UpdatePostRequestDto, UpdatePostResponseDto };
