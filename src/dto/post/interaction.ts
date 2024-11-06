class LikeRequestDto {
  postId: string;
}

class LikeResponseDto {
  isLiked: boolean;
}

class CommentRequestDto {
  postId: string;
  comment: string;
}

class CommentResponseDto {
  commentId: string;
}

export {
  LikeRequestDto,
  LikeResponseDto,
  CommentRequestDto,
  CommentResponseDto,
};
