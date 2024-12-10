import { ResponseDto } from "../../common";
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
  };
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

class UserSearchRequestDto {
  search: string;
}

class UserSearchItemDto {
  userId: string;
  username: string;
  name: string;
  profilePicture: string;
  isPublic: boolean;
}

export {
  UserProfileDto,
  UpdateProfileDto,
  UpdateProfileResponseDto,
  UserSearchItemDto,
};
