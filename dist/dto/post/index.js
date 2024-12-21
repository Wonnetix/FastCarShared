"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostType = void 0;
__exportStar(require("./create"), exports);
__exportStar(require("./list"), exports);
__exportStar(require("./like"), exports);
__exportStar(require("./comment"), exports);
__exportStar(require("./delete"), exports);
__exportStar(require("./update"), exports);
var PostType;
(function (PostType) {
    PostType[PostType["POST"] = 0] = "POST";
    PostType[PostType["CAR"] = 1] = "CAR";
    PostType[PostType["MAINTENANCE"] = 2] = "MAINTENANCE";
    PostType[PostType["ACCIDENT"] = 3] = "ACCIDENT";
})(PostType || (exports.PostType = PostType = {}));
