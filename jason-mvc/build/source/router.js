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
var route_1 = require("./route");
var Router = (function (_super) {
    __extends(Router, _super);
    function Router(metiator, defaultController, defaultAction) {
        var _this = _super.call(this, metiator) || this;
        _this._defaultController = defaultController || "home";
        _this._defaultAction = defaultAction || "index";
        return _this;
    }
    Router.prototype.initialize = function () {
        var _this = this;
        $(window).on('hashchange', function () {
            var r = _this.getRoute();
            _this.onRouteChange(r);
        });
        this.subscribeToEvents([
            new app_event_1.AppEvent('app.initialize', null, function (e, data) {
                _this.onRouteChange(_this.getRoute());
            }),
            new app_event_1.AppEvent('app.route', null, function (e, data) {
                _this.setRoute(data);
            }),
        ]);
    };
    Router.prototype.getRoute = function () {
        var h = window.location.hash;
        return this.parseRoute(h);
    };
    Router.prototype.setRoute = function (route) {
        var s = route.serialize();
        window.location.hash = s;
    };
    Router.prototype.parseRoute = function (hash) {
        var comp, controller, action, args, i;
        if (hash[hash.length - 1] === '/') {
            hash = hash.substring(0, hash.length - 1);
        }
        comp = hash.replace("#", '').split('/');
        controller = comp[0] || this._defaultController;
        action = comp[1] || this._defaultAction;
        args = [];
        for (i = 2; i < comp.length; i++) {
            args.push(comp[i]);
        }
        return new route_1.Route(controller, action, args);
    };
    Router.prototype.onRouteChange = function (route) {
        this.triggerEvent(new app_event_1.AppEvent('app.dispatch', route, null));
    };
    return Router;
}(event_emitter_1.EventEmitter));
exports.Router = Router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SSxvQkFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0wsYUFBQztBQUFELENBdERBLEFBc0RDLENBdERvQiw0QkFBWSxHQXNEaEM7QUFFTyx3QkFBTSIsImZpbGUiOiJyb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tIFwiLi9ldmVudF9lbWl0dGVyXCI7XHJcbmltcG9ydCB7QXBwRXZlbnR9IGZyb20gXCIuL2FwcF9ldmVudFwiO1xyXG5pbXBvcnQge1JvdXRlfSBmcm9tIFwiLi9yb3V0ZVwiO1xyXG5cclxuY2xhc3MgUm91dGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIGltcGxlbWVudHMgSVJvdXRlcntcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb250cm9sbGVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0QWN0aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvciwgZGVmYXVsdENvbnRyb2xsZXI6IHN0cmluZywgZGVmYXVsdEFjdGlvbjogc3RyaW5nKXtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbnRyb2xsZXIgPSBkZWZhdWx0Q29udHJvbGxlciB8fCBcImhvbWVcIjtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0QWN0aW9uID0gZGVmYXVsdEFjdGlvbiB8fCBcImluZGV4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKXtcclxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCAoKT0+e1xyXG4gICAgICAgICAgICB2YXIgciA9IHRoaXMuZ2V0Um91dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5vblJvdXRlQ2hhbmdlKHIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KCdhcHAuaW5pdGlhbGl6ZScsIG51bGwsIChlOiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Sb3V0ZUNoYW5nZSh0aGlzLmdldFJvdXRlKCkpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KCdhcHAucm91dGUnLCBudWxsLCAoZTogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJvdXRlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KSwgICAgICAgICAgXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb3V0ZSgpe1xyXG4gICAgICAgIHZhciBoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VSb3V0ZShoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJvdXRlKHJvdXRlOiBSb3V0ZSl7XHJcbiAgICAgICAgdmFyIHMgPSByb3V0ZS5zZXJpYWxpemUoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVJvdXRlKGhhc2g6IHN0cmluZyl7XHJcbiAgICAgICAgdmFyIGNvbXAsIGNvbnRyb2xsZXIsIGFjdGlvbiwgYXJncywgaTtcclxuICAgICAgICBpZihoYXNoW2hhc2gubGVuZ3RoIC0gMV0gPT09ICcvJyl7XHJcbiAgICAgICAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZygwLCBoYXNoLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wID0gaGFzaC5yZXBsYWNlKFwiI1wiLCAnJykuc3BsaXQoJy8nKTtcclxuICAgICAgICBjb250cm9sbGVyID0gY29tcFswXSB8fCB0aGlzLl9kZWZhdWx0Q29udHJvbGxlcjtcclxuICAgICAgICBhY3Rpb24gPSBjb21wWzFdIHx8IHRoaXMuX2RlZmF1bHRBY3Rpb247XHJcbiAgICAgICAgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvcihpID0gMjsgaTwgY29tcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaChjb21wW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShjb250cm9sbGVyLCBhY3Rpb24sIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3V0ZUNoYW5nZShyb3V0ZTogUm91dGUpe1xyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudCgnYXBwLmRpc3BhdGNoJywgcm91dGUsIG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtSb3V0ZXJ9OyJdfQ==
