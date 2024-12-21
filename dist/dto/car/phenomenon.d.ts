import { PaginationDto } from "../../common";
declare class PhenomenonGroupRecordDto {
    id: number;
    name: string;
}
declare class PhenomenonRecordDto {
    id: number;
    name: string;
    groupId: number;
}
declare class PhenomenonRequestDto extends PaginationDto {
    search: string;
}
export { PhenomenonGroupRecordDto, PhenomenonRequestDto, PhenomenonRecordDto };
