import { MediaRecordDto } from "../media";

class PostListRequestDto {
  skip: number;
  take: number;
}

class PostRecordDto {
  id: string;
  userId: string;
  caption: string;
  createdAt: string;
  media: MediaRecordDto[];
}

export { PostListRequestDto, PostRecordDto };
