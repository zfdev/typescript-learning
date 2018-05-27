//Program event interfacef
interface IAppEvent{
    topic: string;
    data: any;
    handler: (e: any, data: any) =>void;
}

//Mediator
interface IMediator{
    publish(e: IAppEvent): void; //publish event
    subscribe(e: IAppEvent): void; //subscribe event
    unsubscribe(e: IAppEvent): void; //unsubscribe event
}