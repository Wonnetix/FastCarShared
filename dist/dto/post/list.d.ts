import { MediaRecordDto } from "../media";
declare class PostListRequestDto {
    userId: string;
    skip: number;
    take: number;
}
declare class PostRecordDto {
    id: string;
    userId: string;
    authorHandle: string;
    caption: string;
    timeAgo: TimeAgoDto;
    likeCount: number;
    commentCount: number;
    media: MediaRecordDto[];
    isLiked: boolean;
}
declare class TimeAgoDto {
    value: number;
    unit: string;
}
export { PostListRequestDto, PostRecordDto, TimeAgoDto };
