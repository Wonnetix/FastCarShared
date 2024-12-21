import { PaginationDto } from "../../common";

class PhenomenonGroupRecordDto {
  id: number;
  name: string;
}

class PhenomenonRecordDto {
  id: number;
  name: string;
  groupId: number;
}

class PhenomenonRequestDto extends PaginationDto {
  search: string;
}

export { PhenomenonGroupRecordDto, PhenomenonRequestDto, PhenomenonRecordDto };
