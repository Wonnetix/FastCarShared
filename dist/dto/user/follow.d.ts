import { UserSearchRequestDto } from "./profile";
declare class FollowRequestDto extends UserSearchRequestDto {
    userId: string;
}
declare class FollowResponseDto {
    isFollowed: boolean;
    pendingApproval: boolean;
}
declare class FollowUserDto {
    userId: string;
    profilePicture?: string | null;
    name?: string | null;
    isPublic?: boolean;
    pendingApproval?: boolean;
}
export { FollowRequestDto, FollowResponseDto, FollowUserDto };
