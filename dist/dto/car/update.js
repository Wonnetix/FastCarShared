"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferCarResponseDto = exports.TransferCarRequestDto = exports.UpdateCarResponseDto = exports.UpdateCarRequestDto = void 0;
var common_1 = require("../../common");
var UpdateCarRequestDto = (function () {
    function UpdateCarRequestDto() {
    }
    return UpdateCarRequestDto;
}());
exports.UpdateCarRequestDto = UpdateCarRequestDto;
var UpdateCarResponseDto = (function (_super) {
    __extends(UpdateCarResponseDto, _super);
    function UpdateCarResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateCarResponseDto;
}(common_1.ResponseDto));
exports.UpdateCarResponseDto = UpdateCarResponseDto;
var TransferCarRequestDto = (function () {
    function TransferCarRequestDto() {
    }
    return TransferCarRequestDto;
}());
exports.TransferCarRequestDto = TransferCarRequestDto;
var TransferCarResponseDto = (function (_super) {
    __extends(TransferCarResponseDto, _super);
    function TransferCarResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TransferCarResponseDto;
}(common_1.ResponseDto));
exports.TransferCarResponseDto = TransferCarResponseDto;
