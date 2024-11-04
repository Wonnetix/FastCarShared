import { PhotoRecordDto } from "../media";
declare class PostRecordDto {
    id: string;
    media_url: string;
    comment: string;
    media: PhotoRecordDto[];
}
export { PostRecordDto };
