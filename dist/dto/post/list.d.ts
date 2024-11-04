import { PhotoRecordDto } from "../media";
declare class PostRecordDto {
    id: Buffer;
    userId: Buffer;
    caption: string;
    createdAt: string;
    media: PhotoRecordDto[];
}
export { PostRecordDto };
