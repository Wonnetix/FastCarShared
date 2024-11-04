class NewPhotoRequestDto {
  width: number;
  height: number;
  timestamp: number;
}

class NewPhotoResponseDto {
  id: string;
  api_key: string;
  signature: string;
  eager: string;
  folder: string;
  url: string;
}

class PhotoRecordDto {
  id: Buffer;
  mediaUrl: string;
  createdAt: string;
}

export { NewPhotoRequestDto, NewPhotoResponseDto, PhotoRecordDto };
