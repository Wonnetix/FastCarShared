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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginBase = exports.SocialLoginRequestDto = exports.LoginUserResponseDto = exports.LoginUserRequestDto = void 0;
var class_validator_1 = require("class-validator");
var LoginBase = (function () {
    function LoginBase() {
    }
    return LoginBase;
}());
exports.LoginBase = LoginBase;
var LoginUserRequestDto = (function (_super) {
    __extends(LoginUserRequestDto, _super);
    function LoginUserRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return o.username === null || o.username === undefined; }),
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], LoginUserRequestDto.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], LoginUserRequestDto.prototype, "password", void 0);
    return LoginUserRequestDto;
}(LoginBase));
exports.LoginUserRequestDto = LoginUserRequestDto;
var SocialLoginRequestDto = (function (_super) {
    __extends(SocialLoginRequestDto, _super);
    function SocialLoginRequestDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SocialLoginRequestDto;
}(LoginBase));
exports.SocialLoginRequestDto = SocialLoginRequestDto;
var LoginUserResponseDto = (function () {
    function LoginUserResponseDto() {
    }
    return LoginUserResponseDto;
}());
exports.LoginUserResponseDto = LoginUserResponseDto;
