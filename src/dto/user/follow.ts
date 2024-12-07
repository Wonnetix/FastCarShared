import { PaginationDto } from "../../common";

class FollowRequestDto {
  userId: string;
}

class FollowListRequestDto extends PaginationDto {
  userId: string;
}

class FollowResponseDto {
  isFollowed: boolean;
  pendingApproval: boolean;
}

class FollowUserDto {
  userId: string;
  profilePicture?: string | null;
  name?: string | null;
  isPublic?: boolean;
  pendingApproval?: boolean;
}

export {
  FollowRequestDto,
  FollowResponseDto,
  FollowUserDto,
  FollowListRequestDto,
};
