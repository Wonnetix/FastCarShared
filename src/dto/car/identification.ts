interface CarIdentificationDto {
  brandId: string;
  brandName: string;
  modelId: string;
  modelName: string;
  color: string;
  colorName: string;
  year?: number;
  plateNumber?: string;
}

export { CarIdentificationDto };
