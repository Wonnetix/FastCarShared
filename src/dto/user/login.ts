import { IsString, IsEmail } from "class-validator";
import { ExpoDeviceInfo } from "./device";
import { ResponseDto } from "../..";

class LoginBase {
  device_info: ExpoDeviceInfo;
}

class LoginUserRequestDto extends LoginBase {
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

class LoginUserResponseDto extends ResponseDto {
  token: string;
}

export {
  LoginUserRequestDto,
  LoginUserResponseDto,
  SocialLoginRequestDto,
  LoginBase,
};
