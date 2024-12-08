declare class UserBaseRecord {
    username: string;
    email: string;
    phone?: string;
    country?: string;
    name?: string;
    language?: string;
}
declare class InputUserRequestDto {
    userId: string;
}
export { InputUserRequestDto, UserBaseRecord };
