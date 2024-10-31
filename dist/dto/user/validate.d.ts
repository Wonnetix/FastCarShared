declare class ValidateUserRequestDto {
    username?: string;
    email?: string;
    phone?: string;
    name?: string;
}
declare class ValidateUserResponseDto {
    validate: boolean;
    field: string;
}
export { ValidateUserRequestDto, ValidateUserResponseDto };
