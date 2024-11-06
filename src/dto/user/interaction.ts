class FollowRequestDto {
  userId: string;
}

class FollowResponseDto {
  isFollowed: boolean;
  pendingApproval: boolean;
}

export { FollowRequestDto, FollowResponseDto };
