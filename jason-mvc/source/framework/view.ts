/// <reference path="./interfaces.ts" />
/// <reference path="../../node_modules/@types/handlebars/index.d.ts" />

import { EventEmitter } from './event_emitter';
import { AppEvent } from './app_event';

function ViewSettings(templateUrl: string, container: string): any {
    return function (target: any): void {
        var original: any = target;
        function construct(constructor: any, args): any {
            var c: any = function (contructor: any, args: any): any {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance: any = new c();
            instance._container = container;
            instance._templateUrl = templateUrl;
            return instance;
        }

        var f: any = function (...args: any[]): any {
            return construct(original, args);
        };

        f.prototype = original.prototype;
        return f;
    }
}

class View extends EventEmitter implements IView {
    protected _container: string;
    private _templateUrl: string;
    private _templateDelegate: HandlebarsTemplateDelegate;

    constructor(metiator: IMediator) {
        super(metiator);
    }

    public initialize() {
        throw new Error('View.prototype.initialize() is abstract and must implemented.');
    }

    public dispose() {
        throw new Error('View.prototype.dispose() is abstract and must implemented.');
    }

    protected bindDomEvents(model: any) {
        throw new Error('View.prototype.bindDomEvents() is abstract and must implemented.');
    }

    protected unbindDomEvents() {
        throw new Error('View.prototype.unbindDomEvents() is abstract and must implemented.');
    }

    private loadTemplateAsync() {
        return new Promise((resolve: (r) => void, reject: (e) => void) => {
            $.ajax({
                method: 'GET',
                url: this._templateUrl,
                dataType: 'text',
                success: (response) => {
                    resolve(response);
                },
                error: (...args: any[]) => {
                    reject(args);
                }
            });
        });
    }

    private compileTemplateAsync(source: string) {
        return new Promise<void>((resolve: (r) => void, reject: (e) => void) => {
            try {
                var template = Handlebars.compile(source);
                resolve(template);
            } catch (e) {
                reject(e);
            }
        });
    }

    private getTemplateAsync() {
        return new Promise((resolve: (r) => void, reject: (e) => void) => {
            if (this._templateDelegate === undefined || this._templateDelegate === null) {
                this.loadTemplateAsync().then((source) => {
                    return this.compileTemplateAsync(source);
                }).then((templateDelegat: any) => {
                    this._templateDelegate = templateDelegat;
                    resolve(this._templateDelegate);
                }).catch((e) => {
                    reject(e);
                });
            } else {
                resolve(this._templateDelegate);
            }
        });
    }

    protected renderAsync(model) {
        return new Promise((resolve: (r) => void, reject: (e) => void) => {
            this.getTemplateAsync()
                .then((templateDelegate) => {
                    var html = this._templateDelegate(model);
                    $(this._container).html(html);
                    resolve(model);
                })
                .catch((e) => { reject(e) });
        });
    }
}

export { View, ViewSettings };