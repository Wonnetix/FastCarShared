import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
} from "class-validator";

class UserBaseRecord {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  language?: string;
}

class InputUserRequestDto {
  @IsString()
  userId: string;
}

export { InputUserRequestDto, UserBaseRecord };
