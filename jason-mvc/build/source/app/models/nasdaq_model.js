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
var NasdaqModel = (function (_super) {
    __extends(NasdaqModel, _super);
    function NasdaqModel(metiator) {
        return _super.call(this, metiator) || this;
    }
    NasdaqModel.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.model.nasdaq.change", null, function (e, args) {
                _this.onChange(args);
            })
        ]);
    };
    NasdaqModel.prototype.dispose = function () {
        this.unsubscribeToEvents();
    };
    NasdaqModel.prototype.onChange = function (args) {
        var _this = this;
        this.getAsync("json", args)
            .then(function (data) {
            var stocks = {
                items: data,
                market: "NASDAQ"
            };
            _this.triggerEvent(new framework_1.AppEvent("app.view.market.render", stocks, null));
        })
            .catch(function (e) {
            _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
        });
    };
    NasdaqModel = __decorate([
        framework_1.ModelSettings("./data/nasdaq.json"),
        __metadata("design:paramtypes", [Object])
    ], NasdaqModel);
    return NasdaqModel;
}(framework_1.Model));
exports.NasdaqModel = NasdaqModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvbmFzZGFxX21vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVEQUEyRTtBQUczRTtJQUEwQiwrQkFBSztJQUMzQixxQkFBWSxRQUFtQjtlQUMzQixrQkFBTSxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdDQUFVLEdBQWpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxvQkFBUSxDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFJO2dCQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw2QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLDhCQUFRLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBWUM7UUFYRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7YUFDdEIsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNQLElBQUksTUFBTSxHQUFHO2dCQUNULEtBQUssRUFBRSxJQUFJO2dCQUNYLE1BQU0sRUFBRSxRQUFRO2FBQ25CLENBQUM7WUFDRixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO1lBQ0wsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTdCQyxXQUFXO1FBRGhCLHlCQUFhLENBQUMsb0JBQW9CLENBQUM7O09BQzlCLFdBQVcsQ0ErQmhCO0lBQUQsa0JBQUM7Q0EvQkQsQUErQkMsQ0EvQnlCLGlCQUFLLEdBK0I5QjtBQUVRLGtDQUFXIiwiZmlsZSI6ImFwcC9tb2RlbHMvbmFzZGFxX21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2ZyYW1ld29yay9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IE1vZGVsLCBBcHBFdmVudCwgTW9kZWxTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcblxyXG5ATW9kZWxTZXR0aW5ncyhcIi4vZGF0YS9uYXNkYXEuanNvblwiKVxyXG5jbGFzcyBOYXNkYXFNb2RlbCBleHRlbmRzIE1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXHJcbiAgICAgICAgICAgIG5ldyBBcHBFdmVudChcImFwcC5tb2RlbC5uYXNkYXEuY2hhbmdlXCIsIG51bGwsIChlLCBhcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGFyZ3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCl7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZShhcmdzKTogdm9pZHtcclxuICAgICAgICB0aGlzLmdldEFzeW5jKFwianNvblwiLCBhcmdzKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIHZhciBzdG9ja3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2V0OiBcIk5BU0RBUVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLnZpZXcubWFya2V0LnJlbmRlclwiLCBzdG9ja3MsIG51bGwpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLmVycm9yXCIsIGUsIG51bGwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBOYXNkYXFNb2RlbCB9OyJdfQ==
