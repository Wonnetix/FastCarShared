export * from "./dto/user";
export * from "./dto/media";
export * from "./dto/post";

// Common response DTO
class ResponseDto {
  error_code: string;
  error_message: string;
}

export { ResponseDto };
