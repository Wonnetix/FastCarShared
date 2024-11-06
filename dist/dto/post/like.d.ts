declare class LikeRequestDto {
    postId: string;
}
declare class LikeResponseDto {
    id_like: number;
}
declare class CommentLikeRequestDto {
    commentId: string;
    dislike?: boolean;
    report?: string;
}
declare class CommentLikeResponseDto {
    id_like: number;
}
export { LikeRequestDto, LikeResponseDto, CommentLikeRequestDto, CommentLikeResponseDto, };
