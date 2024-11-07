class UpdatePostRequestDto {
  content: string;
}

class UpdatePostResponseDto {
  error_code: number;
  error_message: string;
}

export { UpdatePostRequestDto, UpdatePostResponseDto };
