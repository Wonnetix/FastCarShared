import { CarFailureRecordDto } from "./failure";

enum MaintenanceType {
  MAINTENANCE = 0,
  REPAIR = 1,
}

interface MaintenanceItem {
  id: string;
  type: MaintenanceType;
  km: number;
  date: string;
  description: string;
  failures: CarFailureRecordDto[];
}

export { MaintenanceItem, MaintenanceType };
