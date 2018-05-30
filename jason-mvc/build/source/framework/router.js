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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WSxDQUFDLElBQUksb0JBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXREQSxBQXNEQyxDQXREb0IsNEJBQVksR0FzRGhDO0FBRU8sd0JBQU0iLCJmaWxlIjoiZnJhbWV3b3JrL3JvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCIuL2V2ZW50X2VtaXR0ZXJcIjtcclxuaW1wb3J0IHtBcHBFdmVudH0gZnJvbSBcIi4vYXBwX2V2ZW50XCI7XHJcbmltcG9ydCB7Um91dGV9IGZyb20gXCIuL3JvdXRlXCI7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJUm91dGVye1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbnRyb2xsZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2RlZmF1bHRBY3Rpb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yLCBkZWZhdWx0Q29udHJvbGxlcjogc3RyaW5nLCBkZWZhdWx0QWN0aW9uOiBzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29udHJvbGxlciA9IGRlZmF1bHRDb250cm9sbGVyIHx8IFwiaG9tZVwiO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRBY3Rpb24gPSBkZWZhdWx0QWN0aW9uIHx8IFwiaW5kZXhcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsICgpPT57XHJcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRSb3V0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2Uocik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoJ2FwcC5pbml0aWFsaXplJywgbnVsbCwgKGU6IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJvdXRlQ2hhbmdlKHRoaXMuZ2V0Um91dGUoKSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoJ2FwcC5yb3V0ZScsIG51bGwsIChlOiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um91dGUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLCAgICAgICAgICBcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvdXRlKCl7XHJcbiAgICAgICAgdmFyIGggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJvdXRlKGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Um91dGUocm91dGU6IFJvdXRlKXtcclxuICAgICAgICB2YXIgcyA9IHJvdXRlLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUm91dGUoaGFzaDogc3RyaW5nKXtcclxuICAgICAgICB2YXIgY29tcCwgY29udHJvbGxlciwgYWN0aW9uLCBhcmdzLCBpO1xyXG4gICAgICAgIGlmKGhhc2hbaGFzaC5sZW5ndGggLSAxXSA9PT0gJy8nKXtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKDAsIGhhc2gubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXAgPSBoYXNoLnJlcGxhY2UoXCIjXCIsICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgIGNvbnRyb2xsZXIgPSBjb21wWzBdIHx8IHRoaXMuX2RlZmF1bHRDb250cm9sbGVyO1xyXG4gICAgICAgIGFjdGlvbiA9IGNvbXBbMV0gfHwgdGhpcy5fZGVmYXVsdEFjdGlvbjtcclxuICAgICAgICBhcmdzID0gW107XHJcbiAgICAgICAgZm9yKGkgPSAyOyBpPCBjb21wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGNvbXBbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKGNvbnRyb2xsZXIsIGFjdGlvbiwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKHJvdXRlOiBSb3V0ZSl7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KCdhcHAuZGlzcGF0Y2gnLCByb3V0ZSwgbnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1JvdXRlcn07Il19
