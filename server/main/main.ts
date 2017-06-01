import * as ws from './node-websocket-server/lib/ws/server';
import {EventNameConstantClass, IServerEventNameConstant} from "./constant/event-name-constant";

class Main {
    private server: any;
    private eventNameConstant: EventNameConstantClass;
    private serverEventNameConstant: IServerEventNameConstant;

    constructor() {
        this.server = ws.createServer();
        this.eventNameConstant = EventNameConstantClass.getInstance();
        this.serverEventNameConstant = this.eventNameConstant.serverEventNameConstant;
        this.configListener();
    }

    private configListener() {
        this.server.addListener(this.serverEventNameConstant.Connection, (conn) => {

        });
    }
}


new Main();







