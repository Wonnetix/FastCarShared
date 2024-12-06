import { ResponseDto } from "../..";

class CommentRequestDto {
  content: string;
  parentCommentId?: string;
}

class CommentResponseDto {
  commentId: string;
}

class CommentParamDto {
  commentId: string;
}

class DeleteCommentResponseDto extends ResponseDto {}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
};
