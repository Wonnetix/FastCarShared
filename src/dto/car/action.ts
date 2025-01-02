import { PaginationDto } from "../../common";

class ActionRecordDto {
  id: number;
  name: string;
}

class ActionRequestDto extends PaginationDto {
  search: string;
}

export { ActionRecordDto, ActionRequestDto };
