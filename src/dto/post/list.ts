import { PhotoRecordDto } from "../media";

class PostRecordDto {
  id: Buffer;
  userId: Buffer;
  caption: string;
  createdAt: string;
  media: PhotoRecordDto[];
}

export { PostRecordDto };
