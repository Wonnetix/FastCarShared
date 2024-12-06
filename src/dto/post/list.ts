import { MediaRecordDto } from "../media";

class PostListRequestDto {
  userId: string;
  skip: number;
  take: number;
}

class PostRecordDto {
  id: string;
  userId: string;
  authorHandle: string;
  caption: string;
  timeAgo: TimeAgoDto;
  likeCount: number;
  commentCount: number;
  media: MediaRecordDto[];
  isLiked: boolean;
}

class TimeAgoDto {
  value: number;
  unit: string;
}

export { PostListRequestDto, PostRecordDto, TimeAgoDto };
