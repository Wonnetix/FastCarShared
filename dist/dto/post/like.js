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
exports.CommentLikeResponseDto = exports.CommentLikeRequestDto = exports.LikeResponseDto = exports.PostParamDto = void 0;
var common_1 = require("../../common");
var PostParamDto = (function () {
    function PostParamDto() {
    }
    return PostParamDto;
}());
exports.PostParamDto = PostParamDto;
var LikeResponseDto = (function (_super) {
    __extends(LikeResponseDto, _super);
    function LikeResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LikeResponseDto;
}(common_1.ResponseDto));
exports.LikeResponseDto = LikeResponseDto;
var CommentLikeRequestDto = (function () {
    function CommentLikeRequestDto() {
    }
    return CommentLikeRequestDto;
}());
exports.CommentLikeRequestDto = CommentLikeRequestDto;
var CommentLikeResponseDto = (function (_super) {
    __extends(CommentLikeResponseDto, _super);
    function CommentLikeResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CommentLikeResponseDto;
}(common_1.ResponseDto));
exports.CommentLikeResponseDto = CommentLikeResponseDto;
