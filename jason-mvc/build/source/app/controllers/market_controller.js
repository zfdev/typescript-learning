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
var framework_1 = require("../../framework/framework");
var market_view_1 = require("../views/market_view");
var nasdaq_model_1 = require("../models/nasdaq_model");
var nyse_model_1 = require("../models/nyse_model");
var MarketController = (function (_super) {
    __extends(MarketController, _super);
    function MarketController(metiator) {
        var _this = _super.call(this, metiator) || this;
        _this._marketView = new market_view_1.MarketView(metiator);
        _this._nasdaqModel = new nasdaq_model_1.NasdaqModel(metiator);
        _this._nyseModel = new nyse_model_1.NyseModel(metiator);
        return _this;
    }
    MarketController.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.controller.market.nasdaq", null, function (e, args) {
                _this.nasdaq(args);
            }),
            new framework_1.AppEvent("app.controller.market.nyse", null, function (e, args) {
                _this.nyse(args);
            })
        ]);
        this._marketView.initialize();
        this._nasdaqModel.initialize();
        this._nyseModel.initialize();
    };
    MarketController.prototype.dispose = function () {
        this.unsubscribeToEvents();
        this._marketView.dispose();
        this._nasdaqModel.dispose();
        this._nyseModel.dispose();
    };
    MarketController.prototype.nasdaq = function (args) {
        this._metiator.publish(new framework_1.AppEvent("app.model.nasdaq.change", null, null));
    };
    MarketController.prototype.nyse = function (args) {
        this._metiator.publish(new framework_1.AppEvent("app.model.nyse.change", null, null));
    };
    return MarketController;
}(framework_1.Controller));
exports.MarketController = MarketController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250cm9sbGVycy9tYXJrZXRfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSx1REFBaUU7QUFDakUsb0RBQWtEO0FBQ2xELHVEQUFxRDtBQUNyRCxtREFBaUQ7QUFFakQ7SUFBK0Isb0NBQVU7SUFJckMsMEJBQVksUUFBbUI7UUFBL0IsWUFDSSxrQkFBTSxRQUFRLENBQUMsU0FJbEI7UUFIRyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksd0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMEJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDOUMsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxvQkFBUSxDQUFDLDhCQUE4QixFQUFFLElBQUksRUFBRSxVQUFDLENBQUMsRUFBRSxJQUFjO2dCQUNqRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztZQUNGLElBQUksb0JBQVEsQ0FBQyw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsSUFBYztnQkFDL0QsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sa0NBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxpQ0FBTSxHQUFiLFVBQWMsSUFBYztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFRLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLCtCQUFJLEdBQVgsVUFBWSxJQUFjO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksb0JBQVEsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQXZDQSxBQXVDQyxDQXZDOEIsc0JBQVUsR0F1Q3hDO0FBRU8sNENBQWdCIiwiZmlsZSI6ImFwcC9jb250cm9sbGVycy9tYXJrZXRfY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9mcmFtZXdvcmsvaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBBcHBFdmVudCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IE1hcmtldFZpZXcgfSBmcm9tIFwiLi4vdmlld3MvbWFya2V0X3ZpZXdcIjtcclxuaW1wb3J0IHsgTmFzZGFxTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL25hc2RhcV9tb2RlbFwiO1xyXG5pbXBvcnQgeyBOeXNlTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL255c2VfbW9kZWxcIjtcclxuXHJcbmNsYXNzIE1hcmtldENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbnRyb2xsZXJ7XHJcbiAgICBwcml2YXRlIF9tYXJrZXRWaWV3OiBJVmlldztcclxuICAgIHByaXZhdGUgX25hc2RhcU1vZGVsOiBJTW9kZWw7XHJcbiAgICBwcml2YXRlIF9ueXNlTW9kZWw6IElNb2RlbDtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9tYXJrZXRWaWV3ID0gbmV3IE1hcmtldFZpZXcobWV0aWF0b3IpO1xyXG4gICAgICAgIHRoaXMuX25hc2RhcU1vZGVsID0gbmV3IE5hc2RhcU1vZGVsKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9ueXNlTW9kZWwgPSBuZXcgTnlzZU1vZGVsKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoXCJhcHAuY29udHJvbGxlci5tYXJrZXQubmFzZGFxXCIsIG51bGwsIChlLCBhcmdzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXNkYXEoYXJncyk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoXCJhcHAuY29udHJvbGxlci5tYXJrZXQubnlzZVwiLCBudWxsLCAoZSwgYXJnczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnlzZShhcmdzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLl9tYXJrZXRWaWV3LmluaXRpYWxpemUoKTtcclxuICAgICAgICB0aGlzLl9uYXNkYXFNb2RlbC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5fbnlzZU1vZGVsLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX21hcmtldFZpZXcuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX25hc2RhcU1vZGVsLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLl9ueXNlTW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuYXNkYXEoYXJnczogc3RyaW5nW10pe1xyXG4gICAgICAgIHRoaXMuX21ldGlhdG9yLnB1Ymxpc2gobmV3IEFwcEV2ZW50KFwiYXBwLm1vZGVsLm5hc2RhcS5jaGFuZ2VcIiwgbnVsbCwgbnVsbCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBueXNlKGFyZ3M6IHN0cmluZ1tdKXtcclxuICAgICAgICB0aGlzLl9tZXRpYXRvci5wdWJsaXNoKG5ldyBBcHBFdmVudChcImFwcC5tb2RlbC5ueXNlLmNoYW5nZVwiLCBudWxsLCBudWxsKSk7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG5leHBvcnQge01hcmtldENvbnRyb2xsZXJ9Il19
