"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_Verify_Token_Route = void 0;
var verifyToken_1 = __importDefault(require("../middleware/jwt/verifyToken"));
var express_1 = require("express");
var JWT_Verify_Token_Route = /** @class */ (function () {
    function JWT_Verify_Token_Route() {
        this.path = '/verifyToken';
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    JWT_Verify_Token_Route.prototype.initializeRoutes = function () {
        this.router
            .route(this.path)
            .post(verifyToken_1.default);
    };
    return JWT_Verify_Token_Route;
}());
exports.JWT_Verify_Token_Route = JWT_Verify_Token_Route;
