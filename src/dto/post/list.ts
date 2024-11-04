import { MediaRecordDto } from "../media";

class PostRecordDto {
  id: string;
  userId: string;
  caption: string;
  createdAt: string;
  media: MediaRecordDto[];
}

export { PostRecordDto };
