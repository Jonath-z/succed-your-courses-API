"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get_JWT_Token = void 0;
var getToken_1 = __importDefault(require("../middleware/jwt/getToken"));
var express_1 = require("express");
var Get_JWT_Token = /** @class */ (function () {
    function Get_JWT_Token() {
        this.path = '/getToken';
        this.router = (0, express_1.Router)();
        this.initializeRoute();
    }
    Get_JWT_Token.prototype.initializeRoute = function () {
        this.router
            .route(this.path)
            .post(getToken_1.default);
    };
    return Get_JWT_Token;
}());
exports.Get_JWT_Token = Get_JWT_Token;
exports.default = Get_JWT_Token;
