declare class CreatePostRequestDto {
    id: string;
    media_url: string;
    comment: string;
}
declare class CreatePostResponseDto {
    error_code: string;
    error_message: string;
}
export { CreatePostRequestDto, CreatePostResponseDto };
