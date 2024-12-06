import { ExpoDeviceInfo } from "./device";
import { ResponseDto } from "../..";
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
    token: string;
}
export { LoginUserRequestDto, LoginUserResponseDto, SocialLoginRequestDto, LoginBase, };
