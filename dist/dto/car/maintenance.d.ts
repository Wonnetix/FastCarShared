import { PaginationDto } from "../../common";
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
}
interface MaintenanceListRequest extends PaginationDto {
    carId: string;
    startDate: Date;
    endDate: Date;
}
export { MaintenanceItem, MaintenanceType, MaintenanceListRequest };
