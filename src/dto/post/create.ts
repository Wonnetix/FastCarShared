class CreatePostRequestDto {
  id: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
}

class CreatePostResponseDto {
  error_code: string;
  error_message: string;
}

export { CreatePostRequestDto, CreatePostResponseDto };
