"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var event_emitter_1 = require("./event_emitter");
var app_event_1 = require("./app_event");
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher(metiator, controllers) {
        var _this = _super.call(this, metiator) || this;
        _this._controllersHashMap = _this.getController(controllers);
        _this._currentController = null;
        _this._currentControllerName = null;
        return _this;
    }
    Dispatcher.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new app_event_1.AppEvent('app.dispatch', null, function (e, data) {
                _this.dispatch(data);
            })
        ]);
    };
    Dispatcher.prototype.getController = function (controllers) {
        var hashMap, hashMapEntry, name, controller, l;
        hashMap = {};
        l = controllers.length;
        if (l <= 0) {
            this.triggerEvent(new app_event_1.AppEvent('app.error', 'Cannot create an application without at least one controller.', null));
        }
        for (var i = 0; i < l; i++) {
            controller = controllers[i];
            name = controller.controllerName;
            hashMapEntry = hashMap[name];
            if (hashMapEntry !== null && hashMapEntry !== undefined) {
                this.triggerEvent(new app_event_1.AppEvent('app.error', 'Two controller cannot use the same name.', null));
            }
            hashMap[name] = controller.controller;
        }
        return hashMap;
    };
    Dispatcher.prototype.dispatch = function (route) {
        var Controller = this._controllersHashMap[route.controllerName];
        if (Controller === null || Controller === undefined) {
            this.triggerEvent(new app_event_1.AppEvent('app.error', "Controller not found: " + route.controllerName, null));
        }
        else {
            var controller = new Controller(this._metiator);
            var a = controller[route.actionName];
            if (a === null || a === undefined) {
                this.triggerEvent(new app_event_1.AppEvent('app.error', "Action not found in controller: " + route.controllerName + " - + " + route.actionName, null));
            }
            else {
                if (this._currentController == null) {
                    this._currentControllerName = route.controllerName;
                    this._currentController = controller;
                    this._currentController.initialize();
                }
                else {
                    if (this._currentControllerName !== route.controllerName) {
                        this._currentController.dispose();
                        this._currentControllerName = route.controllerName;
                        this._currentController = controller;
                        this._currentController.initialize();
                    }
                }
                this.triggerEvent(new app_event_1.AppEvent("app.controller." + this._currentControllerName + "." + route.actionName, route.args, null));
            }
        }
    };
    return Dispatcher;
}(event_emitter_1.EventEmitter));
exports.Dispatcher = Dispatcher;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFFO29CQUNqQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN4QztxQkFBTTtvQkFDSCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxLQUFLLENBQUMsY0FBYyxFQUFFO3dCQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3hDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQkFBUSxDQUMxQixvQkFBa0IsSUFBSSxDQUFDLHNCQUFzQixTQUFJLEtBQUssQ0FBQyxVQUFZLEVBQ25FLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxDQUNQLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXBGQSxBQW9GQyxDQXBGd0IsNEJBQVksR0FvRnBDO0FBRVEsZ0NBQVUiLCJmaWxlIjoiZnJhbWV3b3JrL2Rpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5cclxuY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElEaXNwYXRjaGVyIHtcclxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXJzSGFzaE1hcDogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXI6IElDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yLCBjb250cm9sbGVyczogSUNvbnRyb2xsZXJEZXRhaWxzW10pIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnNIYXNoTWFwID0gdGhpcy5nZXRDb250cm9sbGVyKGNvbnRyb2xsZXJzKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KCdhcHAuZGlzcGF0Y2gnLCBudWxsLCAoZTogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29udHJvbGxlcihjb250cm9sbGVyczogSUNvbnRyb2xsZXJEZXRhaWxzW10pOiBPYmplY3Qge1xyXG4gICAgICAgIHZhciBoYXNoTWFwLCBoYXNoTWFwRW50cnksIG5hbWUsIGNvbnRyb2xsZXIsIGw7XHJcbiAgICAgICAgaGFzaE1hcCA9IHt9O1xyXG4gICAgICAgIGwgPSBjb250cm9sbGVycy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGwgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICdDYW5ub3QgY3JlYXRlIGFuIGFwcGxpY2F0aW9uIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGNvbnRyb2xsZXIuJyxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyc1tpXTtcclxuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2xsZXIuY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgICAgIGhhc2hNYXBFbnRyeSA9IGhhc2hNYXBbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChoYXNoTWFwRW50cnkgIT09IG51bGwgJiYgaGFzaE1hcEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHdvIGNvbnRyb2xsZXIgY2Fubm90IHVzZSB0aGUgc2FtZSBuYW1lLicsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaE1hcFtuYW1lXSA9IGNvbnRyb2xsZXIuY29udHJvbGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2hNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwYXRjaChyb3V0ZTogSVJvdXRlKSB7XHJcbiAgICAgICAgdmFyIENvbnRyb2xsZXIgPSB0aGlzLl9jb250cm9sbGVyc0hhc2hNYXBbcm91dGUuY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgIGlmIChDb250cm9sbGVyID09PSBudWxsIHx8IENvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgIGBDb250cm9sbGVyIG5vdCBmb3VuZDogJHtyb3V0ZS5jb250cm9sbGVyTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlcjogSUNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih0aGlzLl9tZXRpYXRvcik7XHJcbiAgICAgICAgICAgIHZhciBhID0gY29udHJvbGxlcltyb3V0ZS5hY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FwcC5lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYEFjdGlvbiBub3QgZm91bmQgaW4gY29udHJvbGxlcjogJHtyb3V0ZS5jb250cm9sbGVyTmFtZX0gLSArICR7cm91dGUuYWN0aW9uTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRDb250cm9sbGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgPSByb3V0ZS5jb250cm9sbGVyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lICE9PSByb3V0ZS5jb250cm9sbGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyTmFtZSA9IHJvdXRlLmNvbnRyb2xsZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYGFwcC5jb250cm9sbGVyLiR7dGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lfS4ke3JvdXRlLmFjdGlvbk5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5hcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEaXNwYXRjaGVyIH07Il19
