import { PaginationDto } from "../../common";

class ActionRecordDto {
  id: number;
  name: string;
  groupId: number;
}

class ActionRequestDto extends PaginationDto {
  search: string;
}

export { ActionRecordDto, ActionRequestDto };
