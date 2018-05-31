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
var QuoteModel = (function (_super) {
    __extends(QuoteModel, _super);
    function QuoteModel(metiator) {
        return _super.call(this, metiator) || this;
    }
    QuoteModel.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.model.quote.change", null, function (e, args) {
                _this.onChange(args);
            })
        ]);
    };
    QuoteModel.prototype.dispose = function () {
        this.unsubscribeToEvents();
    };
    QuoteModel.prototype.onChange = function (args) {
        var _this = this;
        var s = { symbol: args };
        this.getAsync("jsonp", s)
            .then(function (data) {
            var quote = _this.formatModel(data);
            _this.triggerEvent(new framework_1.AppEvent("app.view.symbol.render", quote, null));
        })
            .catch(function (e) {
            _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
        });
    };
    QuoteModel.prototype.formatModel = function (data) {
        data.Change = data.Change.toFixed(2);
        data.ChangePercent = data.ChangePercent.toFixed(2);
        data.Timestamp = new Date(data.Timestamp).toLocaleDateString();
        data.MarketCap = (data.MarketCap / 1000000).toFixed(2) + "M.";
        data.ChangePercentYTD = data.ChangePercentYTD.toFixed(2);
        return { quote: data };
    };
    QuoteModel = __decorate([
        framework_1.ModelSettings("http://dev.markitondemand.com/Api/v2/Quote/jsonp"),
        __metadata("design:paramtypes", [Object])
    ], QuoteModel);
    return QuoteModel;
}(framework_1.Model));
exports.QuoteModel = QuoteModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvcXVvdGVfbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdURBQTJFO0FBRzNFO0lBQXlCLDhCQUFLO0lBQzFCLG9CQUFZLFFBQW1CO2VBQzNCLGtCQUFNLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRU0sK0JBQVUsR0FBakI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQixJQUFJLG9CQUFRLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUk7Z0JBQ2pELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sNkJBQVEsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFVQztRQVRHLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNwQixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUMxRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO1lBQ0wsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFwQ0MsVUFBVTtRQURmLHlCQUFhLENBQUMsa0RBQWtELENBQUM7O09BQzVELFVBQVUsQ0FxQ2Y7SUFBRCxpQkFBQztDQXJDRCxBQXFDQyxDQXJDd0IsaUJBQUssR0FxQzdCO0FBRVEsZ0NBQVUiLCJmaWxlIjoiYXBwL21vZGVscy9xdW90ZV9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9mcmFtZXdvcmsvaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBNb2RlbCwgQXBwRXZlbnQsIE1vZGVsU2V0dGluZ3MgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiO1xyXG5cclxuQE1vZGVsU2V0dGluZ3MoXCJodHRwOi8vZGV2Lm1hcmtpdG9uZGVtYW5kLmNvbS9BcGkvdjIvUXVvdGUvanNvbnBcIilcclxuY2xhc3MgUXVvdGVNb2RlbCBleHRlbmRzIE1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXHJcbiAgICAgICAgICAgIG5ldyBBcHBFdmVudChcImFwcC5tb2RlbC5xdW90ZS5jaGFuZ2VcIiwgbnVsbCwgKGUsIGFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoYXJncyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNoYW5nZShhcmdzKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHMgPSB7IHN5bWJvbDogYXJncyB9O1xyXG4gICAgICAgIHRoaXMuZ2V0QXN5bmMoXCJqc29ucFwiLCBzKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHF1b3RlID0gdGhpcy5mb3JtYXRNb2RlbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcImFwcC52aWV3LnN5bWJvbC5yZW5kZXJcIiwgcXVvdGUsIG51bGwpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcImFwcC5lcnJvclwiLCBlLCBudWxsKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9ybWF0TW9kZWwoZGF0YSkge1xyXG4gICAgICAgIGRhdGEuQ2hhbmdlID0gZGF0YS5DaGFuZ2UudG9GaXhlZCgyKTtcclxuICAgICAgICBkYXRhLkNoYW5nZVBlcmNlbnQgPSBkYXRhLkNoYW5nZVBlcmNlbnQudG9GaXhlZCgyKTtcclxuICAgICAgICBkYXRhLlRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGEuVGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgICBkYXRhLk1hcmtldENhcCA9IChkYXRhLk1hcmtldENhcCAvIDEwMDAwMDApLnRvRml4ZWQoMikgKyBcIk0uXCI7XHJcbiAgICAgICAgZGF0YS5DaGFuZ2VQZXJjZW50WVREID0gZGF0YS5DaGFuZ2VQZXJjZW50WVRELnRvRml4ZWQoMik7XHJcbiAgICAgICAgcmV0dXJuIHsgcXVvdGU6IGRhdGEgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUXVvdGVNb2RlbCB9Il19
