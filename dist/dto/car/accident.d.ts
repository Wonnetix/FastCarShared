import { PaginationDto } from "../../common";
import { CarFailureRecordDto } from "./failure";
interface AccidentItem {
    id: string;
    km: number;
    date: Date;
    description: string;
    failures: CarFailureRecordDto[];
}
interface AccidentListRequest extends PaginationDto {
    carId: string;
    startDate: Date;
    endDate: Date;
}
export { AccidentItem, AccidentListRequest };
