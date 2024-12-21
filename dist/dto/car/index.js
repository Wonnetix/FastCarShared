"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
__exportStar(require("./create"), exports);
__exportStar(require("./update"), exports);
__exportStar(require("./component"), exports);
__exportStar(require("./phenomenon"), exports);
