"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Administrator on 2017/6/2 0002.
 */
var WebSocket = require("ws");
var AbstractWebSocket = (function () {
    function AbstractWebSocket() {
    }
    AbstractWebSocket.prototype.init = function (host, port) {
        this.WebSocket = WebSocket;
        this.webSocketServer = new WebSocket.Server({
            host: host,
            port: port,
        });
        this.configListener();
    };
    AbstractWebSocket.prototype.configListener = function () {
        var _this = this;
        this.webSocketServer.on("connection", function (ws, req) {
            ws.on("message", function (data) { _this.onMessage(data, ws); });
            ws.on("close", function () { _this.onClose(ws); });
            _this.onConnection(ws, req);
        });
    };
    return AbstractWebSocket;
}());
exports.AbstractWebSocket = AbstractWebSocket;
