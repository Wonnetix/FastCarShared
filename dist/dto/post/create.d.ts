import { PostType } from ".";
import { ResponseDto } from "../../common";
declare class CreatePostRequestDto {
    id: string;
    media_url: string;
    thumbnail_url: string;
    caption: string;
    type: PostType;
}
declare class CreatePostResponseDto extends ResponseDto {
}
export { CreatePostRequestDto, CreatePostResponseDto };
