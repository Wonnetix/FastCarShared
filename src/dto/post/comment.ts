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
  commentId: string;
  userId: string;
  userName: string;
  userProfilePicture: string;
  content: string;
  parentCommentId?: string;
  _count: {
    likes: number;
  };
  timeAgo: string;
  replies: CommentRecordDto[];
}

class DeleteCommentResponseDto extends ResponseDto {}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
  CommentRecordDto,
};
