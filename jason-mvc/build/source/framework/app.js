"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatcher_1 = require("./dispatcher");
var mediator_1 = require("./mediator");
var app_event_1 = require("./app_event");
var router_1 = require("./router");
var App = (function () {
    function App(appSettings) {
        this._contollers = appSettings.controllers;
        this._mediator = new mediator_1.Mediator(appSettings.isDebug || false);
        this._router = new router_1.Router(this._mediator, appSettings.defaultController, appSettings.defaultAction);
        this._dispatcher = new dispatcher_1.Dispatcher(this._mediator, this._contollers);
        this._onErrorHandler = appSettings.onErrorHandler;
    }
    App.prototype.initialize = function () {
        var _this = this;
        this._router.initialize();
        this._dispatcher.initialize();
        this._mediator.subscribe(new app_event_1.AppEvent("app.error", null, function (e, data) {
            _this._onErrorHandler(data);
        }));
        this._mediator.publish(new app_event_1.AppEvent("app.initialize", null, null));
    };
    return App;
}());
exports.App = App;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQ0FBMEM7QUFDMUMsdUNBQXNDO0FBQ3RDLHlDQUF1QztBQUN2QyxtQ0FBa0M7QUFFbEM7SUFNSSxhQUFZLFdBQXlCO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUN0RCxDQUFDO0lBQ00sd0JBQVUsR0FBakI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFDLENBQU0sRUFBRSxJQUFVO1lBQ3hFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksb0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0wsVUFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFFUSxrQkFBRyIsImZpbGUiOiJmcmFtZXdvcmsvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSBcIi4vZGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQgeyBNZWRpYXRvciB9IGZyb20gXCIuL21lZGlhdG9yXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSBcIi4vYXBwX2V2ZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHByaXZhdGUgX2Rpc3BhdGNoZXI6IElEaXNwYXRjaGVyO1xyXG4gICAgcHJpdmF0ZSBfbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICAgIHByaXZhdGUgX3JvdXRlcjogSVJvdXRlcjtcclxuICAgIHByaXZhdGUgX2NvbnRvbGxlcnM6IElDb250cm9sbGVyRGV0YWlsc1tdO1xyXG4gICAgcHJpdmF0ZSBfb25FcnJvckhhbmRsZXI6IChvOiBPYmplY3QpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBTZXR0aW5nczogSUFwcFNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5fY29udG9sbGVycyA9IGFwcFNldHRpbmdzLmNvbnRyb2xsZXJzO1xyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IE1lZGlhdG9yKGFwcFNldHRpbmdzLmlzRGVidWcgfHwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlciA9IG5ldyBSb3V0ZXIodGhpcy5fbWVkaWF0b3IsIGFwcFNldHRpbmdzLmRlZmF1bHRDb250cm9sbGVyLCBhcHBTZXR0aW5ncy5kZWZhdWx0QWN0aW9uKTtcclxuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyID0gbmV3IERpc3BhdGNoZXIodGhpcy5fbWVkaWF0b3IsIHRoaXMuX2NvbnRvbGxlcnMpO1xyXG4gICAgICAgIHRoaXMuX29uRXJyb3JIYW5kbGVyID0gYXBwU2V0dGluZ3Mub25FcnJvckhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShuZXcgQXBwRXZlbnQoXCJhcHAuZXJyb3JcIiwgbnVsbCwgKGU6IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkVycm9ySGFuZGxlcihkYXRhKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IucHVibGlzaChuZXcgQXBwRXZlbnQoXCJhcHAuaW5pdGlhbGl6ZVwiLCBudWxsLCBudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcCB9OyJdfQ==
