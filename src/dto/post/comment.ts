class CommentRequestDto {
  postId: string;
  content: string;
  parentCommentId?: string;
}

class CommentResponseDto {
  commentId: string;
}

class CommentParamDto {
  commentId: string;
}

class DeleteCommentResponseDto {
  error_code: number;
  error_message: string;
}

export {
  CommentRequestDto,
  CommentResponseDto,
  CommentParamDto,
  DeleteCommentResponseDto,
};
