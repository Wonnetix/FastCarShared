import { ResponseDto } from "../../common";
import { TimeAgoDto } from "./list";

class CommentRequestDto {
  content: string;
  parentCommentId?: string;
}

class CommentResponseDto extends ResponseDto {
  commentId: string;
}

class CommentParamDto {
  commentId: string;
}

class CommentRecordDto {
  id: string;
  userId: string;
  userName: string;
  userProfilePicture: string;
  content: string;
  parentCommentId?: string;
  likes: number;
  replies: number;
  timeAgo: TimeAgoDto;
  level?: number;
}

class DeleteCommentResponseDto extends ResponseDto {}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
  CommentRecordDto,
};
