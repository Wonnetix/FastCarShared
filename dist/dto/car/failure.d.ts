import { ActionRecordDto } from "./action";
import { ComponentRecordDto } from "./component";
import { PhenomenonRecordDto } from "./phenomenon";
declare class CarFailureRecordDto {
    id: number;
    component: ComponentRecordDto;
    phenomenon: PhenomenonRecordDto;
    action?: ActionRecordDto;
}
export { CarFailureRecordDto };
