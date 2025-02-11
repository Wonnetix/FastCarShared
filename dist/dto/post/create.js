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
exports.CreateMultimediaPostRequestDto = exports.CreatePostResponseDto = exports.CreatePostRequestDto = void 0;
var common_1 = require("../../common");
var CreatePostRequestDto = (function () {
    function CreatePostRequestDto() {
    }
    return CreatePostRequestDto;
}());
exports.CreatePostRequestDto = CreatePostRequestDto;
var CreateMultimediaPostRequestDto = (function () {
    function CreateMultimediaPostRequestDto() {
    }
    return CreateMultimediaPostRequestDto;
}());
exports.CreateMultimediaPostRequestDto = CreateMultimediaPostRequestDto;
var CreatePostResponseDto = (function (_super) {
    __extends(CreatePostResponseDto, _super);
    function CreatePostResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CreatePostResponseDto;
}(common_1.ResponseDto));
exports.CreatePostResponseDto = CreatePostResponseDto;
