import { MediaRecordDto } from "../media";
declare class PostListRequestDto {
    skip: number;
    take: number;
}
declare class PostRecordDto {
    id: string;
    userId: string;
    authorHandle: string;
    caption: string;
    timeAgo: string;
    likes: number;
    commentCount: number;
    media: MediaRecordDto[];
}
export { PostListRequestDto, PostRecordDto };
