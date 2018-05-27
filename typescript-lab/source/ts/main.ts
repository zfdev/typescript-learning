//Tag function: User to custom template string processor
// let say:string = 'a bird in hand > two in the bush';
// let html:any = htmlEscape `<div> I would just like to say : ${say}</div>`;

// function htmlEscape(literals: any, ...placeholders:any[]): any {
//     let result:string = "";

//     // interleave the literals with the placeholders
//     for (let i:number = 0; i < placeholders.length; i++) {
//         result += literals[i];
//         result += placeholders[i]
//             .replace(/&/g, '&amp;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;');
//     }

//     // add the last literal
//     result += literals[literals.length - 1];
//     return result;
// }
// alert(html);

//High level funciton
// function bar(cb :()=>void){
//     cb();
// }

//Arrow Function
// class Person{
//     name: string;
//     constructor(name:string){
//         this.name = name;
//     }
//     greet(){
//         alert(`Hi! My name is ${this.name}`);
//     }
//     // greetDelay(time: number){
//     //     setTimeout(function() {
//     //         alert(`Hi! My name is ${this.name}`); 
//     //     }, time);
//     // }  
//     greetDelay(time: number){
//         setTimeout(() => { //bind scope
//             alert(`Hi! My name is ${this.name}`); 
//         }, time);
//     }    
// }

// var newPeople = new Person("Jason");
// newPeople.greet();
// newPeople.greetDelay(5000);

//Promise
// ///<reference path="..\..\typings\globals\handlebars\index.d.ts" /> 
// import $ from "jquery";
// import * as Q from 'Q';
//import { UserModule } from './modules';
// type cb = (json:any) => void;
// class View{
//     private _container: string;
//     private _templateUrl: string;
//     private _serviceUrl: string;
//     private _args: any;
//     constructor(config: any){
//         this._container = config.container;
//         this._templateUrl = config.templateUrl;
//         this._serviceUrl = config.serviceUrl;
//         this._args = config.args;
//     }
//     private _loadJson(url: string, args: any, cb: cb, errorCb:cb){
//         $.ajax({
//             url: url,
//             type: "GET",
//             dataType: "json",
//             data: args,
//             success: (json) => {
//                 cb(json);
//             },
//             error: (e)=>{
//                 errorCb(e);
//             }
//         })
//     }
//     private _loadHbs(url: string, cb: cb, errorCb:cb){
//         $.ajax({
//             url: url,
//             type: "GET",
//             dataType: "text",
//             success: (hbs) => {
//                 cb(hbs);
//             },
//             error: (e)=>{
//                 errorCb(e);
//             }
//         })
//     }
//     private _compileHbs(hbs: string, cb: cb, errorCb:cb){
//         try{
//             var template = Handlebars.compile(hbs);
//             cb(template);
//         }catch(e){
//             errorCb(e);
//         }
//     }
//     private _jsonToHtml(template: any, json: any, cb: cb, errorCb:cb){        
//         try{
//             var html = template(json);
//             cb(html);
//         }catch(e){
//             errorCb(e);
//         }
//     } 
//     private _appendHtml(html: string, cb: cb, errorCb:cb){
//         try{
//             if($(this._container).length === 0){
//                 throw new Error("Container not found!");
//             }
//             $(this._container).html(html);
//             cb($(this._container));
//         }catch(e){
//             errorCb(e);
//         }
//     }
//     public render(cb: cb, errorCb: cb){
//         try {
//             this._loadJson(this._serviceUrl, this._args, (json)=>{
//                 this._loadHbs(this._templateUrl, (hbs)=>{
//                     this._compileHbs(hbs, (template)=>{
//                         this._jsonToHtml(template, json, (html)=>{
//                             this._appendHtml(html, cb, errorCb);
//                         }, errorCb)
//                     }, errorCb);
//                 }, errorCb);
//             }, errorCb);
//         } catch (e) {
//             errorCb(e);
//         }
//     }
// }

