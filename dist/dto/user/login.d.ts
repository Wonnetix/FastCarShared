import { ExpoDeviceInfo } from "./device";
import { ResponseDto } from "../../common";
import { UserSubsInfoResponse } from "w1classes";
declare class LoginBase {
    device_info: ExpoDeviceInfo;
}
declare class LoginUserRequestDto extends LoginBase {
    email?: string;
    password: string;
}
declare class SocialLoginRequestDto extends LoginBase {
    provider: "google" | "apple" | "microsoft";
    client_id: string;
    credential: string;
}
declare class LoginUserResponseDto extends ResponseDto {
    userId: string;
    token: string;
    language: string;
    mediaBaseUrl: string;
    subscription_info?: UserSubsInfoResponse;
}
export { LoginUserRequestDto, LoginUserResponseDto, SocialLoginRequestDto, LoginBase, };
