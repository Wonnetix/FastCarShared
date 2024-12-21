import { PaginationDto } from "../../common";

class PhenomenonGroupRecordDto {
  id: string;
  name: string;
}

class PhenomenonRecordDto {
  id: string;
  name: string;
  groupId: number;
}

class PhenomenonRequestDto extends PaginationDto {
  search: string;
}

export { PhenomenonGroupRecordDto, PhenomenonRequestDto, PhenomenonRecordDto };
