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
var NyseModel = (function (_super) {
    __extends(NyseModel, _super);
    function NyseModel(metiator) {
        return _super.call(this, metiator) || this;
    }
    NyseModel.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.model.nasdaq.change", null, function (e, args) {
                _this.onChange(args);
            })
        ]);
    };
    NyseModel.prototype.dispose = function () {
        this.unsubscribeToEvents();
    };
    NyseModel.prototype.onChange = function (args) {
        var _this = this;
        this.getAsync("json", args)
            .then(function (data) {
            var stocks = {
                items: data,
                market: "NYSE"
            };
            _this.triggerEvent(new framework_1.AppEvent("app.view.market.render", stocks, null));
        })
            .catch(function (e) {
            _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
        });
    };
    NyseModel = __decorate([
        framework_1.ModelSettings("./data/nyse.json"),
        __metadata("design:paramtypes", [Object])
    ], NyseModel);
    return NyseModel;
}(framework_1.Model));
exports.NyseModel = NyseModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvbnlzZV9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSx1REFBMkU7QUFHM0U7SUFBd0IsNkJBQUs7SUFDekIsbUJBQVksUUFBbUI7ZUFDM0Isa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25CLElBQUksb0JBQVEsQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsSUFBSTtnQkFDbEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTyw0QkFBUSxHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxJQUFJLE1BQU0sR0FBRztnQkFDVCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFDO1lBQ0YsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQztZQUNMLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3QkMsU0FBUztRQURkLHlCQUFhLENBQUMsa0JBQWtCLENBQUM7O09BQzVCLFNBQVMsQ0ErQmQ7SUFBRCxnQkFBQztDQS9CRCxBQStCQyxDQS9CdUIsaUJBQUssR0ErQjVCO0FBRVEsOEJBQVMiLCJmaWxlIjoiYXBwL21vZGVscy9ueXNlX21vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2ZyYW1ld29yay9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IE1vZGVsLCBBcHBFdmVudCwgTW9kZWxTZXR0aW5ncyB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcblxyXG5ATW9kZWxTZXR0aW5ncyhcIi4vZGF0YS9ueXNlLmpzb25cIilcclxuY2xhc3MgTnlzZU1vZGVsIGV4dGVuZHMgTW9kZWwgaW1wbGVtZW50cyBJTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvcikge1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KFwiYXBwLm1vZGVsLm5hc2RhcS5jaGFuZ2VcIiwgbnVsbCwgKGUsIGFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoYXJncyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKXtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2hhbmdlKGFyZ3MpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuZ2V0QXN5bmMoXCJqc29uXCIsIGFyZ3MpXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0b2NrcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXQ6IFwiTllTRVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLnZpZXcubWFya2V0LnJlbmRlclwiLCBzdG9ja3MsIG51bGwpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLmVycm9yXCIsIGUsIG51bGwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBOeXNlTW9kZWwgfTsiXX0=
