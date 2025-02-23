class NewPhotoRequestDto {
  width: number;
  height: number;
  timestamp: number;
  publicId: string;
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
  thumbnailUrl?: string;
  mediaType?: string;
  createdAt: Date;
  updatedAt: Date;
}

export { NewPhotoRequestDto, NewPhotoResponseDto, MediaRecordDto };
