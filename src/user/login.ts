import { IsString, IsEmail, ValidateIf } from "class-validator";
import { ExpoDeviceInfo } from "./device";

class LoginBase {
  device_info: ExpoDeviceInfo;
}

class LoginUserRequestDto extends LoginBase {
  @ValidateIf((o) => o.username === null || o.username === undefined)
  @IsEmail()
  email?: string;

  @IsString()
  password: string;
}

class SocialLoginRequestDto extends LoginBase {
  provider: "google" | "apple" | "microsoft";
  client_id: string;
  credential: string;
}

class LoginUserResponseDto {
  token: string;
  error_code: string;
  error_message: string;
}

export {
  LoginUserRequestDto,
  LoginUserResponseDto,
  SocialLoginRequestDto,
  LoginBase,
};
