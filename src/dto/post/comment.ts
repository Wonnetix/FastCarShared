import { ResponseDto } from "../../common";

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
  timeAgo: string;
}

class DeleteCommentResponseDto extends ResponseDto {}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
  CommentRecordDto,
};
