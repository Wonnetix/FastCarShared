import { CreateMultimediaPostRequestDto } from ".";
import { ResponseDto } from "../../common";

class UpdatePostRequestDto {
  content: string;
}

class UpdateMultimediaPostRequestDto extends CreateMultimediaPostRequestDto {
  post_id: string;
}

class UpdatePostResponseDto extends ResponseDto {}

export {
  UpdatePostRequestDto,
  UpdatePostResponseDto,
  UpdateMultimediaPostRequestDto,
};
