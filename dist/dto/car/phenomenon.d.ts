import { PaginationDto } from "../../common";
declare class PhenomenonGroupRecordDto {
    id: string;
    name: string;
}
declare class PhenomenonRecordDto {
    id: string;
    name: string;
    groupId: number;
}
declare class PhenomenonRequestDto extends PaginationDto {
    search: string;
}
export { PhenomenonGroupRecordDto, PhenomenonRequestDto, PhenomenonRecordDto };
