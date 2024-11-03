class NewPhotoRequestDto {
  width: number;
  height: number;
}

class NewPhotoResponseDto {
  id: string;
  api_key: string;
  signature: string;
  eager: string;
  folder: string;
  url: string;
}

export { NewPhotoRequestDto, NewPhotoResponseDto };
