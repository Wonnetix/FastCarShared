import { UserBaseRecord } from "./BaseUser";
declare class UserProfileDto extends UserBaseRecord {
    userId: string;
    bio?: string;
    profilePicture?: string;
    isPublic?: boolean;
    isActive?: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: {
        cars: number;
        posts: number;
        followers: number;
        following: number;
    };
}
declare class UpdateProfileDto {
    userId: string;
    bio?: string;
    profilePicture?: string;
    isPublic?: boolean;
    isActive?: boolean;
    phone?: string;
    country?: string;
    name?: string;
    language?: string;
}
export { UserProfileDto, UpdateProfileDto };
