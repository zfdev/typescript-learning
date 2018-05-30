//Program event interface
interface IAppEvent{
    topic: string;
    data: any;
    handler: (e: any, data: any) =>void;
}

//Mediator interface
interface IMediator{
    publish(e: IAppEvent): void; //publish event
    subscribe(e: IAppEvent): void; //subscribe event
    unsubscribe(e: IAppEvent): void; //unsubscribe event
}

interface IAppSettings{
    isDebug: boolean;
    defaultController: string;
    defaultAction: string;
    controllers: Array<IControllerDetails>;
    onErrorHandler: (o: Object) => void;
}

interface IControllerDetails{
    controllerName: string;
    controller: { new(...args: any[]): IController;};
}

interface IRoute{
    controllerName: string;
    actionName: string;
    args: Object[];
    serialize(): string;
}

interface IEventEmitter{
    triggerEvent(event: IAppEvent);
    subscribeToEvents(events: Array<IAppEvent>);
    unsubscribeToEvents(events: Array<IAppEvent>);
}

interface IRouter extends IEventEmitter{
    initialize(): void;
}

interface IDispatcher extends IEventEmitter{
    initialize(): void;
}

interface IController extends IEventEmitter{
    initialize(): void;
    dispose(): void;
}

interface IModel extends IEventEmitter{
    initialize(): void;
    dispose(): void;
}

interface IView extends IEventEmitter{
    initialize(): void;
    dispose(): void;
}