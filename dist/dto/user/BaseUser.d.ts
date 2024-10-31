declare class UserBaseRecord {
    username: string;
    email: string;
    phone?: string;
    country?: string;
    name?: string;
    language?: string;
}
declare class InputUserRequestDto {
    id: string;
}
export { InputUserRequestDto, UserBaseRecord };
