// Common response DTO
class ResponseDto {
  error_code: string;
  error_message: string;
}

class PaginationDto {
  skip: number;
  take: number;
}

export { ResponseDto, PaginationDto };
