"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var constants_1 = require("../../constants");
var JWT_Verify_Token = function (req, res, next) {
    var token = req.body.token;
    // console.log(token);
    jsonwebtoken_1.default.verify(token, constants_1.jwt_secretKey, function (err, auth) {
        if (err) {
            res.json({
                experied: true,
            });
            throw err;
        }
        else {
            // console.log('okey');
            res.json({
                experied: false,
                auth: auth
            });
        }
    });
    next();
};
exports.default = JWT_Verify_Token;
