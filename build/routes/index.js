"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var getTokenRoute_1 = __importDefault(require("./getTokenRoute"));
var verifyToken_1 = require("./verifyToken");
var get_JWT_Token = new getTokenRoute_1.default();
var verifyToken = new verifyToken_1.JWT_Verify_Token_Route();
exports.routes = [
    get_JWT_Token,
    verifyToken
];
