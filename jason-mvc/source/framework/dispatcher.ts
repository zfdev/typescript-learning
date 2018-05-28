/// <reference path="./interfaces.ts" />

import {EventEmitter} from './event_emitter';
import {AppEvent} from './app_event'; 

class Dispatcher extends EventEmitter implements IDispatcher{
    private _controllersHashMap: Object;
    private _currentController: IController;
    private _currentControllerName: string;
    constructor(metiator: IMediator, controllers: IControllerDetails[]){
        super(metiator);
        this._controllersHashMap = this.getController(controllers);
        this._currentController = null;
        this._currentControllerName = null;
    }

    public initialize(){
        this.subscribeToEvents([
            new AppEvent('app.dispatch', null, (e: any, data?: any) => {
                this.dispatch(data);
            })
        ]);
    }

    private getController(controllers: IControllerDetails[]):Object{
        var hashMap, hashMapEntry, name, controller, l;
        hashMap = {};
        l = controllers.length;
        if(l <= 0){
            this.triggerEvent(new AppEvent(
                'app.error',
                'Cannot create an application without at least one controller.',
                null
            ));
        }
        for(var i=0; i<l; i++){
            controller = controllers[i];
            name = controller.controllerName;
            hashMapEntry = hashMap[name];
            if(hashMapEntry !== null && hashMapEntry !== undefined){
                this.triggerEvent(new AppEvent(
                    'app.error',
                    'Two controller cannot use the same name.',
                    null
                ));
                hashMap[name] = controller.controller;
            }
        }
        return hashMap;
    }

    private dispatch(route: IRoute){
        var Controller = this._controllersHashMap[route.controllerName];
        if(Controller === null || Controller === undefined){
            this.triggerEvent(new AppEvent(
                'app.error',
                `Controller not found: ${route.controllerName}`,
                null
            ));
        }else{
            var controller: IController = new Controller(this._metiator);
            var a = controller[route.actionName];
            if(a === null || a === undefined){
                this.triggerEvent(new AppEvent(
                    'app.error',
                    `Action not found in controller: ${route.controllerName} - + ${route.actionName}`,
                    null
                ));
            }else{
                if(this._currentController == null){
                    this._currentControllerName = route.controllerName;
                    this._currentController = controller;
                    this._currentController.initialize();
                }else{
                    if(this._currentControllerName !== route.controllerName){
                        this._currentController.dispose();
                        this._currentControllerName = route.controllerName;
                        this._currentController = controller;
                        this._currentController.initialize();
                    }
                }
                this.triggerEvent(new AppEvent(
                    `app.controller.${this._currentControllerName}.${route.actionName}`,
                    route.args,
                    null
                ));
            }
        }
    }
}

export {Dispatcher};