/**
 * Created by Administrator on 2017/6/2 0002.
 */

class Test {
    private webSocketClient: any;

    public init(){
        this.webSocketClient = new WebSocket("ws://localhost:3000");
    }

}

new Test().init();