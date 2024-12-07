import { ResponseDto } from "../../common";
declare class CommentRequestDto {
    content: string;
    parentCommentId?: string;
}
declare class CommentResponseDto extends ResponseDto {
    commentId: string;
}
declare class CommentParamDto {
    commentId: string;
}
declare class DeleteCommentResponseDto extends ResponseDto {
}
export { CommentRequestDto, CommentResponseDto, CommentParamDto, DeleteCommentResponseDto, };
