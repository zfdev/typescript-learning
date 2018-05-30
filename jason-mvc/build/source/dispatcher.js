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
                hashMap[name] = controller.controller;
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsa0JBQWtCLElBQUksSUFBSSxFQUFDO29CQUMvQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN4QztxQkFBSTtvQkFDRCxJQUFHLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxLQUFLLENBQUMsY0FBYyxFQUFDO3dCQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3hDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQkFBUSxDQUMxQixvQkFBa0IsSUFBSSxDQUFDLHNCQUFzQixTQUFJLEtBQUssQ0FBQyxVQUFZLEVBQ25FLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxDQUNQLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXBGQSxBQW9GQyxDQXBGd0IsNEJBQVksR0FvRnBDO0FBRU8sZ0NBQVUiLCJmaWxlIjoiZGlzcGF0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7QXBwRXZlbnR9IGZyb20gJy4vYXBwX2V2ZW50JzsgXHJcblxyXG5jbGFzcyBEaXNwYXRjaGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSURpc3BhdGNoZXJ7XHJcbiAgICBwcml2YXRlIF9jb250cm9sbGVyc0hhc2hNYXA6IE9iamVjdDtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRDb250cm9sbGVyOiBJQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRDb250cm9sbGVyTmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvciwgY29udHJvbGxlcnM6IElDb250cm9sbGVyRGV0YWlsc1tdKXtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnNIYXNoTWFwID0gdGhpcy5nZXRDb250cm9sbGVyKGNvbnRyb2xsZXJzKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoJ2FwcC5kaXNwYXRjaCcsIG51bGwsIChlOiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2goZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb250cm9sbGVyKGNvbnRyb2xsZXJzOiBJQ29udHJvbGxlckRldGFpbHNbXSk6T2JqZWN0e1xyXG4gICAgICAgIHZhciBoYXNoTWFwLCBoYXNoTWFwRW50cnksIG5hbWUsIGNvbnRyb2xsZXIsIGw7XHJcbiAgICAgICAgaGFzaE1hcCA9IHt9O1xyXG4gICAgICAgIGwgPSBjb250cm9sbGVycy5sZW5ndGg7XHJcbiAgICAgICAgaWYobCA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgJ2FwcC5lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAnQ2Fubm90IGNyZWF0ZSBhbiBhcHBsaWNhdGlvbiB3aXRob3V0IGF0IGxlYXN0IG9uZSBjb250cm9sbGVyLicsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGk9MDsgaTxsOyBpKyspe1xyXG4gICAgICAgICAgICBjb250cm9sbGVyID0gY29udHJvbGxlcnNbaV07XHJcbiAgICAgICAgICAgIG5hbWUgPSBjb250cm9sbGVyLmNvbnRyb2xsZXJOYW1lO1xyXG4gICAgICAgICAgICBoYXNoTWFwRW50cnkgPSBoYXNoTWFwW25hbWVdO1xyXG4gICAgICAgICAgICBpZihoYXNoTWFwRW50cnkgIT09IG51bGwgJiYgaGFzaE1hcEVudHJ5ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdhcHAuZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICdUd28gY29udHJvbGxlciBjYW5ub3QgdXNlIHRoZSBzYW1lIG5hbWUuJyxcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIGhhc2hNYXBbbmFtZV0gPSBjb250cm9sbGVyLmNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2hNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwYXRjaChyb3V0ZTogSVJvdXRlKXtcclxuICAgICAgICB2YXIgQ29udHJvbGxlciA9IHRoaXMuX2NvbnRyb2xsZXJzSGFzaE1hcFtyb3V0ZS5jb250cm9sbGVyTmFtZV07XHJcbiAgICAgICAgaWYoQ29udHJvbGxlciA9PT0gbnVsbCB8fCBDb250cm9sbGVyID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgIGBDb250cm9sbGVyIG5vdCBmb3VuZDogJHtyb3V0ZS5jb250cm9sbGVyTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXI6IElDb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodGhpcy5fbWV0aWF0b3IpO1xyXG4gICAgICAgICAgICB2YXIgYSA9IGNvbnRyb2xsZXJbcm91dGUuYWN0aW9uTmFtZV07XHJcbiAgICAgICAgICAgIGlmKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBgQWN0aW9uIG5vdCBmb3VuZCBpbiBjb250cm9sbGVyOiAke3JvdXRlLmNvbnRyb2xsZXJOYW1lfSAtICsgJHtyb3V0ZS5hY3Rpb25OYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY3VycmVudENvbnRyb2xsZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gcm91dGUuY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2N1cnJlbnRDb250cm9sbGVyTmFtZSAhPT0gcm91dGUuY29udHJvbGxlck5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyTmFtZSA9IHJvdXRlLmNvbnRyb2xsZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYGFwcC5jb250cm9sbGVyLiR7dGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lfS4ke3JvdXRlLmFjdGlvbk5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5hcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0Rpc3BhdGNoZXJ9OyJdfQ==
