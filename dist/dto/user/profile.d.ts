import { ResponseDto } from "../../common";
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
    isFollowing?: boolean;
}
declare class UpdateProfileDto {
    bio?: string;
    profilePicture?: string;
    isPublic?: boolean;
    isActive?: boolean;
    phone?: string;
    country?: string;
    name?: string;
    language?: string;
}
declare class UpdateProfileResponseDto extends ResponseDto {
    profilePicture: string;
}
declare class UserSearchRequestDto {
    search: string;
}
declare enum FollowStatus {
    NOT_FOLLOWING = 0,
    PENDING = 1,
    FOLLOWING = 2
}
declare class UserSearchItemDto {
    userId: string;
    username: string;
    name: string;
    profilePicture: string;
    isPublic: boolean;
    isFollowing: FollowStatus;
}
export { UserProfileDto, UpdateProfileDto, UpdateProfileResponseDto, UserSearchItemDto, UserSearchRequestDto, };
