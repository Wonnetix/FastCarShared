import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  IsStrongPasswordOptions,
} from "class-validator";
import { Match } from "../../decorator/match";

import { UserBaseRecord } from "./BaseUser";
import { ResponseDto } from "../../common";
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

class RegisterUserResponseDto extends ResponseDto {
  id_user: string;
}

export { RegisterUserRequestDto, RegisterUserResponseDto };
