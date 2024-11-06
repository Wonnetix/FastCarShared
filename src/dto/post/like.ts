class LikeRequestDto {
  postId: string;
}

class LikeResponseDto {
  id_like: number;
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
  CommentLikeRequestDto,
  CommentLikeResponseDto,
};
