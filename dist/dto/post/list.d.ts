import { MediaRecordDto } from "../media";
declare class PostRecordDto {
    id: string;
    userId: string;
    caption: string;
    createdAt: string;
    media: MediaRecordDto[];
}
export { PostRecordDto };
