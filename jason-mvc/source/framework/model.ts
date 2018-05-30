/// <reference path="./interfaces.ts" />

import {EventEmitter} from './event_emitter';

function ModelSettings(serviceUrl: string){
    return function(target: any){   
        var original = target;
        function construct(constructor, args){
            var c: any = function(){
                return constructor.apply(this, args);
            }
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._serviceUrl = serviceUrl;
            return instance;
        }

        var f: any = function(...args){
            return construct(original, args);
        }

        f.prototype = original.prototype;
        return f;
    }
}

class Model extends EventEmitter implements IModel{
    private _serviceUrl: string;
    constructor(metiator: IMediator){
        super(metiator);
    }

    public initialize(){
        throw new Error('Model.prototype.initialize() is abstract and must implemented.');
    }

    public dispose(){
        throw new Error('Model.prototype.dispose() is abstract and must implemented.');
    }

    protected requestAsync(method: string, dataType: string, data: any){
        return new Promise<void>((resolve: (r) => void, reject: (e) => void) => {
            $.ajax({
                method: method,
                url: this._serviceUrl,
                data: data || {},
                dataType: dataType,
                success: (response)=>{
                    resolve(response);
                },
                error: (...args: any[])=>{
                    reject(args);
                }
            });
        });
    }

    protected getAsync(dataType: string, data: any){
        return this.requestAsync('GET', dataType, data);
    }

    protected postAsync(dataType: string, data: any){
        return this.requestAsync('POST', dataType, data);
    }

    protected putAsync(dataType: string, data: any){
        return this.requestAsync('PUT', dataType, data);
    }

    protected deleteAsync(dataType: string, data: any){
        return this.requestAsync('DELETE', dataType, data);
    }    
}

export {Model, ModelSettings};