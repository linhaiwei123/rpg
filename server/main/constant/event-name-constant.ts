/**
 * Created by Administrator on 2017/6/1 0001.
 */

export interface IServerEventNameConstant {
    Connection: string,
    Close: string,
    ShutDown: string
}

export class EventNameConstantClass {

    private static singleInstance:EventNameConstantClass = null;

    public static getInstance(){
        if(!this.singleInstance){
            this.singleInstance = new EventNameConstantClass();
        }
        return this.singleInstance;
    }

    public serverEventNameConstant: IServerEventNameConstant = {
        Connection: 'connection',
        Close: 'close',
        ShutDown: 'shutdown'
    };
}







