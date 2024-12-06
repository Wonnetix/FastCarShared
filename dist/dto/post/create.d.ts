import { ResponseDto } from "../..";
declare class CreatePostRequestDto {
    id: string;
    media_url: string;
    thumbnail_url: string;
    caption: string;
}
declare class CreatePostResponseDto extends ResponseDto {
}
export { CreatePostRequestDto, CreatePostResponseDto };
