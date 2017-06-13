import {AbstractWebSocket} from "./AbstractWebSocket";
class Main extends AbstractWebSocket{

    private host: string = 'localhost';
    private port: number = 3000;

    constructor(){
        super();
        this.init(this.host, this.port);
        console.log("server start");
    }

    protected onConnection(ws, req) {
        console.log("connection");
    }

    protected onMessage(data, ws) {
        console.log("message: ", data);
    }

    protected onClose(ws) {
        console.log("close");
    }

}

new Main();








