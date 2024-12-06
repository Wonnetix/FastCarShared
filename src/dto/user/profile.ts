import { UserBaseRecord } from "./BaseUser";

class UserProfileDto extends UserBaseRecord {
  id_user: string;
  bio?: string;
  profilePicture?: string;
}

export { UserProfileDto };
