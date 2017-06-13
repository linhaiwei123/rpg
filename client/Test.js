/**
 * Created by Administrator on 2017/6/2 0002.
 */
var Test = (function () {
    function Test() {
    }
    Test.prototype.init = function () {
        this.webSocketClient = new WebSocket("ws://localhost:3000");
    };
    return Test;
}());
new Test().init();
