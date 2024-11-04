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

class MediaRecordDto {
  id: string;
  mediaUrl: string;
  createdAt: string;
  updatedAt: string;
}

export { NewPhotoRequestDto, NewPhotoResponseDto, MediaRecordDto };
