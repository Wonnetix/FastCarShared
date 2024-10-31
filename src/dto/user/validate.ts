import { IsString, IsOptional, IsEmail, IsPhoneNumber } from "class-validator";

class ValidateUserRequestDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  name?: string;
}

class ValidateUserResponseDto {
  validate: boolean;
  field: string;
}

export { ValidateUserRequestDto, ValidateUserResponseDto };
