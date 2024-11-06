class DeletePostRequestDto {
  postId: string;
}

class DeletePostResponseDto {
  error_code: number;
  error_message: string;
}

export { DeletePostRequestDto, DeletePostResponseDto };
