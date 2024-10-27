import { IsString, IsEmail, ValidateIf } from "class-validator";
import { ExpoDeviceInfo } from "./device";

class LoginUserRequestDto {
  @ValidateIf((o) => o.username === null || o.username === undefined)
  @IsEmail()
  email?: string;

  @IsString()
  password: string;

  device_info: ExpoDeviceInfo;
}

class SocialLoginRequestDto {
  provider: "google" | "apple" | "microsoft";
  client_id: string;
  credential: string;
}

class LoginUserResponseDto {
  token: string;
  error_code: string;
  error_message: string;
}

export { LoginUserRequestDto, LoginUserResponseDto, SocialLoginRequestDto };
