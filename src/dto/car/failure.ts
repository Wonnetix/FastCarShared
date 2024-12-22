import { ComponentRecordDto } from "./component";
import { PhenomenonRecordDto } from "./phenomenon";

class CarFailureRecordDto {
  id: number;
  component: ComponentRecordDto;
  phenomenon: PhenomenonRecordDto;
}

export { CarFailureRecordDto };
