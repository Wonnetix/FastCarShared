"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityType = exports.TransmissionType = exports.FuelType = exports.MaintenanceType = void 0;
var MaintenanceType;
(function (MaintenanceType) {
    MaintenanceType[MaintenanceType["MAINTENANCE"] = 0] = "MAINTENANCE";
    MaintenanceType[MaintenanceType["REPAIR"] = 1] = "REPAIR";
})(MaintenanceType || (exports.MaintenanceType = MaintenanceType = {}));
var FuelType;
(function (FuelType) {
    FuelType[FuelType["GASOLINE"] = 0] = "GASOLINE";
    FuelType[FuelType["DIESEL"] = 1] = "DIESEL";
    FuelType[FuelType["ELECTRIC"] = 2] = "ELECTRIC";
    FuelType[FuelType["HYBRID"] = 3] = "HYBRID";
    FuelType[FuelType["HYDROGEN"] = 4] = "HYDROGEN";
})(FuelType || (exports.FuelType = FuelType = {}));
var TransmissionType;
(function (TransmissionType) {
    TransmissionType[TransmissionType["MANUAL"] = 0] = "MANUAL";
    TransmissionType[TransmissionType["AUTOMATIC"] = 1] = "AUTOMATIC";
})(TransmissionType || (exports.TransmissionType = TransmissionType = {}));
var VisibilityType;
(function (VisibilityType) {
    VisibilityType[VisibilityType["PUBLIC"] = 0] = "PUBLIC";
    VisibilityType[VisibilityType["PRIVATE"] = 1] = "PRIVATE";
    VisibilityType[VisibilityType["LOCKED"] = 2] = "LOCKED";
})(VisibilityType || (exports.VisibilityType = VisibilityType = {}));
