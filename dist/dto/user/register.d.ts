import { UserBaseRecord } from "./BaseUser";
import { ResponseDto } from "../../common";
declare class RegisterUserRequestDto extends UserBaseRecord {
    password: string;
    confirm_password: string;
}
declare class RegisterUserResponseDto extends ResponseDto {
    id_user: string;
}
export { RegisterUserRequestDto, RegisterUserResponseDto };
