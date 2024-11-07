declare class PostParamDto {
    postId: string;
}
declare class LikeResponseDto {
    id_like: number;
}
declare class CommentLikeRequestDto {
    dislike?: boolean;
    report?: string;
}
declare class CommentLikeResponseDto {
    id_like: number;
}
export { PostParamDto, LikeResponseDto, CommentLikeRequestDto, CommentLikeResponseDto, };
