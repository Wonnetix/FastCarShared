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
declare class MediaRecordDto {
    id: string;
    mediaUrl: string;
    createdAt: string;
    updatedAt: string;
}
export { NewPhotoRequestDto, NewPhotoResponseDto, MediaRecordDto };
