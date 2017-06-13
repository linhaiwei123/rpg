/**
 * Created by Administrator on 2017/6/2 0002.
 */
import * as WebSocket from 'ws';

export abstract class AbstractWebSocket {
    protected webSocketServer;
    protected WebSocket;

    public init(host: string, port: number) {
        this.WebSocket = WebSocket;
        this.webSocketServer = new WebSocket.Server({
            host: host,
            port: port,
        });
        this.configListener();
    }

    private configListener() {
        this.webSocketServer.on("connection", (ws, req) => {
            ws.on("message", (data)=>{this.onMessage(data,ws)});
            ws.on("close", ()=>{this.onClose(ws)});
            this.onConnection(ws, req);
        })
    }

    protected abstract onConnection(ws, req);
    protected abstract onMessage(data, ws);
    protected abstract onClose(ws);
}