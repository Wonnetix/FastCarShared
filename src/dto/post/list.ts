import { PhotoRecordDto } from "../media";

class PostRecordDto {
  id_post: string;
  id_user: string;
  caption: string;
  created_at: string;
  media: PhotoRecordDto[];
}

export { PostRecordDto };
