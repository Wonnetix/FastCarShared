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
exports.CreateCarResponseDto = exports.CreateCarRequestDto = void 0;
var common_1 = require("../../common");
var post_1 = require("../post");
var CreateCarRequestDto = (function (_super) {
    __extends(CreateCarRequestDto, _super);
    function CreateCarRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateCarRequestDto;
}(post_1.CreatePostRequestDto));
exports.CreateCarRequestDto = CreateCarRequestDto;
var CreateCarResponseDto = (function (_super) {
    __extends(CreateCarResponseDto, _super);
    function CreateCarResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreateCarResponseDto;
}(common_1.ResponseDto));
exports.CreateCarResponseDto = CreateCarResponseDto;
