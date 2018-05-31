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
var MarketView = (function (_super) {
    __extends(MarketView, _super);
    function MarketView(metiator) {
        return _super.call(this, metiator) || this;
    }
    MarketView.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.view.market.render", null, function (e, args) {
                _this.renderAsync(args)
                    .then(function (model) {
                    _this.bindDomEvents(model);
                })
                    .catch(function (e) {
                    _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
                });
            })
        ]);
    };
    MarketView.prototype.dispose = function () {
        this.unbindDomEvents();
        this.unsubscribeToEvents();
    };
    MarketView.prototype.bindDomEvents = function (model) {
        var _this = this;
        var scope = $(this._container);
        $(".getQuote").on("click", scope, function (e) {
            var symbol = $(e.currentTarget).data("symbol");
            _this.getStockQuote(symbol);
        });
        $(scope).find('table').DataTable();
    };
    MarketView.prototype.unbindDomEvents = function () {
        var scope = this._container;
        $(".getQuote").off("click", scope);
        var table = $(scope).find("table").DataTable();
        table.destroy();
    };
    MarketView.prototype.getStockQuote = function (symbol) {
        this.triggerEvent(new framework_1.AppEvent("app.route", new framework_1.Route("symbol", "quote", [symbol]), null));
    };
    MarketView = __decorate([
        framework_1.ViewSettings("./source/app/templates/market.hbs", "#outlet"),
        __metadata("design:paramtypes", [Object])
    ], MarketView);
    return MarketView;
}(framework_1.View));
exports.MarketView = MarketView;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9tYXJrZXRfdmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx1REFBZ0Y7QUFHaEY7SUFBeUIsOEJBQUk7SUFDekIsb0JBQVksUUFBbUI7ZUFDM0Isa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxvQkFBUSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFTO2dCQUN0RCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztxQkFDakIsSUFBSSxDQUFDLFVBQUMsS0FBSztvQkFDUixLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztvQkFDTCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7Z0JBQ3pELENBQUMsQ0FBQyxDQUFBO1lBQ1YsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVTLGtDQUFhLEdBQXZCLFVBQXdCLEtBQVU7UUFBbEMsaUJBT0M7UUFORyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFDLENBQUM7WUFDaEMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNGLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVTLG9DQUFlLEdBQXpCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9DLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRVMsa0NBQWEsR0FBdkIsVUFBd0IsTUFBYztRQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxpQkFBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQTFDQyxVQUFVO1FBRGYsd0JBQVksQ0FBQyxtQ0FBbUMsRUFBRSxTQUFTLENBQUM7O09BQ3ZELFVBQVUsQ0EyQ2Y7SUFBRCxpQkFBQztDQTNDRCxBQTJDQyxDQTNDd0IsZ0JBQUksR0EyQzVCO0FBRVEsZ0NBQVUiLCJmaWxlIjoiYXBwL3ZpZXdzL21hcmtldF92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2ZyYW1ld29yay9pbnRlcmZhY2VzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvZGF0YXRhYmxlcy5uZXQvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBWaWV3LCBBcHBFdmVudCwgVmlld1NldHRpbmdzLCBSb3V0ZSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcblxyXG5AVmlld1NldHRpbmdzKFwiLi9zb3VyY2UvYXBwL3RlbXBsYXRlcy9tYXJrZXQuaGJzXCIsIFwiI291dGxldFwiKVxyXG5jbGFzcyBNYXJrZXRWaWV3IGV4dGVuZHMgVmlldyBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KFwiYXBwLnZpZXcubWFya2V0LnJlbmRlclwiLCBudWxsLCAoZSwgYXJnczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckFzeW5jKGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKG1vZGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZERvbUV2ZW50cyhtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLmVycm9yXCIsIGUsIG51bGwpKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51bmJpbmREb21FdmVudHMoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYmluZERvbUV2ZW50cyhtb2RlbDogYW55KSB7XHJcbiAgICAgICAgdmFyIHNjb3BlID0gJCh0aGlzLl9jb250YWluZXIpO1xyXG4gICAgICAgICQoXCIuZ2V0UXVvdGVcIikub24oXCJjbGlja1wiLCBzY29wZSwgKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIHN5bWJvbCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5kYXRhKFwic3ltYm9sXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFN0b2NrUXVvdGUoc3ltYm9sKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChzY29wZSkuZmluZCgndGFibGUnKS5EYXRhVGFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdW5iaW5kRG9tRXZlbnRzKCkge1xyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAkKFwiLmdldFF1b3RlXCIpLm9mZihcImNsaWNrXCIsIHNjb3BlKTtcclxuICAgICAgICB2YXIgdGFibGUgPSAkKHNjb3BlKS5maW5kKFwidGFibGVcIikuRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgdGFibGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRTdG9ja1F1b3RlKHN5bWJvbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLnJvdXRlXCIsIG5ldyBSb3V0ZShcInN5bWJvbFwiLCBcInF1b3RlXCIsIFtzeW1ib2xdKSwgbnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNYXJrZXRWaWV3IH0iXX0=
