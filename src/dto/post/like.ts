class PostParamDto {
  postId: string;
}

class LikeResponseDto {
  id_like: number;
}

class CommentLikeRequestDto {
  dislike?: boolean;
  report?: string;
}

class CommentLikeResponseDto {
  id_like: number;
}

export {
  PostParamDto,
  LikeResponseDto,
  CommentLikeRequestDto,
  CommentLikeResponseDto,
};
