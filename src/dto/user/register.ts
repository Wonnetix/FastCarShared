import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  IsStrongPasswordOptions,
} from "class-validator";
import { Match } from "../../decorator/match";

import { UserBaseRecord } from "./BaseUser";

const strongPasswordOptions = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 1,
} as IsStrongPasswordOptions;

class RegisterUserRequestDto extends UserBaseRecord {
  @IsStrongPassword(strongPasswordOptions)
  @IsNotEmpty()
  @IsString()
  password: string;

  @Match("password")
  @IsNotEmpty()
  @IsString()
  confirm_password: string;
}

class RegisterUserResponseDto {
  is_user: string;
  error_code: string;
  error_message: string;
}

export { RegisterUserRequestDto, RegisterUserResponseDto };
