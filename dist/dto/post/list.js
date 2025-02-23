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
exports.TimeAgoDto = exports.PostRecordDto = exports.PostListRequestDto = void 0;
var common_1 = require("../../common");
var PostListRequestDto = (function (_super) {
    __extends(PostListRequestDto, _super);
    function PostListRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostListRequestDto;
}(common_1.PaginationDto));
exports.PostListRequestDto = PostListRequestDto;
var PostRecordDto = (function () {
    function PostRecordDto() {
    }
    return PostRecordDto;
}());
exports.PostRecordDto = PostRecordDto;
var TimeAgoDto = (function () {
    function TimeAgoDto() {
    }
    return TimeAgoDto;
}());
exports.TimeAgoDto = TimeAgoDto;
