import { UserBaseRecord } from "./BaseUser";
declare class RegisterUserRequestDto extends UserBaseRecord {
    password: string;
    confirm_password: string;
}
declare class RegisterUserResponseDto {
    is_user: string;
    error_code: string;
    error_message: string;
}
export { RegisterUserRequestDto, RegisterUserResponseDto };
