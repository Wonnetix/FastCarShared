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
    timeAgo: TimeAgoDto;
    likes: number;
    commentCount: number;
    media: MediaRecordDto[];
}
declare class TimeAgoDto {
    value: number;
    unit: string;
}
export { PostListRequestDto, PostRecordDto, TimeAgoDto };
