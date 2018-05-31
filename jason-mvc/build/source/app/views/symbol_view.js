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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var framework_1 = require("../../framework/framework");
var SymbolView = (function (_super) {
    __extends(SymbolView, _super);
    function SymbolView(metiator) {
        return _super.call(this, metiator) || this;
    }
    SymbolView.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.view.symbol.render", null, function (e, model) {
                _this.renderAsync(model)
                    .then(function (model) {
                    _this.bindDomEvents(model);
                    _this.triggerEvent(new framework_1.AppEvent("app.model.chart.change", model.quote.Symbol, null));
                })
                    .catch(function (e) {
                    _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
                });
            })
        ]);
    };
    SymbolView.prototype.dispose = function () {
        this.unbindDomEvents();
        this.unsubscribeToEvents();
    };
    SymbolView.prototype.bindDomEvents = function (model) {
        var scope = $(this._container);
    };
    SymbolView.prototype.unbindDomEvents = function () {
        var scope = this._container;
    };
    SymbolView = __decorate([
        framework_1.ViewSettings("./source/app/templates/symbol.hbs", "#outlet"),
        __metadata("design:paramtypes", [Object])
    ], SymbolView);
    return SymbolView;
}(framework_1.View));
exports.SymbolView = SymbolView;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9zeW1ib2xfdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx1REFBeUU7QUFHekU7SUFBeUIsOEJBQUk7SUFDekIsb0JBQVksUUFBbUI7ZUFDM0Isa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxvQkFBUSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxLQUFVO2dCQUN2RCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztxQkFDbEIsSUFBSSxDQUFDLFVBQUMsS0FBSztvQkFDUixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztvQkFDTCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELENBQUMsQ0FBQyxDQUFBO1lBQ1YsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVTLGtDQUFhLEdBQXZCLFVBQXdCLEtBQVU7UUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBRVMsb0NBQWUsR0FBekI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRWhDLENBQUM7SUFqQ0MsVUFBVTtRQURmLHdCQUFZLENBQUMsbUNBQW1DLEVBQUUsU0FBUyxDQUFDOztPQUN2RCxVQUFVLENBbUNmO0lBQUQsaUJBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3dCLGdCQUFJLEdBbUM1QjtBQUVRLGdDQUFVIiwiZmlsZSI6ImFwcC92aWV3cy9zeW1ib2xfdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9mcmFtZXdvcmsvaW50ZXJmYWNlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2RhdGF0YWJsZXMubmV0L2luZGV4LmQudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgVmlldywgQXBwRXZlbnQsIFZpZXdTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcblxyXG5AVmlld1NldHRpbmdzKFwiLi9zb3VyY2UvYXBwL3RlbXBsYXRlcy9zeW1ib2wuaGJzXCIsIFwiI291dGxldFwiKVxyXG5jbGFzcyBTeW1ib2xWaWV3IGV4dGVuZHMgVmlldyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KFwiYXBwLnZpZXcuc3ltYm9sLnJlbmRlclwiLCBudWxsLCAoZSwgbW9kZWw6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJBc3luYyhtb2RlbClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigobW9kZWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRG9tRXZlbnRzKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLm1vZGVsLmNoYXJ0LmNoYW5nZVwiLCBtb2RlbC5xdW90ZS5TeW1ib2wsIG51bGwpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXCJhcHAuZXJyb3JcIiwgZSwgbnVsbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuYmluZERvbUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBiaW5kRG9tRXZlbnRzKG1vZGVsOiBhbnkpIHtcclxuICAgICAgICB2YXIgc2NvcGUgPSAkKHRoaXMuX2NvbnRhaW5lcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1bmJpbmREb21FdmVudHMoKSB7XHJcbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcy5fY29udGFpbmVyO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IFN5bWJvbFZpZXcgfSJdfQ==
