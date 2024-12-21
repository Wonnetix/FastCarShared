import { PaginationDto } from "../../common";

class ComponentGroupRecordDto {
  id: string;
  name: string;
}

class ComponentRecordDto {
  id: string;
  name: string;
  groupId: number;
}

class ComponentRequestDto extends PaginationDto {
  search: string;
}

export { ComponentGroupRecordDto, ComponentRequestDto, ComponentRecordDto };
