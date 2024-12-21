import { PaginationDto } from "../../common";

class ComponentGroupRecordDto {
  id: number;
  name: string;
}

class ComponentRecordDto {
  id: number;
  name: string;
  groupId: number;
}

class ComponentRequestDto extends PaginationDto {
  search: string;
}

export { ComponentGroupRecordDto, ComponentRequestDto, ComponentRecordDto };
