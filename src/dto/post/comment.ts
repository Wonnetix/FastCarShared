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

class DeleteCommentResponseDto extends ResponseDto {}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
};