// class ViewAsync{
//     private _container: string;
//     private _templateUrl: string;
//     private _serviceUrl: string;
//     private _args: any;
//     constructor(config: any){
//         this._container = config.container;
//         this._templateUrl = config.templateUrl;
//         this._serviceUrl = config.serviceUrl;
//         this._args = config.args;
//     }
//     private _loadJsonAsync(url: string, args: any){
//         return Q.Promise(function(resolve, reject){
//             $.ajax({
//                 url: url,
//                 type: "GET",
//                 dataType: "json",
//                 data: args,
//                 success: (json) => {
//                     resolve(json);
//                 },
//                 error: (e)=>{
//                     reject(e);
//                 }
//             });
//         });
//     }
//     private _loadHbsAsync(url: string){
//         return Q.Promise(function(resolve, reject){
//             $.ajax({
//                 url: url,
//                 type: "GET",
//                 dataType: "text",
//                 success: (hbs) => {
//                     resolve(hbs);
//                 },
//                 error: (e)=>{
//                     reject(e);
//                 }
//             });
//         });

//     }
//     private _compileHbsAsync(hbs: string){
//         return Q.Promise(function(resolve, reject){
//             try{
//                 var template = Handlebars.compile(hbs);
//                 resolve(template);
//             }catch(e){
//                 reject(e);
//             }
//         });    

//     }
//     private _jsonToHtmlAsync(template: any, json: any){
//         return Q.Promise(function(resolve, reject){
//             try{
//                 var html = template(json);
//                 resolve(html);
//             }catch(e){
//                 reject(e);
//             }
//         });                 
//     } 
//     private _appendHtmlAsync(html: string, container: string){
//         return Q.Promise(function(resolve, reject){
//             try{
//                 var $container: any = $(container);
//                 if($container.length === 0){
//                     throw new Error("Container not found!");
//                 }
//                 $container.html(html);
//                 resolve($container);
//             }catch(e){
//                 reject(e);
//             }
//         });     

//     }
//     public renderAsync(){
//         return Q.Promise((resolve, reject)=>{
//             try{
//                 var getJson = this._loadJsonAsync(this._serviceUrl, this._args);
//                 var getTemplate = this._loadHbsAsync(this._templateUrl).then(this._compileHbsAsync);
//                 Q.all(['getJson', 'getTemplate']).then((results)=>{
//                     var json = results[0];
//                     var template = results[1];
//                     this._jsonToHtmlAsync(template, json)
//                     .then((html:string)=>{
//                         return this._appendHtmlAsync(html, this._container)
//                     })
//                     .then(($container: any)=>{
//                         resolve($container);
//                     });
//                 })
//             }catch(e){
//                 reject(e);
//             }
//         });          
//     }
// }

// function *foo(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     return 5;
// }

// var bar = new foo();
// bar.next();
// bar.next();
// bar.next();
// bar.next();
// bar.next();
// bar.next();

// var p: Promise<number>;
// async funciton fn(): Promise<number>{
//     var i = await p;
//     return 1 + i;
// }

//Promise
/////<reference path="..\..\typings\modules\q\index.d.ts" /> 


// class NotGenericUserRepository{
//     private _url: string;
//     constructor(url: string){
//         this._url = url;
//     }

//     public getAsync(){
//         return Q.Promise((resolve: (users: User[]) => void, reject)=>{
//             $.ajax({
//                 url: this._url,
//                 type: "GET",
//                 dataType: "json",
//                 success: (data)=>{
//                     var users = <User[]>data.items;
//                     resolve(users);
//                 },
//                 error: (e)=>{
//                     reject(e);
//                 }
//             });
//         });
//     }
// }

// class NotGenericTalkRepository{
//     private _url: string;
//     constructor(url: string){
//         this._url = url;
//     }

//     public getAsync(){
//         return Q.Promise((resolve: (users: Talk[]) => void, reject)=>{
//             $.ajax({
//                 url: this._url,
//                 type: "GET",
//                 dataType: "json",
//                 success: (data)=>{
//                     var talks = <Talk[]>data.items;
//                     resolve(talks);
//                 },
//                 error: (e)=>{
//                     reject(e);
//                 }
//             });
//         });
//     }    
// }

