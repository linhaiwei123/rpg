"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws = require("./node-websocket-server/lib/ws/server");
var event_name_constant_1 = require("./constant/event-name-constant");
var Main = (function () {
    function Main() {
        this.server = ws.createServer();
        this.eventNameConstant = event_name_constant_1.EventNameConstantClass.getInstance();
        this.serverEventNameConstant = this.eventNameConstant.serverEventNameConstant;
        this.configListener();
    }
    Main.prototype.configListener = function () {
        this.server.addListener(this.serverEventNameConstant.Connection, function (conn) {
        });
    };
    return Main;
}());
new Main();
