import { UserBaseRecord } from "./BaseUser";
declare class UserProfileDto extends UserBaseRecord {
    id_user: string;
    bio?: string;
    profilePicture?: string;
    isPublic?: boolean;
    isActive?: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: {
        followers: number;
        following: number;
    };
}
export { UserProfileDto };
