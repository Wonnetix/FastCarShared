import { ResponseDto } from "../../common";
declare class PostParamDto {
    postId: string;
}
declare class LikeResponseDto extends ResponseDto {
    id_like: number;
}
declare class CommentLikeRequestDto {
    dislike?: boolean;
    report?: string;
}
declare class CommentLikeResponseDto extends ResponseDto {
    id_like: number;
}
export { PostParamDto, LikeResponseDto, CommentLikeRequestDto, CommentLikeResponseDto, };
