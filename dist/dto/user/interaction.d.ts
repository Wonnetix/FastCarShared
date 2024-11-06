declare class FollowRequestDto {
    userId: string;
}
declare class FollowResponseDto {
    isFollowed: boolean;
    pendingApproval: boolean;
}
export { FollowRequestDto, FollowResponseDto };
