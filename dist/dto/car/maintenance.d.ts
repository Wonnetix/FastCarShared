import { PaginationDto } from "../../common";
import { MediaRecordDto } from "../media";
import { CarFailureRecordDto } from "./failure";
declare enum MaintenanceType {
    MAINTENANCE = 0,
    REPAIR = 1
}
interface MaintenanceItem {
    id: string;
    type: MaintenanceType;
    km: number;
    date: Date;
    description: string;
    failures: CarFailureRecordDto[];
    media: MediaRecordDto[];
}
interface MaintenanceListRequest extends PaginationDto {
    startDate: Date;
    endDate: Date;
}
export { MaintenanceItem, MaintenanceType, MaintenanceListRequest };
