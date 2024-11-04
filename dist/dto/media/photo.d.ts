declare class NewPhotoRequestDto {
    width: number;
    height: number;
    timestamp: number;
}
declare class NewPhotoResponseDto {
    id: string;
    api_key: string;
    signature: string;
    eager: string;
    folder: string;
    url: string;
}
declare class PhotoRecordDto {
    id: string;
    media_url: string;
    created_at: string;
}
export { NewPhotoRequestDto, NewPhotoResponseDto, PhotoRecordDto };
