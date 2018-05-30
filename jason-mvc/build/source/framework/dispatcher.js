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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUcsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksRUFBQztvQkFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7b0JBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDeEM7cUJBQUk7b0JBQ0QsSUFBRyxJQUFJLENBQUMsc0JBQXNCLEtBQUssS0FBSyxDQUFDLGNBQWMsRUFBQzt3QkFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUN4QztpQkFDSjtnQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FDMUIsb0JBQWtCLElBQUksQ0FBQyxzQkFBc0IsU0FBSSxLQUFLLENBQUMsVUFBWSxFQUNuRSxLQUFLLENBQUMsSUFBSSxFQUNWLElBQUksQ0FDUCxDQUFDLENBQUM7YUFDTjtTQUNKO0lBQ0wsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FwRkEsQUFvRkMsQ0FwRndCLDRCQUFZLEdBb0ZwQztBQUVPLGdDQUFVIiwiZmlsZSI6ImZyYW1ld29yay9kaXNwYXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnLi9ldmVudF9lbWl0dGVyJztcclxuaW1wb3J0IHtBcHBFdmVudH0gZnJvbSAnLi9hcHBfZXZlbnQnOyBcclxuXHJcbmNsYXNzIERpc3BhdGNoZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJRGlzcGF0Y2hlcntcclxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXJzSGFzaE1hcDogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXI6IElDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yLCBjb250cm9sbGVyczogSUNvbnRyb2xsZXJEZXRhaWxzW10pe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9jb250cm9sbGVyc0hhc2hNYXAgPSB0aGlzLmdldENvbnRyb2xsZXIoY29udHJvbGxlcnMpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCl7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXHJcbiAgICAgICAgICAgIG5ldyBBcHBFdmVudCgnYXBwLmRpc3BhdGNoJywgbnVsbCwgKGU6IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChkYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbnRyb2xsZXIoY29udHJvbGxlcnM6IElDb250cm9sbGVyRGV0YWlsc1tdKTpPYmplY3R7XHJcbiAgICAgICAgdmFyIGhhc2hNYXAsIGhhc2hNYXBFbnRyeSwgbmFtZSwgY29udHJvbGxlciwgbDtcclxuICAgICAgICBoYXNoTWFwID0ge307XHJcbiAgICAgICAgbCA9IGNvbnRyb2xsZXJzLmxlbmd0aDtcclxuICAgICAgICBpZihsIDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICdDYW5ub3QgY3JlYXRlIGFuIGFwcGxpY2F0aW9uIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGNvbnRyb2xsZXIuJyxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGw7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyc1tpXTtcclxuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2xsZXIuY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgICAgIGhhc2hNYXBFbnRyeSA9IGhhc2hNYXBbbmFtZV07XHJcbiAgICAgICAgICAgIGlmKGhhc2hNYXBFbnRyeSAhPT0gbnVsbCAmJiBoYXNoTWFwRW50cnkgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FwcC5lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1R3byBjb250cm9sbGVyIGNhbm5vdCB1c2UgdGhlIHNhbWUgbmFtZS4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgaGFzaE1hcFtuYW1lXSA9IGNvbnRyb2xsZXIuY29udHJvbGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGFzaE1hcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRpc3BhdGNoKHJvdXRlOiBJUm91dGUpe1xyXG4gICAgICAgIHZhciBDb250cm9sbGVyID0gdGhpcy5fY29udHJvbGxlcnNIYXNoTWFwW3JvdXRlLmNvbnRyb2xsZXJOYW1lXTtcclxuICAgICAgICBpZihDb250cm9sbGVyID09PSBudWxsIHx8IENvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcclxuICAgICAgICAgICAgICAgICdhcHAuZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgYENvbnRyb2xsZXIgbm90IGZvdW5kOiAke3JvdXRlLmNvbnRyb2xsZXJOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlcjogSUNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih0aGlzLl9tZXRpYXRvcik7XHJcbiAgICAgICAgICAgIHZhciBhID0gY29udHJvbGxlcltyb3V0ZS5hY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgaWYoYSA9PT0gbnVsbCB8fCBhID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdhcHAuZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGBBY3Rpb24gbm90IGZvdW5kIGluIGNvbnRyb2xsZXI6ICR7cm91dGUuY29udHJvbGxlck5hbWV9IC0gKyAke3JvdXRlLmFjdGlvbk5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgPSByb3V0ZS5jb250cm9sbGVyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lICE9PSByb3V0ZS5jb250cm9sbGVyTmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gcm91dGUuY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcclxuICAgICAgICAgICAgICAgICAgICBgYXBwLmNvbnRyb2xsZXIuJHt0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWV9LiR7cm91dGUuYWN0aW9uTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLmFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RGlzcGF0Y2hlcn07Il19
