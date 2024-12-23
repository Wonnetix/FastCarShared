import { PaginationDto } from "../../common";
import { MediaRecordDto } from "../media";
import { CarFailureRecordDto } from "./failure";

interface AccidentItem {
  id: string;
  km: number;
  date: Date;
  description: string;
  failures: CarFailureRecordDto[];
  media: MediaRecordDto[];
}

interface AccidentListRequest extends PaginationDto {
  startDate: Date;
  endDate: Date;
}

export { AccidentItem, AccidentListRequest };
