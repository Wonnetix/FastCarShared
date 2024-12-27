import { IsString, IsEmail } from "class-validator";
import { ExpoDeviceInfo } from "./device";
import { ResponseDto } from "../../common";
import { UserSubsInfoResponse } from "w1classes";

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
  userId: string;
  token: string;
  language: string;
  mediaBaseUrl: string;
  subscription_info?: UserSubsInfoResponse;
}

export {
  LoginUserRequestDto,
  LoginUserResponseDto,
  SocialLoginRequestDto,
  LoginBase,
};