// class User implements ValidatableInterface{
//     public name: string;
//     public password: string;
//     public isValid(): boolean{
//         return true;
//     }
// }

// class Talk implements ValidatableInterface{
//     public title: string;
//     public description: string;
//     public language: string;
//     public url: string;
//     public year: string;
//     public isValid(): boolean{
//         return true;
//     }    
// }

// interface ValidatableInterface{
//     isValid(): boolean;
// }

// class GenericRepository<T extends ValidatableInterface>{
//     private _url: string;
//     constructor(url: string){
//         this._url = url;
//     }

//     public getAsync(){
//         return Q.Promise((resolve: (users: T[]) => void, reject)=>{
//             $.ajax({
//                 url: this._url,
//                 type: "GET",
//                 dataType: "json",
//                 success: (data)=>{
//                     var items = <T[]>data.items;
//                     var lists = <T[]>[];
//                     for(var i=0; i< items.length; i++){
//                         if(items[i].isValid()){
//                             lists.push(items[i]);
//                         }
//                     }
//                     resolve(lists);
//                 },
//                 error: (e)=>{
//                     reject(e);
//                 }
//             });
//         });
//     }    
// }

// var userRepository = new GenericRepository<User>("./demos/shared/users.json");
// userRepository.getAsync().then(function(users: User[]){
//     console.log('notGenericUserRepository =>', users);
// });

// var talkRepository = new GenericRepository<Talk>("./demos/shared/talks.json");
// talkRepository.getAsync().then(function(talks: Talk[]){
//     console.log('notGenericUserRepository =>', talks);
// });

// interface IMyInterface{
//     doSomeThing: ()=>{}
// }

// interface IMySecondInterface{
//     doSomeThingElse: ()=>{}
// }

// interface IChildInterface extends IMyInterface, IMySecondInterface{

// }

// class Example<T extends IChildInterface>{
//     private genericProperty: T;
//     userT(){
//         this.genericProperty.doSomeThing();
//         this.genericProperty.doSomeThingElse();
//     }
// }

// // function factoryNotWorking<T>():T{
// //     return new T();
// // }

// function factory<T>():T{
//     var type: {new(): T;}
//     return new type();
// }

// // var notGenericUserRepository = new NotGenericUserRepository("./demos/shared/users.json");
// // notGenericUserRepository.getAsync().then(function(users: User[]){
// //     console.log('notGenericUserRepository =>', users);
// // });

// interface PersistanceServiceInterface{
//     save(entity: any): number;
// }

// class CookiePersistanceService implements PersistanceServiceInterface{
//     save(entity: any): number{
//         var id = Math.floor(Math.random() * 100 + 1);
//         return id;
//     }
// }

// class LocalStoragePersistanceService implements PersistanceServiceInterface{
//     save(entity: any): number{
//         var id = Math.floor(Math.random() * 100 + 1);
//         return id;
//     }
// }
// //一个方法应该依赖于抽象而不是一个实例
// class FavouritesController{
//     private _persistanceService: PersistanceServiceInterface;
//     constructor(persistanceService: PersistanceServiceInterface){
//         this._persistanceService = persistanceService;
//     }
//     public saveAsFavourite(articleId: number){
//         return this._persistanceService.save(articleId);
//     }
// }

// var favController = new FavouritesController(new CookiePersistanceService());
// var favController = new FavouritesController(new LocalStoragePersistanceService());

// interface VehicleInterface{
//     getSpeed(): number;
//     getVehicleType: string;
//     isTaxPayed(carId: string):boolean;
// }

// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }

// //Hybrid Types
// function getCounter(): Counter {
//     let counter = <Counter>function(start: number){};
//     counter.interval = 123;
//     counter.reset = function () { };    
//     return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

// //
// class Control {
//     state: any;
// }

// interface SelectableControl extends Control {
//     select(): void;
// }

// class Button extends Control implements SelectableControl {
//     select() { }
// }

// class TextBox extends Control {
//     select() { }
// }

// class ImageTest implements SelectableControl {
//     state: any;
//     select() { }
// }
// import TestUserModule = app.module.UserModule;
// var user = new TestUserModule();

