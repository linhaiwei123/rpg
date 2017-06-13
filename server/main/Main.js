"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractWebSocket_1 = require("./AbstractWebSocket");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.host = 'localhost';
        _this.port = 3000;
        _this.init(_this.host, _this.port);
        console.log("server start");
        return _this;
    }
    Main.prototype.onConnection = function (ws, req) {
        console.log("connection");
    };
    Main.prototype.onMessage = function (data, ws) {
        console.log("message: ", data);
    };
    Main.prototype.onClose = function (ws) {
        console.log("close");
    };
    return Main;
}(AbstractWebSocket_1.AbstractWebSocket));
new Main();
