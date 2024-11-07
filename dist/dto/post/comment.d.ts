declare class CommentRequestDto {
    postId: string;
    content: string;
    parentCommentId?: string;
}
declare class CommentResponseDto {
    commentId: string;
}
declare class CommentParamDto {
    commentId: string;
}
declare class DeleteCommentResponseDto {
    error_code: number;
    error_message: string;
}
export { CommentRequestDto, CommentResponseDto, CommentParamDto, DeleteCommentResponseDto, };