// import {UserValidator, TalkValidator} from './validation';

// class Math1{
//     public static pow(base: number, exponent: number){
//         var result = base;
//         for(var i=1; i<exponent; i++){
//             result *= result*base;
//         }
//         return result;
//     }
// }

//Typescript 
///<reference path="../../node_modules/reflect-metadata/index.d.ts" /> 
import 'reflect-metadata';

function logType(target: any, key: string){
    var t = Reflect.getMetadata('design:type', target, key);
    console.log(`${key} type: ${t.name}`);
}

@log
class Person{
    @log
    public name: string;
    public surname: string;
    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }
    @logType
    public saySomething(@log something: string):string{
        return this.name + '' + this.surname + something;
    }
}
 
//Class decorator
//Use to modify the class contructor function
//构造器通过返回一个新的构造函数，覆盖原有的构造函数，从而实现快速修改一个类的构造函数的功能，这东西确实好啊
function logClass(target: any){
    var original = target; //保存原有构造函数的引用
    //用于生成类的实例的工具方法
    function construct(constructor, args){ 
        var c: any = function(){
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }
    //新的构造函数行为
    //新的构造函数实现了输出console的行为
    var f:any = function(...args){
        console.log("New:" + original.name);
        return construct(original, args);
    }
    //复制原型 使得instanceof函数能够正常工作
    f.prototype = original.prototype;
    return f;
}

var me = new Person('Jason', 'Zhang');
me.saySomething('Hello');

//Method decorator
function logMethod(target: any, key: string, descriptor: any){
    var originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        var a = args.map(a => JSON.stringify(a)).join();
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log(`Call:${key}(${a})=>${r}`);
        return result;
    }
    return descriptor;
}


//Property decorator
function logProperty(target: any, key: string){
    var _val = this[key];
    var getter = function(){
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    }
    var setter = function(newVal){
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    }

    if(delete this[key]){
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

//Parameter decorator
function logParameter(target: any, key: string, index: number){
    var metadataKey = `_log_${key}_parameters`;
    if(Array.isArray(target[metadataKey])){
        target[metadataKey].push(index);
    }else{
        target[metadataKey] = [index];
    }
}

function readMetadata(target: any, key: string, descriptor: any){
    var originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        var metadataKey = `_log_${key}_parameters`;
        var indices = target[metadataKey];
        if(Array.isArray(indices)){
            for(var i=0; i<args.length; i++){
                if(indices.indexOf(i) !== -1){
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
    }
    return descriptor;
}

//Decorator factory
function log(...args: any[]){
    switch(args.length){
        case 1:
            return logClass.apply(this, args);
        case 2:
            logProperty.apply(this. args);
            break;
        case 3:
            if(typeof args[2] === "number"){
                logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        default: 
            throw new Error('Decorators are not valid here!');
    }
}


//MV*
//MVVM->Model View View-Model
//MVP

//Model
class TaskModel{
    public created: number;
    public completed: boolean;
    public title: string;
}

//Collection

//Item view
//Collection view

//Controller
//管理view model的生命周期
//实例化model collection 关联起来 联系view
//控制权转交给其他controller前销毁他们
//MVC 通过组织controller和它的方法 这些方法和用户的行为一一对应

//Event
//User event 允许用户通过触发处理的事件 click scroll submit
//Program event 应用程序自身触发调用的事件 onRender

//Router hash
class Router{
    public controllerName: string;
    public actionName: string;
    public args: Object[];
    constructor(controllerName: string, actionName:string, args: Object[]){
        this.controllerName = controllerName;
        this.actionName = actionName;
        this.args = args;
    }
}

//Mediator
//Router->Mediator->Controller
interface IMediator{
    publish(e: IAppEvent): void;
    subscribe(e: IAppEvent): void;
    unsubscribe(e: IAppEvent): void;
}

//Dispatcher

//Dom Render or Vistual Dom


//UI data binding
//One way data binding
//model->view

//Two way data binding
//model<->view

//Data flow

//Web component
//Polymer