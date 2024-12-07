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
declare class CommentRecordDto {
    commentId: string;
    userId: string;
    userName: string;
    userProfilePicture: string;
    content: string;
    parentCommentId?: string;
    _count: {
        likes: number;
    };
    timeAgo: string;
    replies: CommentRecordDto[];
}
declare class DeleteCommentResponseDto extends ResponseDto {
}
export { CommentRequestDto, CommentResponseDto, CommentParamDto, DeleteCommentResponseDto, CommentRecordDto, };
