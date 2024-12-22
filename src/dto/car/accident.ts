import { CarFailureRecordDto } from "./failure";

interface AccidentItem {
  id: string;
  km: number;
  date: string;
  description: string;
  failures: CarFailureRecordDto[];
}

export { AccidentItem };
