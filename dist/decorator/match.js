"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchConstraint = void 0;
exports.Match = Match;
var class_validator_1 = require("class-validator");
function Match(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: MatchConstraint,
        });
    };
}
var MatchConstraint = (function () {
    function MatchConstraint() {
    }
    MatchConstraint.prototype.validate = function (value, args) {
        var relatedPropertyName = args.constraints[0];
        var relatedValue = args.object[relatedPropertyName];
        return value === relatedValue;
    };
    MatchConstraint = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: "Match" })
    ], MatchConstraint);
    return MatchConstraint;
}());
exports.MatchConstraint = MatchConstraint;
