declare class FollowRequestDto {
    userId: string;
}
declare class FollowResponseDto {
    isFollowed: boolean;
    pendingApproval: boolean;
}
declare class FollowUserDto {
    userId: string;
    profilePicture?: string;
    name?: string;
    isPublic?: boolean;
    pendingApproval?: boolean;
}
export { FollowRequestDto, FollowResponseDto, FollowUserDto };
