import { PhotoRecordDto } from "../media";
declare class PostRecordDto {
    id_post: string;
    id_user: string;
    caption: string;
    created_at: string;
    media: PhotoRecordDto[];
}
export { PostRecordDto };
