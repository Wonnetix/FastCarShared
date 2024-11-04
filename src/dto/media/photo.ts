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
  id: string;
  media_url: string;
  created_at: string;
}

export { NewPhotoRequestDto, NewPhotoResponseDto, PhotoRecordDto };
