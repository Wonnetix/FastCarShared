import { MediaRecordDto } from "../media";
import { PaginationDto } from "../../common";
declare class PostListRequestDto extends PaginationDto {
    userId: string;
}
declare class PostRecordDto {
    id: string;
    userId: string;
    authorHandle: string;
    authorProfilePicture: string;
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
