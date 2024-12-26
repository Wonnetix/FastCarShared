import { PostType } from ".";
import { ResponseDto } from "../../common";
import { VisibilityType } from "../car";

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
  visibility?: VisibilityType;
}

class CreatePostResponseDto extends ResponseDto {
  postId: string;
}

export {
  CreatePostRequestDto,
  CreatePostResponseDto,
  CreateMultimediaPostRequestDto,
};
