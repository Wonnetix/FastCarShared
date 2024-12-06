import { UserBaseRecord } from "./BaseUser";

class UserProfileDto extends UserBaseRecord {
  id_user: string;
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

export { UserProfileDto };
