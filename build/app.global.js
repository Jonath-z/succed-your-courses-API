"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.app = (0, express_1.default)();
        this.initilizeMiddleware();
        this.initializeRoutes(routes_1.routes);
        this.initializeDefaultRoutes();
    }
    App.prototype.initilizeMiddleware = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    };
    App.prototype.initializeRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            _this.app.use('/api/v1', route.router);
        });
    };
    App.prototype.initializeDefaultRoutes = function () {
        this.app.get('/', function (req, res) {
            return res.json({
                message: "Welcome to succed your course API",
            });
        });
    };
    App.prototype.listen = function () {
        var port = process.env.PORT || 3001;
        this.app.listen(port, function () {
            console.log('server is running');
        });
    };
    return App;
}());
exports.App = App;
