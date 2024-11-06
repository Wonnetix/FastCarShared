declare class LikeRequestDto {
    postId: string;
}
declare class LikeResponseDto {
    isLiked: boolean;
}
declare class CommentRequestDto {
    postId: string;
    comment: string;
}
declare class CommentResponseDto {
    commentId: string;
}
export { LikeRequestDto, LikeResponseDto, CommentRequestDto, CommentResponseDto, };
