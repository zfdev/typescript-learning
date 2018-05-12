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
///<reference path="..\..\typings\globals\handlebars\index.d.ts" /> 
import $ from "jquery";
// import * as Q from 'Q';
type cb = (json:any) => void;
class View{
    private _container: string;
    private _templateUrl: string;
    private _serviceUrl: string;
    private _args: any;
    constructor(config: any){
        this._container = config.container;
        this._templateUrl = config.templateUrl;
        this._serviceUrl = config.serviceUrl;
        this._args = config.args;
    }
    private _loadJson(url: string, args: any, cb: cb, errorCb:cb){
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            data: args,
            success: (json) => {
                cb(json);
            },
            error: (e)=>{
                errorCb(e);
            }
        })
    }
    private _loadHbs(url: string, cb: cb, errorCb:cb){
        $.ajax({
            url: url,
            type: "GET",
            dataType: "text",
            success: (hbs) => {
                cb(hbs);
            },
            error: (e)=>{
                errorCb(e);
            }
        })
    }
    private _compileHbs(hbs: string, cb: cb, errorCb:cb){
        try{
            var template = Handlebars.compile(hbs);
            cb(template);
        }catch(e){
            errorCb(e);
        }
    }
    private _jsonToHtml(template: any, json: any, cb: cb, errorCb:cb){        
        try{
            var html = template(json);
            cb(html);
        }catch(e){
            errorCb(e);
        }
    } 
    private _appendHtml(html: string, cb: cb, errorCb:cb){
        try{
            if($(this._container).length === 0){
                throw new Error("Container not found!");
            }
            $(this._container).html(html);
            cb($(this._container));
        }catch(e){
            errorCb(e);
        }
    }
    public render(cb: cb, errorCb: cb){
        try {
            this._loadJson(this._serviceUrl, this._args, (json)=>{
                this._loadHbs(this._templateUrl, (hbs)=>{
                    this._compileHbs(hbs, (template)=>{
                        this._jsonToHtml(template, json, (html)=>{
                            this._appendHtml(html, cb, errorCb);
                        }, errorCb)
                    }, errorCb);
                }, errorCb);
            }, errorCb);
        } catch (e) {
            errorCb(e);
        }
    }
}

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