class FollowRequestDto {
  userId: string;
}

class FollowResponseDto {
  isFollowed: boolean;
  pendingApproval: boolean;
}

class FollowUserDto {
  userId: string;
  profilePicture?: string;
  name?: string;
  isPublic?: boolean;
  pendingApproval?: boolean;
}

export { FollowRequestDto, FollowResponseDto, FollowUserDto };
