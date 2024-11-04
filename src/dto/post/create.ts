class CreatePostRequestDto {
  id: string;
  media_url: string;
  comment: string;
}

class CreatePostResponseDto {
  error_code: string;
  error_message: string;
}

export { CreatePostRequestDto, CreatePostResponseDto };
