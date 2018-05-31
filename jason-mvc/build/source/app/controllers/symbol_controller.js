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
var symbol_view_1 = require("../views/symbol_view");
var chart_view_1 = require("../views/chart_view");
var quote_model_1 = require("../models/quote_model");
var chart_model_1 = require("../models/chart_model");
var SymbolController = (function (_super) {
    __extends(SymbolController, _super);
    function SymbolController(metiator) {
        var _this = _super.call(this, metiator) || this;
        _this._quoteModel = new quote_model_1.QuoteModel(metiator);
        _this._chartModel = new chart_model_1.ChartModel(metiator);
        _this._symbolView = new symbol_view_1.SymbolView(metiator);
        _this._chartView = new chart_view_1.ChartView(metiator);
        return _this;
    }
    SymbolController.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.controller.symbol.quote", null, function (e, symbol) {
                _this.quote(symbol);
            })
        ]);
        this._quoteModel.initialize();
        this._chartModel.initialize();
        this._symbolView.initialize();
        this._chartView.initialize();
    };
    SymbolController.prototype.dispose = function () {
        this.unsubscribeToEvents();
        this._symbolView.dispose();
        this._quoteModel.dispose();
        this._chartView.dispose();
        this._chartModel.dispose();
    };
    SymbolController.prototype.quote = function (symbol) {
        this.triggerEvent(new framework_1.AppEvent("app.model.quote.change", symbol, null));
    };
    return SymbolController;
}(framework_1.Controller));
exports.SymbolController = SymbolController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb250cm9sbGVycy9zeW1ib2xfY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1REFBaUU7QUFDakUsb0RBQWtEO0FBQ2xELGtEQUFnRDtBQUNoRCxxREFBbUQ7QUFDbkQscURBQW1EO0FBRW5EO0lBQStCLG9DQUFVO0lBTXJDLDBCQUFZLFFBQW1CO1FBQS9CLFlBQ0ksa0JBQU0sUUFBUSxDQUFDLFNBS2xCO1FBSkcsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHdCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHdCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHdCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQzlDLENBQUM7SUFFTSxxQ0FBVSxHQUFqQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25CLElBQUksb0JBQVEsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsVUFBQyxDQUFDLEVBQUUsTUFBYztnQkFDaEUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxrQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sZ0NBQUssR0FBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQzhCLHNCQUFVLEdBcUN4QztBQUVRLDRDQUFnQiIsImZpbGUiOiJhcHAvY29udHJvbGxlcnMvc3ltYm9sX2NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZnJhbWV3b3JrL2ludGVyZmFjZXMudHNcIiAvPlxyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBBcHBFdmVudCB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFN5bWJvbFZpZXcgfSBmcm9tIFwiLi4vdmlld3Mvc3ltYm9sX3ZpZXdcIjtcclxuaW1wb3J0IHsgQ2hhcnRWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL2NoYXJ0X3ZpZXdcIjtcclxuaW1wb3J0IHsgUXVvdGVNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcXVvdGVfbW9kZWxcIjtcclxuaW1wb3J0IHsgQ2hhcnRNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvY2hhcnRfbW9kZWxcIjtcclxuXHJcbmNsYXNzIFN5bWJvbENvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbnRyb2xsZXJ7XHJcbiAgICBwcml2YXRlIF9xdW90ZU1vZGVsOiBJTW9kZWw7XHJcbiAgICBwcml2YXRlIF9jaGFydE1vZGVsOiBJTW9kZWw7XHJcbiAgICBwcml2YXRlIF9zeW1ib2xWaWV3OiBJVmlldztcclxuICAgIHByaXZhdGUgX2NoYXJ0VmlldzogSVZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvcikge1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9xdW90ZU1vZGVsID0gbmV3IFF1b3RlTW9kZWwobWV0aWF0b3IpO1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0TW9kZWwgPSBuZXcgQ2hhcnRNb2RlbChtZXRpYXRvcik7XHJcbiAgICAgICAgdGhpcy5fc3ltYm9sVmlldyA9IG5ldyBTeW1ib2xWaWV3KG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9jaGFydFZpZXcgPSBuZXcgQ2hhcnRWaWV3KG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoXCJhcHAuY29udHJvbGxlci5zeW1ib2wucXVvdGVcIiwgbnVsbCwgKGUsIHN5bWJvbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1b3RlKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5fcXVvdGVNb2RlbC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5fY2hhcnRNb2RlbC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5fc3ltYm9sVmlldy5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5fY2hhcnRWaWV3LmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lke1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX3N5bWJvbFZpZXcuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX3F1b3RlTW9kZWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX2NoYXJ0Vmlldy5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fY2hhcnRNb2RlbC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1b3RlKHN5bWJvbDogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXCJhcHAubW9kZWwucXVvdGUuY2hhbmdlXCIsIHN5bWJvbCwgbnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBTeW1ib2xDb250cm9sbGVyIH0iXX0=
