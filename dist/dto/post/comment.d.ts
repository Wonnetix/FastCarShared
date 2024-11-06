declare class CommentRequestDto {
    postId: string;
    content: string;
    parentCommentId?: string;
}
declare class CommentResponseDto {
    commentId: string;
}
declare class DeleteCommentRequestDto {
    commentId: string;
}
declare class DeleteCommentResponseDto {
    error_code: number;
    error_message: string;
}
export { CommentRequestDto, CommentResponseDto, DeleteCommentRequestDto, DeleteCommentResponseDto, };
