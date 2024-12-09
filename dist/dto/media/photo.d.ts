declare class NewPhotoRequestDto {
    width: number;
    height: number;
    timestamp: number;
    publicId: string;
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
    thumbnailUrl?: string;
    mediaType?: string;
    createdAt: string;
    updatedAt: string;
}
export { NewPhotoRequestDto, NewPhotoResponseDto, MediaRecordDto };
