"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_secretKey = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.jwt_secretKey = "".concat(process.env.JWT_SECRET_KEY);
