declare class LikeRequestDto {
  postId: string;
}
declare class LikeResponseDto {
  id_like: number;
}
declare class CommentRequestDto {
  postId: string;
  content: string;
  parentCommentId?: string;
}
declare class CommentResponseDto {
  commentId: string;
}
declare class CommentLikeRequestDto {
  commentId: string;
  dislike?: boolean;
  report?: string;
}
declare class CommentLikeResponseDto {
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
