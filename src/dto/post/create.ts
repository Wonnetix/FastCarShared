import { PostType } from ".";
import { ResponseDto } from "../../common";

class CreatePostRequestDto {
  id: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
  type: PostType;
}

class CreateMultimediaPostRequestDto {
  media_id: string[];
  media_url: string[];
  thumbnail_url: string[];
  caption: string;
  type: PostType;
  extraId?: string; //
}

class CreatePostResponseDto extends ResponseDto {
  postId: string;
}

export {
  CreatePostRequestDto,
  CreatePostResponseDto,
  CreateMultimediaPostRequestDto,
};
