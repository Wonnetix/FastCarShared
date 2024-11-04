import { PhotoRecordDto } from "../media";

class PostRecordDto {
  id: string;
  media_url: string;
  comment: string;
  media: PhotoRecordDto[];
}

export { PostRecordDto };
