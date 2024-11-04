import { MediaRecordDto } from "../media";
declare class PostListRequestDto {
    skip: number;
    take: number;
}
declare class PostRecordDto {
    id: string;
    userId: string;
    caption: string;
    createdAt: string;
    media: MediaRecordDto[];
}
export { PostListRequestDto, PostRecordDto };
