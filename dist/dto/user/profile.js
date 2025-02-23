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
exports.FollowStatus = exports.UserSearchRequestDto = exports.UserSearchItemDto = exports.UpdateProfileResponseDto = exports.UpdateProfileDto = exports.UserProfileDto = void 0;
var common_1 = require("../../common");
var BaseUser_1 = require("./BaseUser");
var UserProfileDto = (function (_super) {
    __extends(UserProfileDto, _super);
    function UserProfileDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserProfileDto;
}(BaseUser_1.UserBaseRecord));
exports.UserProfileDto = UserProfileDto;
var UpdateProfileDto = (function () {
    function UpdateProfileDto() {
    }
    return UpdateProfileDto;
}());
exports.UpdateProfileDto = UpdateProfileDto;
var UpdateProfileResponseDto = (function (_super) {
    __extends(UpdateProfileResponseDto, _super);
    function UpdateProfileResponseDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateProfileResponseDto;
}(common_1.ResponseDto));
exports.UpdateProfileResponseDto = UpdateProfileResponseDto;
var UserSearchRequestDto = (function (_super) {
    __extends(UserSearchRequestDto, _super);
    function UserSearchRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserSearchRequestDto;
}(common_1.PaginationDto));
exports.UserSearchRequestDto = UserSearchRequestDto;
var FollowStatus;
(function (FollowStatus) {
    FollowStatus[FollowStatus["NOT_FOLLOWING"] = 0] = "NOT_FOLLOWING";
    FollowStatus[FollowStatus["PENDING"] = 1] = "PENDING";
    FollowStatus[FollowStatus["FOLLOWING"] = 2] = "FOLLOWING";
})(FollowStatus || (exports.FollowStatus = FollowStatus = {}));
var UserSearchItemDto = (function () {
    function UserSearchItemDto() {
    }
    return UserSearchItemDto;
}());
exports.UserSearchItemDto = UserSearchItemDto;
