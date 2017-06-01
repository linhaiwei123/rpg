/**
 * Created by Administrator on 2017/6/1 0001.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventNameConstantClass = (function () {
    function EventNameConstantClass() {
        this.serverEventNameConstant = {
            Connection: 'connection',
            Close: 'close',
            ShutDown: 'shutdown'
        };
    }
    EventNameConstantClass.getInstance = function () {
        if (!this.singleInstance) {
            this.singleInstance = new EventNameConstantClass();
        }
        return this.singleInstance;
    };
    return EventNameConstantClass;
}());
EventNameConstantClass.singleInstance = null;
exports.EventNameConstantClass = EventNameConstantClass;
