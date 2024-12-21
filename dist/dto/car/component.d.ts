import { PaginationDto } from "../../common";
declare class ComponentGroupRecordDto {
    id: number;
    name: string;
}
declare class ComponentRecordDto {
    id: number;
    name: string;
    groupId: number;
}
declare class ComponentRequestDto extends PaginationDto {
    search: string;
}
export { ComponentGroupRecordDto, ComponentRequestDto, ComponentRecordDto };
