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
exports.DeleteCommentResponseDto = exports.CommentParamDto = exports.CommentResponseDto = exports.CommentRequestDto = void 0;
var common_1 = require("../../common");
var CommentRequestDto = (function () {
    function CommentRequestDto() {
    }
    return CommentRequestDto;
}());
exports.CommentRequestDto = CommentRequestDto;
var CommentResponseDto = (function (_super) {
    __extends(CommentResponseDto, _super);
    function CommentResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommentResponseDto;
}(common_1.ResponseDto));
exports.CommentResponseDto = CommentResponseDto;
var CommentParamDto = (function () {
    function CommentParamDto() {
    }
    return CommentParamDto;
}());
exports.CommentParamDto = CommentParamDto;
var DeleteCommentResponseDto = (function (_super) {
    __extends(DeleteCommentResponseDto, _super);
    function DeleteCommentResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DeleteCommentResponseDto;
}(common_1.ResponseDto));
exports.DeleteCommentResponseDto = DeleteCommentResponseDto;
