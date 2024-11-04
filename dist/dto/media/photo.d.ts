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
    id: Buffer;
    mediaUrl: string;
    createdAt: string;
}
export { NewPhotoRequestDto, NewPhotoResponseDto, PhotoRecordDto };
