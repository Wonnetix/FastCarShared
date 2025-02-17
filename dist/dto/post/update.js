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
exports.UpdateMultimediaPostRequestDto = exports.UpdatePostResponseDto = exports.UpdatePostRequestDto = void 0;
var _1 = require(".");
var common_1 = require("../../common");
var UpdatePostRequestDto = (function () {
    function UpdatePostRequestDto() {
    }
    return UpdatePostRequestDto;
}());
exports.UpdatePostRequestDto = UpdatePostRequestDto;
var UpdateMultimediaPostRequestDto = (function (_super) {
    __extends(UpdateMultimediaPostRequestDto, _super);
    function UpdateMultimediaPostRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateMultimediaPostRequestDto;
}(_1.CreateMultimediaPostRequestDto));
exports.UpdateMultimediaPostRequestDto = UpdateMultimediaPostRequestDto;
var UpdatePostResponseDto = (function (_super) {
    __extends(UpdatePostResponseDto, _super);
    function UpdatePostResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdatePostResponseDto;
}(common_1.ResponseDto));
exports.UpdatePostResponseDto = UpdatePostResponseDto;
