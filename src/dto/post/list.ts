import { MediaRecordDto } from "../media";
import { PaginationDto } from "../../common";

class PostListRequestDto extends PaginationDto {
  userId: string;
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
