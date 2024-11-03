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

class SavePhotoRequestDto {
  id: string;
  media_url: string;
  comment: string;
}

class SavePhotoResponseDto {
  error_code: string;
  error_message: string;
}

export {
  NewPhotoRequestDto,
  NewPhotoResponseDto,
  SavePhotoRequestDto,
  SavePhotoResponseDto,
};
