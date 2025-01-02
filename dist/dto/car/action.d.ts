import { PaginationDto } from "../../common";
declare class ActionRecordDto {
    id: number;
    name: string;
}
declare class ActionRequestDto extends PaginationDto {
    search: string;
}
export { ActionRecordDto, ActionRequestDto };
