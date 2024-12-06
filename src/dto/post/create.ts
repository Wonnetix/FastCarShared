import { ResponseDto } from "../..";

class CreatePostRequestDto {
  id: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
}

class CreatePostResponseDto extends ResponseDto {}

export { CreatePostRequestDto, CreatePostResponseDto };
