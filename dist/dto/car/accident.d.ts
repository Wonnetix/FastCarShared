import { CarFailureRecordDto } from "./failure";
interface AccidentItem {
    id: string;
    km: number;
    date: Date;
    description: string;
    failures: CarFailureRecordDto[];
}
export { AccidentItem };
