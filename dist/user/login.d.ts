import { ExpoDeviceInfo } from "./device";
declare class LoginUserRequestDto {
    email?: string;
    password: string;
    device_info: ExpoDeviceInfo;
}
declare class SocialLoginRequestDto {
    provider: "google" | "apple" | "microsoft";
    client_id: string;
    credential: string;
}
declare class LoginUserResponseDto {
    token: string;
    error_code: string;
    error_message: string;
}
export { LoginUserRequestDto, LoginUserResponseDto, SocialLoginRequestDto };
