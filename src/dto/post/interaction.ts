class LikeRequestDto {
  postId: string;
}

class LikeResponseDto {
  id_like: number;
}

class CommentRequestDto {
  postId: string;
  content: string;
  parentCommentId?: string;
}

class CommentResponseDto {
  commentId: string;
}

class CommentLikeRequestDto {
  commentId: string;
  dislike?: boolean;
  report?: string;
}

class CommentLikeResponseDto {
  id_like: number;
}

export {
  LikeRequestDto,
  LikeResponseDto,
  CommentRequestDto,
  CommentResponseDto,
  CommentLikeRequestDto,
  CommentLikeResponseDto,
};
