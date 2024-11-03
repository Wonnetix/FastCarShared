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
declare class SavePhotoRequestDto {
    id: string;
    media_url: string;
    comment: string;
}
declare class SavePhotoResponseDto {
    error_code: string;
    error_message: string;
}
export { NewPhotoRequestDto, NewPhotoResponseDto, SavePhotoRequestDto, SavePhotoResponseDto, };
