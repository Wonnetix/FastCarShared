import { PaginationDto, ResponseDto } from "../../common";
import { UserBaseRecord } from "./BaseUser";

class UserProfileDto extends UserBaseRecord {
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
    pending: number;
    sent: number;
  };
  isFollowing?: FollowStatus;
}

class UpdateProfileDto {
  bio?: string;
  profilePicture?: string;
  isPublic?: boolean;
  isActive?: boolean;
  phone?: string;
  country?: string;
  name?: string;
  language?: string;
}

class UpdateProfileResponseDto extends ResponseDto {
  profilePicture: string;
}

class UserSearchRequestDto extends PaginationDto {
  search: string;
}

enum FollowStatus {
  NOT_FOLLOWING = 0,
  PENDING = 1,
  FOLLOWING = 2,
}

class UserSearchItemDto {
  userId: string;
  username: string;
  name: string | null;
  profilePicture: string;
  isPublic: boolean;
  isFollowing: FollowStatus;
  isFollowed: FollowStatus;
}

export {
  UserProfileDto,
  UpdateProfileDto,
  UpdateProfileResponseDto,
  UserSearchItemDto,
  UserSearchRequestDto,
  FollowStatus,
};
