import { UserBaseRecord } from "./BaseUser";
declare class UserProfileDto extends UserBaseRecord {
    id_user: string;
    bio?: string;
    profilePicture?: string;
}
export { UserProfileDto };
