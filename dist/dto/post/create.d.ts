import { PostType } from ".";
import { ResponseDto } from "../../common";
declare class CreatePostRequestDto {
    id: string;
    media_url: string;
    thumbnail_url: string;
    caption: string;
    type: PostType;
}
declare class CreateMultimediaPostRequestDto {
    media_id: string[];
    media_url: string[];
    thumbnail_url: string[];
    caption: string;
    type: PostType;
    extraId?: string;
}
declare class CreatePostResponseDto extends ResponseDto {
}
export { CreatePostRequestDto, CreatePostResponseDto, CreateMultimediaPostRequestDto, };
