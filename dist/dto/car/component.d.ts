import { PaginationDto } from "../../common";
declare class ComponentGroupRecordDto {
    id: string;
    name: string;
}
declare class ComponentRecordDto {
    id: string;
    name: string;
    groupId: number;
}
declare class ComponentRequestDto extends PaginationDto {
    search: string;
}
export { ComponentGroupRecordDto, ComponentRequestDto, ComponentRecordDto };
