import { MediaRecordDto } from "../media";

class PostListRequestDto {
  skip: number;
  take: number;
}

class PostRecordDto {
  id: string;
  userId: string;
  authorHandle: string;
  caption: string;
  timeAgo: string;
  likes: number;
  commentCount: number;
  media: MediaRecordDto[];
}

export { PostListRequestDto, PostRecordDto };
