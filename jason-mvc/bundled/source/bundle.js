(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\market_controller.js","/controllers")
},{"../../framework/framework":16,"../models/nasdaq_model":5,"../models/nyse_model":6,"../views/market_view":9,"buffer":23,"yw28T0":24}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/controllers\\symbol_controller.js","/controllers")
},{"../../framework/framework":16,"../models/chart_model":4,"../models/quote_model":7,"../views/chart_view":8,"../views/symbol_view":10,"buffer":23,"yw28T0":24}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var framework_1 = require("../framework/framework");
var market_controller_1 = require("./controllers/market_controller");
var symbol_controller_1 = require("./controllers/symbol_controller");
var appSettings = {
    isDebug: true,
    defaultController: "market",
    defaultAction: "nasdaq",
    controllers: [
        { controllerName: "market", controller: market_controller_1.MarketController },
        { controllerName: "symbol", controller: symbol_controller_1.SymbolController }
    ],
    onErrorHandler: function (e) {
        alert("Sorry, there has been an error please check out the console for more info!");
        console.log(e.toString());
    }
};
var myApp = new framework_1.App(appSettings);
myApp.initialize();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esb0RBQWlEO0FBQ2pELHFFQUFtRTtBQUNuRSxxRUFBbUU7QUFFbkUsSUFBSSxXQUFXLEdBQWlCO0lBQzVCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixhQUFhLEVBQUUsUUFBUTtJQUN2QixXQUFXLEVBQUU7UUFDVCxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLG9DQUFnQixFQUFDO1FBQ3hELEVBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsb0NBQWdCLEVBQUM7S0FDM0Q7SUFDRCxjQUFjLEVBQUUsVUFBUyxDQUFTO1FBQzlCLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUE7QUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLGVBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vZnJhbWV3b3JrL2ludGVyZmFjZXMudHNcIiAvPlxyXG5pbXBvcnQge0FwcCwgVmlld30gZnJvbSBcIi4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgTWFya2V0Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL21hcmtldF9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFN5bWJvbENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVycy9zeW1ib2xfY29udHJvbGxlclwiO1xyXG5cclxudmFyIGFwcFNldHRpbmdzOiBJQXBwU2V0dGluZ3MgPSB7XHJcbiAgICBpc0RlYnVnOiB0cnVlLFxyXG4gICAgZGVmYXVsdENvbnRyb2xsZXI6IFwibWFya2V0XCIsXHJcbiAgICBkZWZhdWx0QWN0aW9uOiBcIm5hc2RhcVwiLFxyXG4gICAgY29udHJvbGxlcnM6IFtcclxuICAgICAgICB7Y29udHJvbGxlck5hbWU6IFwibWFya2V0XCIsIGNvbnRyb2xsZXI6IE1hcmtldENvbnRyb2xsZXJ9LFxyXG4gICAgICAgIHtjb250cm9sbGVyTmFtZTogXCJzeW1ib2xcIiwgY29udHJvbGxlcjogU3ltYm9sQ29udHJvbGxlcn1cclxuICAgIF0sXHJcbiAgICBvbkVycm9ySGFuZGxlcjogZnVuY3Rpb24oZTogT2JqZWN0KXtcclxuICAgICAgICBhbGVydChcIlNvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvciBwbGVhc2UgY2hlY2sgb3V0IHRoZSBjb25zb2xlIGZvciBtb3JlIGluZm8hXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBteUFwcCA9IG5ldyBBcHAoYXBwU2V0dGluZ3MpO1xyXG5teUFwcC5pbml0aWFsaXplKCk7Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_a6b1ebdd.js","/")
},{"../framework/framework":16,"./controllers/market_controller":1,"./controllers/symbol_controller":2,"buffer":23,"yw28T0":24}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
var ChartModel = (function (_super) {
    __extends(ChartModel, _super);
    function ChartModel(metiator) {
        return _super.call(this, metiator) || this;
    }
    ChartModel.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.model.chart.change", null, function (e, args) {
                _this.onChange(args);
            })
        ]);
    };
    ChartModel.prototype.dispose = function () {
        this.unsubscribeToEvents();
    };
    ChartModel.prototype.onChange = function (args) {
        var _this = this;
        var p = {
            Normalize: false,
            NumberOfDays: 365,
            DataPeriod: "Day",
            Elements: [
                {
                    Symbol: args,
                    Type: "price",
                    Param: ["ohlc"]
                }
            ]
        };
        var queryString = "parameters=" + encodeURIComponent(JSON.stringify(p));
        this.getAsync("jsonp", queryString)
            .then(function (data) {
            var chartData = _this.formatModel(args, data);
            _this.triggerEvent(new framework_1.AppEvent("app.view.chart.render", chartData, null));
        })
            .catch(function (e) {
            _this.triggerEvent(new framework_1.AppEvent("app.error", e, null));
        });
    };
    ChartModel.prototype.formatModel = function (symbol, data) {
        var chartData = {
            title: symbol,
            series: []
        };
        var series = [
            {
                name: "open",
                data: data.Elements[0].DataSeries.open.values
            },
            {
                name: "close",
                data: data.Elements[0].DataSeries.close.values
            },
            {
                name: "high",
                data: data.Elements[0].DataSeries.high.values
            },
            {
                name: "low",
                data: data.Elements[0].DataSeries.low.values
            },
        ];
        for (var i = 0; i < series.length; i++) {
            var serie = {
                name: series[i].name,
                data: []
            };
            for (var j = 0; j < series[i].data.length; j++) {
                var val = series[i].data[j];
                var d = new Date(data.Dates[j]).getTime();
                serie.data.push([d, val]);
            }
            chartData.series.push(serie);
        }
        return chartData;
    };
    ChartModel = __decorate([
        framework_1.ModelSettings("http://dev.markitondemand.com/Api/v2/InteractiveChart/jsonp"),
        __metadata("design:paramtypes", [Object])
    ], ChartModel);
    return ChartModel;
}(framework_1.Model));
exports.ChartModel = ChartModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbHMvY2hhcnRfbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsdURBQTJFO0FBRzNFO0lBQXlCLDhCQUFLO0lBQzFCLG9CQUFZLFFBQW1CO2VBQzNCLGtCQUFNLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRU0sK0JBQVUsR0FBakI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQixJQUFJLG9CQUFRLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLElBQUk7Z0JBQ2pELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sNkJBQVEsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLEdBQUc7WUFDSixTQUFTLEVBQUUsS0FBSztZQUNoQixZQUFZLEVBQUUsR0FBRztZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixRQUFRLEVBQUU7Z0JBQ047b0JBQ0ksTUFBTSxFQUFFLElBQUk7b0JBQ1osSUFBSSxFQUFFLE9BQU87b0JBQ2IsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNsQjthQUNKO1NBQ0osQ0FBQztRQUNGLElBQUksV0FBVyxHQUFHLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO2FBQzlCLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxJQUFJLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO1lBQ0wsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLGdDQUFXLEdBQW5CLFVBQW9CLE1BQU0sRUFBRSxJQUFJO1FBQzVCLElBQUksU0FBUyxHQUFHO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixJQUFJLE1BQU0sR0FBRztZQUNUO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNoRDtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNqRDtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNoRDtZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTTthQUMvQztTQUNKLENBQUM7UUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssR0FBRztnQkFDUixJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ3BCLElBQUksRUFBRSxFQUFFO2FBQ1gsQ0FBQTtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUdyQixDQUFDO0lBL0VDLFVBQVU7UUFEZix5QkFBYSxDQUFDLDZEQUE2RCxDQUFDOztPQUN2RSxVQUFVLENBZ0ZmO0lBQUQsaUJBQUM7Q0FoRkQsQUFnRkMsQ0FoRndCLGlCQUFLLEdBZ0Y3QjtBQUVRLGdDQUFVIiwiZmlsZSI6ImFwcC9tb2RlbHMvY2hhcnRfbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZnJhbWV3b3JrL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHsgTW9kZWwsIEFwcEV2ZW50LCBNb2RlbFNldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIjtcclxuXHJcbkBNb2RlbFNldHRpbmdzKFwiaHR0cDovL2Rldi5tYXJraXRvbmRlbWFuZC5jb20vQXBpL3YyL0ludGVyYWN0aXZlQ2hhcnQvanNvbnBcIilcclxuY2xhc3MgQ2hhcnRNb2RlbCBleHRlbmRzIE1vZGVsIGltcGxlbWVudHMgSU1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KFwiYXBwLm1vZGVsLmNoYXJ0LmNoYW5nZVwiLCBudWxsLCAoZSwgYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShhcmdzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DaGFuZ2UoYXJncyk6IHZvaWQge1xyXG4gICAgICAgIHZhciBwID0ge1xyXG4gICAgICAgICAgICBOb3JtYWxpemU6IGZhbHNlLFxyXG4gICAgICAgICAgICBOdW1iZXJPZkRheXM6IDM2NSxcclxuICAgICAgICAgICAgRGF0YVBlcmlvZDogXCJEYXlcIixcclxuICAgICAgICAgICAgRWxlbWVudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTeW1ib2w6IGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJwcmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhcmFtOiBbXCJvaGxjXCJdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBxdWVyeVN0cmluZyA9IFwicGFyYW1ldGVycz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShwKSk7XHJcbiAgICAgICAgdGhpcy5nZXRBc3luYyhcImpzb25wXCIsIHF1ZXJ5U3RyaW5nKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYXJ0RGF0YSA9IHRoaXMuZm9ybWF0TW9kZWwoYXJncywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXCJhcHAudmlldy5jaGFydC5yZW5kZXJcIiwgY2hhcnREYXRhLCBudWxsKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KFwiYXBwLmVycm9yXCIsIGUsIG51bGwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtYXRNb2RlbChzeW1ib2wsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogc3ltYm9sLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc2VyaWVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm9wZW5cIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuRWxlbWVudHNbMF0uRGF0YVNlcmllcy5vcGVuLnZhbHVlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNsb3NlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLkVsZW1lbnRzWzBdLkRhdGFTZXJpZXMuY2xvc2UudmFsdWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiaGlnaFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YS5FbGVtZW50c1swXS5EYXRhU2VyaWVzLmhpZ2gudmFsdWVzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibG93XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLkVsZW1lbnRzWzBdLkRhdGFTZXJpZXMubG93LnZhbHVlc1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHNlcmllID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc2VyaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VyaWVzW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBzZXJpZXNbaV0uZGF0YVtqXTtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0YS5EYXRlc1tqXSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgc2VyaWUuZGF0YS5wdXNoKFtkLCB2YWxdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGFydERhdGEuc2VyaWVzLnB1c2goc2VyaWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhcnREYXRhO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENoYXJ0TW9kZWwgfSJdfQ==

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models\\chart_model.js","/models")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models\\nasdaq_model.js","/models")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models\\nyse_model.js","/models")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/models\\quote_model.js","/models")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
var ChartView = (function (_super) {
    __extends(ChartView, _super);
    function ChartView(metiator) {
        return _super.call(this, metiator) || this;
    }
    ChartView.prototype.initialize = function () {
        var _this = this;
        this.subscribeToEvents([
            new framework_1.AppEvent("app.view.chart.render", null, function (e, model) {
                _this.renderChart(model);
                _this.bindDomEvents(model);
            })
        ]);
    };
    ChartView.prototype.dispose = function () {
        this.unbindDomEvents();
        this.unsubscribeToEvents();
    };
    ChartView.prototype.bindDomEvents = function (model) {
        var scope = $(this._container);
    };
    ChartView.prototype.unbindDomEvents = function () {
        var scope = this._container;
    };
    ChartView.prototype.renderChart = function (model) {
        $(this._container).highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: model.title
            },
            subtitle: {
                text: "Click and drag in the plot area to zoom in"
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Price'
                }
            },
            legend: {
                enabled: true
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            plotOptions: {
                area: {
                    marker: {
                        radius: 0
                    },
                    lineWidth: 0.1,
                    threshold: null
                }
            },
            series: model.series
        });
    };
    ChartView = __decorate([
        framework_1.ViewSettings(null, "#chart_container"),
        __metadata("design:paramtypes", [Object])
    ], ChartView);
    return ChartView;
}(framework_1.View));
exports.ChartView = ChartView;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3cy9jaGFydF92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHVEQUF5RTtBQUd6RTtJQUF3Qiw2QkFBSTtJQUN4QixtQkFBWSxRQUFtQjtlQUMzQixrQkFBTSxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNuQixJQUFJLG9CQUFRLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEtBQVU7Z0JBQ3RELEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDO1NBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVTLGlDQUFhLEdBQXZCLFVBQXdCLEtBQVU7UUFDOUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBRVMsbUNBQWUsR0FBekI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRWhDLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixLQUFLO1FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQzFCLEtBQUssRUFBRTtnQkFDSCxRQUFRLEVBQUUsR0FBRzthQUNoQjtZQUNELEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUM7Z0JBQ0wsSUFBSSxFQUFFLDRDQUE0QzthQUNyRDtZQUNELEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsVUFBVTthQUNuQjtZQUNELEtBQUssRUFBRTtnQkFDSCxLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0o7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLElBQUk7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLElBQUk7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDbkI7WUFDRCxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFO29CQUNGLE1BQU0sRUFBQzt3QkFDSCxNQUFNLEVBQUUsQ0FBQztxQkFDWjtvQkFDRCxTQUFTLEVBQUUsR0FBRztvQkFDZCxTQUFTLEVBQUUsSUFBSTtpQkFDbEI7YUFDSjtZQUNELE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEVDLFNBQVM7UUFEZCx3QkFBWSxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQzs7T0FDakMsU0FBUyxDQW1FZDtJQUFELGdCQUFDO0NBbkVELEFBbUVDLENBbkV1QixnQkFBSSxHQW1FM0I7QUFFUSw4QkFBUyIsImZpbGUiOiJhcHAvdmlld3MvY2hhcnRfdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9mcmFtZXdvcmsvaW50ZXJmYWNlcy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2hpZ2hjaGFydHMvaW5kZXguZC50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBWaWV3LCBBcHBFdmVudCwgVmlld1NldHRpbmdzIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIjtcclxuXHJcbkBWaWV3U2V0dGluZ3MobnVsbCwgXCIjY2hhcnRfY29udGFpbmVyXCIpXHJcbmNsYXNzIENoYXJ0VmlldyBleHRlbmRzIFZpZXcgaW1wbGVtZW50cyBJVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobWV0aWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXHJcbiAgICAgICAgICAgIG5ldyBBcHBFdmVudChcImFwcC52aWV3LmNoYXJ0LnJlbmRlclwiLCBudWxsLCAoZSwgbW9kZWw6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGFydChtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmREb21FdmVudHMobW9kZWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5iaW5kRG9tRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGJpbmREb21FdmVudHMobW9kZWw6IGFueSkge1xyXG4gICAgICAgIHZhciBzY29wZSA9ICQodGhpcy5fY29udGFpbmVyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVuYmluZERvbUV2ZW50cygpe1xyXG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJDaGFydChtb2RlbCl7XHJcbiAgICAgICAgJCh0aGlzLl9jb250YWluZXIpLmhpZ2hjaGFydHMoe1xyXG4gICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgem9vbVR5cGU6ICd4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbW9kZWwudGl0bGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VidGl0bGU6e1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJDbGljayBhbmQgZHJhZyBpbiB0aGUgcGxvdCBhcmVhIHRvIHpvb20gaW5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnUHJpY2UnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB7XHJcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjcm9zc2hhaXJzOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAuMSxcclxuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VyaWVzOiBtb2RlbC5zZXJpZXNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQ2hhcnRWaWV3IH0iXX0=

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views\\chart_view.js","/views")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views\\market_view.js","/views")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/views\\symbol_view.js","/views")
},{"../../framework/framework":16,"buffer":23,"yw28T0":24}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatcher_1 = require("./dispatcher");
var mediator_1 = require("./mediator");
var app_event_1 = require("./app_event");
var router_1 = require("./router");
var App = (function () {
    function App(appSettings) {
        this._controllers = appSettings.controllers;
        this._mediator = new mediator_1.Mediator(appSettings.isDebug || false);
        this._router = new router_1.Router(this._mediator, appSettings.defaultController, appSettings.defaultAction);
        this._dispatcher = new dispatcher_1.Dispatcher(this._mediator, this._controllers);
        this._onErrorHandler = appSettings.onErrorHandler;
    }
    App.prototype.initialize = function () {
        var _this = this;
        this._router.initialize();
        this._dispatcher.initialize();
        this._mediator.subscribe(new app_event_1.AppEvent("app.error", null, function (e, data) {
            _this._onErrorHandler(data);
        }));
        this._mediator.publish(new app_event_1.AppEvent("app.initialize", null, null));
    };
    return App;
}());
exports.App = App;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQ0FBMEM7QUFDMUMsdUNBQXNDO0FBQ3RDLHlDQUF1QztBQUN2QyxtQ0FBa0M7QUFFbEM7SUFNSSxhQUFZLFdBQXlCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUN0RCxDQUFDO0lBQ00sd0JBQVUsR0FBakI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFDLENBQU0sRUFBRSxJQUFVO1lBQ3hFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksb0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0wsVUFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFFUSxrQkFBRyIsImZpbGUiOiJmcmFtZXdvcmsvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBEaXNwYXRjaGVyIH0gZnJvbSBcIi4vZGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQgeyBNZWRpYXRvciB9IGZyb20gXCIuL21lZGlhdG9yXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSBcIi4vYXBwX2V2ZW50XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIHByaXZhdGUgX2Rpc3BhdGNoZXI6IElEaXNwYXRjaGVyO1xyXG4gICAgcHJpdmF0ZSBfbWVkaWF0b3I6IElNZWRpYXRvcjtcclxuICAgIHByaXZhdGUgX3JvdXRlcjogSVJvdXRlcjtcclxuICBwcml2YXRlIF9jb250cm9sbGVycyA6IElDb250cm9sbGVyRGV0YWlsc1tdO1xyXG4gICAgcHJpdmF0ZSBfb25FcnJvckhhbmRsZXI6IChvOiBPYmplY3QpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHBTZXR0aW5nczogSUFwcFNldHRpbmdzKSB7XHJcbiAgICB0aGlzLl9jb250cm9sbGVycyA9IGFwcFNldHRpbmdzLmNvbnRyb2xsZXJzO1xyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yID0gbmV3IE1lZGlhdG9yKGFwcFNldHRpbmdzLmlzRGVidWcgfHwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlciA9IG5ldyBSb3V0ZXIodGhpcy5fbWVkaWF0b3IsIGFwcFNldHRpbmdzLmRlZmF1bHRDb250cm9sbGVyLCBhcHBTZXR0aW5ncy5kZWZhdWx0QWN0aW9uKTtcclxuICAgIHRoaXMuX2Rpc3BhdGNoZXIgPSBuZXcgRGlzcGF0Y2hlcih0aGlzLl9tZWRpYXRvciwgdGhpcy5fY29udHJvbGxlcnMpO1xyXG4gICAgICAgIHRoaXMuX29uRXJyb3JIYW5kbGVyID0gYXBwU2V0dGluZ3Mub25FcnJvckhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX2Rpc3BhdGNoZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShuZXcgQXBwRXZlbnQoXCJhcHAuZXJyb3JcIiwgbnVsbCwgKGU6IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkVycm9ySGFuZGxlcihkYXRhKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IucHVibGlzaChuZXcgQXBwRXZlbnQoXCJhcHAuaW5pdGlhbGl6ZVwiLCBudWxsLCBudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEFwcCB9OyJdfQ==

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\app.js","/..\\framework")
},{"./app_event":12,"./dispatcher":14,"./mediator":17,"./router":20,"buffer":23,"yw28T0":24}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppEvent = (function () {
    function AppEvent(topic, data, handler) {
        this.guid = this.generateGuid();
        this.topic = topic;
        this.data = data;
        this.handler = handler;
    }
    AppEvent.prototype.generateGuid = function () {
        return this.s4() + this.s4() + '-' +
            this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    AppEvent.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return AppEvent;
}());
exports.AppEvent = AppEvent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9hcHBfZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUtJLGtCQUFZLEtBQWEsRUFBRSxJQUFTLEVBQUUsT0FBcUM7UUFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVPLCtCQUFZLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUc7WUFDOUIsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRztZQUNqQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzVELENBQUM7SUFHTyxxQkFBRSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUMzQyxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F4QkEsQUF3QkMsSUFBQTtBQUVRLDRCQUFRIiwiZmlsZSI6ImZyYW1ld29yay9hcHBfZXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmNsYXNzIEFwcEV2ZW50IGltcGxlbWVudHMgSUFwcEV2ZW50IHtcclxuICAgIHB1YmxpYyBndWlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdG9waWM6IHN0cmluZztcclxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XHJcbiAgICBwdWJsaWMgaGFuZGxlcjogKGU6IE9iamVjdCwgZGF0YT86IGFueSkgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKHRvcGljOiBzdHJpbmcsIGRhdGE6IGFueSwgaGFuZGxlcjogKGU6IGFueSwgZGF0YT86IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZCA9IHRoaXMuZ2VuZXJhdGVHdWlkKCk7XHJcbiAgICAgICAgdGhpcy50b3BpYyA9IHRvcGljO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIC8vIEdlbmVyYXRlcyBhIG5ldyBHVUlEXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlR3VpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnM0KCkgKyB0aGlzLnM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICB0aGlzLnM0KCkgKyAnLScgKyB0aGlzLnM0KCkgKyAnLScgK1xyXG4gICAgICAgICAgICB0aGlzLnM0KCkgKyAnLScgKyB0aGlzLnM0KCkgKyB0aGlzLnM0KCkgKyB0aGlzLnM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGVzIG9uZSBvZiB0aGUgc2VjdGlvbnMgb2YgYSBHVUlEXHJcbiAgICBwcml2YXRlIHM0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwRXZlbnQgfTsiXX0=

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\app_event.js","/..\\framework")
},{"buffer":23,"yw28T0":24}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
var Controller = (function (_super) {
    __extends(Controller, _super);
    function Controller(metiator) {
        return _super.call(this, metiator) || this;
    }
    Controller.prototype.initialize = function () {
        throw new Error('Controller.prototype.initialize() is abstract you must implement it!');
    };
    Controller.prototype.dispose = function () {
        throw new Error('Controller.prototype.dispose() is abstract you must implement it!');
    };
    return Controller;
}(event_emitter_1.EventEmitter));
exports.Controller = Controller;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLGlEQUErQztBQVMvQztJQUF5Qiw4QkFBWTtJQUNqQyxvQkFBWSxRQUFtQjtlQUMzQixrQkFBTSxRQUFRLENBQUM7SUFDbkIsQ0FBQztJQUNNLCtCQUFVLEdBQWpCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDTSw0QkFBTyxHQUFkO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDTCxpQkFBQztBQUFELENBVkEsQUFVQyxDQVZ3Qiw0QkFBWSxHQVVwQztBQUVRLGdDQUFVIiwiZmlsZSI6ImZyYW1ld29yay9jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50X2VtaXR0ZXInO1xyXG5pbXBvcnQgeyBBcHBFdmVudCB9IGZyb20gJy4vYXBwX2V2ZW50JztcclxuLyoqXHJcbiAqIFxyXG4gKiBcclxuICogQGNsYXNzIENvbnRyb2xsZXJcclxuICogQGV4dGVuZHMge0V2ZW50RW1pdHRlcn1cclxuICogQGltcGxlbWVudHMge0lDb250cm9sbGVyfVxyXG4gKi9cclxuY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3IpIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IENvbnRyb2xsZXIgfTsiXX0=

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\controller.js","/..\\framework")
},{"./event_emitter":15,"buffer":23,"yw28T0":24}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
            }
            hashMap[name] = controller.controller;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLGlEQUErQztBQUMvQyx5Q0FBdUM7QUFFdkM7SUFBeUIsOEJBQVk7SUFJakMsb0JBQVksUUFBbUIsRUFBRSxXQUFpQztRQUFsRSxZQUNJLGtCQUFNLFFBQVEsQ0FBQyxTQUlsQjtRQUhHLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQzs7SUFDdkMsQ0FBQztJQUVNLCtCQUFVLEdBQWpCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxvQkFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsVUFBQyxDQUFNLEVBQUUsSUFBVTtnQkFDbEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sa0NBQWEsR0FBckIsVUFBc0IsV0FBaUM7UUFDbkQsSUFBSSxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FDMUIsV0FBVyxFQUNYLCtEQUErRCxFQUMvRCxJQUFJLENBQ1AsQ0FBQyxDQUFDO1NBQ047UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUM7WUFDakMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLFlBQVksS0FBSyxJQUFJLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQzFCLFdBQVcsRUFDWCwwQ0FBMEMsRUFDMUMsSUFBSSxDQUNQLENBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7U0FDekM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sNkJBQVEsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQkFBUSxDQUMxQixXQUFXLEVBQ1gsMkJBQXlCLEtBQUssQ0FBQyxjQUFnQixFQUMvQyxJQUFJLENBQ1AsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksVUFBVSxHQUFnQixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLG9CQUFRLENBQzFCLFdBQVcsRUFDWCxxQ0FBbUMsS0FBSyxDQUFDLGNBQWMsYUFBUSxLQUFLLENBQUMsVUFBWSxFQUNqRixJQUFJLENBQ1AsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxFQUFFO29CQUNqQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUN4QztxQkFBTTtvQkFDSCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsS0FBSyxLQUFLLENBQUMsY0FBYyxFQUFFO3dCQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2xDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3hDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxvQkFBUSxDQUMxQixvQkFBa0IsSUFBSSxDQUFDLHNCQUFzQixTQUFJLEtBQUssQ0FBQyxVQUFZLEVBQ25FLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxDQUNQLENBQUMsQ0FBQzthQUNOO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXBGQSxBQW9GQyxDQXBGd0IsNEJBQVksR0FvRnBDO0FBRVEsZ0NBQVUiLCJmaWxlIjoiZnJhbWV3b3JrL2Rpc3BhdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5cclxuY2xhc3MgRGlzcGF0Y2hlciBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElEaXNwYXRjaGVyIHtcclxuICAgIHByaXZhdGUgX2NvbnRyb2xsZXJzSGFzaE1hcDogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXI6IElDb250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudENvbnRyb2xsZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yLCBjb250cm9sbGVyczogSUNvbnRyb2xsZXJEZXRhaWxzW10pIHtcclxuICAgICAgICBzdXBlcihtZXRpYXRvcik7XHJcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnNIYXNoTWFwID0gdGhpcy5nZXRDb250cm9sbGVyKGNvbnRyb2xsZXJzKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcclxuICAgICAgICAgICAgbmV3IEFwcEV2ZW50KCdhcHAuZGlzcGF0Y2gnLCBudWxsLCAoZTogYW55LCBkYXRhPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29udHJvbGxlcihjb250cm9sbGVyczogSUNvbnRyb2xsZXJEZXRhaWxzW10pOiBPYmplY3Qge1xyXG4gICAgICAgIHZhciBoYXNoTWFwLCBoYXNoTWFwRW50cnksIG5hbWUsIGNvbnRyb2xsZXIsIGw7XHJcbiAgICAgICAgaGFzaE1hcCA9IHt9O1xyXG4gICAgICAgIGwgPSBjb250cm9sbGVycy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGwgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICdDYW5ub3QgY3JlYXRlIGFuIGFwcGxpY2F0aW9uIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGNvbnRyb2xsZXIuJyxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyc1tpXTtcclxuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2xsZXIuY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgICAgIGhhc2hNYXBFbnRyeSA9IGhhc2hNYXBbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChoYXNoTWFwRW50cnkgIT09IG51bGwgJiYgaGFzaE1hcEVudHJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBBcHBFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAnVHdvIGNvbnRyb2xsZXIgY2Fubm90IHVzZSB0aGUgc2FtZSBuYW1lLicsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFzaE1hcFtuYW1lXSA9IGNvbnRyb2xsZXIuY29udHJvbGxlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2hNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNwYXRjaChyb3V0ZTogSVJvdXRlKSB7XHJcbiAgICAgICAgdmFyIENvbnRyb2xsZXIgPSB0aGlzLl9jb250cm9sbGVyc0hhc2hNYXBbcm91dGUuY29udHJvbGxlck5hbWVdO1xyXG4gICAgICAgIGlmIChDb250cm9sbGVyID09PSBudWxsIHx8IENvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAnYXBwLmVycm9yJyxcclxuICAgICAgICAgICAgICAgIGBDb250cm9sbGVyIG5vdCBmb3VuZDogJHtyb3V0ZS5jb250cm9sbGVyTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlcjogSUNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih0aGlzLl9tZXRpYXRvcik7XHJcbiAgICAgICAgICAgIHZhciBhID0gY29udHJvbGxlcltyb3V0ZS5hY3Rpb25OYW1lXTtcclxuICAgICAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FwcC5lcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYEFjdGlvbiBub3QgZm91bmQgaW4gY29udHJvbGxlcjogJHtyb3V0ZS5jb250cm9sbGVyTmFtZX0gLSArICR7cm91dGUuYWN0aW9uTmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRDb250cm9sbGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgPSByb3V0ZS5jb250cm9sbGVyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lICE9PSByb3V0ZS5jb250cm9sbGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyTmFtZSA9IHJvdXRlLmNvbnRyb2xsZXJOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRDb250cm9sbGVyLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgQXBwRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgYGFwcC5jb250cm9sbGVyLiR7dGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lfS4ke3JvdXRlLmFjdGlvbk5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5hcmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBEaXNwYXRjaGVyIH07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\dispatcher.js","/..\\framework")
},{"./app_event":12,"./event_emitter":15,"buffer":23,"yw28T0":24}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter(metiator) {
        this._metiator = metiator;
    }
    EventEmitter.prototype.triggerEvent = function (event) {
        this._metiator.publish(event);
    };
    EventEmitter.prototype.subscribeToEvents = function (events) {
        this._events = events;
        for (var i = 0; i < this._events.length; i++) {
            this._metiator.subscribe(this._events[i]);
        }
    };
    EventEmitter.prototype.unsubscribeToEvents = function () {
        for (var i = 0; i < this._events.length; i++) {
            this._metiator.unsubscribe(this._events[i]);
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9ldmVudF9lbWl0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFHSSxzQkFBWSxRQUFtQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBQ00sbUNBQVksR0FBbkIsVUFBb0IsS0FBZ0I7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNNLHdDQUFpQixHQUF4QixVQUF5QixNQUF3QjtRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUNNLDBDQUFtQixHQUExQjtRQUNJLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBRU8sb0NBQVkiLCJmaWxlIjoiZnJhbWV3b3JrL2V2ZW50X2VtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7QXBwRXZlbnR9IGZyb20gJy4vYXBwX2V2ZW50JztcclxuXHJcbmNsYXNzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElFdmVudEVtaXR0ZXJ7XHJcbiAgICBwcm90ZWN0ZWQgX21ldGlhdG9yOiBJTWVkaWF0b3I7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50czogQXJyYXk8SUFwcEV2ZW50PjtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHRoaXMuX21ldGlhdG9yID0gbWV0aWF0b3I7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50OiBJQXBwRXZlbnQpe1xyXG4gICAgICAgIHRoaXMuX21ldGlhdG9yLnB1Ymxpc2goZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN1YnNjcmliZVRvRXZlbnRzKGV2ZW50czogQXJyYXk8SUFwcEV2ZW50Pil7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPCB0aGlzLl9ldmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRpYXRvci5zdWJzY3JpYmUodGhpcy5fZXZlbnRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5zdWJzY3JpYmVUb0V2ZW50cygpe1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPCB0aGlzLl9ldmVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9tZXRpYXRvci51bnN1YnNjcmliZSh0aGlzLl9ldmVudHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtFdmVudEVtaXR0ZXJ9Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\event_emitter.js","/..\\framework")
},{"buffer":23,"yw28T0":24}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
exports.App = app_1.App;
var route_1 = require("./route");
exports.Route = route_1.Route;
var app_event_1 = require("./app_event");
exports.AppEvent = app_event_1.AppEvent;
var controller_1 = require("./controller");
exports.Controller = controller_1.Controller;
var view_1 = require("./view");
exports.View = view_1.View;
exports.ViewSettings = view_1.ViewSettings;
var model_1 = require("./model");
exports.Model = model_1.Model;
exports.ModelSettings = model_1.ModelSettings;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9mcmFtZXdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2QkFBNEI7QUFPbkIsY0FQQSxTQUFHLENBT0E7QUFOWixpQ0FBZ0M7QUFNOEMsZ0JBTnJFLGFBQUssQ0FNcUU7QUFMbkYseUNBQXVDO0FBS3pCLG1CQUxMLG9CQUFRLENBS0s7QUFKdEIsMkNBQTBDO0FBSWxCLHFCQUpmLHVCQUFVLENBSWU7QUFIbEMsK0JBQTRDO0FBR1IsZUFIM0IsV0FBSSxDQUcyQjtBQUFFLHVCQUgzQixtQkFBWSxDQUcyQjtBQUZ0RCxpQ0FBK0M7QUFFUyxnQkFGL0MsYUFBSyxDQUUrQztBQUFFLHdCQUYvQyxxQkFBYSxDQUUrQyIsImZpbGUiOiJmcmFtZXdvcmsvZnJhbWV3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vaW50ZXJmYWNlcy50c1wiIC8+XHJcblxyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9yb3V0ZSc7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVmlldywgVmlld1NldHRpbmdzIH0gZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgTW9kZWwsIE1vZGVsU2V0dGluZ3MgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCB7IEFwcCwgQXBwRXZlbnQsIENvbnRyb2xsZXIsIFZpZXcsIFZpZXdTZXR0aW5ncywgTW9kZWwsIE1vZGVsU2V0dGluZ3MsIFJvdXRlIH07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\framework.js","/..\\framework")
},{"./app":11,"./app_event":12,"./controller":13,"./model":18,"./route":19,"./view":21,"buffer":23,"yw28T0":24}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mediator = (function () {
    function Mediator(isDebug) {
        if (isDebug === void 0) { isDebug = false; }
        this._$ = $({});
        this._isDebug = isDebug;
    }
    Mediator.prototype.publish = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "PUBLISH", e.topic, e.data);
        }
        this._$.trigger(e.topic, e.data);
    };
    Mediator.prototype.subscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "SUBSCRIBE", e.topic, e.handler);
        }
        this._$.on(e.topic, e.handler);
    };
    Mediator.prototype.unsubscribe = function (e) {
        if (this._isDebug === true) {
            console.log(new Date().getTime(), "UNSUBSCRIBE", e.topic, e.data);
        }
        this._$.off(e.topic);
    };
    return Mediator;
}());
exports.Mediator = Mediator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9tZWRpYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBO0lBR0ksa0JBQVksT0FBdUI7UUFBdkIsd0JBQUEsRUFBQSxlQUF1QjtRQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBQ00sMEJBQU8sR0FBZCxVQUFlLENBQVk7UUFDdkIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNNLDRCQUFTLEdBQWhCLFVBQWlCLENBQVk7UUFDekIsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNNLDhCQUFXLEdBQWxCLFVBQW1CLENBQVk7UUFDM0IsSUFBRyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTtBQUVPLDRCQUFRIiwiZmlsZSI6ImZyYW1ld29yay9tZWRpYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcblxyXG5jbGFzcyBNZWRpYXRvciBpbXBsZW1lbnRzIElNZWRpYXRvcntcclxuICAgIHByaXZhdGUgXyQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgX2lzRGVidWc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpc0RlYnVnOmJvb2xlYW4gPSBmYWxzZSl7XHJcbiAgICAgICAgdGhpcy5fJCA9ICQoe30pO1xyXG4gICAgICAgIHRoaXMuX2lzRGVidWcgPSBpc0RlYnVnO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHB1Ymxpc2goZTogSUFwcEV2ZW50KTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuX2lzRGVidWcgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXCJQVUJMSVNIXCIsIGUudG9waWMsIGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuXyQudHJpZ2dlcihlLnRvcGljLCBlLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN1YnNjcmliZShlOiBJQXBwRXZlbnQpOnZvaWR7XHJcbiAgICAgICAgaWYodGhpcy5faXNEZWJ1ZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcIlNVQlNDUklCRVwiLCBlLnRvcGljLCBlLmhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kLm9uKGUudG9waWMsIGUuaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5zdWJzY3JpYmUoZTogSUFwcEV2ZW50KTp2b2lke1xyXG4gICAgICAgIGlmKHRoaXMuX2lzRGVidWcgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXCJVTlNVQlNDUklCRVwiLCBlLnRvcGljLCBlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl8kLm9mZihlLnRvcGljKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtNZWRpYXRvcn07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\mediator.js","/..\\framework")
},{"buffer":23,"yw28T0":24}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
function ModelSettings(serviceUrl) {
    return function (target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._serviceUrl = serviceUrl;
            return instance;
        }
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return construct(original, args);
        };
        f.prototype = original.prototype;
        return f;
    };
}
exports.ModelSettings = ModelSettings;
var Model = (function (_super) {
    __extends(Model, _super);
    function Model(metiator) {
        return _super.call(this, metiator) || this;
    }
    Model.prototype.initialize = function () {
        throw new Error('Model.prototype.initialize() is abstract and must implemented.');
    };
    Model.prototype.dispose = function () {
        throw new Error('Model.prototype.dispose() is abstract and must implemented.');
    };
    Model.prototype.requestAsync = function (method, dataType, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: method,
                url: _this._serviceUrl,
                data: data || {},
                dataType: dataType,
                success: function (response) {
                    resolve(response);
                },
                error: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    reject(args);
                }
            });
        });
    };
    Model.prototype.getAsync = function (dataType, data) {
        return this.requestAsync('GET', dataType, data);
    };
    Model.prototype.postAsync = function (dataType, data) {
        return this.requestAsync('POST', dataType, data);
    };
    Model.prototype.putAsync = function (dataType, data) {
        return this.requestAsync('PUT', dataType, data);
    };
    Model.prototype.deleteAsync = function (dataType, data) {
        return this.requestAsync('DELETE', dataType, data);
    };
    return Model;
}(event_emitter_1.EventEmitter));
exports.Model = Model;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxpREFBNkM7QUFFN0MsdUJBQXVCLFVBQWtCO0lBQ3JDLE9BQU8sVUFBUyxNQUFXO1FBQ3ZCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUN0QixtQkFBbUIsV0FBVyxFQUFFLElBQUk7WUFDaEMsSUFBSSxDQUFDLEdBQVE7Z0JBQ1QsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUE7WUFDRCxDQUFDLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7WUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN2QixRQUFRLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztZQUNsQyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQVE7WUFBUyxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAseUJBQU87O1lBQ3pCLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUE7UUFFRCxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLENBQUE7QUFDTCxDQUFDO0FBa0RjLHNDQUFhO0FBaEQ1QjtJQUFvQix5QkFBWTtJQUU1QixlQUFZLFFBQW1CO2VBQzNCLGtCQUFNLFFBQVEsQ0FBQztJQUNuQixDQUFDO0lBRU0sMEJBQVUsR0FBakI7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVNLHVCQUFPLEdBQWQ7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVTLDRCQUFZLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxRQUFnQixFQUFFLElBQVM7UUFBbEUsaUJBZUM7UUFkRyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBb0IsRUFBRSxNQUFtQjtZQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNILE1BQU0sRUFBRSxNQUFNO2dCQUNkLEdBQUcsRUFBRSxLQUFJLENBQUMsV0FBVztnQkFDckIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLFVBQUMsUUFBUTtvQkFDZCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsS0FBSyxFQUFFO29CQUFDLGNBQWM7eUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYzt3QkFBZCx5QkFBYzs7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLHdCQUFRLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsSUFBUztRQUMxQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRVMseUJBQVMsR0FBbkIsVUFBb0IsUUFBZ0IsRUFBRSxJQUFTO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFUyx3QkFBUSxHQUFsQixVQUFtQixRQUFnQixFQUFFLElBQVM7UUFDMUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVTLDJCQUFXLEdBQXJCLFVBQXNCLFFBQWdCLEVBQUUsSUFBUztRQUM3QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsWUFBQztBQUFELENBOUNBLEFBOENDLENBOUNtQiw0QkFBWSxHQThDL0I7QUFFTyxzQkFBSyIsImZpbGUiOiJmcmFtZXdvcmsvbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuL2V2ZW50X2VtaXR0ZXInO1xyXG5cclxuZnVuY3Rpb24gTW9kZWxTZXR0aW5ncyhzZXJ2aWNlVXJsOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55KXsgICBcclxuICAgICAgICB2YXIgb3JpZ2luYWwgPSB0YXJnZXQ7XHJcbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzKXtcclxuICAgICAgICAgICAgdmFyIGM6IGFueSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYy5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjKCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLl9zZXJ2aWNlVXJsID0gc2VydmljZVVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGY6IGFueSA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0KG9yaWdpbmFsLCBhcmdzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYucHJvdG90eXBlID0gb3JpZ2luYWwucHJvdG90eXBlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNb2RlbCBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElNb2RlbHtcclxuICAgIHByaXZhdGUgX3NlcnZpY2VVcmw6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKG1ldGlhdG9yOiBJTWVkaWF0b3Ipe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVxdWVzdEFzeW5jKG1ldGhvZDogc3RyaW5nLCBkYXRhVHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZTogKHIpID0+IHZvaWQsIHJlamVjdDogKGUpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLl9zZXJ2aWNlVXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKC4uLmFyZ3M6IGFueVtdKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldEFzeW5jKGRhdGFUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKCdHRVQnLCBkYXRhVHlwZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHBvc3RBc3luYyhkYXRhVHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYygnUE9TVCcsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcHV0QXN5bmMoZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ1BVVCcsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZGVsZXRlQXN5bmMoZGF0YVR5cGU6IHN0cmluZywgZGF0YTogYW55KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ0RFTEVURScsIGRhdGFUeXBlLCBkYXRhKTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7TW9kZWwsIE1vZGVsU2V0dGluZ3N9OyJdfQ==

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\model.js","/..\\framework")
},{"./event_emitter":15,"buffer":23,"yw28T0":24}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Route = (function () {
    function Route(controllerName, actionName, args) {
        this.controllerName = controllerName;
        this.actionName = actionName;
        this.args = args;
    }
    Route.prototype.serialize = function () {
        var s, sargs;
        sargs = this.args.map(function (a) { return a.toString(); }).join("/");
        s = this.controllerName + "/" + this.actionName + "/" + sargs;
        return s;
    };
    return Route;
}());
exports.Route = Route;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBSUksZUFBWSxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBYztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ00seUJBQVMsR0FBaEI7UUFDSSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELENBQUMsR0FBTSxJQUFJLENBQUMsY0FBYyxTQUFJLElBQUksQ0FBQyxVQUFVLFNBQUksS0FBTyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQUNPLHNCQUFLIiwiZmlsZSI6ImZyYW1ld29yay9yb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuY2xhc3MgUm91dGUgaW1wbGVtZW50cyBJUm91dGV7XHJcbiAgICBwdWJsaWMgY29udHJvbGxlck5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBhY3Rpb25OYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXJnczogT2JqZWN0W107XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyTmFtZTogc3RyaW5nLCBhY3Rpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IE9iamVjdFtdKXtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJOYW1lID0gY29udHJvbGxlck5hbWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOnN0cmluZ3tcclxuICAgICAgICB2YXIgcywgc2FyZ3M7XHJcbiAgICAgICAgc2FyZ3MgPSB0aGlzLmFyZ3MubWFwKGEgPT4gYS50b1N0cmluZygpKS5qb2luKFwiL1wiKTtcclxuICAgICAgICBzID0gYCR7dGhpcy5jb250cm9sbGVyTmFtZX0vJHt0aGlzLmFjdGlvbk5hbWV9LyR7c2FyZ3N9YDtcclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH0gXHJcbn1cclxuZXhwb3J0IHtSb3V0ZX07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\route.js","/..\\framework")
},{"buffer":23,"yw28T0":24}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsaURBQTZDO0FBQzdDLHlDQUFxQztBQUNyQyxpQ0FBOEI7QUFFOUI7SUFBcUIsMEJBQVk7SUFJN0IsZ0JBQVksUUFBbUIsRUFBRSxpQkFBeUIsRUFBRSxhQUFxQjtRQUFqRixZQUNJLGtCQUFNLFFBQVEsQ0FBQyxTQUdsQjtRQUZHLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsSUFBSSxNQUFNLENBQUM7UUFDdEQsS0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDOztJQUNuRCxDQUFDO0lBRU0sMkJBQVUsR0FBakI7UUFBQSxpQkFjQztRQWJHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ25CLElBQUksb0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsVUFBQyxDQUFNLEVBQUUsSUFBVTtnQkFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUM7WUFDRixJQUFJLG9CQUFRLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxVQUFDLENBQU0sRUFBRSxJQUFVO2dCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU8seUJBQVEsR0FBaEIsVUFBaUIsS0FBWTtRQUN6QixJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTywyQkFBVSxHQUFsQixVQUFtQixJQUFZO1FBQzNCLElBQUksSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN0QyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQztZQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDaEQsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDVixLQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxhQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sOEJBQWEsR0FBckIsVUFBc0IsS0FBWTtRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksb0JBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXREQSxBQXNEQyxDQXREb0IsNEJBQVksR0FzRGhDO0FBRU8sd0JBQU0iLCJmaWxlIjoiZnJhbWV3b3JrL3JvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2ludGVyZmFjZXMudHNcIiAvPlxyXG5cclxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCIuL2V2ZW50X2VtaXR0ZXJcIjtcclxuaW1wb3J0IHtBcHBFdmVudH0gZnJvbSBcIi4vYXBwX2V2ZW50XCI7XHJcbmltcG9ydCB7Um91dGV9IGZyb20gXCIuL3JvdXRlXCI7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIgaW1wbGVtZW50cyBJUm91dGVye1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdENvbnRyb2xsZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2RlZmF1bHRBY3Rpb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRpYXRvcjogSU1lZGlhdG9yLCBkZWZhdWx0Q29udHJvbGxlcjogc3RyaW5nLCBkZWZhdWx0QWN0aW9uOiBzdHJpbmcpe1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29udHJvbGxlciA9IGRlZmF1bHRDb250cm9sbGVyIHx8IFwiaG9tZVwiO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRBY3Rpb24gPSBkZWZhdWx0QWN0aW9uIHx8IFwiaW5kZXhcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpe1xyXG4gICAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsICgpPT57XHJcbiAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRSb3V0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUm91dGVDaGFuZ2Uocik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoJ2FwcC5pbml0aWFsaXplJywgbnVsbCwgKGU6IGFueSwgZGF0YT86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJvdXRlQ2hhbmdlKHRoaXMuZ2V0Um91dGUoKSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBuZXcgQXBwRXZlbnQoJ2FwcC5yb3V0ZScsIG51bGwsIChlOiBhbnksIGRhdGE/OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um91dGUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLCAgICAgICAgICBcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvdXRlKCl7XHJcbiAgICAgICAgdmFyIGggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJvdXRlKGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Um91dGUocm91dGU6IFJvdXRlKXtcclxuICAgICAgICB2YXIgcyA9IHJvdXRlLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBhcnNlUm91dGUoaGFzaDogc3RyaW5nKXtcclxuICAgICAgICB2YXIgY29tcCwgY29udHJvbGxlciwgYWN0aW9uLCBhcmdzLCBpO1xyXG4gICAgICAgIGlmKGhhc2hbaGFzaC5sZW5ndGggLSAxXSA9PT0gJy8nKXtcclxuICAgICAgICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKDAsIGhhc2gubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXAgPSBoYXNoLnJlcGxhY2UoXCIjXCIsICcnKS5zcGxpdCgnLycpO1xyXG4gICAgICAgIGNvbnRyb2xsZXIgPSBjb21wWzBdIHx8IHRoaXMuX2RlZmF1bHRDb250cm9sbGVyO1xyXG4gICAgICAgIGFjdGlvbiA9IGNvbXBbMV0gfHwgdGhpcy5fZGVmYXVsdEFjdGlvbjtcclxuICAgICAgICBhcmdzID0gW107XHJcbiAgICAgICAgZm9yKGkgPSAyOyBpPCBjb21wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGNvbXBbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKGNvbnRyb2xsZXIsIGFjdGlvbiwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdXRlQ2hhbmdlKHJvdXRlOiBSb3V0ZSl7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEFwcEV2ZW50KCdhcHAuZGlzcGF0Y2gnLCByb3V0ZSwgbnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1JvdXRlcn07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\router.js","/..\\framework")
},{"./app_event":12,"./event_emitter":15,"./route":19,"buffer":23,"yw28T0":24}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
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
function ViewSettings(templateUrl, container) {
    return function (target) {
        var original = target;
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            var instance = new c();
            instance._container = container;
            instance._templateUrl = templateUrl;
            return instance;
        }
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return construct(original, args);
        };
        f.prototype = original.prototype;
        return f;
    };
}
exports.ViewSettings = ViewSettings;
var View = (function (_super) {
    __extends(View, _super);
    function View(metiator) {
        return _super.call(this, metiator) || this;
    }
    View.prototype.initialize = function () {
        throw new Error('View.prototype.initialize() is abstract and must implemented.');
    };
    View.prototype.dispose = function () {
        throw new Error('View.prototype.dispose() is abstract and must implemented.');
    };
    View.prototype.bindDomEvents = function (model) {
        throw new Error('View.prototype.bindDomEvents() is abstract and must implemented.');
    };
    View.prototype.unbindDomEvents = function () {
        throw new Error('View.prototype.unbindDomEvents() is abstract and must implemented.');
    };
    View.prototype.loadTemplateAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $.ajax({
                method: 'GET',
                url: _this._templateUrl,
                dataType: 'text',
                success: function (response) {
                    resolve(response);
                },
                error: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    reject(args);
                }
            });
        });
    };
    View.prototype.compileTemplateAsync = function (source) {
        return new Promise(function (resolve, reject) {
            try {
                var template = Handlebars.compile(source);
                resolve(template);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    View.prototype.getTemplateAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._templateDelegate === undefined || _this._templateDelegate === null) {
                _this.loadTemplateAsync().then(function (source) {
                    return _this.compileTemplateAsync(source);
                }).then(function (templateDelegate) {
                    _this._templateDelegate = templateDelegate;
                    resolve(_this._templateDelegate);
                }).catch(function (e) {
                    reject(e);
                });
            }
            else {
                resolve(_this._templateDelegate);
            }
        });
    };
    View.prototype.renderAsync = function (model) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getTemplateAsync()
                .then(function (templateDelegate) {
                var html = _this._templateDelegate(model);
                $(_this._container).html(html);
                resolve(model);
            })
                .catch(function (e) { reject(e); });
        });
    };
    return View;
}(event_emitter_1.EventEmitter));
exports.View = View;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1ld29yay92aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLGlEQUErQztBQUcvQyxzQkFBc0IsV0FBbUIsRUFBRSxTQUFpQjtJQUN4RCxPQUFPLFVBQVUsTUFBVztRQUN4QixJQUFJLFFBQVEsR0FBUSxNQUFNLENBQUM7UUFDM0IsbUJBQW1CLFdBQWdCLEVBQUUsSUFBSTtZQUNyQyxJQUFJLENBQUMsR0FBUztnQkFDVixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQztZQUNGLENBQUMsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztZQUNwQyxJQUFJLFFBQVEsR0FBUSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzVCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQ3BDLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxJQUFJLENBQUMsR0FBUTtZQUFVLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDakMsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGLENBQUMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFvRmMsb0NBQVk7QUFsRjNCO0lBQW1CLHdCQUFZO0lBSzNCLGNBQVksUUFBbUI7ZUFDM0Isa0JBQU0sUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFTSx5QkFBVSxHQUFqQjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRVMsNEJBQWEsR0FBdkIsVUFBd0IsS0FBVTtRQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVTLDhCQUFlLEdBQXpCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTyxnQ0FBaUIsR0FBekI7UUFBQSxpQkFjQztRQWJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFvQixFQUFFLE1BQW1CO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxZQUFZO2dCQUN0QixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsT0FBTyxFQUFFLFVBQUMsUUFBUTtvQkFDZCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsS0FBSyxFQUFFO29CQUFDLGNBQWM7eUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYzt3QkFBZCx5QkFBYzs7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFvQixHQUE1QixVQUE2QixNQUFjO1FBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFvQixFQUFFLE1BQW1CO1lBQ3pELElBQUk7Z0JBQ0EsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywrQkFBZ0IsR0FBeEI7UUFBQSxpQkFlQztRQWRHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFvQixFQUFFLE1BQW1CO1lBQ3pELElBQUksS0FBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxFQUFFO2dCQUN6RSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO29CQUNqQyxPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsZ0JBQXFCO29CQUMxQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsQ0FBQztvQkFDUCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDbkM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUywwQkFBVyxHQUFyQixVQUFzQixLQUFLO1FBQTNCLGlCQVVDO1FBVEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQW9CLEVBQUUsTUFBbUI7WUFDekQsS0FBSSxDQUFDLGdCQUFnQixFQUFFO2lCQUNsQixJQUFJLENBQUMsVUFBQyxnQkFBZ0I7Z0JBQ25CLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBQyxJQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQWhGQSxBQWdGQyxDQWhGa0IsNEJBQVksR0FnRjlCO0FBRVEsb0JBQUkiLCJmaWxlIjoiZnJhbWV3b3JrL3ZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbnRlcmZhY2VzLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvaGFuZGxlYmFycy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJy4vZXZlbnRfZW1pdHRlcic7XHJcbmltcG9ydCB7IEFwcEV2ZW50IH0gZnJvbSAnLi9hcHBfZXZlbnQnO1xyXG5cclxuZnVuY3Rpb24gVmlld1NldHRpbmdzKHRlbXBsYXRlVXJsOiBzdHJpbmcsIGNvbnRhaW5lcjogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWw6IGFueSA9IHRhcmdldDtcclxuICAgICAgICBmdW5jdGlvbiBjb25zdHJ1Y3QoY29uc3RydWN0b3I6IGFueSwgYXJncykge1xyXG4gICAgICAgICAgICB2YXIgYyA6IGFueSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYy5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZTogYW55ID0gbmV3IGMoKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgaW5zdGFuY2UuX3RlbXBsYXRlVXJsID0gdGVtcGxhdGVVcmw7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmOiBhbnkgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0KG9yaWdpbmFsLCBhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmLnByb3RvdHlwZSA9IG9yaWdpbmFsLnByb3RvdHlwZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgVmlldyBleHRlbmRzIEV2ZW50RW1pdHRlciBpbXBsZW1lbnRzIElWaWV3IHtcclxuICAgIHByb3RlY3RlZCBfY29udGFpbmVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVVybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVEZWxlZ2F0ZTogSGFuZGxlYmFyc1RlbXBsYXRlRGVsZWdhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0aWF0b3I6IElNZWRpYXRvcikge1xyXG4gICAgICAgIHN1cGVyKG1ldGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYmluZERvbUV2ZW50cyhtb2RlbDogYW55KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3LnByb3RvdHlwZS5iaW5kRG9tRXZlbnRzKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVuYmluZERvbUV2ZW50cygpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLnVuYmluZERvbUV2ZW50cygpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFRlbXBsYXRlQXN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAocikgPT4gdm9pZCwgcmVqZWN0OiAoZSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5fdGVtcGxhdGVVcmwsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21waWxlVGVtcGxhdGVBc3luYyhzb3VyY2U6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKHIpID0+IHZvaWQsIHJlamVjdDogKGUpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0ZW1wbGF0ZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGVtcGxhdGVBc3luYygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChyKSA9PiB2b2lkLCByZWplY3Q6IChlKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90ZW1wbGF0ZURlbGVnYXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGVBc3luYygpLnRoZW4oKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVUZW1wbGF0ZUFzeW5jKHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKCh0ZW1wbGF0ZURlbGVnYXRlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZURlbGVnYXRlID0gdGVtcGxhdGVEZWxlZ2F0ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3RlbXBsYXRlRGVsZWdhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyQXN5bmMobW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChyKSA9PiB2b2lkLCByZWplY3Q6IChlKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VGVtcGxhdGVBc3luYygpXHJcbiAgICAgICAgICAgICAgICAudGhlbigodGVtcGxhdGVEZWxlZ2F0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZShtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLl9jb250YWluZXIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7IHJlamVjdChlKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgVmlldywgVmlld1NldHRpbmdzIH07Il19

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\framework\\view.js","/..\\framework")
},{"./event_emitter":15,"buffer":23,"yw28T0":24}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\base64-js\\lib\\b64.js","/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\base64-js\\lib")
},{"buffer":23,"yw28T0":24}],23:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\buffer\\index.js","/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\buffer")
},{"base64-js":22,"buffer":23,"ieee754":25,"yw28T0":24}],24:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\process\\browser.js","/..\\..\\..\\node_modules\\gulp-browserify\\node_modules\\process")
},{"buffer":23,"yw28T0":24}],25:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("yw28T0"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/..\\..\\..\\node_modules\\ieee754\\index.js","/..\\..\\..\\node_modules\\ieee754")
},{"buffer":23,"yw28T0":24}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdi16aGxvbmdcXERvY3VtZW50c1xcR2l0SHViXFx0eXBlc2NyaXB0LWxlYXJuaW5nXFxqYXNvbi1tdmNcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9hcHAvY29udHJvbGxlcnMvbWFya2V0X2NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9hcHAvY29udHJvbGxlcnMvc3ltYm9sX2NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9hcHAvZmFrZV9hNmIxZWJkZC5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2FwcC9tb2RlbHMvY2hhcnRfbW9kZWwuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9hcHAvbW9kZWxzL25hc2RhcV9tb2RlbC5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2FwcC9tb2RlbHMvbnlzZV9tb2RlbC5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2FwcC9tb2RlbHMvcXVvdGVfbW9kZWwuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9hcHAvdmlld3MvY2hhcnRfdmlldy5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2FwcC92aWV3cy9tYXJrZXRfdmlldy5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2FwcC92aWV3cy9zeW1ib2xfdmlldy5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9hcHAuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9mcmFtZXdvcmsvYXBwX2V2ZW50LmpzIiwiQzovVXNlcnMvdi16aGxvbmcvRG9jdW1lbnRzL0dpdEh1Yi90eXBlc2NyaXB0LWxlYXJuaW5nL2phc29uLW12Yy9idWlsZC9zb3VyY2UvZnJhbWV3b3JrL2NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9mcmFtZXdvcmsvZGlzcGF0Y2hlci5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9ldmVudF9lbWl0dGVyLmpzIiwiQzovVXNlcnMvdi16aGxvbmcvRG9jdW1lbnRzL0dpdEh1Yi90eXBlc2NyaXB0LWxlYXJuaW5nL2phc29uLW12Yy9idWlsZC9zb3VyY2UvZnJhbWV3b3JrL2ZyYW1ld29yay5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9tZWRpYXRvci5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9tb2RlbC5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9yb3V0ZS5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvYnVpbGQvc291cmNlL2ZyYW1ld29yay9yb3V0ZXIuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL2J1aWxkL3NvdXJjZS9mcmFtZXdvcmsvdmlldy5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCJDOi9Vc2Vycy92LXpobG9uZy9Eb2N1bWVudHMvR2l0SHViL3R5cGVzY3JpcHQtbGVhcm5pbmcvamFzb24tbXZjL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIkM6L1VzZXJzL3Ytemhsb25nL0RvY3VtZW50cy9HaXRIdWIvdHlwZXNjcmlwdC1sZWFybmluZy9qYXNvbi1tdmMvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiQzovVXNlcnMvdi16aGxvbmcvRG9jdW1lbnRzL0dpdEh1Yi90eXBlc2NyaXB0LWxlYXJuaW5nL2phc29uLW12Yy9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwiLi4vLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiKTtcbnZhciBtYXJrZXRfdmlld18xID0gcmVxdWlyZShcIi4uL3ZpZXdzL21hcmtldF92aWV3XCIpO1xudmFyIG5hc2RhcV9tb2RlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9uYXNkYXFfbW9kZWxcIik7XG52YXIgbnlzZV9tb2RlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9ueXNlX21vZGVsXCIpO1xudmFyIE1hcmtldENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYXJrZXRDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hcmtldENvbnRyb2xsZXIobWV0aWF0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9tYXJrZXRWaWV3ID0gbmV3IG1hcmtldF92aWV3XzEuTWFya2V0VmlldyhtZXRpYXRvcik7XG4gICAgICAgIF90aGlzLl9uYXNkYXFNb2RlbCA9IG5ldyBuYXNkYXFfbW9kZWxfMS5OYXNkYXFNb2RlbChtZXRpYXRvcik7XG4gICAgICAgIF90aGlzLl9ueXNlTW9kZWwgPSBuZXcgbnlzZV9tb2RlbF8xLk55c2VNb2RlbChtZXRpYXRvcik7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFya2V0Q29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXG4gICAgICAgICAgICBuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAuY29udHJvbGxlci5tYXJrZXQubmFzZGFxXCIsIG51bGwsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubmFzZGFxKGFyZ3MpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAuY29udHJvbGxlci5tYXJrZXQubnlzZVwiLCBudWxsLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgIF90aGlzLm55c2UoYXJncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5fbWFya2V0Vmlldy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuX25hc2RhcU1vZGVsLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5fbnlzZU1vZGVsLmluaXRpYWxpemUoKTtcbiAgICB9O1xuICAgIE1hcmtldENvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgICAgICB0aGlzLl9tYXJrZXRWaWV3LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fbmFzZGFxTW9kZWwuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9ueXNlTW9kZWwuZGlzcG9zZSgpO1xuICAgIH07XG4gICAgTWFya2V0Q29udHJvbGxlci5wcm90b3R5cGUubmFzZGFxID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fbWV0aWF0b3IucHVibGlzaChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAubW9kZWwubmFzZGFxLmNoYW5nZVwiLCBudWxsLCBudWxsKSk7XG4gICAgfTtcbiAgICBNYXJrZXRDb250cm9sbGVyLnByb3RvdHlwZS5ueXNlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5fbWV0aWF0b3IucHVibGlzaChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAubW9kZWwubnlzZS5jaGFuZ2VcIiwgbnVsbCwgbnVsbCkpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcmtldENvbnRyb2xsZXI7XG59KGZyYW1ld29ya18xLkNvbnRyb2xsZXIpKTtcbmV4cG9ydHMuTWFya2V0Q29udHJvbGxlciA9IE1hcmtldENvbnRyb2xsZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOWpiMjUwY205c2JHVnljeTl0WVhKclpYUmZZMjl1ZEhKdmJHeGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3gxUkVGQmFVVTdRVUZEYWtVc2IwUkJRV3RFTzBGQlEyeEVMSFZFUVVGeFJEdEJRVU55UkN4dFJFRkJhVVE3UVVGRmFrUTdTVUZCSzBJc2IwTkJRVlU3U1VGSmNrTXNNRUpCUVZrc1VVRkJiVUk3VVVGQkwwSXNXVUZEU1N4clFrRkJUU3hSUVVGUkxFTkJRVU1zVTBGSmJFSTdVVUZJUnl4TFFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzZDBKQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNMVF5eExRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc01FSkJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTVReXhMUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NjMEpCUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdTVUZET1VNc1EwRkJRenRKUVVWTkxIRkRRVUZWTEVkQlFXcENPMUZCUVVFc2FVSkJXVU03VVVGWVJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03V1VGRGJrSXNTVUZCU1N4dlFrRkJVU3hEUVVGRExEaENRVUU0UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZqTzJkQ1FVTnFSU3hMUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNSQ0xFTkJRVU1zUTBGQlF6dFpRVU5HTEVsQlFVa3NiMEpCUVZFc1EwRkJReXcwUWtGQk5FSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJReXhEUVVGRExFVkJRVVVzU1VGQll6dG5Ra0ZETDBRc1MwRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0WlFVTndRaXhEUVVGRExFTkJRVU03VTBGRFRDeERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFGQlF6bENMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdVVUZETDBJc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJSVTBzYTBOQlFVOHNSMEZCWkR0UlFVTkpMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRNMElzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGVFN4cFEwRkJUU3hIUVVGaUxGVkJRV01zU1VGQll6dFJRVU40UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEc5Q1FVRlJMRU5CUVVNc2VVSkJRWGxDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRGFFWXNRMEZCUXp0SlFVVk5MQ3RDUVVGSkxFZEJRVmdzVlVGQldTeEpRVUZqTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NiMEpCUVZFc1EwRkJReXgxUWtGQmRVSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU01UlN4RFFVRkRPMGxCUTB3c2RVSkJRVU03UVVGQlJDeERRWFpEUVN4QlFYVkRReXhEUVhaRE9FSXNjMEpCUVZVc1IwRjFRM2hETzBGQlJVOHNORU5CUVdkQ0lpd2labWxzWlNJNkltRndjQzlqYjI1MGNtOXNiR1Z5Y3k5dFlYSnJaWFJmWTI5dWRISnZiR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIQmhkR2c5WENJdUxpOHVMaTltY21GdFpYZHZjbXN2YVc1MFpYSm1ZV05sY3k1MGMxd2lJQzgrWEhKY2JseHlYRzVwYlhCdmNuUWdleUJEYjI1MGNtOXNiR1Z5TENCQmNIQkZkbVZ1ZENCOUlHWnliMjBnWENJdUxpOHVMaTltY21GdFpYZHZjbXN2Wm5KaGJXVjNiM0pyWENJN1hISmNibWx0Y0c5eWRDQjdJRTFoY210bGRGWnBaWGNnZlNCbWNtOXRJRndpTGk0dmRtbGxkM012YldGeWEyVjBYM1pwWlhkY0lqdGNjbHh1YVcxd2IzSjBJSHNnVG1GelpHRnhUVzlrWld3Z2ZTQm1jbTl0SUZ3aUxpNHZiVzlrWld4ekwyNWhjMlJoY1Y5dGIyUmxiRndpTzF4eVhHNXBiWEJ2Y25RZ2V5Qk9lWE5sVFc5a1pXd2dmU0JtY205dElGd2lMaTR2Ylc5a1pXeHpMMjU1YzJWZmJXOWtaV3hjSWp0Y2NseHVYSEpjYm1Oc1lYTnpJRTFoY210bGRFTnZiblJ5YjJ4c1pYSWdaWGgwWlc1a2N5QkRiMjUwY205c2JHVnlJR2x0Y0d4bGJXVnVkSE1nU1VOdmJuUnliMnhzWlhKN1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5dFlYSnJaWFJXYVdWM09pQkpWbWxsZHp0Y2NseHVJQ0FnSUhCeWFYWmhkR1VnWDI1aGMyUmhjVTF2WkdWc09pQkpUVzlrWld3N1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5dWVYTmxUVzlrWld3NklFbE5iMlJsYkR0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHMWxkR2xoZEc5eU9pQkpUV1ZrYVdGMGIzSXBlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLRzFsZEdsaGRHOXlLVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDl0WVhKclpYUldhV1YzSUQwZ2JtVjNJRTFoY210bGRGWnBaWGNvYldWMGFXRjBiM0lwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDI1aGMyUmhjVTF2WkdWc0lEMGdibVYzSUU1aGMyUmhjVTF2WkdWc0tHMWxkR2xoZEc5eUtUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXVlWE5sVFc5a1pXd2dQU0J1WlhjZ1RubHpaVTF2WkdWc0tHMWxkR2xoZEc5eUtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3ZFdKc2FXTWdhVzVwZEdsaGJHbDZaU2dwT2lCMmIybGtlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1ZpYzJOeWFXSmxWRzlGZG1WdWRITW9XMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGNnUVhCd1JYWmxiblFvWENKaGNIQXVZMjl1ZEhKdmJHeGxjaTV0WVhKclpYUXVibUZ6WkdGeFhDSXNJRzUxYkd3c0lDaGxMQ0JoY21kek9pQnpkSEpwYm1kYlhTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV1WVhOa1lYRW9ZWEpuY3lrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcExGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dRWEJ3UlhabGJuUW9YQ0poY0hBdVkyOXVkSEp2Ykd4bGNpNXRZWEpyWlhRdWJubHpaVndpTENCdWRXeHNMQ0FvWlN3Z1lYSm5jem9nYzNSeWFXNW5XMTBwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJubHpaU2hoY21kektUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNjbHh1SUNBZ0lDQWdJQ0JkS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5dFlYSnJaWFJXYVdWM0xtbHVhWFJwWVd4cGVtVW9LVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDl1WVhOa1lYRk5iMlJsYkM1cGJtbDBhV0ZzYVhwbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZibmx6WlUxdlpHVnNMbWx1YVhScFlXeHBlbVVvS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ1pHbHpjRzl6WlNncE9pQjJiMmxrZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11ZFc1emRXSnpZM0pwWW1WVWIwVjJaVzUwY3lncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyMWhjbXRsZEZacFpYY3VaR2x6Y0c5elpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjVoYzJSaGNVMXZaR1ZzTG1ScGMzQnZjMlVvS1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5dWVYTmxUVzlrWld3dVpHbHpjRzl6WlNncE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEIxWW14cFl5QnVZWE5rWVhFb1lYSm5jem9nYzNSeWFXNW5XMTBwZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDIxbGRHbGhkRzl5TG5CMVlteHBjMmdvYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG0xdlpHVnNMbTVoYzJSaGNTNWphR0Z1WjJWY0lpd2diblZzYkN3Z2JuVnNiQ2twTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQjFZbXhwWXlCdWVYTmxLR0Z5WjNNNklITjBjbWx1WjF0ZEtYdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXRaWFJwWVhSdmNpNXdkV0pzYVhOb0tHNWxkeUJCY0hCRmRtVnVkQ2hjSW1Gd2NDNXRiMlJsYkM1dWVYTmxMbU5vWVc1blpWd2lMQ0J1ZFd4c0xDQnVkV3hzS1NrN1hISmNiaUFnSUNCOUlDQWdJRnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnZTAxaGNtdGxkRU52Ym5SeWIyeHNaWEo5SWwxOVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2NvbnRyb2xsZXJzXFxcXG1hcmtldF9jb250cm9sbGVyLmpzXCIsXCIvY29udHJvbGxlcnNcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIik7XG52YXIgc3ltYm9sX3ZpZXdfMSA9IHJlcXVpcmUoXCIuLi92aWV3cy9zeW1ib2xfdmlld1wiKTtcbnZhciBjaGFydF92aWV3XzEgPSByZXF1aXJlKFwiLi4vdmlld3MvY2hhcnRfdmlld1wiKTtcbnZhciBxdW90ZV9tb2RlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9xdW90ZV9tb2RlbFwiKTtcbnZhciBjaGFydF9tb2RlbF8xID0gcmVxdWlyZShcIi4uL21vZGVscy9jaGFydF9tb2RlbFwiKTtcbnZhciBTeW1ib2xDb250cm9sbGVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ltYm9sQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTeW1ib2xDb250cm9sbGVyKG1ldGlhdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1ldGlhdG9yKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fcXVvdGVNb2RlbCA9IG5ldyBxdW90ZV9tb2RlbF8xLlF1b3RlTW9kZWwobWV0aWF0b3IpO1xuICAgICAgICBfdGhpcy5fY2hhcnRNb2RlbCA9IG5ldyBjaGFydF9tb2RlbF8xLkNoYXJ0TW9kZWwobWV0aWF0b3IpO1xuICAgICAgICBfdGhpcy5fc3ltYm9sVmlldyA9IG5ldyBzeW1ib2xfdmlld18xLlN5bWJvbFZpZXcobWV0aWF0b3IpO1xuICAgICAgICBfdGhpcy5fY2hhcnRWaWV3ID0gbmV3IGNoYXJ0X3ZpZXdfMS5DaGFydFZpZXcobWV0aWF0b3IpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN5bWJvbENvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xuICAgICAgICAgICAgbmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLmNvbnRyb2xsZXIuc3ltYm9sLnF1b3RlXCIsIG51bGwsIGZ1bmN0aW9uIChlLCBzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5xdW90ZShzeW1ib2wpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuX3F1b3RlTW9kZWwuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLl9jaGFydE1vZGVsLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5fc3ltYm9sVmlldy5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuX2NoYXJ0Vmlldy5pbml0aWFsaXplKCk7XG4gICAgfTtcbiAgICBTeW1ib2xDb250cm9sbGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9FdmVudHMoKTtcbiAgICAgICAgdGhpcy5fc3ltYm9sVmlldy5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3F1b3RlTW9kZWwuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9jaGFydFZpZXcuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9jaGFydE1vZGVsLmRpc3Bvc2UoKTtcbiAgICB9O1xuICAgIFN5bWJvbENvbnRyb2xsZXIucHJvdG90eXBlLnF1b3RlID0gZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAubW9kZWwucXVvdGUuY2hhbmdlXCIsIHN5bWJvbCwgbnVsbCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFN5bWJvbENvbnRyb2xsZXI7XG59KGZyYW1ld29ya18xLkNvbnRyb2xsZXIpKTtcbmV4cG9ydHMuU3ltYm9sQ29udHJvbGxlciA9IFN5bWJvbENvbnRyb2xsZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOWpiMjUwY205c2JHVnljeTl6ZVcxaWIyeGZZMjl1ZEhKdmJHeGxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkRRU3gxUkVGQmFVVTdRVUZEYWtVc2IwUkJRV3RFTzBGQlEyeEVMR3RFUVVGblJEdEJRVU5vUkN4eFJFRkJiVVE3UVVGRGJrUXNjVVJCUVcxRU8wRkJSVzVFTzBsQlFTdENMRzlEUVVGVk8wbEJUWEpETERCQ1FVRlpMRkZCUVcxQ08xRkJRUzlDTEZsQlEwa3NhMEpCUVUwc1VVRkJVU3hEUVVGRExGTkJTMnhDTzFGQlNrY3NTMEZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxIZENRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROVU1zUzBGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMSGRDUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdVVUZETlVNc1MwRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEhkQ1FVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE5VTXNTMEZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxITkNRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN08wbEJRemxETEVOQlFVTTdTVUZGVFN4eFEwRkJWU3hIUVVGcVFqdFJRVUZCTEdsQ1FWVkRPMUZCVkVjc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRPMWxCUTI1Q0xFbEJRVWtzYjBKQlFWRXNRMEZCUXl3MlFrRkJOa0lzUlVGQlJTeEpRVUZKTEVWQlFVVXNWVUZCUXl4RFFVRkRMRVZCUVVVc1RVRkJZenRuUWtGRGFFVXNTMEZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU4yUWl4RFFVRkRMRU5CUVVNN1UwRkRUQ3hEUVVGRExFTkJRVU03VVVGRFNDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VVVGRE9VSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzBsQlEycERMRU5CUVVNN1NVRkZUU3hyUTBGQlR5eEhRVUZrTzFGQlEwa3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVNdlFpeERRVUZETzBsQlJVMHNaME5CUVVzc1IwRkJXaXhWUVVGaExFMUJRV003VVVGRGRrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxHOUNRVUZSTEVOQlFVTXNkMEpCUVhkQ0xFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkROVVVzUTBGQlF6dEpRVU5NTEhWQ1FVRkRPMEZCUVVRc1EwRnlRMEVzUVVGeFEwTXNRMEZ5UXpoQ0xITkNRVUZWTEVkQmNVTjRRenRCUVVWUkxEUkRRVUZuUWlJc0ltWnBiR1VpT2lKaGNIQXZZMjl1ZEhKdmJHeGxjbk12YzNsdFltOXNYMk52Ym5SeWIyeHNaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeThnUEhKbFptVnlaVzVqWlNCd1lYUm9QVndpTGk0dkxpNHZabkpoYldWM2IzSnJMMmx1ZEdWeVptRmpaWE11ZEhOY0lpQXZQbHh5WEc1cGJYQnZjblFnZXlCRGIyNTBjbTlzYkdWeUxDQkJjSEJGZG1WdWRDQjlJR1p5YjIwZ1hDSXVMaTh1TGk5bWNtRnRaWGR2Y21zdlpuSmhiV1YzYjNKclhDSTdYSEpjYm1sdGNHOXlkQ0I3SUZONWJXSnZiRlpwWlhjZ2ZTQm1jbTl0SUZ3aUxpNHZkbWxsZDNNdmMzbHRZbTlzWDNacFpYZGNJanRjY2x4dWFXMXdiM0owSUhzZ1EyaGhjblJXYVdWM0lIMGdabkp2YlNCY0lpNHVMM1pwWlhkekwyTm9ZWEowWDNacFpYZGNJanRjY2x4dWFXMXdiM0owSUhzZ1VYVnZkR1ZOYjJSbGJDQjlJR1p5YjIwZ1hDSXVMaTl0YjJSbGJITXZjWFZ2ZEdWZmJXOWtaV3hjSWp0Y2NseHVhVzF3YjNKMElIc2dRMmhoY25STmIyUmxiQ0I5SUdaeWIyMGdYQ0l1TGk5dGIyUmxiSE12WTJoaGNuUmZiVzlrWld4Y0lqdGNjbHh1WEhKY2JtTnNZWE56SUZONWJXSnZiRU52Ym5SeWIyeHNaWElnWlhoMFpXNWtjeUJEYjI1MGNtOXNiR1Z5SUdsdGNHeGxiV1Z1ZEhNZ1NVTnZiblJ5YjJ4c1pYSjdYSEpjYmlBZ0lDQndjbWwyWVhSbElGOXhkVzkwWlUxdlpHVnNPaUJKVFc5a1pXdzdYSEpjYmlBZ0lDQndjbWwyWVhSbElGOWphR0Z5ZEUxdlpHVnNPaUJKVFc5a1pXdzdYSEpjYmlBZ0lDQndjbWwyWVhSbElGOXplVzFpYjJ4V2FXVjNPaUJKVm1sbGR6dGNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1gyTm9ZWEowVm1sbGR6b2dTVlpwWlhjN1hISmNibHh5WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvYldWMGFXRjBiM0k2SUVsTlpXUnBZWFJ2Y2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHMWxkR2xoZEc5eUtUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXhkVzkwWlUxdlpHVnNJRDBnYm1WM0lGRjFiM1JsVFc5a1pXd29iV1YwYVdGMGIzSXBPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMk5vWVhKMFRXOWtaV3dnUFNCdVpYY2dRMmhoY25STmIyUmxiQ2h0WlhScFlYUnZjaWs3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYzNsdFltOXNWbWxsZHlBOUlHNWxkeUJUZVcxaWIyeFdhV1YzS0cxbGRHbGhkRzl5S1R0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5amFHRnlkRlpwWlhjZ1BTQnVaWGNnUTJoaGNuUldhV1YzS0cxbGRHbGhkRzl5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ2FXNXBkR2xoYkdsNlpTZ3BPaUIyYjJsa2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzVmljMk55YVdKbFZHOUZkbVZ1ZEhNb1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dRWEJ3UlhabGJuUW9YQ0poY0hBdVkyOXVkSEp2Ykd4bGNpNXplVzFpYjJ3dWNYVnZkR1ZjSWl3Z2JuVnNiQ3dnS0dVc0lITjViV0p2YkRvZ2MzUnlhVzVuS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuRjFiM1JsS0hONWJXSnZiQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ1hTazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjWFZ2ZEdWTmIyUmxiQzVwYm1sMGFXRnNhWHBsS0NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlkyaGhjblJOYjJSbGJDNXBibWwwYVdGc2FYcGxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmYzNsdFltOXNWbWxsZHk1cGJtbDBhV0ZzYVhwbEtDazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZMmhoY25SV2FXVjNMbWx1YVhScFlXeHBlbVVvS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ1pHbHpjRzl6WlNncE9pQjJiMmxrZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11ZFc1emRXSnpZM0pwWW1WVWIwVjJaVzUwY3lncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzTjViV0p2YkZacFpYY3VaR2x6Y0c5elpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0YxYjNSbFRXOWtaV3d1WkdsemNHOXpaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDJOb1lYSjBWbWxsZHk1a2FYTndiM05sS0NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlkyaGhjblJOYjJSbGJDNWthWE53YjNObEtDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJSEYxYjNSbEtITjViV0p2YkRvZ2MzUnlhVzVuS1h0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5SeWFXZG5aWEpGZG1WdWRDaHVaWGNnUVhCd1JYWmxiblFvWENKaGNIQXViVzlrWld3dWNYVnZkR1V1WTJoaGJtZGxYQ0lzSUhONWJXSnZiQ3dnYm5Wc2JDa3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnZXlCVGVXMWliMnhEYjI1MGNtOXNiR1Z5SUgwaVhYMD1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9jb250cm9sbGVyc1xcXFxzeW1ib2xfY29udHJvbGxlci5qc1wiLFwiL2NvbnRyb2xsZXJzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwiLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiKTtcbnZhciBtYXJrZXRfY29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvbWFya2V0X2NvbnRyb2xsZXJcIik7XG52YXIgc3ltYm9sX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL3N5bWJvbF9jb250cm9sbGVyXCIpO1xudmFyIGFwcFNldHRpbmdzID0ge1xuICAgIGlzRGVidWc6IHRydWUsXG4gICAgZGVmYXVsdENvbnRyb2xsZXI6IFwibWFya2V0XCIsXG4gICAgZGVmYXVsdEFjdGlvbjogXCJuYXNkYXFcIixcbiAgICBjb250cm9sbGVyczogW1xuICAgICAgICB7IGNvbnRyb2xsZXJOYW1lOiBcIm1hcmtldFwiLCBjb250cm9sbGVyOiBtYXJrZXRfY29udHJvbGxlcl8xLk1hcmtldENvbnRyb2xsZXIgfSxcbiAgICAgICAgeyBjb250cm9sbGVyTmFtZTogXCJzeW1ib2xcIiwgY29udHJvbGxlcjogc3ltYm9sX2NvbnRyb2xsZXJfMS5TeW1ib2xDb250cm9sbGVyIH1cbiAgICBdLFxuICAgIG9uRXJyb3JIYW5kbGVyOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBhbGVydChcIlNvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvciBwbGVhc2UgY2hlY2sgb3V0IHRoZSBjb25zb2xlIGZvciBtb3JlIGluZm8hXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRvU3RyaW5nKCkpO1xuICAgIH1cbn07XG52YXIgbXlBcHAgPSBuZXcgZnJhbWV3b3JrXzEuQXBwKGFwcFNldHRpbmdzKTtcbm15QXBwLmluaXRpYWxpemUoKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZ3Y0M5dFlXbHVMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlEwRXNiMFJCUVdsRU8wRkJRMnBFTEhGRlFVRnRSVHRCUVVOdVJTeHhSVUZCYlVVN1FVRkZia1VzU1VGQlNTeFhRVUZYTEVkQlFXbENPMGxCUXpWQ0xFOUJRVThzUlVGQlJTeEpRVUZKTzBsQlEySXNhVUpCUVdsQ0xFVkJRVVVzVVVGQlVUdEpRVU16UWl4aFFVRmhMRVZCUVVVc1VVRkJVVHRKUVVOMlFpeFhRVUZYTEVWQlFVVTdVVUZEVkN4RlFVRkRMR05CUVdNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVlVGQlZTeEZRVUZGTEc5RFFVRm5RaXhGUVVGRE8xRkJRM2hFTEVWQlFVTXNZMEZCWXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hWUVVGVkxFVkJRVVVzYjBOQlFXZENMRVZCUVVNN1MwRkRNMFE3U1VGRFJDeGpRVUZqTEVWQlFVVXNWVUZCVXl4RFFVRlRPMUZCUXpsQ0xFdEJRVXNzUTBGQlF5dzBSVUZCTkVVc1EwRkJReXhEUVVGRE8xRkJRM0JHTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZET1VJc1EwRkJRenREUVVOS0xFTkJRVUU3UVVGRlJDeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMR1ZCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dEJRVU5xUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU1pTENKbWFXeGxJam9pWVhCd0wyMWhhVzR1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeThnUEhKbFptVnlaVzVqWlNCd1lYUm9QVndpTGk0dlpuSmhiV1YzYjNKckwybHVkR1Z5Wm1GalpYTXVkSE5jSWlBdlBseHlYRzVwYlhCdmNuUWdlMEZ3Y0N3Z1ZtbGxkMzBnWm5KdmJTQmNJaTR1TDJaeVlXMWxkMjl5YXk5bWNtRnRaWGR2Y210Y0lqdGNjbHh1YVcxd2IzSjBJSHNnVFdGeWEyVjBRMjl1ZEhKdmJHeGxjaUI5SUdaeWIyMGdYQ0l1TDJOdmJuUnliMnhzWlhKekwyMWhjbXRsZEY5amIyNTBjbTlzYkdWeVhDSTdYSEpjYm1sdGNHOXlkQ0I3SUZONWJXSnZiRU52Ym5SeWIyeHNaWElnZlNCbWNtOXRJRndpTGk5amIyNTBjbTlzYkdWeWN5OXplVzFpYjJ4ZlkyOXVkSEp2Ykd4bGNsd2lPMXh5WEc1Y2NseHVkbUZ5SUdGd2NGTmxkSFJwYm1kek9pQkpRWEJ3VTJWMGRHbHVaM01nUFNCN1hISmNiaUFnSUNCcGMwUmxZblZuT2lCMGNuVmxMRnh5WEc0Z0lDQWdaR1ZtWVhWc2RFTnZiblJ5YjJ4c1pYSTZJRndpYldGeWEyVjBYQ0lzWEhKY2JpQWdJQ0JrWldaaGRXeDBRV04wYVc5dU9pQmNJbTVoYzJSaGNWd2lMRnh5WEc0Z0lDQWdZMjl1ZEhKdmJHeGxjbk02SUZ0Y2NseHVJQ0FnSUNBZ0lDQjdZMjl1ZEhKdmJHeGxjazVoYldVNklGd2liV0Z5YTJWMFhDSXNJR052Ym5SeWIyeHNaWEk2SUUxaGNtdGxkRU52Ym5SeWIyeHNaWEo5TEZ4eVhHNGdJQ0FnSUNBZ0lIdGpiMjUwY205c2JHVnlUbUZ0WlRvZ1hDSnplVzFpYjJ4Y0lpd2dZMjl1ZEhKdmJHeGxjam9nVTNsdFltOXNRMjl1ZEhKdmJHeGxjbjFjY2x4dUlDQWdJRjBzWEhKY2JpQWdJQ0J2YmtWeWNtOXlTR0Z1Wkd4bGNqb2dablZ1WTNScGIyNG9aVG9nVDJKcVpXTjBLWHRjY2x4dUlDQWdJQ0FnSUNCaGJHVnlkQ2hjSWxOdmNuSjVMQ0IwYUdWeVpTQm9ZWE1nWW1WbGJpQmhiaUJsY25KdmNpQndiR1ZoYzJVZ1kyaGxZMnNnYjNWMElIUm9aU0JqYjI1emIyeGxJR1p2Y2lCdGIzSmxJR2x1Wm04aFhDSXBPMXh5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHVXVkRzlUZEhKcGJtY29LU2s3WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JuWmhjaUJ0ZVVGd2NDQTlJRzVsZHlCQmNIQW9ZWEJ3VTJWMGRHbHVaM01wTzF4eVhHNXRlVUZ3Y0M1cGJtbDBhV0ZzYVhwbEtDazdJbDE5XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZmFrZV9hNmIxZWJkZC5qc1wiLFwiL1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIik7XG52YXIgQ2hhcnRNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoYXJ0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhcnRNb2RlbChtZXRpYXRvcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgfVxuICAgIENoYXJ0TW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xuICAgICAgICAgICAgbmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLm1vZGVsLmNoYXJ0LmNoYW5nZVwiLCBudWxsLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKGFyZ3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICBDaGFydE1vZGVsLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlVG9FdmVudHMoKTtcbiAgICB9O1xuICAgIENoYXJ0TW9kZWwucHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHAgPSB7XG4gICAgICAgICAgICBOb3JtYWxpemU6IGZhbHNlLFxuICAgICAgICAgICAgTnVtYmVyT2ZEYXlzOiAzNjUsXG4gICAgICAgICAgICBEYXRhUGVyaW9kOiBcIkRheVwiLFxuICAgICAgICAgICAgRWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFN5bWJvbDogYXJncyxcbiAgICAgICAgICAgICAgICAgICAgVHlwZTogXCJwcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBQYXJhbTogW1wib2hsY1wiXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gXCJwYXJhbWV0ZXJzPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHApKTtcbiAgICAgICAgdGhpcy5nZXRBc3luYyhcImpzb25wXCIsIHF1ZXJ5U3RyaW5nKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBjaGFydERhdGEgPSBfdGhpcy5mb3JtYXRNb2RlbChhcmdzLCBkYXRhKTtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAudmlldy5jaGFydC5yZW5kZXJcIiwgY2hhcnREYXRhLCBudWxsKSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAuZXJyb3JcIiwgZSwgbnVsbCkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoYXJ0TW9kZWwucHJvdG90eXBlLmZvcm1hdE1vZGVsID0gZnVuY3Rpb24gKHN5bWJvbCwgZGF0YSkge1xuICAgICAgICB2YXIgY2hhcnREYXRhID0ge1xuICAgICAgICAgICAgdGl0bGU6IHN5bWJvbCxcbiAgICAgICAgICAgIHNlcmllczogW11cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNlcmllcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm9wZW5cIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLkVsZW1lbnRzWzBdLkRhdGFTZXJpZXMub3Blbi52YWx1ZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEuRWxlbWVudHNbMF0uRGF0YVNlcmllcy5jbG9zZS52YWx1ZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YS5FbGVtZW50c1swXS5EYXRhU2VyaWVzLmhpZ2gudmFsdWVzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YS5FbGVtZW50c1swXS5EYXRhU2VyaWVzLmxvdy52YWx1ZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VyaWUgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogc2VyaWVzW2ldLm5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcmllc1tpXS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHNlcmllc1tpXS5kYXRhW2pdO1xuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoZGF0YS5EYXRlc1tqXSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHNlcmllLmRhdGEucHVzaChbZCwgdmFsXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFydERhdGEuc2VyaWVzLnB1c2goc2VyaWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFydERhdGE7XG4gICAgfTtcbiAgICBDaGFydE1vZGVsID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGZyYW1ld29ya18xLk1vZGVsU2V0dGluZ3MoXCJodHRwOi8vZGV2Lm1hcmtpdG9uZGVtYW5kLmNvbS9BcGkvdjIvSW50ZXJhY3RpdmVDaGFydC9qc29ucFwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKVxuICAgIF0sIENoYXJ0TW9kZWwpO1xuICAgIHJldHVybiBDaGFydE1vZGVsO1xufShmcmFtZXdvcmtfMS5Nb2RlbCkpO1xuZXhwb3J0cy5DaGFydE1vZGVsID0gQ2hhcnRNb2RlbDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZ3Y0M5dGIyUmxiSE12WTJoaGNuUmZiVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUlVFc2RVUkJRVEpGTzBGQlJ6TkZPMGxCUVhsQ0xEaENRVUZMTzBsQlF6RkNMRzlDUVVGWkxGRkJRVzFDTzJWQlF6TkNMR3RDUVVGTkxGRkJRVkVzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlUwc0swSkJRVlVzUjBGQmFrSTdVVUZCUVN4cFFrRk5RenRSUVV4SExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRaUVVOdVFpeEpRVUZKTEc5Q1FVRlJMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVVNc1EwRkJReXhGUVVGRkxFbEJRVWs3WjBKQlEycEVMRXRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZUVJc1EwRkJReXhEUVVGRE8xTkJRMHdzUTBGQlF5eERRVUZCTzBsQlEwNHNRMEZCUXp0SlFVVk5MRFJDUVVGUExFZEJRV1E3VVVGRFNTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUlU4c05rSkJRVkVzUjBGQmFFSXNWVUZCYVVJc1NVRkJTVHRSUVVGeVFpeHBRa0Z6UWtNN1VVRnlRa2NzU1VGQlNTeERRVUZETEVkQlFVYzdXVUZEU2l4VFFVRlRMRVZCUVVVc1MwRkJTenRaUVVOb1FpeFpRVUZaTEVWQlFVVXNSMEZCUnp0WlFVTnFRaXhWUVVGVkxFVkJRVVVzUzBGQlN6dFpRVU5xUWl4UlFVRlJMRVZCUVVVN1owSkJRMDQ3YjBKQlEwa3NUVUZCVFN4RlFVRkZMRWxCUVVrN2IwSkJRMW9zU1VGQlNTeEZRVUZGTEU5QlFVODdiMEpCUTJJc1MwRkJTeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETzJsQ1FVTnNRanRoUVVOS08xTkJRMG9zUTBGQlF6dFJRVU5HTEVsQlFVa3NWMEZCVnl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZUVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNWMEZCVnl4RFFVRkRPMkZCUXpsQ0xFbEJRVWtzUTBGQlF5eFZRVUZETEVsQlFVazdXVUZEVUN4SlFVRkpMRk5CUVZNc1IwRkJSeXhMUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVNM1F5eExRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc2IwSkJRVkVzUTBGQlF5eDFRa0ZCZFVJc1JVRkJSU3hUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTTVSU3hEUVVGRExFTkJRVU03WVVGRFJDeExRVUZMTEVOQlFVTXNWVUZCUXl4RFFVRkRPMWxCUTB3c1MwRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEc5Q1FVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExZ3NRMEZCUXp0SlFVVlBMR2REUVVGWExFZEJRVzVDTEZWQlFXOUNMRTFCUVUwc1JVRkJSU3hKUVVGSk8xRkJRelZDTEVsQlFVa3NVMEZCVXl4SFFVRkhPMWxCUTFvc1MwRkJTeXhGUVVGRkxFMUJRVTA3V1VGRFlpeE5RVUZOTEVWQlFVVXNSVUZCUlR0VFFVTmlMRU5CUVVNN1VVRkRSaXhKUVVGSkxFMUJRVTBzUjBGQlJ6dFpRVU5VTzJkQ1FVTkpMRWxCUVVrc1JVRkJSU3hOUVVGTk8yZENRVU5hTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUVHRoUVVOb1JEdFpRVU5FTzJkQ1FVTkpMRWxCUVVrc1JVRkJSU3hQUVVGUE8yZENRVU5pTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUVHRoUVVOcVJEdFpRVU5FTzJkQ1FVTkpMRWxCUVVrc1JVRkJSU3hOUVVGTk8yZENRVU5hTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUVHRoUVVOb1JEdFpRVU5FTzJkQ1FVTkpMRWxCUVVrc1JVRkJSU3hMUVVGTE8yZENRVU5ZTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUVHRoUVVNdlF6dFRRVU5LTEVOQlFVTTdVVUZEUml4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UXl4SlFVRkpMRXRCUVVzc1IwRkJSenRuUWtGRFVpeEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWs3WjBKQlEzQkNMRWxCUVVrc1JVRkJSU3hGUVVGRk8yRkJRMWdzUTBGQlFUdFpRVU5FTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0blFrRkROVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkROVUlzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yZENRVU14UXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRemRDTzFsQlEwUXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYUVNN1VVRkRSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVWR5UWl4RFFVRkRPMGxCTDBWRExGVkJRVlU3VVVGRVppeDVRa0ZCWVN4RFFVRkRMRFpFUVVFMlJDeERRVUZET3p0UFFVTjJSU3hWUVVGVkxFTkJaMFptTzBsQlFVUXNhVUpCUVVNN1EwRm9Sa1FzUVVGblJrTXNRMEZvUm5kQ0xHbENRVUZMTEVkQlowWTNRanRCUVVWUkxHZERRVUZWSWl3aVptbHNaU0k2SW1Gd2NDOXRiMlJsYkhNdlkyaGhjblJmYlc5a1pXd3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5OGdQSEpsWm1WeVpXNWpaU0J3WVhSb1BWd2lMaTR2TGk0dlpuSmhiV1YzYjNKckwybHVkR1Z5Wm1GalpYTXVkSE5jSWlBdlBseHlYRzVjY2x4dWFXMXdiM0owSUhzZ1RXOWtaV3dzSUVGd2NFVjJaVzUwTENCTmIyUmxiRk5sZEhScGJtZHpJSDBnWm5KdmJTQmNJaTR1THk0dUwyWnlZVzFsZDI5eWF5OW1jbUZ0WlhkdmNtdGNJanRjY2x4dVhISmNia0JOYjJSbGJGTmxkSFJwYm1kektGd2lhSFIwY0RvdkwyUmxkaTV0WVhKcmFYUnZibVJsYldGdVpDNWpiMjB2UVhCcEwzWXlMMGx1ZEdWeVlXTjBhWFpsUTJoaGNuUXZhbk52Ym5CY0lpbGNjbHh1WTJ4aGMzTWdRMmhoY25STmIyUmxiQ0JsZUhSbGJtUnpJRTF2WkdWc0lHbHRjR3hsYldWdWRITWdTVTF2WkdWc0lIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzFsZEdsaGRHOXlPaUJKVFdWa2FXRjBiM0lwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpkWEJsY2lodFpYUnBZWFJ2Y2lsY2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ2FXNXBkR2xoYkdsNlpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4xWW5OamNtbGlaVlJ2UlhabGJuUnpLRnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzSUVGd2NFVjJaVzUwS0Z3aVlYQndMbTF2WkdWc0xtTm9ZWEowTG1Ob1lXNW5aVndpTENCdWRXeHNMQ0FvWlN3Z1lYSm5jeWtnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrTm9ZVzVuWlNoaGNtZHpLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNCZEtWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEIxWW14cFl5QmthWE53YjNObEtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkVzV6ZFdKelkzSnBZbVZVYjBWMlpXNTBjeWdwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2IyNURhR0Z1WjJVb1lYSm5jeWs2SUhadmFXUWdlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQndJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JPYjNKdFlXeHBlbVU2SUdaaGJITmxMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQk9kVzFpWlhKUFprUmhlWE02SURNMk5TeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1JHRjBZVkJsY21sdlpEb2dYQ0pFWVhsY0lpeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1JXeGxiV1Z1ZEhNNklGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQlRlVzFpYjJ3NklHRnlaM01zWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdWSGx3WlRvZ1hDSndjbWxqWlZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZCaGNtRnRPaUJiWENKdmFHeGpYQ0pkWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUYxY2NseHVJQ0FnSUNBZ0lDQjlPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnhkV1Z5ZVZOMGNtbHVaeUE5SUZ3aWNHRnlZVzFsZEdWeWN6MWNJaUFySUdWdVkyOWtaVlZTU1VOdmJYQnZibVZ1ZENoS1UwOU9Mbk4wY21sdVoybG1lU2h3S1NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1blpYUkJjM2x1WXloY0ltcHpiMjV3WENJc0lIRjFaWEo1VTNSeWFXNW5LVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVkR2hsYmlnb1pHRjBZU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdOb1lYSjBSR0YwWVNBOUlIUm9hWE11Wm05eWJXRjBUVzlrWld3b1lYSm5jeXdnWkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnlhV2RuWlhKRmRtVnVkQ2h1WlhjZ1FYQndSWFpsYm5Rb1hDSmhjSEF1ZG1sbGR5NWphR0Z5ZEM1eVpXNWtaWEpjSWl3Z1kyaGhjblJFWVhSaExDQnVkV3hzS1NrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1allYUmphQ2dvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBjbWxuWjJWeVJYWmxiblFvYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG1WeWNtOXlYQ0lzSUdVc0lHNTFiR3dwS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQm1iM0p0WVhSTmIyUmxiQ2h6ZVcxaWIyd3NJR1JoZEdFcElIdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ1kyaGhjblJFWVhSaElEMGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhWFJzWlRvZ2MzbHRZbTlzTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhKcFpYTTZJRnRkWEhKY2JpQWdJQ0FnSUNBZ2ZUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2MyVnlhV1Z6SUQwZ1cxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsT2lCY0ltOXdaVzVjSWl4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0U2SUdSaGRHRXVSV3hsYldWdWRITmJNRjB1UkdGMFlWTmxjbWxsY3k1dmNHVnVMblpoYkhWbGMxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsT2lCY0ltTnNiM05sWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhMa1ZzWlcxbGJuUnpXekJkTGtSaGRHRlRaWEpwWlhNdVkyeHZjMlV1ZG1Gc2RXVnpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklGd2lhR2xuYUZ3aUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0YwWVRvZ1pHRjBZUzVGYkdWdFpXNTBjMXN3WFM1RVlYUmhVMlZ5YVdWekxtaHBaMmd1ZG1Gc2RXVnpYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklGd2liRzkzWENJc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhMa1ZzWlcxbGJuUnpXekJkTGtSaGRHRlRaWEpwWlhNdWJHOTNMblpoYkhWbGMxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJRjA3WEhKY2JpQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpaWEpwWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhObGNtbGxJRDBnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaVG9nYzJWeWFXVnpXMmxkTG01aGJXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaE9pQmJYVnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHb2dQU0F3T3lCcUlEd2djMlZ5YVdWelcybGRMbVJoZEdFdWJHVnVaM1JvT3lCcUt5c3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQjJZV3dnUFNCelpYSnBaWE5iYVYwdVpHRjBZVnRxWFR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJrSUQwZ2JtVjNJRVJoZEdVb1pHRjBZUzVFWVhSbGMxdHFYU2t1WjJWMFZHbHRaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyVnlhV1V1WkdGMFlTNXdkWE5vS0Z0a0xDQjJZV3hkS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYUdGeWRFUmhkR0V1YzJWeWFXVnpMbkIxYzJnb2MyVnlhV1VwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMmhoY25SRVlYUmhPMXh5WEc1Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0I3SUVOb1lYSjBUVzlrWld3Z2ZTSmRmUT09XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvbW9kZWxzXFxcXGNoYXJ0X21vZGVsLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwiLi4vLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiKTtcbnZhciBOYXNkYXFNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5hc2RhcU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5hc2RhcU1vZGVsKG1ldGlhdG9yKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBtZXRpYXRvcikgfHwgdGhpcztcbiAgICB9XG4gICAgTmFzZGFxTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xuICAgICAgICAgICAgbmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLm1vZGVsLm5hc2RhcS5jaGFuZ2VcIiwgbnVsbCwgZnVuY3Rpb24gKGUsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNoYW5nZShhcmdzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH07XG4gICAgTmFzZGFxTW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH07XG4gICAgTmFzZGFxTW9kZWwucHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXRBc3luYyhcImpzb25cIiwgYXJncylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgc3RvY2tzID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcmtldDogXCJOQVNEQVFcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXJFdmVudChuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAudmlldy5tYXJrZXQucmVuZGVyXCIsIHN0b2NrcywgbnVsbCkpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLmVycm9yXCIsIGUsIG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOYXNkYXFNb2RlbCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBmcmFtZXdvcmtfMS5Nb2RlbFNldHRpbmdzKFwiLi9kYXRhL25hc2RhcS5qc29uXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXG4gICAgXSwgTmFzZGFxTW9kZWwpO1xuICAgIHJldHVybiBOYXNkYXFNb2RlbDtcbn0oZnJhbWV3b3JrXzEuTW9kZWwpKTtcbmV4cG9ydHMuTmFzZGFxTW9kZWwgPSBOYXNkYXFNb2RlbDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZ3Y0M5dGIyUmxiSE12Ym1GelpHRnhYMjF2WkdWc0xuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVWQkxIVkVRVUV5UlR0QlFVY3pSVHRKUVVFd1Fpd3JRa0ZCU3p0SlFVTXpRaXh4UWtGQldTeFJRVUZ0UWp0bFFVTXpRaXhyUWtGQlRTeFJRVUZSTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWTkxHZERRVUZWTEVkQlFXcENPMUZCUVVFc2FVSkJUVU03VVVGTVJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03V1VGRGJrSXNTVUZCU1N4dlFrRkJVU3hEUVVGRExIbENRVUY1UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTzJkQ1FVTnNSQ3hMUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMWxCUTNoQ0xFTkJRVU1zUTBGQlF6dFRRVU5NTEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNN1NVRkZUU3cyUWtGQlR5eEhRVUZrTzFGQlEwa3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVVWUExEaENRVUZSTEVkQlFXaENMRlZCUVdsQ0xFbEJRVWs3VVVGQmNrSXNhVUpCV1VNN1VVRllSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNN1lVRkRkRUlzU1VGQlNTeERRVUZETEZWQlFVTXNTVUZCU1R0WlFVTlFMRWxCUVVrc1RVRkJUU3hIUVVGSE8yZENRVU5VTEV0QlFVc3NSVUZCUlN4SlFVRkpPMmRDUVVOWUxFMUJRVTBzUlVGQlJTeFJRVUZSTzJGQlEyNUNMRU5CUVVNN1dVRkRSaXhMUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NiMEpCUVZFc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU0xUlN4RFFVRkRMRU5CUVVNN1lVRkRSQ3hMUVVGTExFTkJRVU1zVlVGQlF5eERRVUZETzFsQlEwd3NTMEZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhKUVVGSkxHOUNRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkVMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMWdzUTBGQlF6dEpRVGRDUXl4WFFVRlhPMUZCUkdoQ0xIbENRVUZoTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU03TzA5QlF6bENMRmRCUVZjc1EwRXJRbWhDTzBsQlFVUXNhMEpCUVVNN1EwRXZRa1FzUVVFclFrTXNRMEV2UW5sQ0xHbENRVUZMTEVkQkswSTVRanRCUVVWUkxHdERRVUZYSWl3aVptbHNaU0k2SW1Gd2NDOXRiMlJsYkhNdmJtRnpaR0Z4WDIxdlpHVnNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OHZJRHh5WldabGNtVnVZMlVnY0dGMGFEMWNJaTR1THk0dUwyWnlZVzFsZDI5eWF5OXBiblJsY21aaFkyVnpMblJ6WENJZ0x6NWNjbHh1WEhKY2JtbHRjRzl5ZENCN0lFMXZaR1ZzTENCQmNIQkZkbVZ1ZEN3Z1RXOWtaV3hUWlhSMGFXNW5jeUI5SUdaeWIyMGdYQ0l1TGk4dUxpOW1jbUZ0WlhkdmNtc3ZabkpoYldWM2IzSnJYQ0k3WEhKY2JseHlYRzVBVFc5a1pXeFRaWFIwYVc1bmN5aGNJaTR2WkdGMFlTOXVZWE5rWVhFdWFuTnZibHdpS1Z4eVhHNWpiR0Z6Y3lCT1lYTmtZWEZOYjJSbGJDQmxlSFJsYm1SeklFMXZaR1ZzSUdsdGNHeGxiV1Z1ZEhNZ1NVMXZaR1ZzSUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHMWxkR2xoZEc5eU9pQkpUV1ZrYVdGMGIzSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWh0WlhScFlYUnZjaWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NIVmliR2xqSUdsdWFYUnBZV3hwZW1Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVlViMFYyWlc1MGN5aGJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJCY0hCRmRtVnVkQ2hjSW1Gd2NDNXRiMlJsYkM1dVlYTmtZWEV1WTJoaGJtZGxYQ0lzSUc1MWJHd3NJQ2hsTENCaGNtZHpLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyaGhibWRsS0dGeVozTXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh5WEc0Z0lDQWdJQ0FnSUYwcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEIxWW14cFl5QmthWE53YjNObEtDbDdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibk4xWW5OamNtbGlaVlJ2UlhabGJuUnpLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCdmJrTm9ZVzVuWlNoaGNtZHpLVG9nZG05cFpIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGxkRUZ6ZVc1aktGd2lhbk52Ymx3aUxDQmhjbWR6S1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEdobGJpZ29aR0YwWVNrOVBudGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCemRHOWphM01nUFNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVhSbGJYTTZJR1JoZEdFc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGeWEyVjBPaUJjSWs1QlUwUkJVVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MGNtbG5aMlZ5UlhabGJuUW9ibVYzSUVGd2NFVjJaVzUwS0Z3aVlYQndMblpwWlhjdWJXRnlhMlYwTG5KbGJtUmxjbHdpTENCemRHOWphM01zSUc1MWJHd3BLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbU5oZEdOb0tDaGxLVDArZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUwY21sbloyVnlSWFpsYm5Rb2JtVjNJRUZ3Y0VWMlpXNTBLRndpWVhCd0xtVnljbTl5WENJc0lHVXNJRzUxYkd3cEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ2V5Qk9ZWE5rWVhGTmIyUmxiQ0I5T3lKZGZRPT1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9tb2RlbHNcXFxcbmFzZGFxX21vZGVsLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwiLi4vLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiKTtcbnZhciBOeXNlTW9kZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOeXNlTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTnlzZU1vZGVsKG1ldGlhdG9yKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBtZXRpYXRvcikgfHwgdGhpcztcbiAgICB9XG4gICAgTnlzZU1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVRvRXZlbnRzKFtcbiAgICAgICAgICAgIG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC5tb2RlbC5uYXNkYXEuY2hhbmdlXCIsIG51bGwsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoYXJncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIE55c2VNb2RlbC5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZVRvRXZlbnRzKCk7XG4gICAgfTtcbiAgICBOeXNlTW9kZWwucHJvdG90eXBlLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXRBc3luYyhcImpzb25cIiwgYXJncylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgc3RvY2tzID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcmtldDogXCJOWVNFXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLnZpZXcubWFya2V0LnJlbmRlclwiLCBzdG9ja3MsIG51bGwpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC5lcnJvclwiLCBlLCBudWxsKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTnlzZU1vZGVsID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGZyYW1ld29ya18xLk1vZGVsU2V0dGluZ3MoXCIuL2RhdGEvbnlzZS5qc29uXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXG4gICAgXSwgTnlzZU1vZGVsKTtcbiAgICByZXR1cm4gTnlzZU1vZGVsO1xufShmcmFtZXdvcmtfMS5Nb2RlbCkpO1xuZXhwb3J0cy5OeXNlTW9kZWwgPSBOeXNlTW9kZWw7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOXRiMlJsYkhNdmJubHpaVjl0YjJSbGJDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGRlFTeDFSRUZCTWtVN1FVRkhNMFU3U1VGQmQwSXNOa0pCUVVzN1NVRkRla0lzYlVKQlFWa3NVVUZCYlVJN1pVRkRNMElzYTBKQlFVMHNVVUZCVVN4RFFVRkRPMGxCUTI1Q0xFTkJRVU03U1VGRlRTdzRRa0ZCVlN4SFFVRnFRanRSUVVGQkxHbENRVTFETzFGQlRFY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETzFsQlEyNUNMRWxCUVVrc2IwSkJRVkVzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSU3hKUVVGSkxFVkJRVVVzVlVGQlF5eERRVUZETEVWQlFVVXNTVUZCU1R0blFrRkRiRVFzUzBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONFFpeERRVUZETEVOQlFVTTdVMEZEVEN4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJSVTBzTWtKQlFVOHNSMEZCWkR0UlFVTkpMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRlR5dzBRa0ZCVVN4SFFVRm9RaXhWUVVGcFFpeEpRVUZKTzFGQlFYSkNMR2xDUVZsRE8xRkJXRWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRE8yRkJRM1JDTEVsQlFVa3NRMEZCUXl4VlFVRkRMRWxCUVVrN1dVRkRVQ3hKUVVGSkxFMUJRVTBzUjBGQlJ6dG5Ra0ZEVkN4TFFVRkxMRVZCUVVVc1NVRkJTVHRuUWtGRFdDeE5RVUZOTEVWQlFVVXNUVUZCVFR0aFFVTnFRaXhEUVVGRE8xbEJRMFlzUzBGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRzlDUVVGUkxFTkJRVU1zZDBKQlFYZENMRVZCUVVVc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETlVVc1EwRkJReXhEUVVGRE8yRkJRMFFzUzBGQlN5eERRVUZETEZWQlFVTXNRMEZCUXp0WlFVTk1MRXRCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeHZRa0ZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTXhSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5ZTEVOQlFVTTdTVUUzUWtNc1UwRkJVenRSUVVSa0xIbENRVUZoTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03TzA5QlF6VkNMRk5CUVZNc1EwRXJRbVE3U1VGQlJDeG5Ra0ZCUXp0RFFTOUNSQ3hCUVN0Q1F5eERRUzlDZFVJc2FVSkJRVXNzUjBFclFqVkNPMEZCUlZFc09FSkJRVk1pTENKbWFXeGxJam9pWVhCd0wyMXZaR1ZzY3k5dWVYTmxYMjF2WkdWc0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4dklEeHlaV1psY21WdVkyVWdjR0YwYUQxY0lpNHVMeTR1TDJaeVlXMWxkMjl5YXk5cGJuUmxjbVpoWTJWekxuUnpYQ0lnTHo1Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUUxdlpHVnNMQ0JCY0hCRmRtVnVkQ3dnVFc5a1pXeFRaWFIwYVc1bmN5QjlJR1p5YjIwZ1hDSXVMaTh1TGk5bWNtRnRaWGR2Y21zdlpuSmhiV1YzYjNKclhDSTdYSEpjYmx4eVhHNUFUVzlrWld4VFpYUjBhVzVuY3loY0lpNHZaR0YwWVM5dWVYTmxMbXB6YjI1Y0lpbGNjbHh1WTJ4aGMzTWdUbmx6WlUxdlpHVnNJR1Y0ZEdWdVpITWdUVzlrWld3Z2FXMXdiR1Z0Wlc1MGN5QkpUVzlrWld3Z2UxeHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9iV1YwYVdGMGIzSTZJRWxOWldScFlYUnZjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0cxbGRHbGhkRzl5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ2FXNXBkR2xoYkdsNlpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbk4xWW5OamNtbGlaVlJ2UlhabGJuUnpLRnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzSUVGd2NFVjJaVzUwS0Z3aVlYQndMbTF2WkdWc0xtNWhjMlJoY1M1amFHRnVaMlZjSWl3Z2JuVnNiQ3dnS0dVc0lHRnlaM01wSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNURhR0Z1WjJVb1lYSm5jeWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ1hTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJR1JwYzNCdmMyVW9LWHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMblZ1YzNWaWMyTnlhV0psVkc5RmRtVnVkSE1vS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndjbWwyWVhSbElHOXVRMmhoYm1kbEtHRnlaM01wT2lCMmIybGtlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMlYwUVhONWJtTW9YQ0pxYzI5dVhDSXNJR0Z5WjNNcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUM1MGFHVnVLQ2hrWVhSaEtUMCtlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlITjBiMk5yY3lBOUlIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGRHVnRjem9nWkdGMFlTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFlYSnJaWFE2SUZ3aVRsbFRSVndpWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MGNtbG5aMlZ5UlhabGJuUW9ibVYzSUVGd2NFVjJaVzUwS0Z3aVlYQndMblpwWlhjdWJXRnlhMlYwTG5KbGJtUmxjbHdpTENCemRHOWphM01zSUc1MWJHd3BLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdMbU5oZEdOb0tDaGxLVDArZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUwY21sbloyVnlSWFpsYm5Rb2JtVjNJRUZ3Y0VWMlpXNTBLRndpWVhCd0xtVnljbTl5WENJc0lHVXNJRzUxYkd3cEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ2V5Qk9lWE5sVFc5a1pXd2dmVHNpWFgwPVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL21vZGVsc1xcXFxueXNlX21vZGVsLmpzXCIsXCIvbW9kZWxzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWV3b3JrXzEgPSByZXF1aXJlKFwiLi4vLi4vZnJhbWV3b3JrL2ZyYW1ld29ya1wiKTtcbnZhciBRdW90ZU1vZGVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVvdGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBRdW90ZU1vZGVsKG1ldGlhdG9yKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBtZXRpYXRvcikgfHwgdGhpcztcbiAgICB9XG4gICAgUXVvdGVNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXG4gICAgICAgICAgICBuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAubW9kZWwucXVvdGUuY2hhbmdlXCIsIG51bGwsIGZ1bmN0aW9uIChlLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoYXJncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIFF1b3RlTW9kZWwucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH07XG4gICAgUXVvdGVNb2RlbC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcyA9IHsgc3ltYm9sOiBhcmdzIH07XG4gICAgICAgIHRoaXMuZ2V0QXN5bmMoXCJqc29ucFwiLCBzKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBxdW90ZSA9IF90aGlzLmZvcm1hdE1vZGVsKGRhdGEpO1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC52aWV3LnN5bWJvbC5yZW5kZXJcIiwgcXVvdGUsIG51bGwpKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC5lcnJvclwiLCBlLCBudWxsKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUXVvdGVNb2RlbC5wcm90b3R5cGUuZm9ybWF0TW9kZWwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhLkNoYW5nZSA9IGRhdGEuQ2hhbmdlLnRvRml4ZWQoMik7XG4gICAgICAgIGRhdGEuQ2hhbmdlUGVyY2VudCA9IGRhdGEuQ2hhbmdlUGVyY2VudC50b0ZpeGVkKDIpO1xuICAgICAgICBkYXRhLlRpbWVzdGFtcCA9IG5ldyBEYXRlKGRhdGEuVGltZXN0YW1wKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgZGF0YS5NYXJrZXRDYXAgPSAoZGF0YS5NYXJrZXRDYXAgLyAxMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJNLlwiO1xuICAgICAgICBkYXRhLkNoYW5nZVBlcmNlbnRZVEQgPSBkYXRhLkNoYW5nZVBlcmNlbnRZVEQudG9GaXhlZCgyKTtcbiAgICAgICAgcmV0dXJuIHsgcXVvdGU6IGRhdGEgfTtcbiAgICB9O1xuICAgIFF1b3RlTW9kZWwgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZnJhbWV3b3JrXzEuTW9kZWxTZXR0aW5ncyhcImh0dHA6Ly9kZXYubWFya2l0b25kZW1hbmQuY29tL0FwaS92Mi9RdW90ZS9qc29ucFwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKVxuICAgIF0sIFF1b3RlTW9kZWwpO1xuICAgIHJldHVybiBRdW90ZU1vZGVsO1xufShmcmFtZXdvcmtfMS5Nb2RlbCkpO1xuZXhwb3J0cy5RdW90ZU1vZGVsID0gUXVvdGVNb2RlbDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZ3Y0M5dGIyUmxiSE12Y1hWdmRHVmZiVzlrWld3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUlVFc2RVUkJRVEpGTzBGQlJ6TkZPMGxCUVhsQ0xEaENRVUZMTzBsQlF6RkNMRzlDUVVGWkxGRkJRVzFDTzJWQlF6TkNMR3RDUVVGTkxGRkJRVkVzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlUwc0swSkJRVlVzUjBGQmFrSTdVVUZCUVN4cFFrRk5RenRSUVV4SExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRaUVVOdVFpeEpRVUZKTEc5Q1FVRlJMRU5CUVVNc2QwSkJRWGRDTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVVNc1EwRkJReXhGUVVGRkxFbEJRVWs3WjBKQlEycEVMRXRCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZEZUVJc1EwRkJReXhEUVVGRE8xTkJRMHdzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVk5MRFJDUVVGUExFZEJRV1E3VVVGRFNTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzUTBGQlF6dEpRVU12UWl4RFFVRkRPMGxCUlU4c05rSkJRVkVzUjBGQmFFSXNWVUZCYVVJc1NVRkJTVHRSUVVGeVFpeHBRa0ZWUXp0UlFWUkhMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOd1FpeEpRVUZKTEVOQlFVTXNWVUZCUXl4SlFVRkpPMWxCUTFBc1NVRkJTU3hMUVVGTExFZEJRVWNzUzBGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVOdVF5eExRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc2IwSkJRVkVzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVTXhSU3hEUVVGRExFTkJRVU03WVVGRFJDeExRVUZMTEVOQlFVTXNWVUZCUXl4RFFVRkRPMWxCUTB3c1MwRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEc5Q1FVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpGRUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExZ3NRMEZCUXp0SlFVVlBMR2REUVVGWExFZEJRVzVDTEZWQlFXOUNMRWxCUVVrN1VVRkRjRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyNUVMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExHdENRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkRMMFFzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF6dFJRVU01UkN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVONlJDeFBRVUZQTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZ3UTBNc1ZVRkJWVHRSUVVSbUxIbENRVUZoTEVOQlFVTXNhMFJCUVd0RUxFTkJRVU03TzA5QlF6VkVMRlZCUVZVc1EwRnhRMlk3U1VGQlJDeHBRa0ZCUXp0RFFYSkRSQ3hCUVhGRFF5eERRWEpEZDBJc2FVSkJRVXNzUjBGeFF6ZENPMEZCUlZFc1owTkJRVlVpTENKbWFXeGxJam9pWVhCd0wyMXZaR1ZzY3k5eGRXOTBaVjl0YjJSbGJDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dkx5QThjbVZtWlhKbGJtTmxJSEJoZEdnOVhDSXVMaTh1TGk5bWNtRnRaWGR2Y21zdmFXNTBaWEptWVdObGN5NTBjMXdpSUM4K1hISmNibHh5WEc1cGJYQnZjblFnZXlCTmIyUmxiQ3dnUVhCd1JYWmxiblFzSUUxdlpHVnNVMlYwZEdsdVozTWdmU0JtY205dElGd2lMaTR2TGk0dlpuSmhiV1YzYjNKckwyWnlZVzFsZDI5eWExd2lPMXh5WEc1Y2NseHVRRTF2WkdWc1UyVjBkR2x1WjNNb1hDSm9kSFJ3T2k4dlpHVjJMbTFoY210cGRHOXVaR1Z0WVc1a0xtTnZiUzlCY0drdmRqSXZVWFZ2ZEdVdmFuTnZibkJjSWlsY2NseHVZMnhoYzNNZ1VYVnZkR1ZOYjJSbGJDQmxlSFJsYm1SeklFMXZaR1ZzSUdsdGNHeGxiV1Z1ZEhNZ1NVMXZaR1ZzSUh0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHMWxkR2xoZEc5eU9pQkpUV1ZrYVdGMGIzSXBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWh0WlhScFlYUnZjaWs3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NIVmliR2xqSUdsdWFYUnBZV3hwZW1Vb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVlViMFYyWlc1MGN5aGJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJCY0hCRmRtVnVkQ2hjSW1Gd2NDNXRiMlJsYkM1eGRXOTBaUzVqYUdGdVoyVmNJaXdnYm5Wc2JDd2dLR1VzSUdGeVozTXBJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RGFHRnVaMlVvWVhKbmN5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBYSEpjYmlBZ0lDQWdJQ0FnWFNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSFZpYkdsaklHUnBjM0J2YzJVb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibk4xWW5OamNtbGlaVlJ2UlhabGJuUnpLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCdmJrTm9ZVzVuWlNoaGNtZHpLVG9nZG05cFpDQjdYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlITWdQU0I3SUhONWJXSnZiRG9nWVhKbmN5QjlPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaMlYwUVhONWJtTW9YQ0pxYzI5dWNGd2lMQ0J6S1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1ZEdobGJpZ29aR0YwWVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIRjFiM1JsSUQwZ2RHaHBjeTVtYjNKdFlYUk5iMlJsYkNoa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkSEpwWjJkbGNrVjJaVzUwS0c1bGR5QkJjSEJGZG1WdWRDaGNJbUZ3Y0M1MmFXVjNMbk41YldKdmJDNXlaVzVrWlhKY0lpd2djWFZ2ZEdVc0lHNTFiR3dwS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0F1WTJGMFkyZ29LR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRISnBaMmRsY2tWMlpXNTBLRzVsZHlCQmNIQkZkbVZ1ZENoY0ltRndjQzVsY25KdmNsd2lMQ0JsTENCdWRXeHNLU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1ptOXliV0YwVFc5a1pXd29aR0YwWVNrZ2UxeHlYRzRnSUNBZ0lDQWdJR1JoZEdFdVEyaGhibWRsSUQwZ1pHRjBZUzVEYUdGdVoyVXVkRzlHYVhobFpDZ3lLVHRjY2x4dUlDQWdJQ0FnSUNCa1lYUmhMa05vWVc1blpWQmxjbU5sYm5RZ1BTQmtZWFJoTGtOb1lXNW5aVkJsY21ObGJuUXVkRzlHYVhobFpDZ3lLVHRjY2x4dUlDQWdJQ0FnSUNCa1lYUmhMbFJwYldWemRHRnRjQ0E5SUc1bGR5QkVZWFJsS0dSaGRHRXVWR2x0WlhOMFlXMXdLUzUwYjB4dlkyRnNaVVJoZEdWVGRISnBibWNvS1R0Y2NseHVJQ0FnSUNBZ0lDQmtZWFJoTGsxaGNtdGxkRU5oY0NBOUlDaGtZWFJoTGsxaGNtdGxkRU5oY0NBdklERXdNREF3TURBcExuUnZSbWw0WldRb01pa2dLeUJjSWswdVhDSTdYSEpjYmlBZ0lDQWdJQ0FnWkdGMFlTNURhR0Z1WjJWUVpYSmpaVzUwV1ZSRUlEMGdaR0YwWVM1RGFHRnVaMlZRWlhKalpXNTBXVlJFTG5SdlJtbDRaV1FvTWlrN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2djWFZ2ZEdVNklHUmhkR0VnZlR0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElIc2dVWFZ2ZEdWTmIyUmxiQ0I5SWwxOVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL21vZGVsc1xcXFxxdW90ZV9tb2RlbC5qc1wiLFwiL21vZGVsc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIik7XG52YXIgQ2hhcnRWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhcnRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYXJ0VmlldyhtZXRpYXRvcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgfVxuICAgIENoYXJ0Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXG4gICAgICAgICAgICBuZXcgZnJhbWV3b3JrXzEuQXBwRXZlbnQoXCJhcHAudmlldy5jaGFydC5yZW5kZXJcIiwgbnVsbCwgZnVuY3Rpb24gKGUsIG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyQ2hhcnQobW9kZWwpO1xuICAgICAgICAgICAgICAgIF90aGlzLmJpbmREb21FdmVudHMobW9kZWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICBDaGFydFZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9tRXZlbnRzKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH07XG4gICAgQ2hhcnRWaWV3LnByb3RvdHlwZS5iaW5kRG9tRXZlbnRzID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBzY29wZSA9ICQodGhpcy5fY29udGFpbmVyKTtcbiAgICB9O1xuICAgIENoYXJ0Vmlldy5wcm90b3R5cGUudW5iaW5kRG9tRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLl9jb250YWluZXI7XG4gICAgfTtcbiAgICBDaGFydFZpZXcucHJvdG90eXBlLnJlbmRlckNoYXJ0ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICQodGhpcy5fY29udGFpbmVyKS5oaWdoY2hhcnRzKHtcbiAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgem9vbVR5cGU6ICd4J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbW9kZWwudGl0bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2xpY2sgYW5kIGRyYWcgaW4gdGhlIHBsb3QgYXJlYSB0byB6b29tIGluXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRldGltZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQcmljZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY3Jvc3NoYWlyczogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYXJlYToge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogbW9kZWwuc2VyaWVzXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2hhcnRWaWV3ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGZyYW1ld29ya18xLlZpZXdTZXR0aW5ncyhudWxsLCBcIiNjaGFydF9jb250YWluZXJcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbT2JqZWN0XSlcbiAgICBdLCBDaGFydFZpZXcpO1xuICAgIHJldHVybiBDaGFydFZpZXc7XG59KGZyYW1ld29ya18xLlZpZXcpKTtcbmV4cG9ydHMuQ2hhcnRWaWV3ID0gQ2hhcnRWaWV3O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzkyYVdWM2N5OWphR0Z5ZEY5MmFXVjNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVZEJMSFZFUVVGNVJUdEJRVWQ2UlR0SlFVRjNRaXcyUWtGQlNUdEpRVU40UWl4dFFrRkJXU3hSUVVGdFFqdGxRVU16UWl4clFrRkJUU3hSUVVGUkxFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVkVMRGhDUVVGVkxFZEJRVlk3VVVGQlFTeHBRa0ZQUXp0UlFVNUhMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0WlFVTnVRaXhKUVVGSkxHOUNRVUZSTEVOQlFVTXNkVUpCUVhWQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFVTXNRMEZCUXl4RlFVRkZMRXRCUVZVN1owSkJRM1JFTEV0QlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WjBKQlEzaENMRXRCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdXVUZET1VJc1EwRkJReXhEUVVGRE8xTkJRMHdzUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVk5MREpDUVVGUExFZEJRV1E3VVVGRFNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFVVlRMR2xEUVVGaExFZEJRWFpDTEZWQlFYZENMRXRCUVZVN1VVRkRPVUlzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEpRVVZ1UXl4RFFVRkRPMGxCUlZNc2JVTkJRV1VzUjBGQmVrSTdVVUZEU1N4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzBsQlJXaERMRU5CUVVNN1NVRkZUeXdyUWtGQlZ5eEhRVUZ1UWl4VlFVRnZRaXhMUVVGTE8xRkJRM0pDTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zVlVGQlZTeERRVUZETzFsQlF6RkNMRXRCUVVzc1JVRkJSVHRuUWtGRFNDeFJRVUZSTEVWQlFVVXNSMEZCUnp0aFFVTm9RanRaUVVORUxFdEJRVXNzUlVGQlJUdG5Ra0ZEU0N4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXM3WVVGRGNFSTdXVUZEUkN4UlFVRlJMRVZCUVVNN1owSkJRMHdzU1VGQlNTeEZRVUZGTERSRFFVRTBRenRoUVVOeVJEdFpRVU5FTEV0QlFVc3NSVUZCUlR0blFrRkRTQ3hKUVVGSkxFVkJRVVVzVlVGQlZUdGhRVU51UWp0WlFVTkVMRXRCUVVzc1JVRkJSVHRuUWtGRFNDeExRVUZMTEVWQlFVVTdiMEpCUTBnc1NVRkJTU3hGUVVGRkxFOUJRVTg3YVVKQlEyaENPMkZCUTBvN1dVRkRSQ3hOUVVGTkxFVkJRVVU3WjBKQlEwb3NUMEZCVHl4RlFVRkZMRWxCUVVrN1lVRkRhRUk3V1VGRFJDeFBRVUZQTEVWQlFVVTdaMEpCUTB3c1RVRkJUU3hGUVVGRkxFbEJRVWs3WjBKQlExb3NWVUZCVlN4RlFVRkZMRWxCUVVrN1lVRkRia0k3V1VGRFJDeFhRVUZYTEVWQlFVVTdaMEpCUTFRc1NVRkJTU3hGUVVGRk8yOUNRVU5HTEUxQlFVMHNSVUZCUXp0M1FrRkRTQ3hOUVVGTkxFVkJRVVVzUTBGQlF6dHhRa0ZEV2p0dlFrRkRSQ3hUUVVGVExFVkJRVVVzUjBGQlJ6dHZRa0ZEWkN4VFFVRlRMRVZCUVVVc1NVRkJTVHRwUWtGRGJFSTdZVUZEU2p0WlFVTkVMRTFCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU1zVFVGQlRUdFRRVU4yUWl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJiRVZETEZOQlFWTTdVVUZFWkN4M1FrRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeHJRa0ZCYTBJc1EwRkJRenM3VDBGRGFrTXNVMEZCVXl4RFFXMUZaRHRKUVVGRUxHZENRVUZETzBOQmJrVkVMRUZCYlVWRExFTkJia1YxUWl4blFrRkJTU3hIUVcxRk0wSTdRVUZGVVN3NFFrRkJVeUlzSW1acGJHVWlPaUpoY0hBdmRtbGxkM012WTJoaGNuUmZkbWxsZHk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIQmhkR2c5WENJdUxpOHVMaTltY21GdFpYZHZjbXN2YVc1MFpYSm1ZV05sY3k1MGMxd2lJQzgrWEhKY2JpOHZMeUE4Y21WbVpYSmxibU5sSUhCaGRHZzlYQ0l1TGk4dUxpOHVMaTl1YjJSbFgyMXZaSFZzWlhNdlFIUjVjR1Z6TDJocFoyaGphR0Z5ZEhNdmFXNWtaWGd1WkM1MGMxd2lJQzgrWEhKY2JseHlYRzVwYlhCdmNuUWdleUJXYVdWM0xDQkJjSEJGZG1WdWRDd2dWbWxsZDFObGRIUnBibWR6SUgwZ1puSnZiU0JjSWk0dUx5NHVMMlp5WVcxbGQyOXlheTltY21GdFpYZHZjbXRjSWp0Y2NseHVYSEpjYmtCV2FXVjNVMlYwZEdsdVozTW9iblZzYkN3Z1hDSWpZMmhoY25SZlkyOXVkR0ZwYm1WeVhDSXBYSEpjYm1Oc1lYTnpJRU5vWVhKMFZtbGxkeUJsZUhSbGJtUnpJRlpwWlhjZ2FXMXdiR1Z0Wlc1MGN5QkpWbWxsZHlCN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHRaWFJwWVhSdmNqb2dTVTFsWkdsaGRHOXlLU0I3WEhKY2JpQWdJQ0FnSUNBZ2MzVndaWElvYldWMGFXRjBiM0lwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lHbHVhWFJwWVd4cGVtVW9LVG9nZG05cFpDQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcFltVlViMFYyWlc1MGN5aGJYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJCY0hCRmRtVnVkQ2hjSW1Gd2NDNTJhV1YzTG1Ob1lYSjBMbkpsYm1SbGNsd2lMQ0J1ZFd4c0xDQW9aU3dnYlc5a1pXdzZJR0Z1ZVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXlaVzVrWlhKRGFHRnlkQ2h0YjJSbGJDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSnBibVJFYjIxRmRtVnVkSE1vYlc5a1pXd3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh5WEc0Z0lDQWdJQ0FnSUYwcE8xeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEIxWW14cFl5QmthWE53YjNObEtDazZJSFp2YVdRZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWRXNWlhVzVrUkc5dFJYWmxiblJ6S0NrN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1MWJuTjFZbk5qY21saVpWUnZSWFpsYm5SektDazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKdmRHVmpkR1ZrSUdKcGJtUkViMjFGZG1WdWRITW9iVzlrWld3NklHRnVlU2tnZTF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ6WTI5d1pTQTlJQ1FvZEdocGN5NWZZMjl1ZEdGcGJtVnlLVHRjY2x4dVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEp2ZEdWamRHVmtJSFZ1WW1sdVpFUnZiVVYyWlc1MGN5Z3BlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnpZMjl3WlNBOUlIUm9hWE11WDJOdmJuUmhhVzVsY2p0Y2NseHVYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J5Wlc1a1pYSkRhR0Z5ZENodGIyUmxiQ2w3WEhKY2JpQWdJQ0FnSUNBZ0pDaDBhR2x6TGw5amIyNTBZV2x1WlhJcExtaHBaMmhqYUdGeWRITW9lMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphR0Z5ZERvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdlbTl2YlZSNWNHVTZJQ2Q0SjF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYVhSc1pUb2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGREb2diVzlrWld3dWRHbDBiR1ZjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdjM1ZpZEdsMGJHVTZlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGREb2dYQ0pEYkdsamF5QmhibVFnWkhKaFp5QnBiaUIwYUdVZ2NHeHZkQ0JoY21WaElIUnZJSHB2YjIwZ2FXNWNJbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjRRWGhwY3pvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGx3WlRvZ0oyUmhkR1YwYVcxbEoxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUxGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCNVFYaHBjem9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHbDBiR1U2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWlhoME9pQW5VSEpwWTJVblhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxaMlZ1WkRvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaVzVoWW14bFpEb2dkSEoxWlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjI5c2RHbHdPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemFHRnlaV1E2SUhSeWRXVXNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqY205emMyaGhhWEp6T2lCMGNuVmxYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHNYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnNiM1JQY0hScGIyNXpPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGNtVmhPaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0Z5YTJWeU9udGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbUZrYVhWek9pQXdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc2FXNWxWMmxrZEdnNklEQXVNU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhSEpsYzJodmJHUTZJRzUxYkd4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVnlhV1Z6T2lCdGIyUmxiQzV6WlhKcFpYTmNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElIc2dRMmhoY25SV2FXVjNJSDBpWFgwPVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL3ZpZXdzXFxcXGNoYXJ0X3ZpZXcuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIik7XG52YXIgTWFya2V0VmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hcmtldFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFya2V0VmlldyhtZXRpYXRvcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1hcmtldFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xuICAgICAgICAgICAgbmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLnZpZXcubWFya2V0LnJlbmRlclwiLCBudWxsLCBmdW5jdGlvbiAoZSwgYXJncykge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckFzeW5jKGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5iaW5kRG9tRXZlbnRzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC5lcnJvclwiLCBlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIE1hcmtldFZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9tRXZlbnRzKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH07XG4gICAgTWFya2V0Vmlldy5wcm90b3R5cGUuYmluZERvbUV2ZW50cyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2NvcGUgPSAkKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICAgICQoXCIuZ2V0UXVvdGVcIikub24oXCJjbGlja1wiLCBzY29wZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBzeW1ib2wgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YShcInN5bWJvbFwiKTtcbiAgICAgICAgICAgIF90aGlzLmdldFN0b2NrUXVvdGUoc3ltYm9sKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoc2NvcGUpLmZpbmQoJ3RhYmxlJykuRGF0YVRhYmxlKCk7XG4gICAgfTtcbiAgICBNYXJrZXRWaWV3LnByb3RvdHlwZS51bmJpbmREb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgJChcIi5nZXRRdW90ZVwiKS5vZmYoXCJjbGlja1wiLCBzY29wZSk7XG4gICAgICAgIHZhciB0YWJsZSA9ICQoc2NvcGUpLmZpbmQoXCJ0YWJsZVwiKS5EYXRhVGFibGUoKTtcbiAgICAgICAgdGFibGUuZGVzdHJveSgpO1xuICAgIH07XG4gICAgTWFya2V0Vmlldy5wcm90b3R5cGUuZ2V0U3RvY2tRdW90ZSA9IGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLnJvdXRlXCIsIG5ldyBmcmFtZXdvcmtfMS5Sb3V0ZShcInN5bWJvbFwiLCBcInF1b3RlXCIsIFtzeW1ib2xdKSwgbnVsbCkpO1xuICAgIH07XG4gICAgTWFya2V0VmlldyA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBmcmFtZXdvcmtfMS5WaWV3U2V0dGluZ3MoXCIuL3NvdXJjZS9hcHAvdGVtcGxhdGVzL21hcmtldC5oYnNcIiwgXCIjb3V0bGV0XCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pXG4gICAgXSwgTWFya2V0Vmlldyk7XG4gICAgcmV0dXJuIE1hcmtldFZpZXc7XG59KGZyYW1ld29ya18xLlZpZXcpKTtcbmV4cG9ydHMuTWFya2V0VmlldyA9IE1hcmtldFZpZXc7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOTJhV1YzY3k5dFlYSnJaWFJmZG1sbGR5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGSFFTeDFSRUZCWjBZN1FVRkhhRVk3U1VGQmVVSXNPRUpCUVVrN1NVRkRla0lzYjBKQlFWa3NVVUZCYlVJN1pVRkRNMElzYTBKQlFVMHNVVUZCVVN4RFFVRkRPMGxCUTI1Q0xFTkJRVU03U1VGRlJDd3JRa0ZCVlN4SFFVRldPMUZCUVVFc2FVSkJXVU03VVVGWVJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU03V1VGRGJrSXNTVUZCU1N4dlFrRkJVU3hEUVVGRExIZENRVUYzUWl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZUTzJkQ1FVTjBSQ3hMUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXp0eFFrRkRha0lzU1VGQlNTeERRVUZETEZWQlFVTXNTMEZCU3p0dlFrRkRVaXhMUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVNNVFpeERRVUZETEVOQlFVTTdjVUpCUTBRc1MwRkJTeXhEUVVGRExGVkJRVU1zUTBGQlF6dHZRa0ZEVEN4TFFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzYjBKQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVRTdaMEpCUTNwRUxFTkJRVU1zUTBGQlF5eERRVUZCTzFsQlExWXNRMEZCUXl4RFFVRkRPMU5CUTB3c1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZOTERSQ1FVRlBMRWRCUVdRN1VVRkRTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZUTEd0RFFVRmhMRWRCUVhaQ0xGVkJRWGRDTEV0QlFWVTdVVUZCYkVNc2FVSkJUME03VVVGT1J5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETzFGQlF5OUNMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hWUVVGRExFTkJRVU03V1VGRGFFTXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03V1VGREwwTXNTMEZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdFJRVU01UWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVOR0xFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWVExHOURRVUZsTEVkQlFYcENPMUZCUTBrc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXp0UlFVTTFRaXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF6dFJRVU51UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlF5OURMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU53UWl4RFFVRkRPMGxCUlZNc2EwTkJRV0VzUjBGQmRrSXNWVUZCZDBJc1RVRkJZenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc2IwSkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4cFFrRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZETDBZc1EwRkJRenRKUVRGRFF5eFZRVUZWTzFGQlJHWXNkMEpCUVZrc1EwRkJReXh0UTBGQmJVTXNSVUZCUlN4VFFVRlRMRU5CUVVNN08wOUJRM1pFTEZWQlFWVXNRMEV5UTJZN1NVRkJSQ3hwUWtGQlF6dERRVE5EUkN4QlFUSkRReXhEUVRORGQwSXNaMEpCUVVrc1IwRXlRelZDTzBGQlJWRXNaME5CUVZVaUxDSm1hV3hsSWpvaVlYQndMM1pwWlhkekwyMWhjbXRsZEY5MmFXVjNMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OHZJRHh5WldabGNtVnVZMlVnY0dGMGFEMWNJaTR1THk0dUwyWnlZVzFsZDI5eWF5OXBiblJsY21aaFkyVnpMblJ6WENJZ0x6NWNjbHh1THk4dklEeHlaV1psY21WdVkyVWdjR0YwYUQxY0lpNHVMeTR1THk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlBZEhsd1pYTXZaR0YwWVhSaFlteGxjeTV1WlhRdmFXNWtaWGd1WkM1MGMxd2lJQzgrWEhKY2JseHlYRzVwYlhCdmNuUWdleUJXYVdWM0xDQkJjSEJGZG1WdWRDd2dWbWxsZDFObGRIUnBibWR6TENCU2IzVjBaU0I5SUdaeWIyMGdYQ0l1TGk4dUxpOW1jbUZ0WlhkdmNtc3ZabkpoYldWM2IzSnJYQ0k3WEhKY2JseHlYRzVBVm1sbGQxTmxkSFJwYm1kektGd2lMaTl6YjNWeVkyVXZZWEJ3TDNSbGJYQnNZWFJsY3k5dFlYSnJaWFF1YUdKelhDSXNJRndpSTI5MWRHeGxkRndpS1Z4eVhHNWpiR0Z6Y3lCTllYSnJaWFJXYVdWM0lHVjRkR1Z1WkhNZ1ZtbGxkeUJwYlhCc1pXMWxiblJ6SUVsV2FXVjNJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0cxbGRHbGhkRzl5T2lCSlRXVmthV0YwYjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaHRaWFJwWVhSdmNpazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVc1cGRHbGhiR2w2WlNncE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMVluTmpjbWxpWlZSdlJYWmxiblJ6S0Z0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG5acFpYY3ViV0Z5YTJWMExuSmxibVJsY2x3aUxDQnVkV3hzTENBb1pTd2dZWEpuY3pvZ1lXNTVLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5KbGJtUmxja0Z6ZVc1aktHRnlaM01wWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMblJvWlc0b0tHMXZaR1ZzS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVltbHVaRVJ2YlVWMlpXNTBjeWh0YjJSbGJDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdVkyRjBZMmdvS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBjbWxuWjJWeVJYWmxiblFvYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG1WeWNtOXlYQ0lzSUdVc0lHNTFiR3dwS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ1hTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJR1JwYzNCdmMyVW9LVG9nZG05cFpDQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTFibUpwYm1SRWIyMUZkbVZ1ZEhNb0tUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuVnVjM1ZpYzJOeWFXSmxWRzlGZG1WdWRITW9LVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2NtOTBaV04wWldRZ1ltbHVaRVJ2YlVWMlpXNTBjeWh0YjJSbGJEb2dZVzU1S1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUhOamIzQmxJRDBnSkNoMGFHbHpMbDlqYjI1MFlXbHVaWElwTzF4eVhHNGdJQ0FnSUNBZ0lDUW9YQ0l1WjJWMFVYVnZkR1ZjSWlrdWIyNG9YQ0pqYkdsamExd2lMQ0J6WTI5d1pTd2dLR1VwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSE41YldKdmJDQTlJQ1FvWlM1amRYSnlaVzUwVkdGeVoyVjBLUzVrWVhSaEtGd2ljM2x0WW05c1hDSXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1kbGRGTjBiMk5yVVhWdmRHVW9jM2x0WW05c0tWeHlYRzRnSUNBZ0lDQWdJSDBwWEhKY2JpQWdJQ0FnSUNBZ0pDaHpZMjl3WlNrdVptbHVaQ2duZEdGaWJHVW5LUzVFWVhSaFZHRmliR1VvS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndjbTkwWldOMFpXUWdkVzVpYVc1a1JHOXRSWFpsYm5SektDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnpZMjl3WlNBOUlIUm9hWE11WDJOdmJuUmhhVzVsY2p0Y2NseHVJQ0FnSUNBZ0lDQWtLRndpTG1kbGRGRjFiM1JsWENJcExtOW1aaWhjSW1Oc2FXTnJYQ0lzSUhOamIzQmxLVHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdkR0ZpYkdVZ1BTQWtLSE5qYjNCbEtTNW1hVzVrS0Z3aWRHRmliR1ZjSWlrdVJHRjBZVlJoWW14bEtDazdYSEpjYmlBZ0lDQWdJQ0FnZEdGaWJHVXVaR1Z6ZEhKdmVTZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhCeWIzUmxZM1JsWkNCblpYUlRkRzlqYTFGMWIzUmxLSE41YldKdmJEb2djM1J5YVc1bktTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NTBjbWxuWjJWeVJYWmxiblFvYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG5KdmRYUmxYQ0lzSUc1bGR5QlNiM1YwWlNoY0luTjViV0p2YkZ3aUxDQmNJbkYxYjNSbFhDSXNJRnR6ZVcxaWIyeGRLU3dnYm5Wc2JDa3BPMXh5WEc0Z0lDQWdmVnh5WEc1OVhISmNibHh5WEc1bGVIQnZjblFnZXlCTllYSnJaWFJXYVdWM0lIMGlYWDA9XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdmlld3NcXFxcbWFya2V0X3ZpZXcuanNcIixcIi92aWV3c1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4uLy4uL2ZyYW1ld29yay9mcmFtZXdvcmtcIik7XG52YXIgU3ltYm9sVmlldyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN5bWJvbFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3ltYm9sVmlldyhtZXRpYXRvcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgfVxuICAgIFN5bWJvbFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudHMoW1xuICAgICAgICAgICAgbmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLnZpZXcuc3ltYm9sLnJlbmRlclwiLCBudWxsLCBmdW5jdGlvbiAoZSwgbW9kZWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXJBc3luYyhtb2RlbClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJpbmREb21FdmVudHMobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyRXZlbnQobmV3IGZyYW1ld29ya18xLkFwcEV2ZW50KFwiYXBwLm1vZGVsLmNoYXJ0LmNoYW5nZVwiLCBtb2RlbC5xdW90ZS5TeW1ib2wsIG51bGwpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlckV2ZW50KG5ldyBmcmFtZXdvcmtfMS5BcHBFdmVudChcImFwcC5lcnJvclwiLCBlLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIFN5bWJvbFZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kRG9tRXZlbnRzKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVUb0V2ZW50cygpO1xuICAgIH07XG4gICAgU3ltYm9sVmlldy5wcm90b3R5cGUuYmluZERvbUV2ZW50cyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICB2YXIgc2NvcGUgPSAkKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgfTtcbiAgICBTeW1ib2xWaWV3LnByb3RvdHlwZS51bmJpbmREb21FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY29wZSA9IHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9O1xuICAgIFN5bWJvbFZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgZnJhbWV3b3JrXzEuVmlld1NldHRpbmdzKFwiLi9zb3VyY2UvYXBwL3RlbXBsYXRlcy9zeW1ib2wuaGJzXCIsIFwiI291dGxldFwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtPYmplY3RdKVxuICAgIF0sIFN5bWJvbFZpZXcpO1xuICAgIHJldHVybiBTeW1ib2xWaWV3O1xufShmcmFtZXdvcmtfMS5WaWV3KSk7XG5leHBvcnRzLlN5bWJvbFZpZXcgPSBTeW1ib2xWaWV3O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzkyYVdWM2N5OXplVzFpYjJ4ZmRtbGxkeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkhRU3gxUkVGQmVVVTdRVUZIZWtVN1NVRkJlVUlzT0VKQlFVazdTVUZEZWtJc2IwSkJRVmtzVVVGQmJVSTdaVUZETTBJc2EwSkJRVTBzVVVGQlVTeERRVUZETzBsQlEyNUNMRU5CUVVNN1NVRkZSQ3dyUWtGQlZTeEhRVUZXTzFGQlFVRXNhVUpCWVVNN1VVRmFSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1dVRkRia0lzU1VGQlNTeHZRa0ZCVVN4RFFVRkRMSGRDUVVGM1FpeEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRkRMRU5CUVVNc1JVRkJSU3hMUVVGVk8yZENRVU4yUkN4TFFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF6dHhRa0ZEYkVJc1NVRkJTU3hEUVVGRExGVkJRVU1zUzBGQlN6dHZRa0ZEVWl4TFFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzI5Q1FVTXhRaXhMUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NiMEpCUVZFc1EwRkJReXgzUWtGQmQwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVONFJpeERRVUZETEVOQlFVTTdjVUpCUTBRc1MwRkJTeXhEUVVGRExGVkJRVU1zUTBGQlF6dHZRa0ZEVEN4TFFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzYjBKQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVRTdaMEpCUTNwRUxFTkJRVU1zUTBGQlF5eERRVUZCTzFsQlExWXNRMEZCUXl4RFFVRkRPMU5CUTB3c1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZOTERSQ1FVRlBMRWRCUVdRN1VVRkRTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTTdVVUZEZGtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRVVZUTEd0RFFVRmhMRWRCUVhaQ0xGVkJRWGRDTEV0QlFWVTdVVUZET1VJc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRKUVVWdVF5eERRVUZETzBsQlJWTXNiME5CUVdVc1IwRkJla0k3VVVGRFNTeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wbEJSV2hETEVOQlFVTTdTVUZxUTBNc1ZVRkJWVHRSUVVSbUxIZENRVUZaTEVOQlFVTXNiVU5CUVcxRExFVkJRVVVzVTBGQlV5eERRVUZET3p0UFFVTjJSQ3hWUVVGVkxFTkJiVU5tTzBsQlFVUXNhVUpCUVVNN1EwRnVRMFFzUVVGdFEwTXNRMEZ1UTNkQ0xHZENRVUZKTEVkQmJVTTFRanRCUVVWUkxHZERRVUZWSWl3aVptbHNaU0k2SW1Gd2NDOTJhV1YzY3k5emVXMWliMnhmZG1sbGR5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dkx5QThjbVZtWlhKbGJtTmxJSEJoZEdnOVhDSXVMaTh1TGk5bWNtRnRaWGR2Y21zdmFXNTBaWEptWVdObGN5NTBjMXdpSUM4K1hISmNiaTh2THlBOGNtVm1aWEpsYm1ObElIQmhkR2c5WENJdUxpOHVMaTh1TGk5dWIyUmxYMjF2WkhWc1pYTXZRSFI1Y0dWekwyUmhkR0YwWVdKc1pYTXVibVYwTDJsdVpHVjRMbVF1ZEhOY0lpQXZQbHh5WEc1Y2NseHVhVzF3YjNKMElIc2dWbWxsZHl3Z1FYQndSWFpsYm5Rc0lGWnBaWGRUWlhSMGFXNW5jeUI5SUdaeWIyMGdYQ0l1TGk4dUxpOW1jbUZ0WlhkdmNtc3ZabkpoYldWM2IzSnJYQ0k3WEhKY2JseHlYRzVBVm1sbGQxTmxkSFJwYm1kektGd2lMaTl6YjNWeVkyVXZZWEJ3TDNSbGJYQnNZWFJsY3k5emVXMWliMnd1YUdKelhDSXNJRndpSTI5MWRHeGxkRndpS1Z4eVhHNWpiR0Z6Y3lCVGVXMWliMnhXYVdWM0lHVjRkR1Z1WkhNZ1ZtbGxkeUJwYlhCc1pXMWxiblJ6SUVsV2FXVjNJSHRjY2x4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0cxbGRHbGhkRzl5T2lCSlRXVmthV0YwYjNJcElIdGNjbHh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaHRaWFJwWVhSdmNpazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYVc1cGRHbGhiR2w2WlNncE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMVluTmpjbWxpWlZSdlJYWmxiblJ6S0Z0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG5acFpYY3VjM2x0WW05c0xuSmxibVJsY2x3aUxDQnVkV3hzTENBb1pTd2diVzlrWld3NklHRnVlU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1eVpXNWtaWEpCYzNsdVl5aHRiMlJsYkNsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1ZEdobGJpZ29iVzlrWld3cElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWlhVzVrUkc5dFJYWmxiblJ6S0cxdlpHVnNLVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBjbWxuWjJWeVJYWmxiblFvYm1WM0lFRndjRVYyWlc1MEtGd2lZWEJ3TG0xdlpHVnNMbU5vWVhKMExtTm9ZVzVuWlZ3aUxDQnRiMlJsYkM1eGRXOTBaUzVUZVcxaWIyd3NJRzUxYkd3cEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM1allYUmphQ2dvWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnlhV2RuWlhKRmRtVnVkQ2h1WlhjZ1FYQndSWFpsYm5Rb1hDSmhjSEF1WlhKeWIzSmNJaXdnWlN3Z2JuVnNiQ2twWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjY2x4dUlDQWdJQ0FnSUNCZEtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3ZFdKc2FXTWdaR2x6Y0c5elpTZ3BPaUIyYjJsa0lIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuVnVZbWx1WkVSdmJVVjJaVzUwY3lncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdWRXNXpkV0p6WTNKcFltVlViMFYyWlc1MGN5Z3BPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhCeWIzUmxZM1JsWkNCaWFXNWtSRzl0UlhabGJuUnpLRzF2WkdWc09pQmhibmtwSUh0Y2NseHVJQ0FnSUNBZ0lDQjJZWElnYzJOdmNHVWdQU0FrS0hSb2FYTXVYMk52Ym5SaGFXNWxjaWs3WEhKY2JseHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEJ5YjNSbFkzUmxaQ0IxYm1KcGJtUkViMjFGZG1WdWRITW9LU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSE5qYjNCbElEMGdkR2hwY3k1ZlkyOXVkR0ZwYm1WeU8xeHlYRzVjY2x4dUlDQWdJSDFjY2x4dVhISmNibjFjY2x4dVhISmNibVY0Y0c5eWRDQjdJRk41YldKdmJGWnBaWGNnZlNKZGZRPT1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi92aWV3c1xcXFxzeW1ib2xfdmlldy5qc1wiLFwiL3ZpZXdzXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGlzcGF0Y2hlcl8xID0gcmVxdWlyZShcIi4vZGlzcGF0Y2hlclwiKTtcbnZhciBtZWRpYXRvcl8xID0gcmVxdWlyZShcIi4vbWVkaWF0b3JcIik7XG52YXIgYXBwX2V2ZW50XzEgPSByZXF1aXJlKFwiLi9hcHBfZXZlbnRcIik7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgQXBwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcHAoYXBwU2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcnMgPSBhcHBTZXR0aW5ncy5jb250cm9sbGVycztcbiAgICAgICAgdGhpcy5fbWVkaWF0b3IgPSBuZXcgbWVkaWF0b3JfMS5NZWRpYXRvcihhcHBTZXR0aW5ncy5pc0RlYnVnIHx8IGZhbHNlKTtcbiAgICAgICAgdGhpcy5fcm91dGVyID0gbmV3IHJvdXRlcl8xLlJvdXRlcih0aGlzLl9tZWRpYXRvciwgYXBwU2V0dGluZ3MuZGVmYXVsdENvbnRyb2xsZXIsIGFwcFNldHRpbmdzLmRlZmF1bHRBY3Rpb24pO1xuICAgICAgICB0aGlzLl9kaXNwYXRjaGVyID0gbmV3IGRpc3BhdGNoZXJfMS5EaXNwYXRjaGVyKHRoaXMuX21lZGlhdG9yLCB0aGlzLl9jb250cm9sbGVycyk7XG4gICAgICAgIHRoaXMuX29uRXJyb3JIYW5kbGVyID0gYXBwU2V0dGluZ3Mub25FcnJvckhhbmRsZXI7XG4gICAgfVxuICAgIEFwcC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fcm91dGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5fZGlzcGF0Y2hlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuX21lZGlhdG9yLnN1YnNjcmliZShuZXcgYXBwX2V2ZW50XzEuQXBwRXZlbnQoXCJhcHAuZXJyb3JcIiwgbnVsbCwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLl9vbkVycm9ySGFuZGxlcihkYXRhKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLl9tZWRpYXRvci5wdWJsaXNoKG5ldyBhcHBfZXZlbnRfMS5BcHBFdmVudChcImFwcC5pbml0aWFsaXplXCIsIG51bGwsIG51bGwpKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHA7XG59KCkpO1xuZXhwb3J0cy5BcHAgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aeVlXMWxkMjl5YXk5aGNIQXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTd3lRMEZCTUVNN1FVRkRNVU1zZFVOQlFYTkRPMEZCUTNSRExIbERRVUYxUXp0QlFVTjJReXh0UTBGQmEwTTdRVUZGYkVNN1NVRk5TU3hoUVVGWkxGZEJRWGxDTzFGQlEzSkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NiVUpCUVZFc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NRMEZCUXl4RFFVRkRPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4bFFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeFhRVUZYTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNoSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4MVFrRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1YwRkJWeXhEUVVGRExHTkJRV01zUTBGQlF6dEpRVU4wUkN4RFFVRkRPMGxCUTAwc2QwSkJRVlVzUjBGQmFrSTdVVUZCUVN4cFFrRlBRenRSUVU1SExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1VVRkRNVUlzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxHOUNRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGRExFTkJRVTBzUlVGQlJTeEpRVUZWTzFsQlEzaEZMRXRCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZETDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5LTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzYjBKQlFWRXNRMEZCUXl4blFrRkJaMElzUlVGQlJTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlJTeERRVUZETzBsQlEwd3NWVUZCUXp0QlFVRkVMRU5CY2tKQkxFRkJjVUpETEVsQlFVRTdRVUZGVVN4clFrRkJSeUlzSW1acGJHVWlPaUptY21GdFpYZHZjbXN2WVhCd0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4dklEeHlaV1psY21WdVkyVWdjR0YwYUQxY0lpNHZhVzUwWlhKbVlXTmxjeTUwYzF3aUlDOCtYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QkVhWE53WVhSamFHVnlJSDBnWm5KdmJTQmNJaTR2WkdsemNHRjBZMmhsY2x3aU8xeHlYRzVwYlhCdmNuUWdleUJOWldScFlYUnZjaUI5SUdaeWIyMGdYQ0l1TDIxbFpHbGhkRzl5WENJN1hISmNibWx0Y0c5eWRDQjdJRUZ3Y0VWMlpXNTBJSDBnWm5KdmJTQmNJaTR2WVhCd1gyVjJaVzUwWENJN1hISmNibWx0Y0c5eWRDQjdJRkp2ZFhSbGNpQjlJR1p5YjIwZ1hDSXVMM0p2ZFhSbGNsd2lPMXh5WEc1Y2NseHVZMnhoYzNNZ1FYQndJSHRjY2x4dUlDQWdJSEJ5YVhaaGRHVWdYMlJwYzNCaGRHTm9aWEk2SUVsRWFYTndZWFJqYUdWeU8xeHlYRzRnSUNBZ2NISnBkbUYwWlNCZmJXVmthV0YwYjNJNklFbE5aV1JwWVhSdmNqdGNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1gzSnZkWFJsY2pvZ1NWSnZkWFJsY2p0Y2NseHVJQ0J3Y21sMllYUmxJRjlqYjI1MGNtOXNiR1Z5Y3lBNklFbERiMjUwY205c2JHVnlSR1YwWVdsc2MxdGRPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZiMjVGY25KdmNraGhibVJzWlhJNklDaHZPaUJQWW1wbFkzUXBJRDArSUhadmFXUTdYSEpjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhoY0hCVFpYUjBhVzVuY3pvZ1NVRndjRk5sZEhScGJtZHpLU0I3WEhKY2JpQWdJQ0IwYUdsekxsOWpiMjUwY205c2JHVnljeUE5SUdGd2NGTmxkSFJwYm1kekxtTnZiblJ5YjJ4c1pYSnpPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjFsWkdsaGRHOXlJRDBnYm1WM0lFMWxaR2xoZEc5eUtHRndjRk5sZEhScGJtZHpMbWx6UkdWaWRXY2dmSHdnWm1Gc2MyVXBPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYM0p2ZFhSbGNpQTlJRzVsZHlCU2IzVjBaWElvZEdocGN5NWZiV1ZrYVdGMGIzSXNJR0Z3Y0ZObGRIUnBibWR6TG1SbFptRjFiSFJEYjI1MGNtOXNiR1Z5TENCaGNIQlRaWFIwYVc1bmN5NWtaV1poZFd4MFFXTjBhVzl1S1R0Y2NseHVJQ0FnSUhSb2FYTXVYMlJwYzNCaGRHTm9aWElnUFNCdVpYY2dSR2x6Y0dGMFkyaGxjaWgwYUdsekxsOXRaV1JwWVhSdmNpd2dkR2hwY3k1ZlkyOXVkSEp2Ykd4bGNuTXBPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjl1UlhKeWIzSklZVzVrYkdWeUlEMGdZWEJ3VTJWMGRHbHVaM011YjI1RmNuSnZja2hoYm1Sc1pYSTdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQndkV0pzYVdNZ2FXNXBkR2xoYkdsNlpTZ3BPaUIyYjJsa0lIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXliM1YwWlhJdWFXNXBkR2xoYkdsNlpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlJwYzNCaGRHTm9aWEl1YVc1cGRHbGhiR2w2WlNncE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyMWxaR2xoZEc5eUxuTjFZbk5qY21saVpTaHVaWGNnUVhCd1JYWmxiblFvWENKaGNIQXVaWEp5YjNKY0lpd2diblZzYkN3Z0tHVTZJR0Z1ZVN3Z1pHRjBZVDg2SUdGdWVTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXZia1Z5Y205eVNHRnVaR3hsY2loa1lYUmhLVHRjY2x4dUlDQWdJQ0FnSUNCOUtTazdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZiV1ZrYVdGMGIzSXVjSFZpYkdsemFDaHVaWGNnUVhCd1JYWmxiblFvWENKaGNIQXVhVzVwZEdsaGJHbDZaVndpTENCdWRXeHNMQ0J1ZFd4c0tTazdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0I3SUVGd2NDQjlPeUpkZlE9PVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXGZyYW1ld29ya1xcXFxhcHAuanNcIixcIi8uLlxcXFxmcmFtZXdvcmtcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBBcHBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwRXZlbnQodG9waWMsIGRhdGEsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5ndWlkID0gdGhpcy5nZW5lcmF0ZUd1aWQoKTtcbiAgICAgICAgdGhpcy50b3BpYyA9IHRvcGljO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgICBBcHBFdmVudC5wcm90b3R5cGUuZ2VuZXJhdGVHdWlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zNCgpICsgdGhpcy5zNCgpICsgJy0nICtcbiAgICAgICAgICAgIHRoaXMuczQoKSArICctJyArIHRoaXMuczQoKSArICctJyArXG4gICAgICAgICAgICB0aGlzLnM0KCkgKyAnLScgKyB0aGlzLnM0KCkgKyB0aGlzLnM0KCkgKyB0aGlzLnM0KCk7XG4gICAgfTtcbiAgICBBcHBFdmVudC5wcm90b3R5cGUuczQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiBBcHBFdmVudDtcbn0oKSk7XG5leHBvcnRzLkFwcEV2ZW50ID0gQXBwRXZlbnQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aeVlXMWxkMjl5YXk5aGNIQmZaWFpsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZGUVR0SlFVdEpMR3RDUVVGWkxFdEJRV0VzUlVGQlJTeEpRVUZUTEVWQlFVVXNUMEZCY1VNN1VVRkRka1VzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGRGFFTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRGJrSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03VVVGRGFrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVVlBMQ3RDUVVGWkxFZEJRWEJDTzFGQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVjN1dVRkRPVUlzU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUnp0WlFVTnFReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBsQlF6VkVMRU5CUVVNN1NVRkhUeXh4UWtGQlJTeEhRVUZXTzFGQlEwa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dGhRVU16UXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRE8yRkJRMW9zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNSQ0xFTkJRVU03U1VGRFRDeGxRVUZETzBGQlFVUXNRMEY0UWtFc1FVRjNRa01zU1VGQlFUdEJRVVZSTERSQ1FVRlJJaXdpWm1sc1pTSTZJbVp5WVcxbGQyOXlheTloY0hCZlpYWmxiblF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeThnUEhKbFptVnlaVzVqWlNCd1lYUm9QVndpTGk5cGJuUmxjbVpoWTJWekxuUnpYQ0lnTHo1Y2NseHVYSEpjYm1Oc1lYTnpJRUZ3Y0VWMlpXNTBJR2x0Y0d4bGJXVnVkSE1nU1VGd2NFVjJaVzUwSUh0Y2NseHVJQ0FnSUhCMVlteHBZeUJuZFdsa09pQnpkSEpwYm1jN1hISmNiaUFnSUNCd2RXSnNhV01nZEc5d2FXTTZJSE4wY21sdVp6dGNjbHh1SUNBZ0lIQjFZbXhwWXlCa1lYUmhPaUJoYm5rN1hISmNiaUFnSUNCd2RXSnNhV01nYUdGdVpHeGxjam9nS0dVNklFOWlhbVZqZEN3Z1pHRjBZVDg2SUdGdWVTa2dQVDRnZG05cFpEdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLSFJ2Y0dsak9pQnpkSEpwYm1jc0lHUmhkR0U2SUdGdWVTd2dhR0Z1Wkd4bGNqb2dLR1U2SUdGdWVTd2daR0YwWVQ4NklHRnVlU2tnUFQ0Z2RtOXBaQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WjNWcFpDQTlJSFJvYVhNdVoyVnVaWEpoZEdWSGRXbGtLQ2s3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUwYjNCcFl5QTlJSFJ2Y0dsak8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVpHRjBZU0E5SUdSaGRHRTdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZVzVrYkdWeUlEMGdhR0Z1Wkd4bGNqdGNjbHh1SUNBZ0lIMWNjbHh1SUNBZ0lDOHZJRWRsYm1WeVlYUmxjeUJoSUc1bGR5QkhWVWxFWEhKY2JpQWdJQ0J3Y21sMllYUmxJR2RsYm1WeVlYUmxSM1ZwWkNncE9pQnpkSEpwYm1jZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5NMEtDa2dLeUIwYUdsekxuTTBLQ2tnS3lBbkxTY2dLMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5NMEtDa2dLeUFuTFNjZ0t5QjBhR2x6TG5NMEtDa2dLeUFuTFNjZ0sxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk0wS0NrZ0t5QW5MU2NnS3lCMGFHbHpMbk0wS0NrZ0t5QjBhR2x6TG5NMEtDa2dLeUIwYUdsekxuTTBLQ2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5OGdSMlZ1WlhKaGRHVnpJRzl1WlNCdlppQjBhR1VnYzJWamRHbHZibk1nYjJZZ1lTQkhWVWxFWEhKY2JpQWdJQ0J3Y21sMllYUmxJSE0wS0NrNklITjBjbWx1WnlCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFMWhkR2d1Wm14dmIzSW9LREVnS3lCTllYUm9MbkpoYm1SdmJTZ3BLU0FxSURCNE1UQXdNREFwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQzUwYjFOMGNtbHVaeWd4TmlsY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnTG5OMVluTjBjbWx1WnlneEtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJSHNnUVhCd1JYWmxiblFnZlRzaVhYMD1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFxmcmFtZXdvcmtcXFxcYXBwX2V2ZW50LmpzXCIsXCIvLi5cXFxcZnJhbWV3b3JrXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBldmVudF9lbWl0dGVyXzEgPSByZXF1aXJlKFwiLi9ldmVudF9lbWl0dGVyXCIpO1xudmFyIENvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXIobWV0aWF0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG1ldGlhdG9yKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XG4gICAgfTtcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRyb2xsZXIucHJvdG90eXBlLmRpc3Bvc2UoKSBpcyBhYnN0cmFjdCB5b3UgbXVzdCBpbXBsZW1lbnQgaXQhJyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbGxlcjtcbn0oZXZlbnRfZW1pdHRlcl8xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5Db250cm9sbGVyID0gQ29udHJvbGxlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVp5WVcxbGQyOXlheTlqYjI1MGNtOXNiR1Z5TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096dEJRVVZCTEdsRVFVRXJRenRCUVZNdlF6dEpRVUY1UWl3NFFrRkJXVHRKUVVOcVF5eHZRa0ZCV1N4UlFVRnRRanRsUVVNelFpeHJRa0ZCVFN4UlFVRlJMRU5CUVVNN1NVRkRia0lzUTBGQlF6dEpRVU5OTEN0Q1FVRlZMRWRCUVdwQ08xRkJRMGtzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elJVRkJjMFVzUTBGQlF5eERRVUZETzBsQlF6VkdMRU5CUVVNN1NVRkRUU3cwUWtGQlR5eEhRVUZrTzFGQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh0UlVGQmJVVXNRMEZCUXl4RFFVRkRPMGxCUTNwR0xFTkJRVU03U1VGRFRDeHBRa0ZCUXp0QlFVRkVMRU5CVmtFc1FVRlZReXhEUVZaM1FpdzBRa0ZCV1N4SFFWVndRenRCUVVWUkxHZERRVUZWSWl3aVptbHNaU0k2SW1aeVlXMWxkMjl5YXk5amIyNTBjbTlzYkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4dklEeHlaV1psY21WdVkyVWdjR0YwYUQxY0lpNHZhVzUwWlhKbVlXTmxjeTUwYzF3aUlDOCtYSEpjYmx4eVhHNXBiWEJ2Y25RZ2V5QkZkbVZ1ZEVWdGFYUjBaWElnZlNCbWNtOXRJQ2N1TDJWMlpXNTBYMlZ0YVhSMFpYSW5PMXh5WEc1cGJYQnZjblFnZXlCQmNIQkZkbVZ1ZENCOUlHWnliMjBnSnk0dllYQndYMlYyWlc1MEp6dGNjbHh1THlvcVhISmNiaUFxSUZ4eVhHNGdLaUJjY2x4dUlDb2dRR05zWVhOeklFTnZiblJ5YjJ4c1pYSmNjbHh1SUNvZ1FHVjRkR1Z1WkhNZ2UwVjJaVzUwUlcxcGRIUmxjbjFjY2x4dUlDb2dRR2x0Y0d4bGJXVnVkSE1nZTBsRGIyNTBjbTlzYkdWeWZWeHlYRzRnS2k5Y2NseHVZMnhoYzNNZ1EyOXVkSEp2Ykd4bGNpQmxlSFJsYm1SeklFVjJaVzUwUlcxcGRIUmxjaUJwYlhCc1pXMWxiblJ6SUVsRGIyNTBjbTlzYkdWeUlIdGNjbHh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzFsZEdsaGRHOXlPaUJKVFdWa2FXRjBiM0lwSUh0Y2NseHVJQ0FnSUNBZ0lDQnpkWEJsY2lodFpYUnBZWFJ2Y2lrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCd2RXSnNhV01nYVc1cGRHbGhiR2w2WlNncE9pQjJiMmxrSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0owTnZiblJ5YjJ4c1pYSXVjSEp2ZEc5MGVYQmxMbWx1YVhScFlXeHBlbVVvS1NCcGN5QmhZbk4wY21GamRDQjViM1VnYlhWemRDQnBiWEJzWlcxbGJuUWdhWFFoSnlrN1hISmNiaUFnSUNCOVhISmNiaUFnSUNCd2RXSnNhV01nWkdsemNHOXpaU2dwT2lCMmIybGtJSHRjY2x4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBOdmJuUnliMnhzWlhJdWNISnZkRzkwZVhCbExtUnBjM0J2YzJVb0tTQnBjeUJoWW5OMGNtRmpkQ0I1YjNVZ2JYVnpkQ0JwYlhCc1pXMWxiblFnYVhRaEp5azdYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0I3SUVOdmJuUnliMnhzWlhJZ2ZUc2lYWDA9XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcZnJhbWV3b3JrXFxcXGNvbnRyb2xsZXIuanNcIixcIi8uLlxcXFxmcmFtZXdvcmtcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV2ZW50X2VtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL2V2ZW50X2VtaXR0ZXJcIik7XG52YXIgYXBwX2V2ZW50XzEgPSByZXF1aXJlKFwiLi9hcHBfZXZlbnRcIik7XG52YXIgRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpc3BhdGNoZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcihtZXRpYXRvciwgY29udHJvbGxlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbWV0aWF0b3IpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9jb250cm9sbGVyc0hhc2hNYXAgPSBfdGhpcy5nZXRDb250cm9sbGVyKGNvbnRyb2xsZXJzKTtcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRDb250cm9sbGVyID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2N1cnJlbnRDb250cm9sbGVyTmFtZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXG4gICAgICAgICAgICBuZXcgYXBwX2V2ZW50XzEuQXBwRXZlbnQoJ2FwcC5kaXNwYXRjaCcsIG51bGwsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzcGF0Y2goZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmdldENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoY29udHJvbGxlcnMpIHtcbiAgICAgICAgdmFyIGhhc2hNYXAsIGhhc2hNYXBFbnRyeSwgbmFtZSwgY29udHJvbGxlciwgbDtcbiAgICAgICAgaGFzaE1hcCA9IHt9O1xuICAgICAgICBsID0gY29udHJvbGxlcnMubGVuZ3RoO1xuICAgICAgICBpZiAobCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgYXBwX2V2ZW50XzEuQXBwRXZlbnQoJ2FwcC5lcnJvcicsICdDYW5ub3QgY3JlYXRlIGFuIGFwcGxpY2F0aW9uIHdpdGhvdXQgYXQgbGVhc3Qgb25lIGNvbnRyb2xsZXIuJywgbnVsbCkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyID0gY29udHJvbGxlcnNbaV07XG4gICAgICAgICAgICBuYW1lID0gY29udHJvbGxlci5jb250cm9sbGVyTmFtZTtcbiAgICAgICAgICAgIGhhc2hNYXBFbnRyeSA9IGhhc2hNYXBbbmFtZV07XG4gICAgICAgICAgICBpZiAoaGFzaE1hcEVudHJ5ICE9PSBudWxsICYmIGhhc2hNYXBFbnRyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IGFwcF9ldmVudF8xLkFwcEV2ZW50KCdhcHAuZXJyb3InLCAnVHdvIGNvbnRyb2xsZXIgY2Fubm90IHVzZSB0aGUgc2FtZSBuYW1lLicsIG51bGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhc2hNYXBbbmFtZV0gPSBjb250cm9sbGVyLmNvbnRyb2xsZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhc2hNYXA7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICB2YXIgQ29udHJvbGxlciA9IHRoaXMuX2NvbnRyb2xsZXJzSGFzaE1hcFtyb3V0ZS5jb250cm9sbGVyTmFtZV07XG4gICAgICAgIGlmIChDb250cm9sbGVyID09PSBudWxsIHx8IENvbnRyb2xsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IGFwcF9ldmVudF8xLkFwcEV2ZW50KCdhcHAuZXJyb3InLCBcIkNvbnRyb2xsZXIgbm90IGZvdW5kOiBcIiArIHJvdXRlLmNvbnRyb2xsZXJOYW1lLCBudWxsKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRoaXMuX21ldGlhdG9yKTtcbiAgICAgICAgICAgIHZhciBhID0gY29udHJvbGxlcltyb3V0ZS5hY3Rpb25OYW1lXTtcbiAgICAgICAgICAgIGlmIChhID09PSBudWxsIHx8IGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBhcHBfZXZlbnRfMS5BcHBFdmVudCgnYXBwLmVycm9yJywgXCJBY3Rpb24gbm90IGZvdW5kIGluIGNvbnRyb2xsZXI6IFwiICsgcm91dGUuY29udHJvbGxlck5hbWUgKyBcIiAtICsgXCIgKyByb3V0ZS5hY3Rpb25OYW1lLCBudWxsKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudENvbnRyb2xsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgPSByb3V0ZS5jb250cm9sbGVyTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlci5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lICE9PSByb3V0ZS5jb250cm9sbGVyTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudENvbnRyb2xsZXJOYW1lID0gcm91dGUuY29udHJvbGxlck5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50Q29udHJvbGxlci5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IGFwcF9ldmVudF8xLkFwcEV2ZW50KFwiYXBwLmNvbnRyb2xsZXIuXCIgKyB0aGlzLl9jdXJyZW50Q29udHJvbGxlck5hbWUgKyBcIi5cIiArIHJvdXRlLmFjdGlvbk5hbWUsIHJvdXRlLmFyZ3MsIG51bGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERpc3BhdGNoZXI7XG59KGV2ZW50X2VtaXR0ZXJfMS5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuRGlzcGF0Y2hlciA9IERpc3BhdGNoZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aeVlXMWxkMjl5YXk5a2FYTndZWFJqYUdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenRCUVVWQkxHbEVRVUVyUXp0QlFVTXZReXg1UTBGQmRVTTdRVUZGZGtNN1NVRkJlVUlzT0VKQlFWazdTVUZKYWtNc2IwSkJRVmtzVVVGQmJVSXNSVUZCUlN4WFFVRnBRenRSUVVGc1JTeFpRVU5KTEd0Q1FVRk5MRkZCUVZFc1EwRkJReXhUUVVsc1FqdFJRVWhITEV0QlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eExRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRek5FTEV0QlFVa3NRMEZCUXl4clFrRkJhMElzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZETDBJc1MwRkJTU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWxCUVVrc1EwRkJRenM3U1VGRGRrTXNRMEZCUXp0SlFVVk5MQ3RDUVVGVkxFZEJRV3BDTzFGQlFVRXNhVUpCVFVNN1VVRk1SeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNN1dVRkRia0lzU1VGQlNTeHZRa0ZCVVN4RFFVRkRMR05CUVdNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVlVGQlF5eERRVUZOTEVWQlFVVXNTVUZCVlR0blFrRkRiRVFzUzBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRaUVVONFFpeERRVUZETEVOQlFVTTdVMEZEVEN4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRE8wbEJSVThzYTBOQlFXRXNSMEZCY2tJc1ZVRkJjMElzVjBGQmFVTTdVVUZEYmtRc1NVRkJTU3hQUVVGUExFVkJRVVVzV1VGQldTeEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJReTlETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRZaXhEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTjJRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVTdXVUZEVWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzYjBKQlFWRXNRMEZETVVJc1YwRkJWeXhGUVVOWUxDdEVRVUVyUkN4RlFVTXZSQ3hKUVVGSkxFTkJRMUFzUTBGQlF5eERRVUZETzFOQlEwNDdVVUZEUkN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM2hDTEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRE5VSXNTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU03V1VGRGFrTXNXVUZCV1N4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU0zUWl4SlFVRkpMRmxCUVZrc1MwRkJTeXhKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEZOQlFWTXNSVUZCUlR0blFrRkRja1FzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRzlDUVVGUkxFTkJRekZDTEZkQlFWY3NSVUZEV0N3d1EwRkJNRU1zUlVGRE1VTXNTVUZCU1N4RFFVTlFMRU5CUVVNc1EwRkJRenRoUVVOT08xbEJRMFFzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRlZCUVZVc1EwRkJReXhWUVVGVkxFTkJRVU03VTBGRGVrTTdVVUZEUkN4UFFVRlBMRTlCUVU4c1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVOHNOa0pCUVZFc1IwRkJhRUlzVlVGQmFVSXNTMEZCWVR0UlFVTXhRaXhKUVVGSkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMUZCUTJoRkxFbEJRVWtzVlVGQlZTeExRVUZMTEVsQlFVa3NTVUZCU1N4VlFVRlZMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRMnBFTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3h2UWtGQlVTeERRVU14UWl4WFFVRlhMRVZCUTFnc01rSkJRWGxDTEV0QlFVc3NRMEZCUXl4alFVRm5RaXhGUVVNdlF5eEpRVUZKTEVOQlExQXNRMEZCUXl4RFFVRkRPMU5CUTA0N1lVRkJUVHRaUVVOSUxFbEJRVWtzVlVGQlZTeEhRVUZuUWl4SlFVRkpMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdXVUZETjBRc1NVRkJTU3hEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEc5Q1FVRlJMRU5CUXpGQ0xGZEJRVmNzUlVGRFdDeHhRMEZCYlVNc1MwRkJTeXhEUVVGRExHTkJRV01zWVVGQlVTeExRVUZMTEVOQlFVTXNWVUZCV1N4RlFVTnFSaXhKUVVGSkxFTkJRMUFzUTBGQlF5eERRVUZETzJGQlEwNDdhVUpCUVUwN1owSkJRMGdzU1VGQlNTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFbEJRVWtzU1VGQlNTeEZRVUZGTzI5Q1FVTnFReXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF6dHZRa0ZEYmtRc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4SFFVRkhMRlZCUVZVc1EwRkJRenR2UWtGRGNrTXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMmxDUVVONFF6dHhRa0ZCVFR0dlFrRkRTQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1MwRkJTeXhMUVVGTExFTkJRVU1zWTBGQll5eEZRVUZGTzNkQ1FVTjBSQ3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03ZDBKQlEyeERMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRE8zZENRVU51UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVkQlFVY3NWVUZCVlN4RFFVRkRPM2RDUVVOeVF5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdjVUpCUTNoRE8ybENRVU5LTzJkQ1FVTkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeHZRa0ZCVVN4RFFVTXhRaXh2UWtGQmEwSXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeFRRVUZKTEV0QlFVc3NRMEZCUXl4VlFVRlpMRVZCUTI1RkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlExWXNTVUZCU1N4RFFVTlFMRU5CUVVNc1EwRkJRenRoUVVOT08xTkJRMG83U1VGRFRDeERRVUZETzBsQlEwd3NhVUpCUVVNN1FVRkJSQ3hEUVhCR1FTeEJRVzlHUXl4RFFYQkdkMElzTkVKQlFWa3NSMEZ2Um5CRE8wRkJSVkVzWjBOQlFWVWlMQ0ptYVd4bElqb2labkpoYldWM2IzSnJMMlJwYzNCaGRHTm9aWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeThnUEhKbFptVnlaVzVqWlNCd1lYUm9QVndpTGk5cGJuUmxjbVpoWTJWekxuUnpYQ0lnTHo1Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUVWMlpXNTBSVzFwZEhSbGNpQjlJR1p5YjIwZ0p5NHZaWFpsYm5SZlpXMXBkSFJsY2ljN1hISmNibWx0Y0c5eWRDQjdJRUZ3Y0VWMlpXNTBJSDBnWm5KdmJTQW5MaTloY0hCZlpYWmxiblFuTzF4eVhHNWNjbHh1WTJ4aGMzTWdSR2x6Y0dGMFkyaGxjaUJsZUhSbGJtUnpJRVYyWlc1MFJXMXBkSFJsY2lCcGJYQnNaVzFsYm5SeklFbEVhWE53WVhSamFHVnlJSHRjY2x4dUlDQWdJSEJ5YVhaaGRHVWdYMk52Ym5SeWIyeHNaWEp6U0dGemFFMWhjRG9nVDJKcVpXTjBPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZZM1Z5Y21WdWRFTnZiblJ5YjJ4c1pYSTZJRWxEYjI1MGNtOXNiR1Z5TzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmWTNWeWNtVnVkRU52Ym5SeWIyeHNaWEpPWVcxbE9pQnpkSEpwYm1jN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHRaWFJwWVhSdmNqb2dTVTFsWkdsaGRHOXlMQ0JqYjI1MGNtOXNiR1Z5Y3pvZ1NVTnZiblJ5YjJ4c1pYSkVaWFJoYVd4elcxMHBJSHRjY2x4dUlDQWdJQ0FnSUNCemRYQmxjaWh0WlhScFlYUnZjaWs3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWTI5dWRISnZiR3hsY25OSVlYTm9UV0Z3SUQwZ2RHaHBjeTVuWlhSRGIyNTBjbTlzYkdWeUtHTnZiblJ5YjJ4c1pYSnpLVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDlqZFhKeVpXNTBRMjl1ZEhKdmJHeGxjaUE5SUc1MWJHdzdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZM1Z5Y21WdWRFTnZiblJ5YjJ4c1pYSk9ZVzFsSUQwZ2JuVnNiRHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2RXSnNhV01nYVc1cGRHbGhiR2w2WlNncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjFZbk5qY21saVpWUnZSWFpsYm5SektGdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRUZ3Y0VWMlpXNTBLQ2RoY0hBdVpHbHpjR0YwWTJnbkxDQnVkV3hzTENBb1pUb2dZVzU1TENCa1lYUmhQem9nWVc1NUtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVJwYzNCaGRHTm9LR1JoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQWdJRjBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1oyVjBRMjl1ZEhKdmJHeGxjaWhqYjI1MGNtOXNiR1Z5Y3pvZ1NVTnZiblJ5YjJ4c1pYSkVaWFJoYVd4elcxMHBPaUJQWW1wbFkzUWdlMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQm9ZWE5vVFdGd0xDQm9ZWE5vVFdGd1JXNTBjbmtzSUc1aGJXVXNJR052Ym5SeWIyeHNaWElzSUd3N1hISmNiaUFnSUNBZ0lDQWdhR0Z6YUUxaGNDQTlJSHQ5TzF4eVhHNGdJQ0FnSUNBZ0lHd2dQU0JqYjI1MGNtOXNiR1Z5Y3k1c1pXNW5kR2c3WEhKY2JpQWdJQ0FnSUNBZ2FXWWdLR3dnUEQwZ01Da2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5SeWFXZG5aWEpGZG1WdWRDaHVaWGNnUVhCd1JYWmxiblFvWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBbllYQndMbVZ5Y205eUp5eGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2REWVc1dWIzUWdZM0psWVhSbElHRnVJR0Z3Y0d4cFkyRjBhVzl1SUhkcGRHaHZkWFFnWVhRZ2JHVmhjM1FnYjI1bElHTnZiblJ5YjJ4c1pYSXVKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1MWJHeGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tTazdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJ5YjJ4c1pYSWdQU0JqYjI1MGNtOXNiR1Z5YzF0cFhUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtRnRaU0E5SUdOdmJuUnliMnhzWlhJdVkyOXVkSEp2Ykd4bGNrNWhiV1U3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2hoYzJoTllYQkZiblJ5ZVNBOUlHaGhjMmhOWVhCYmJtRnRaVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNob1lYTm9UV0Z3Ulc1MGNua2dJVDA5SUc1MWJHd2dKaVlnYUdGemFFMWhjRVZ1ZEhKNUlDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZEhKcFoyZGxja1YyWlc1MEtHNWxkeUJCY0hCRmRtVnVkQ2hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5ZWEJ3TG1WeWNtOXlKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5WSGR2SUdOdmJuUnliMnhzWlhJZ1kyRnVibTkwSUhWelpTQjBhR1VnYzJGdFpTQnVZVzFsTGljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm5Wc2JGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhR0Z6YUUxaGNGdHVZVzFsWFNBOUlHTnZiblJ5YjJ4c1pYSXVZMjl1ZEhKdmJHeGxjanRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHaGhjMmhOWVhBN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmthWE53WVhSamFDaHliM1YwWlRvZ1NWSnZkWFJsS1NCN1hISmNiaUFnSUNBZ0lDQWdkbUZ5SUVOdmJuUnliMnhzWlhJZ1BTQjBhR2x6TGw5amIyNTBjbTlzYkdWeWMwaGhjMmhOWVhCYmNtOTFkR1V1WTI5dWRISnZiR3hsY2s1aGJXVmRPMXh5WEc0Z0lDQWdJQ0FnSUdsbUlDaERiMjUwY205c2JHVnlJRDA5UFNCdWRXeHNJSHg4SUVOdmJuUnliMnhzWlhJZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnlhV2RuWlhKRmRtVnVkQ2h1WlhjZ1FYQndSWFpsYm5Rb1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW5ZWEJ3TG1WeWNtOXlKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdCRGIyNTBjbTlzYkdWeUlHNXZkQ0JtYjNWdVpEb2dKSHR5YjNWMFpTNWpiMjUwY205c2JHVnlUbUZ0WlgxZ0xGeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiblZzYkZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FwS1R0Y2NseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZMjl1ZEhKdmJHeGxjam9nU1VOdmJuUnliMnhzWlhJZ1BTQnVaWGNnUTI5dWRISnZiR3hsY2loMGFHbHpMbDl0WlhScFlYUnZjaWs3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCaElEMGdZMjl1ZEhKdmJHeGxjbHR5YjNWMFpTNWhZM1JwYjI1T1lXMWxYVHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dFZ1BUMDlJRzUxYkd3Z2ZId2dZU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuUnlhV2RuWlhKRmRtVnVkQ2h1WlhjZ1FYQndSWFpsYm5Rb1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSjJGd2NDNWxjbkp2Y2ljc1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUVGamRHbHZiaUJ1YjNRZ1ptOTFibVFnYVc0Z1kyOXVkSEp2Ykd4bGNqb2dKSHR5YjNWMFpTNWpiMjUwY205c2JHVnlUbUZ0WlgwZ0xTQXJJQ1I3Y205MWRHVXVZV04wYVc5dVRtRnRaWDFnTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzUxYkd4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDa3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMk4xY25KbGJuUkRiMjUwY205c2JHVnlJRDA5SUc1MWJHd3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5amRYSnlaVzUwUTI5dWRISnZiR3hsY2s1aGJXVWdQU0J5YjNWMFpTNWpiMjUwY205c2JHVnlUbUZ0WlR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWpkWEp5Wlc1MFEyOXVkSEp2Ykd4bGNpQTlJR052Ym5SeWIyeHNaWEk3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJuUnliMnhzWlhJdWFXNXBkR2xoYkdsNlpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWZZM1Z5Y21WdWRFTnZiblJ5YjJ4c1pYSk9ZVzFsSUNFOVBTQnliM1YwWlM1amIyNTBjbTlzYkdWeVRtRnRaU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlqZFhKeVpXNTBRMjl1ZEhKdmJHeGxjaTVrYVhOd2IzTmxLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMk4xY25KbGJuUkRiMjUwY205c2JHVnlUbUZ0WlNBOUlISnZkWFJsTG1OdmJuUnliMnhzWlhKT1lXMWxPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOWpkWEp5Wlc1MFEyOXVkSEp2Ykd4bGNpQTlJR052Ym5SeWIyeHNaWEk3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYMk4xY25KbGJuUkRiMjUwY205c2JHVnlMbWx1YVhScFlXeHBlbVVvS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5SeWFXZG5aWEpGZG1WdWRDaHVaWGNnUVhCd1JYWmxiblFvWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZR0Z3Y0M1amIyNTBjbTlzYkdWeUxpUjdkR2hwY3k1ZlkzVnljbVZ1ZEVOdmJuUnliMnhzWlhKT1lXMWxmUzRrZTNKdmRYUmxMbUZqZEdsdmJrNWhiV1Y5WUN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5YjNWMFpTNWhjbWR6TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzUxYkd4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDa3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ2V5QkVhWE53WVhSamFHVnlJSDA3SWwxOVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXGZyYW1ld29ya1xcXFxkaXNwYXRjaGVyLmpzXCIsXCIvLi5cXFxcZnJhbWV3b3JrXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIobWV0aWF0b3IpIHtcbiAgICAgICAgdGhpcy5fbWV0aWF0b3IgPSBtZXRpYXRvcjtcbiAgICB9XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fbWV0aWF0b3IucHVibGlzaChldmVudCk7XG4gICAgfTtcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnN1YnNjcmliZVRvRXZlbnRzID0gZnVuY3Rpb24gKGV2ZW50cykge1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBldmVudHM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXRpYXRvci5zdWJzY3JpYmUodGhpcy5fZXZlbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS51bnN1YnNjcmliZVRvRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbWV0aWF0b3IudW5zdWJzY3JpYmUodGhpcy5fZXZlbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbn0oKSk7XG5leHBvcnRzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbVp5WVcxbGQyOXlheTlsZG1WdWRGOWxiV2wwZEdWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPMEZCU1VFN1NVRkhTU3h6UWtGQldTeFJRVUZ0UWp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJRMDBzYlVOQlFWa3NSMEZCYmtJc1ZVRkJiMElzUzBGQlowSTdVVUZEYUVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRiRU1zUTBGQlF6dEpRVU5OTEhkRFFVRnBRaXhIUVVGNFFpeFZRVUY1UWl4TlFVRjNRanRSUVVNM1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOMFFpeExRVUZKTEVsQlFVa3NRMEZCUXl4SFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVU03V1VGRGNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRemRETzBsQlEwd3NRMEZCUXp0SlFVTk5MREJEUVVGdFFpeEhRVUV4UWp0UlFVTkpMRXRCUVVrc1NVRkJTU3hEUVVGRExFZEJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUXp0WlFVTnlReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETDBNN1NVRkRUQ3hEUVVGRE8wbEJRMHdzYlVKQlFVTTdRVUZCUkN4RFFYQkNRU3hCUVc5Q1F5eEpRVUZCTzBGQlJVOHNiME5CUVZraUxDSm1hV3hsSWpvaVpuSmhiV1YzYjNKckwyVjJaVzUwWDJWdGFYUjBaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeThnUEhKbFptVnlaVzVqWlNCd1lYUm9QVndpTGk5cGJuUmxjbVpoWTJWekxuUnpYQ0lnTHo1Y2NseHVYSEpjYm1sdGNHOXlkQ0I3UVhCd1JYWmxiblI5SUdaeWIyMGdKeTR2WVhCd1gyVjJaVzUwSnp0Y2NseHVYSEpjYm1Oc1lYTnpJRVYyWlc1MFJXMXBkSFJsY2lCcGJYQnNaVzFsYm5SeklFbEZkbVZ1ZEVWdGFYUjBaWEo3WEhKY2JpQWdJQ0J3Y205MFpXTjBaV1FnWDIxbGRHbGhkRzl5T2lCSlRXVmthV0YwYjNJN1hISmNiaUFnSUNCd2NtOTBaV04wWldRZ1gyVjJaVzUwY3pvZ1FYSnlZWGs4U1VGd2NFVjJaVzUwUGp0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHMWxkR2xoZEc5eU9pQkpUV1ZrYVdGMGIzSXBlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjFsZEdsaGRHOXlJRDBnYldWMGFXRjBiM0k3WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J3ZFdKc2FXTWdkSEpwWjJkbGNrVjJaVzUwS0dWMlpXNTBPaUJKUVhCd1JYWmxiblFwZTF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDIxbGRHbGhkRzl5TG5CMVlteHBjMmdvWlhabGJuUXBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdjSFZpYkdsaklITjFZbk5qY21saVpWUnZSWFpsYm5SektHVjJaVzUwY3pvZ1FYSnlZWGs4U1VGd2NFVjJaVzUwUGlsN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZlpYWmxiblJ6SUQwZ1pYWmxiblJ6TzF4eVhHNGdJQ0FnSUNBZ0lHWnZjaWgyWVhJZ2FUMHdPeUJwUENCMGFHbHpMbDlsZG1WdWRITXViR1Z1WjNSb095QnBLeXNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXRaWFJwWVhSdmNpNXpkV0p6WTNKcFltVW9kR2hwY3k1ZlpYWmxiblJ6VzJsZEtUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JpQWdJQ0J3ZFdKc2FXTWdkVzV6ZFdKelkzSnBZbVZVYjBWMlpXNTBjeWdwZTF4eVhHNGdJQ0FnSUNBZ0lHWnZjaWgyWVhJZ2FUMHdPeUJwUENCMGFHbHpMbDlsZG1WdWRITXViR1Z1WjNSb095QnBLeXNwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOXRaWFJwWVhSdmNpNTFibk4xWW5OamNtbGlaU2gwYUdsekxsOWxkbVZ1ZEhOYmFWMHBPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUgxY2NseHVmVnh5WEc1Y2NseHVaWGh3YjNKMElIdEZkbVZ1ZEVWdGFYUjBaWEo5SWwxOVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXGZyYW1ld29ya1xcXFxldmVudF9lbWl0dGVyLmpzXCIsXCIvLi5cXFxcZnJhbWV3b3JrXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBwXzEgPSByZXF1aXJlKFwiLi9hcHBcIik7XG5leHBvcnRzLkFwcCA9IGFwcF8xLkFwcDtcbnZhciByb3V0ZV8xID0gcmVxdWlyZShcIi4vcm91dGVcIik7XG5leHBvcnRzLlJvdXRlID0gcm91dGVfMS5Sb3V0ZTtcbnZhciBhcHBfZXZlbnRfMSA9IHJlcXVpcmUoXCIuL2FwcF9ldmVudFwiKTtcbmV4cG9ydHMuQXBwRXZlbnQgPSBhcHBfZXZlbnRfMS5BcHBFdmVudDtcbnZhciBjb250cm9sbGVyXzEgPSByZXF1aXJlKFwiLi9jb250cm9sbGVyXCIpO1xuZXhwb3J0cy5Db250cm9sbGVyID0gY29udHJvbGxlcl8xLkNvbnRyb2xsZXI7XG52YXIgdmlld18xID0gcmVxdWlyZShcIi4vdmlld1wiKTtcbmV4cG9ydHMuVmlldyA9IHZpZXdfMS5WaWV3O1xuZXhwb3J0cy5WaWV3U2V0dGluZ3MgPSB2aWV3XzEuVmlld1NldHRpbmdzO1xudmFyIG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcbmV4cG9ydHMuTW9kZWwgPSBtb2RlbF8xLk1vZGVsO1xuZXhwb3J0cy5Nb2RlbFNldHRpbmdzID0gbW9kZWxfMS5Nb2RlbFNldHRpbmdzO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnlZVzFsZDI5eWF5OW1jbUZ0WlhkdmNtc3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGRlFTdzJRa0ZCTkVJN1FVRlBia0lzWTBGUVFTeFRRVUZITEVOQlQwRTdRVUZPV2l4cFEwRkJaME03UVVGTk9FTXNaMEpCVG5KRkxHRkJRVXNzUTBGTmNVVTdRVUZNYmtZc2VVTkJRWFZETzBGQlMzcENMRzFDUVV4TUxHOUNRVUZSTEVOQlMwczdRVUZLZEVJc01rTkJRVEJETzBGQlNXeENMSEZDUVVwbUxIVkNRVUZWTEVOQlNXVTdRVUZJYkVNc0swSkJRVFJETzBGQlIxSXNaVUZJTTBJc1YwRkJTU3hEUVVjeVFqdEJRVUZGTEhWQ1FVZ3pRaXh0UWtGQldTeERRVWN5UWp0QlFVWjBSQ3hwUTBGQkswTTdRVUZGVXl4blFrRkdMME1zWVVGQlN5eERRVVVyUXp0QlFVRkZMSGRDUVVZdlF5eHhRa0ZCWVN4RFFVVXJReUlzSW1acGJHVWlPaUptY21GdFpYZHZjbXN2Wm5KaGJXVjNiM0pyTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeTh2SUR4eVpXWmxjbVZ1WTJVZ2NHRjBhRDFjSWk0dmFXNTBaWEptWVdObGN5NTBjMXdpSUM4K1hISmNibHh5WEc1cGJYQnZjblFnZXlCQmNIQWdmU0JtY205dElDY3VMMkZ3Y0NjN1hISmNibWx0Y0c5eWRDQjdJRkp2ZFhSbElIMGdabkp2YlNBbkxpOXliM1YwWlNjN1hISmNibWx0Y0c5eWRDQjdJRUZ3Y0VWMlpXNTBJSDBnWm5KdmJTQW5MaTloY0hCZlpYWmxiblFuTzF4eVhHNXBiWEJ2Y25RZ2V5QkRiMjUwY205c2JHVnlJSDBnWm5KdmJTQW5MaTlqYjI1MGNtOXNiR1Z5Snp0Y2NseHVhVzF3YjNKMElIc2dWbWxsZHl3Z1ZtbGxkMU5sZEhScGJtZHpJSDBnWm5KdmJTQW5MaTkyYVdWM0p6dGNjbHh1YVcxd2IzSjBJSHNnVFc5a1pXd3NJRTF2WkdWc1UyVjBkR2x1WjNNZ2ZTQm1jbTl0SUNjdUwyMXZaR1ZzSnp0Y2NseHVYSEpjYm1WNGNHOXlkQ0I3SUVGd2NDd2dRWEJ3UlhabGJuUXNJRU52Ym5SeWIyeHNaWElzSUZacFpYY3NJRlpwWlhkVFpYUjBhVzVuY3l3Z1RXOWtaV3dzSUUxdlpHVnNVMlYwZEdsdVozTXNJRkp2ZFhSbElIMDdJbDE5XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcZnJhbWV3b3JrXFxcXGZyYW1ld29yay5qc1wiLFwiLy4uXFxcXGZyYW1ld29ya1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1lZGlhdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZWRpYXRvcihpc0RlYnVnKSB7XG4gICAgICAgIGlmIChpc0RlYnVnID09PSB2b2lkIDApIHsgaXNEZWJ1ZyA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMuXyQgPSAkKHt9KTtcbiAgICAgICAgdGhpcy5faXNEZWJ1ZyA9IGlzRGVidWc7XG4gICAgfVxuICAgIE1lZGlhdG9yLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRGVidWcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcIlBVQkxJU0hcIiwgZS50b3BpYywgZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kLnRyaWdnZXIoZS50b3BpYywgZS5kYXRhKTtcbiAgICB9O1xuICAgIE1lZGlhdG9yLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAodGhpcy5faXNEZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKS5nZXRUaW1lKCksIFwiU1VCU0NSSUJFXCIsIGUudG9waWMsIGUuaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJC5vbihlLnRvcGljLCBlLmhhbmRsZXIpO1xuICAgIH07XG4gICAgTWVkaWF0b3IucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRGVidWcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBcIlVOU1VCU0NSSUJFXCIsIGUudG9waWMsIGUuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJC5vZmYoZS50b3BpYyk7XG4gICAgfTtcbiAgICByZXR1cm4gTWVkaWF0b3I7XG59KCkpO1xuZXhwb3J0cy5NZWRpYXRvciA9IE1lZGlhdG9yO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnlZVzFsZDI5eWF5OXRaV1JwWVhSdmNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVkQk8wbEJSMGtzYTBKQlFWa3NUMEZCZFVJN1VVRkJka0lzZDBKQlFVRXNSVUZCUVN4bFFVRjFRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFJRVU5vUWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF6dEpRVU0xUWl4RFFVRkRPMGxCUTAwc01FSkJRVThzUjBGQlpDeFZRVUZsTEVOQlFWazdVVUZEZGtJc1NVRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeExRVUZMTEVsQlFVa3NSVUZCUXp0WlFVTjBRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEycEZPMUZCUTBRc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEY2tNc1EwRkJRenRKUVVOTkxEUkNRVUZUTEVkQlFXaENMRlZCUVdsQ0xFTkJRVms3VVVGRGVrSXNTVUZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hMUVVGTExFbEJRVWtzUlVGQlF6dFpRVU4wUWl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8xTkJRM1JGTzFGQlEwUXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGJrTXNRMEZCUXp0SlFVTk5MRGhDUVVGWExFZEJRV3hDTEZWQlFXMUNMRU5CUVZrN1VVRkRNMElzU1VGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4TFFVRkxMRWxCUVVrc1JVRkJRenRaUVVOMFFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNKRk8xRkJRMFFzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlEzcENMRU5CUVVNN1NVRkRUQ3hsUVVGRE8wRkJRVVFzUTBGNlFrRXNRVUY1UWtNc1NVRkJRVHRCUVVWUExEUkNRVUZSSWl3aVptbHNaU0k2SW1aeVlXMWxkMjl5YXk5dFpXUnBZWFJ2Y2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIQmhkR2c5WENJdUwybHVkR1Z5Wm1GalpYTXVkSE5jSWlBdlBseHlYRzR2THk4Z1BISmxabVZ5Wlc1alpTQndZWFJvUFZ3aUxpNHZMaTR2Ym05a1pWOXRiMlIxYkdWekwwQjBlWEJsY3k5cWNYVmxjbmt2YVc1a1pYZ3VaQzUwYzF3aUlDOCtYSEpjYmx4eVhHNWpiR0Z6Y3lCTlpXUnBZWFJ2Y2lCcGJYQnNaVzFsYm5SeklFbE5aV1JwWVhSdmNudGNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1h5UTZJRXBSZFdWeWVUdGNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1gybHpSR1ZpZFdjN1hISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBjMFJsWW5Wbk9tSnZiMnhsWVc0Z1BTQm1ZV3h6WlNsN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZkpDQTlJQ1FvZTMwcE8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgybHpSR1ZpZFdjZ1BTQnBjMFJsWW5Wbk8xeHlYRzRnSUNBZ2ZWeHlYRzRnSUNBZ2NIVmliR2xqSUhCMVlteHBjMmdvWlRvZ1NVRndjRVYyWlc1MEtUcDJiMmxrZTF4eVhHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVgybHpSR1ZpZFdjZ1BUMDlJSFJ5ZFdVcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5aHVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LU3dnWENKUVZVSk1TVk5JWENJc0lHVXVkRzl3YVdNc0lHVXVaR0YwWVNrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYeVF1ZEhKcFoyZGxjaWhsTG5SdmNHbGpMQ0JsTG1SaGRHRXBPMXh5WEc0Z0lDQWdmVnh5WEc0Z0lDQWdjSFZpYkdsaklITjFZbk5qY21saVpTaGxPaUJKUVhCd1JYWmxiblFwT25admFXUjdYSEpjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVmYVhORVpXSjFaeUE5UFQwZ2RISjFaU2w3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0c1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncExDQmNJbE5WUWxORFVrbENSVndpTENCbExuUnZjR2xqTENCbExtaGhibVJzWlhJcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDhrTG05dUtHVXVkRzl3YVdNc0lHVXVhR0Z1Wkd4bGNpazdYSEpjYmlBZ0lDQjlYSEpjYmlBZ0lDQndkV0pzYVdNZ2RXNXpkV0p6WTNKcFltVW9aVG9nU1VGd2NFVjJaVzUwS1RwMmIybGtlMXh5WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11WDJselJHVmlkV2NnUFQwOUlIUnlkV1VwZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tTd2dYQ0pWVGxOVlFsTkRVa2xDUlZ3aUxDQmxMblJ2Y0dsakxDQmxMbVJoZEdFcE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbDhrTG05bVppaGxMblJ2Y0dsaktUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJSHROWldScFlYUnZjbjA3SWwxOVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXGZyYW1ld29ya1xcXFxtZWRpYXRvci5qc1wiLFwiLy4uXFxcXGZyYW1ld29ya1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXZlbnRfZW1pdHRlcl8xID0gcmVxdWlyZShcIi4vZXZlbnRfZW1pdHRlclwiKTtcbmZ1bmN0aW9uIE1vZGVsU2V0dGluZ3Moc2VydmljZVVybCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBvcmlnaW5hbCA9IHRhcmdldDtcbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0KGNvbnN0cnVjdG9yLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYy5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgYygpO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3NlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdChvcmlnaW5hbCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIGYucHJvdG90eXBlID0gb3JpZ2luYWwucHJvdG90eXBlO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xufVxuZXhwb3J0cy5Nb2RlbFNldHRpbmdzID0gTW9kZWxTZXR0aW5ncztcbnZhciBNb2RlbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1vZGVsKG1ldGlhdG9yKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBtZXRpYXRvcikgfHwgdGhpcztcbiAgICB9XG4gICAgTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZGVsLnByb3RvdHlwZS5kaXNwb3NlKCkgaXMgYWJzdHJhY3QgYW5kIG11c3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUucmVxdWVzdEFzeW5jID0gZnVuY3Rpb24gKG1ldGhvZCwgZGF0YVR5cGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgdXJsOiBfdGhpcy5fc2VydmljZVVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHt9LFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBkYXRhVHlwZSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUuZ2V0QXN5bmMgPSBmdW5jdGlvbiAoZGF0YVR5cGUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdEFzeW5jKCdHRVQnLCBkYXRhVHlwZSwgZGF0YSk7XG4gICAgfTtcbiAgICBNb2RlbC5wcm90b3R5cGUucG9zdEFzeW5jID0gZnVuY3Rpb24gKGRhdGFUeXBlLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RBc3luYygnUE9TVCcsIGRhdGFUeXBlLCBkYXRhKTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5wdXRBc3luYyA9IGZ1bmN0aW9uIChkYXRhVHlwZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ1BVVCcsIGRhdGFUeXBlLCBkYXRhKTtcbiAgICB9O1xuICAgIE1vZGVsLnByb3RvdHlwZS5kZWxldGVBc3luYyA9IGZ1bmN0aW9uIChkYXRhVHlwZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0QXN5bmMoJ0RFTEVURScsIGRhdGFUeXBlLCBkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNb2RlbDtcbn0oZXZlbnRfZW1pdHRlcl8xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5Nb2RlbCA9IE1vZGVsO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnlZVzFsZDI5eWF5OXRiMlJsYkM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdRVUZGUVN4cFJFRkJOa003UVVGRk4wTXNkVUpCUVhWQ0xGVkJRV3RDTzBsQlEzSkRMRTlCUVU4c1ZVRkJVeXhOUVVGWE8xRkJRM1pDTEVsQlFVa3NVVUZCVVN4SFFVRkhMRTFCUVUwc1EwRkJRenRSUVVOMFFpeHRRa0ZCYlVJc1YwRkJWeXhGUVVGRkxFbEJRVWs3V1VGRGFFTXNTVUZCU1N4RFFVRkRMRWRCUVZFN1owSkJRMVFzVDBGQlR5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU42UXl4RFFVRkRMRU5CUVVFN1dVRkRSQ3hEUVVGRExFTkJRVU1zVTBGQlV5eEhRVUZITEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkRjRU1zU1VGQlNTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOMlFpeFJRVUZSTEVOQlFVTXNWMEZCVnl4SFFVRkhMRlZCUVZVc1EwRkJRenRaUVVOc1F5eFBRVUZQTEZGQlFWRXNRMEZCUXp0UlFVTndRaXhEUVVGRE8xRkJSVVFzU1VGQlNTeERRVUZETEVkQlFWRTdXVUZCVXl4alFVRlBPMmxDUVVGUUxGVkJRVThzUlVGQlVDeHhRa0ZCVHl4RlFVRlFMRWxCUVU4N1owSkJRVkFzZVVKQlFVODdPMWxCUTNwQ0xFOUJRVThzVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVOeVF5eERRVUZETEVOQlFVRTdVVUZGUkN4RFFVRkRMRU5CUVVNc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVVUZEYWtNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRFlpeERRVUZETEVOQlFVRTdRVUZEVEN4RFFVRkRPMEZCYTBSakxITkRRVUZoTzBGQmFFUTFRanRKUVVGdlFpeDVRa0ZCV1R0SlFVVTFRaXhsUVVGWkxGRkJRVzFDTzJWQlF6TkNMR3RDUVVGTkxGRkJRVkVzUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlUwc01FSkJRVlVzUjBGQmFrSTdVVUZEU1N4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHZEZRVUZuUlN4RFFVRkRMRU5CUVVNN1NVRkRkRVlzUTBGQlF6dEpRVVZOTEhWQ1FVRlBMRWRCUVdRN1VVRkRTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETERaRVFVRTJSQ3hEUVVGRExFTkJRVU03U1VGRGJrWXNRMEZCUXp0SlFVVlRMRFJDUVVGWkxFZEJRWFJDTEZWQlFYVkNMRTFCUVdNc1JVRkJSU3hSUVVGblFpeEZRVUZGTEVsQlFWTTdVVUZCYkVVc2FVSkJaVU03VVVGa1J5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRlBMRlZCUVVNc1QwRkJiMElzUlVGQlJTeE5RVUZ0UWp0WlFVTXZSQ3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTklMRTFCUVUwc1JVRkJSU3hOUVVGTk8yZENRVU5rTEVkQlFVY3NSVUZCUlN4TFFVRkpMRU5CUVVNc1YwRkJWenRuUWtGRGNrSXNTVUZCU1N4RlFVRkZMRWxCUVVrc1NVRkJTU3hGUVVGRk8yZENRVU5vUWl4UlFVRlJMRVZCUVVVc1VVRkJVVHRuUWtGRGJFSXNUMEZCVHl4RlFVRkZMRlZCUVVNc1VVRkJVVHR2UWtGRFpDeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM1JDTEVOQlFVTTdaMEpCUTBRc1MwRkJTeXhGUVVGRk8yOUNRVUZETEdOQlFXTTdlVUpCUVdRc1ZVRkJZeXhGUVVGa0xIRkNRVUZqTEVWQlFXUXNTVUZCWXp0M1FrRkJaQ3g1UWtGQll6czdiMEpCUTJ4Q0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRha0lzUTBGQlF6dGhRVU5LTEVOQlFVTXNRMEZCUXp0UlFVTlFMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMUFzUTBGQlF6dEpRVVZUTEhkQ1FVRlJMRWRCUVd4Q0xGVkJRVzFDTEZGQlFXZENMRVZCUVVVc1NVRkJVenRSUVVNeFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTndSQ3hEUVVGRE8wbEJSVk1zZVVKQlFWTXNSMEZCYmtJc1ZVRkJiMElzVVVGQlowSXNSVUZCUlN4SlFVRlRPMUZCUXpORExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzSkVMRU5CUVVNN1NVRkZVeXgzUWtGQlVTeEhRVUZzUWl4VlFVRnRRaXhSUVVGblFpeEZRVUZGTEVsQlFWTTdVVUZETVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGNFUXNRMEZCUXp0SlFVVlRMREpDUVVGWExFZEJRWEpDTEZWQlFYTkNMRkZCUVdkQ0xFVkJRVVVzU1VGQlV6dFJRVU0zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOMlJDeERRVUZETzBsQlEwd3NXVUZCUXp0QlFVRkVMRU5CT1VOQkxFRkJPRU5ETEVOQk9VTnRRaXcwUWtGQldTeEhRVGhETDBJN1FVRkZUeXh6UWtGQlN5SXNJbVpwYkdVaU9pSm1jbUZ0WlhkdmNtc3ZiVzlrWld3dWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THk4Z1BISmxabVZ5Wlc1alpTQndZWFJvUFZ3aUxpOXBiblJsY21aaFkyVnpMblJ6WENJZ0x6NWNjbHh1WEhKY2JtbHRjRzl5ZENCN1JYWmxiblJGYldsMGRHVnlmU0JtY205dElDY3VMMlYyWlc1MFgyVnRhWFIwWlhJbk8xeHlYRzVjY2x4dVpuVnVZM1JwYjI0Z1RXOWtaV3hUWlhSMGFXNW5jeWh6WlhKMmFXTmxWWEpzT2lCemRISnBibWNwZTF4eVhHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVLSFJoY21kbGREb2dZVzU1S1hzZ0lDQmNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2IzSnBaMmx1WVd3Z1BTQjBZWEpuWlhRN1hISmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdZMjl1YzNSeWRXTjBLR052Ym5OMGNuVmpkRzl5TENCaGNtZHpLWHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdNNklHRnVlU0E5SUdaMWJtTjBhVzl1S0NsN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXVjM1J5ZFdOMGIzSXVZWEJ3Ykhrb2RHaHBjeXdnWVhKbmN5azdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1l5NXdjbTkwYjNSNWNHVWdQU0JqYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBibk4wWVc1alpTQTlJRzVsZHlCaktDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExsOXpaWEoyYVdObFZYSnNJRDBnYzJWeWRtbGpaVlZ5YkR0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxPMXh5WEc0Z0lDQWdJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQWdJQ0FnZG1GeUlHWTZJR0Z1ZVNBOUlHWjFibU4wYVc5dUtDNHVMbUZ5WjNNcGUxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5dWMzUnlkV04wS0c5eWFXZHBibUZzTENCaGNtZHpLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUdZdWNISnZkRzkwZVhCbElEMGdiM0pwWjJsdVlXd3VjSEp2ZEc5MGVYQmxPMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWpiR0Z6Y3lCTmIyUmxiQ0JsZUhSbGJtUnpJRVYyWlc1MFJXMXBkSFJsY2lCcGJYQnNaVzFsYm5SeklFbE5iMlJsYkh0Y2NseHVJQ0FnSUhCeWFYWmhkR1VnWDNObGNuWnBZMlZWY213NklITjBjbWx1Wnp0Y2NseHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHMWxkR2xoZEc5eU9pQkpUV1ZrYVdGMGIzSXBlMXh5WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLRzFsZEdsaGRHOXlLVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2RXSnNhV01nYVc1cGRHbGhiR2w2WlNncGUxeHlYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25UVzlrWld3dWNISnZkRzkwZVhCbExtbHVhWFJwWVd4cGVtVW9LU0JwY3lCaFluTjBjbUZqZENCaGJtUWdiWFZ6ZENCcGJYQnNaVzFsYm5SbFpDNG5LVHRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2RXSnNhV01nWkdsemNHOXpaU2dwZTF4eVhHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblRXOWtaV3d1Y0hKdmRHOTBlWEJsTG1ScGMzQnZjMlVvS1NCcGN5QmhZbk4wY21GamRDQmhibVFnYlhWemRDQnBiWEJzWlcxbGJuUmxaQzRuS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndjbTkwWldOMFpXUWdjbVZ4ZFdWemRFRnplVzVqS0cxbGRHaHZaRG9nYzNSeWFXNW5MQ0JrWVhSaFZIbHdaVG9nYzNSeWFXNW5MQ0JrWVhSaE9pQmhibmtwZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpUeDJiMmxrUGlnb2NtVnpiMngyWlRvZ0tISXBJRDArSUhadmFXUXNJSEpsYW1WamREb2dLR1VwSUQwK0lIWnZhV1FwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pDNWhhbUY0S0h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWxkR2h2WkRvZ2JXVjBhRzlrTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYSnNPaUIwYUdsekxsOXpaWEoyYVdObFZYSnNMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGMFlUb2daR0YwWVNCOGZDQjdmU3hjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRlVlWEJsT2lCa1lYUmhWSGx3WlN4Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjFZMk5sYzNNNklDaHlaWE53YjI1elpTazlQbnRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtISmxjM0J2Ym5ObEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGNuSnZjam9nS0M0dUxtRnlaM002SUdGdWVWdGRLVDArZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYW1WamRDaGhjbWR6S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEp2ZEdWamRHVmtJR2RsZEVGemVXNWpLR1JoZEdGVWVYQmxPaUJ6ZEhKcGJtY3NJR1JoZEdFNklHRnVlU2w3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZ4ZFdWemRFRnplVzVqS0NkSFJWUW5MQ0JrWVhSaFZIbHdaU3dnWkdGMFlTazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKdmRHVmpkR1ZrSUhCdmMzUkJjM2x1WXloa1lYUmhWSGx3WlRvZ2MzUnlhVzVuTENCa1lYUmhPaUJoYm5rcGUxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbGNYVmxjM1JCYzNsdVl5Z25VRTlUVkNjc0lHUmhkR0ZVZVhCbExDQmtZWFJoS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndjbTkwWldOMFpXUWdjSFYwUVhONWJtTW9aR0YwWVZSNWNHVTZJSE4wY21sdVp5d2daR0YwWVRvZ1lXNTVLWHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlaWEYxWlhOMFFYTjVibU1vSjFCVlZDY3NJR1JoZEdGVWVYQmxMQ0JrWVhSaEtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3Y205MFpXTjBaV1FnWkdWc1pYUmxRWE41Ym1Nb1pHRjBZVlI1Y0dVNklITjBjbWx1Wnl3Z1pHRjBZVG9nWVc1NUtYdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpYRjFaWE4wUVhONWJtTW9KMFJGVEVWVVJTY3NJR1JoZEdGVWVYQmxMQ0JrWVhSaEtUdGNjbHh1SUNBZ0lIMGdJQ0FnWEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENCN1RXOWtaV3dzSUUxdlpHVnNVMlYwZEdsdVozTjlPeUpkZlE9PVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXGZyYW1ld29ya1xcXFxtb2RlbC5qc1wiLFwiLy4uXFxcXGZyYW1ld29ya1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFJvdXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSb3V0ZShjb250cm9sbGVyTmFtZSwgYWN0aW9uTmFtZSwgYXJncykge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJOYW1lID0gY29udHJvbGxlck5hbWU7XG4gICAgICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgfVxuICAgIFJvdXRlLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzLCBzYXJncztcbiAgICAgICAgc2FyZ3MgPSB0aGlzLmFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLnRvU3RyaW5nKCk7IH0pLmpvaW4oXCIvXCIpO1xuICAgICAgICBzID0gdGhpcy5jb250cm9sbGVyTmFtZSArIFwiL1wiICsgdGhpcy5hY3Rpb25OYW1lICsgXCIvXCIgKyBzYXJncztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICByZXR1cm4gUm91dGU7XG59KCkpO1xuZXhwb3J0cy5Sb3V0ZSA9IFJvdXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltWnlZVzFsZDI5eWF5OXliM1YwWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVVZCTzBsQlNVa3NaVUZCV1N4alFVRnpRaXhGUVVGRkxGVkJRV3RDTEVWQlFVVXNTVUZCWXp0UlFVTnNSU3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEdOQlFXTXNRMEZCUXp0UlFVTnlReXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNRMEZCUXp0UlFVTTNRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0SlFVTnlRaXhEUVVGRE8wbEJRMDBzZVVKQlFWTXNSMEZCYUVJN1VVRkRTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeExRVUZMTEVOQlFVTTdVVUZEWWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCUVN4RFFVRkRMRWxCUVVrc1QwRkJRU3hEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFWb3NRMEZCV1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzFGQlEyNUVMRU5CUVVNc1IwRkJUU3hKUVVGSkxFTkJRVU1zWTBGQll5eFRRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRk5CUVVrc1MwRkJUeXhEUVVGRE8xRkJRM3BFTEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTJJc1EwRkJRenRKUVVOTUxGbEJRVU03UVVGQlJDeERRV1pCTEVGQlpVTXNTVUZCUVR0QlFVTlBMSE5DUVVGTElpd2labWxzWlNJNkltWnlZVzFsZDI5eWF5OXliM1YwWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIQmhkR2c5WENJdUwybHVkR1Z5Wm1GalpYTXVkSE5jSWlBdlBseHlYRzVjY2x4dVkyeGhjM01nVW05MWRHVWdhVzF3YkdWdFpXNTBjeUJKVW05MWRHVjdYSEpjYmlBZ0lDQndkV0pzYVdNZ1kyOXVkSEp2Ykd4bGNrNWhiV1U2SUhOMGNtbHVaenRjY2x4dUlDQWdJSEIxWW14cFl5QmhZM1JwYjI1T1lXMWxPaUJ6ZEhKcGJtYzdYSEpjYmlBZ0lDQndkV0pzYVdNZ1lYSm5jem9nVDJKcVpXTjBXMTA3WEhKY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2loamIyNTBjbTlzYkdWeVRtRnRaVG9nYzNSeWFXNW5MQ0JoWTNScGIyNU9ZVzFsT2lCemRISnBibWNzSUdGeVozTTZJRTlpYW1WamRGdGRLWHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbU52Ym5SeWIyeHNaWEpPWVcxbElEMGdZMjl1ZEhKdmJHeGxjazVoYldVN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBiMjVPWVcxbElEMGdZV04wYVc5dVRtRnRaVHRjY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbUZ5WjNNZ1BTQmhjbWR6TzF4eVhHNGdJQ0FnZlZ4eVhHNGdJQ0FnY0hWaWJHbGpJSE5sY21saGJHbDZaU2dwT25OMGNtbHVaM3RjY2x4dUlDQWdJQ0FnSUNCMllYSWdjeXdnYzJGeVozTTdYSEpjYmlBZ0lDQWdJQ0FnYzJGeVozTWdQU0IwYUdsekxtRnlaM011YldGd0tHRWdQVDRnWVM1MGIxTjBjbWx1WnlncEtTNXFiMmx1S0Z3aUwxd2lLVHRjY2x4dUlDQWdJQ0FnSUNCeklEMGdZQ1I3ZEdocGN5NWpiMjUwY205c2JHVnlUbUZ0WlgwdkpIdDBhR2x6TG1GamRHbHZiazVoYldWOUx5UjdjMkZ5WjNOOVlEdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjenRjY2x4dUlDQWdJSDBnWEhKY2JuMWNjbHh1Wlhod2IzSjBJSHRTYjNWMFpYMDdJbDE5XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcZnJhbWV3b3JrXFxcXHJvdXRlLmpzXCIsXCIvLi5cXFxcZnJhbWV3b3JrXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBldmVudF9lbWl0dGVyXzEgPSByZXF1aXJlKFwiLi9ldmVudF9lbWl0dGVyXCIpO1xudmFyIGFwcF9ldmVudF8xID0gcmVxdWlyZShcIi4vYXBwX2V2ZW50XCIpO1xudmFyIHJvdXRlXzEgPSByZXF1aXJlKFwiLi9yb3V0ZVwiKTtcbnZhciBSb3V0ZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSb3V0ZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUm91dGVyKG1ldGlhdG9yLCBkZWZhdWx0Q29udHJvbGxlciwgZGVmYXVsdEFjdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtZXRpYXRvcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRDb250cm9sbGVyID0gZGVmYXVsdENvbnRyb2xsZXIgfHwgXCJob21lXCI7XG4gICAgICAgIF90aGlzLl9kZWZhdWx0QWN0aW9uID0gZGVmYXVsdEFjdGlvbiB8fCBcImluZGV4XCI7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUm91dGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgciA9IF90aGlzLmdldFJvdXRlKCk7XG4gICAgICAgICAgICBfdGhpcy5vblJvdXRlQ2hhbmdlKHIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50cyhbXG4gICAgICAgICAgICBuZXcgYXBwX2V2ZW50XzEuQXBwRXZlbnQoJ2FwcC5pbml0aWFsaXplJywgbnVsbCwgZnVuY3Rpb24gKGUsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vblJvdXRlQ2hhbmdlKF90aGlzLmdldFJvdXRlKCkpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgYXBwX2V2ZW50XzEuQXBwRXZlbnQoJ2FwcC5yb3V0ZScsIG51bGwsIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Um91dGUoZGF0YSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLmdldFJvdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVJvdXRlKGgpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5zZXRSb3V0ZSA9IGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICB2YXIgcyA9IHJvdXRlLnNlcmlhbGl6ZSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHM7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnBhcnNlUm91dGUgPSBmdW5jdGlvbiAoaGFzaCkge1xuICAgICAgICB2YXIgY29tcCwgY29udHJvbGxlciwgYWN0aW9uLCBhcmdzLCBpO1xuICAgICAgICBpZiAoaGFzaFtoYXNoLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgICAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZygwLCBoYXNoLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbXAgPSBoYXNoLnJlcGxhY2UoXCIjXCIsICcnKS5zcGxpdCgnLycpO1xuICAgICAgICBjb250cm9sbGVyID0gY29tcFswXSB8fCB0aGlzLl9kZWZhdWx0Q29udHJvbGxlcjtcbiAgICAgICAgYWN0aW9uID0gY29tcFsxXSB8fCB0aGlzLl9kZWZhdWx0QWN0aW9uO1xuICAgICAgICBhcmdzID0gW107XG4gICAgICAgIGZvciAoaSA9IDI7IGkgPCBjb21wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goY29tcFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyByb3V0ZV8xLlJvdXRlKGNvbnRyb2xsZXIsIGFjdGlvbiwgYXJncyk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLm9uUm91dGVDaGFuZ2UgPSBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IGFwcF9ldmVudF8xLkFwcEV2ZW50KCdhcHAuZGlzcGF0Y2gnLCByb3V0ZSwgbnVsbCkpO1xuICAgIH07XG4gICAgcmV0dXJuIFJvdXRlcjtcbn0oZXZlbnRfZW1pdHRlcl8xLkV2ZW50RW1pdHRlcikpO1xuZXhwb3J0cy5Sb3V0ZXIgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aeVlXMWxkMjl5YXk5eWIzVjBaWEl1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN08wRkJSVUVzYVVSQlFUWkRPMEZCUXpkRExIbERRVUZ4UXp0QlFVTnlReXhwUTBGQk9FSTdRVUZGT1VJN1NVRkJjVUlzTUVKQlFWazdTVUZKTjBJc1owSkJRVmtzVVVGQmJVSXNSVUZCUlN4cFFrRkJlVUlzUlVGQlJTeGhRVUZ4UWp0UlFVRnFSaXhaUVVOSkxHdENRVUZOTEZGQlFWRXNRMEZCUXl4VFFVZHNRanRSUVVaSExFdEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhwUWtGQmFVSXNTVUZCU1N4TlFVRk5MRU5CUVVNN1VVRkRkRVFzUzBGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4aFFVRmhMRWxCUVVrc1QwRkJUeXhEUVVGRE96dEpRVU51UkN4RFFVRkRPMGxCUlUwc01rSkJRVlVzUjBGQmFrSTdVVUZCUVN4cFFrRmpRenRSUVdKSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRk8xbEJRM1pDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFpRVU40UWl4TFFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6RkNMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJSVWdzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRE8xbEJRMjVDTEVsQlFVa3NiMEpCUVZFc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4SlFVRkpMRVZCUVVVc1ZVRkJReXhEUVVGTkxFVkJRVVVzU1VGQlZUdG5Ra0ZEY0VRc1MwRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRenRaUVVONFF5eERRVUZETEVOQlFVTTdXVUZEUml4SlFVRkpMRzlDUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRkRMRU5CUVUwc1JVRkJSU3hKUVVGVk8yZENRVU12UXl4TFFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFsQlEzaENMRU5CUVVNc1EwRkJRenRUUVVOTUxFTkJRVU1zUTBGQlF6dEpRVU5RTEVOQlFVTTdTVUZGVHl4NVFrRkJVU3hIUVVGb1FqdFJRVU5KTEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzFGQlF6ZENMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVThzZVVKQlFWRXNSMEZCYUVJc1ZVRkJhVUlzUzBGQldUdFJRVU42UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZETVVJc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUXpkQ0xFTkJRVU03U1VGRlR5d3lRa0ZCVlN4SFFVRnNRaXhWUVVGdFFpeEpRVUZaTzFGQlF6TkNMRWxCUVVrc1NVRkJTU3hGUVVGRkxGVkJRVlVzUlVGQlJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJRenRSUVVOMFF5eEpRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUXp0WlFVTTNRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTTNRenRSUVVORUxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRlRU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1VVRkRhRVFzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETzFGQlEzaERMRWxCUVVrc1IwRkJSeXhGUVVGRkxFTkJRVU03VVVGRFZpeExRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVNN1dVRkRNMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU4wUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hoUVVGTExFTkJRVU1zVlVGQlZTeEZRVUZGTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVNdlF5eERRVUZETzBsQlJVOHNPRUpCUVdFc1IwRkJja0lzVlVGQmMwSXNTMEZCV1R0UlFVTTVRaXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NiMEpCUVZFc1EwRkJReXhqUVVGakxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRha1VzUTBGQlF6dEpRVU5NTEdGQlFVTTdRVUZCUkN4RFFYUkVRU3hCUVhORVF5eERRWFJFYjBJc05FSkJRVmtzUjBGelJHaERPMEZCUlU4c2QwSkJRVTBpTENKbWFXeGxJam9pWm5KaGJXVjNiM0pyTDNKdmRYUmxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZMeUE4Y21WbVpYSmxibU5sSUhCaGRHZzlYQ0l1TDJsdWRHVnlabUZqWlhNdWRITmNJaUF2UGx4eVhHNWNjbHh1YVcxd2IzSjBJSHRGZG1WdWRFVnRhWFIwWlhKOUlHWnliMjBnWENJdUwyVjJaVzUwWDJWdGFYUjBaWEpjSWp0Y2NseHVhVzF3YjNKMElIdEJjSEJGZG1WdWRIMGdabkp2YlNCY0lpNHZZWEJ3WDJWMlpXNTBYQ0k3WEhKY2JtbHRjRzl5ZENCN1VtOTFkR1Y5SUdaeWIyMGdYQ0l1TDNKdmRYUmxYQ0k3WEhKY2JseHlYRzVqYkdGemN5QlNiM1YwWlhJZ1pYaDBaVzVrY3lCRmRtVnVkRVZ0YVhSMFpYSWdhVzF3YkdWdFpXNTBjeUJKVW05MWRHVnllMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZaR1ZtWVhWc2RFTnZiblJ5YjJ4c1pYSTZJSE4wY21sdVp6dGNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1gyUmxabUYxYkhSQlkzUnBiMjQ2SUhOMGNtbHVaenRjY2x4dVhISmNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHRaWFJwWVhSdmNqb2dTVTFsWkdsaGRHOXlMQ0JrWldaaGRXeDBRMjl1ZEhKdmJHeGxjam9nYzNSeWFXNW5MQ0JrWldaaGRXeDBRV04wYVc5dU9pQnpkSEpwYm1jcGUxeHlYRzRnSUNBZ0lDQWdJSE4xY0dWeUtHMWxkR2xoZEc5eUtUdGNjbHh1SUNBZ0lDQWdJQ0IwYUdsekxsOWtaV1poZFd4MFEyOXVkSEp2Ykd4bGNpQTlJR1JsWm1GMWJIUkRiMjUwY205c2JHVnlJSHg4SUZ3aWFHOXRaVndpTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDJSbFptRjFiSFJCWTNScGIyNGdQU0JrWldaaGRXeDBRV04wYVc5dUlIeDhJRndpYVc1a1pYaGNJanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2RXSnNhV01nYVc1cGRHbGhiR2w2WlNncGUxeHlYRzRnSUNBZ0lDQWdJQ1FvZDJsdVpHOTNLUzV2YmlnbmFHRnphR05vWVc1blpTY3NJQ2dwUFQ1N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnlJRDBnZEdocGN5NW5aWFJTYjNWMFpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVVtOTFkR1ZEYUdGdVoyVW9jaWs3WEhKY2JpQWdJQ0FnSUNBZ2ZTazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzNWaWMyTnlhV0psVkc5RmRtVnVkSE1vVzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1FYQndSWFpsYm5Rb0oyRndjQzVwYm1sMGFXRnNhWHBsSnl3Z2JuVnNiQ3dnS0dVNklHRnVlU3dnWkdGMFlUODZJR0Z1ZVNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibEp2ZFhSbFEyaGhibWRsS0hSb2FYTXVaMlYwVW05MWRHVW9LU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1FYQndSWFpsYm5Rb0oyRndjQzV5YjNWMFpTY3NJRzUxYkd3c0lDaGxPaUJoYm5rc0lHUmhkR0UvT2lCaGJua3BJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMFVtOTFkR1VvWkdGMFlTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBMQ0FnSUNBZ0lDQWdJQ0JjY2x4dUlDQWdJQ0FnSUNCZEtUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3Y21sMllYUmxJR2RsZEZKdmRYUmxLQ2w3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJR2dnUFNCM2FXNWtiM2N1Ykc5allYUnBiMjR1YUdGemFEdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d1lYSnpaVkp2ZFhSbEtHZ3BPMXh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhCeWFYWmhkR1VnYzJWMFVtOTFkR1VvY205MWRHVTZJRkp2ZFhSbEtYdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2N5QTlJSEp2ZFhSbExuTmxjbWxoYkdsNlpTZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVzYjJOaGRHbHZiaTVvWVhOb0lEMGdjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNCd2NtbDJZWFJsSUhCaGNuTmxVbTkxZEdVb2FHRnphRG9nYzNSeWFXNW5LWHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdZMjl0Y0N3Z1kyOXVkSEp2Ykd4bGNpd2dZV04wYVc5dUxDQmhjbWR6TENCcE8xeHlYRzRnSUNBZ0lDQWdJR2xtS0doaGMyaGJhR0Z6YUM1c1pXNW5kR2dnTFNBeFhTQTlQVDBnSnk4bktYdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FHRnphQ0E5SUdoaGMyZ3VjM1ZpYzNSeWFXNW5LREFzSUdoaGMyZ3ViR1Z1WjNSb0lDMGdNU2s3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJR052YlhBZ1BTQm9ZWE5vTG5KbGNHeGhZMlVvWENJalhDSXNJQ2NuS1M1emNHeHBkQ2duTHljcE8xeHlYRzRnSUNBZ0lDQWdJR052Ym5SeWIyeHNaWElnUFNCamIyMXdXekJkSUh4OElIUm9hWE11WDJSbFptRjFiSFJEYjI1MGNtOXNiR1Z5TzF4eVhHNGdJQ0FnSUNBZ0lHRmpkR2x2YmlBOUlHTnZiWEJiTVYwZ2ZId2dkR2hwY3k1ZlpHVm1ZWFZzZEVGamRHbHZianRjY2x4dUlDQWdJQ0FnSUNCaGNtZHpJRDBnVzEwN1hISmNiaUFnSUNBZ0lDQWdabTl5S0drZ1BTQXlPeUJwUENCamIyMXdMbXhsYm1kMGFEc2dhU3NyS1h0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWVhKbmN5NXdkWE5vS0dOdmJYQmJhVjBwTzF4eVhHNGdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZKdmRYUmxLR052Ym5SeWIyeHNaWElzSUdGamRHbHZiaXdnWVhKbmN5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J2YmxKdmRYUmxRMmhoYm1kbEtISnZkWFJsT2lCU2IzVjBaU2w3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTUwY21sbloyVnlSWFpsYm5Rb2JtVjNJRUZ3Y0VWMlpXNTBLQ2RoY0hBdVpHbHpjR0YwWTJnbkxDQnliM1YwWlN3Z2JuVnNiQ2twTzF4eVhHNGdJQ0FnZlZ4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ2UxSnZkWFJsY24wN0lsMTlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFxmcmFtZXdvcmtcXFxccm91dGVyLmpzXCIsXCIvLi5cXFxcZnJhbWV3b3JrXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBldmVudF9lbWl0dGVyXzEgPSByZXF1aXJlKFwiLi9ldmVudF9lbWl0dGVyXCIpO1xuZnVuY3Rpb24gVmlld1NldHRpbmdzKHRlbXBsYXRlVXJsLCBjb250YWluZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIgb3JpZ2luYWwgPSB0YXJnZXQ7XG4gICAgICAgIGZ1bmN0aW9uIGNvbnN0cnVjdChjb25zdHJ1Y3RvciwgYXJncykge1xuICAgICAgICAgICAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGMucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGMoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLl9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdGVtcGxhdGVVcmwgPSB0ZW1wbGF0ZVVybDtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Qob3JpZ2luYWwsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBmLnByb3RvdHlwZSA9IG9yaWdpbmFsLnByb3RvdHlwZTtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcbn1cbmV4cG9ydHMuVmlld1NldHRpbmdzID0gVmlld1NldHRpbmdzO1xudmFyIFZpZXcgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpZXcobWV0aWF0b3IpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIG1ldGlhdG9yKSB8fCB0aGlzO1xuICAgIH1cbiAgICBWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLmluaXRpYWxpemUoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlldy5wcm90b3R5cGUuZGlzcG9zZSgpIGlzIGFic3RyYWN0IGFuZCBtdXN0IGltcGxlbWVudGVkLicpO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuYmluZERvbUV2ZW50cyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpZXcucHJvdG90eXBlLmJpbmREb21FdmVudHMoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnVuYmluZERvbUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWaWV3LnByb3RvdHlwZS51bmJpbmREb21FdmVudHMoKSBpcyBhYnN0cmFjdCBhbmQgbXVzdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLmxvYWRUZW1wbGF0ZUFzeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIHVybDogX3RoaXMuX3RlbXBsYXRlVXJsLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuY29tcGlsZVRlbXBsYXRlQXN5bmMgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlldy5wcm90b3R5cGUuZ2V0VGVtcGxhdGVBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSA9PT0gdW5kZWZpbmVkIHx8IF90aGlzLl90ZW1wbGF0ZURlbGVnYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZFRlbXBsYXRlQXN5bmMoKS50aGVuKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbXBpbGVUZW1wbGF0ZUFzeW5jKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodGVtcGxhdGVEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdGVtcGxhdGVEZWxlZ2F0ZSA9IHRlbXBsYXRlRGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMuX3RlbXBsYXRlRGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX3RoaXMuX3RlbXBsYXRlRGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZpZXcucHJvdG90eXBlLnJlbmRlckFzeW5jID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy5nZXRUZW1wbGF0ZUFzeW5jKClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodGVtcGxhdGVEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBodG1sID0gX3RoaXMuX3RlbXBsYXRlRGVsZWdhdGUobW9kZWwpO1xuICAgICAgICAgICAgICAgICQoX3RoaXMuX2NvbnRhaW5lcikuaHRtbChodG1sKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1vZGVsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJlamVjdChlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZpZXc7XG59KGV2ZW50X2VtaXR0ZXJfMS5FdmVudEVtaXR0ZXIpKTtcbmV4cG9ydHMuVmlldyA9IFZpZXc7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1aeVlXMWxkMjl5YXk5MmFXVjNMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3p0QlFVZEJMR2xFUVVFclF6dEJRVWN2UXl4elFrRkJjMElzVjBGQmJVSXNSVUZCUlN4VFFVRnBRanRKUVVONFJDeFBRVUZQTEZWQlFWVXNUVUZCVnp0UlFVTjRRaXhKUVVGSkxGRkJRVkVzUjBGQlVTeE5RVUZOTEVOQlFVTTdVVUZETTBJc2JVSkJRVzFDTEZkQlFXZENMRVZCUVVVc1NVRkJTVHRaUVVOeVF5eEpRVUZKTEVOQlFVTXNSMEZCVXp0blFrRkRWaXhQUVVGUExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJRM3BETEVOQlFVTXNRMEZCUXp0WlFVTkdMRU5CUVVNc1EwRkJReXhUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTndReXhKUVVGSkxGRkJRVkVzUjBGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRPMWxCUXpWQ0xGRkJRVkVzUTBGQlF5eFZRVUZWTEVkQlFVY3NVMEZCVXl4RFFVRkRPMWxCUTJoRExGRkJRVkVzUTBGQlF5eFpRVUZaTEVkQlFVY3NWMEZCVnl4RFFVRkRPMWxCUTNCRExFOUJRVThzVVVGQlVTeERRVUZETzFGQlEzQkNMRU5CUVVNN1VVRkZSQ3hKUVVGSkxFTkJRVU1zUjBGQlVUdFpRVUZWTEdOQlFXTTdhVUpCUVdRc1ZVRkJZeXhGUVVGa0xIRkNRVUZqTEVWQlFXUXNTVUZCWXp0blFrRkJaQ3g1UWtGQll6czdXVUZEYWtNc1QwRkJUeXhUUVVGVExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF6dFJRVVZHTEVOQlFVTXNRMEZCUXl4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU5xUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlFUdEJRVU5NTEVOQlFVTTdRVUZ2Um1Nc2IwTkJRVms3UVVGc1JqTkNPMGxCUVcxQ0xIZENRVUZaTzBsQlN6TkNMR05CUVZrc1VVRkJiVUk3WlVGRE0wSXNhMEpCUVUwc1VVRkJVU3hEUVVGRE8wbEJRMjVDTEVOQlFVTTdTVUZGVFN4NVFrRkJWU3hIUVVGcVFqdFJRVU5KTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc0swUkJRU3RFTEVOQlFVTXNRMEZCUXp0SlFVTnlSaXhEUVVGRE8wbEJSVTBzYzBKQlFVOHNSMEZCWkR0UlFVTkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zTkVSQlFUUkVMRU5CUVVNc1EwRkJRenRKUVVOc1JpeERRVUZETzBsQlJWTXNORUpCUVdFc1IwRkJka0lzVlVGQmQwSXNTMEZCVlR0UlFVTTVRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEd0RlFVRnJSU3hEUVVGRExFTkJRVU03U1VGRGVFWXNRMEZCUXp0SlFVVlRMRGhDUVVGbExFZEJRWHBDTzFGQlEwa3NUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh2UlVGQmIwVXNRMEZCUXl4RFFVRkRPMGxCUXpGR0xFTkJRVU03U1VGRlR5eG5RMEZCYVVJc1IwRkJla0k3VVVGQlFTeHBRa0ZqUXp0UlFXSkhMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlF5eFBRVUZ2UWl4RlFVRkZMRTFCUVcxQ08xbEJRM3BFTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRMGdzVFVGQlRTeEZRVUZGTEV0QlFVczdaMEpCUTJJc1IwRkJSeXhGUVVGRkxFdEJRVWtzUTBGQlF5eFpRVUZaTzJkQ1FVTjBRaXhSUVVGUkxFVkJRVVVzVFVGQlRUdG5Ra0ZEYUVJc1QwRkJUeXhGUVVGRkxGVkJRVU1zVVVGQlVUdHZRa0ZEWkN4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEzUkNMRU5CUVVNN1owSkJRMFFzUzBGQlN5eEZRVUZGTzI5Q1FVRkRMR05CUVdNN2VVSkJRV1FzVlVGQll5eEZRVUZrTEhGQ1FVRmpMRVZCUVdRc1NVRkJZenQzUWtGQlpDeDVRa0ZCWXpzN2IwSkJRMnhDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRGFrSXNRMEZCUXp0aFFVTktMRU5CUVVNc1EwRkJRenRSUVVOUUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVVlBMRzFEUVVGdlFpeEhRVUUxUWl4VlFVRTJRaXhOUVVGak8xRkJRM1pETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJReXhQUVVGdlFpeEZRVUZGTEUxQlFXMUNPMWxCUTNwRUxFbEJRVWs3WjBKQlEwRXNTVUZCU1N4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkRNVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMkZCUTNKQ08xbEJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdaMEpCUTFJc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEySTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGRlR5d3JRa0ZCWjBJc1IwRkJlRUk3VVVGQlFTeHBRa0ZsUXp0UlFXUkhMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRVU1zVlVGQlF5eFBRVUZ2UWl4RlFVRkZMRTFCUVcxQ08xbEJRM3BFTEVsQlFVa3NTMEZCU1N4RFFVRkRMR2xDUVVGcFFpeExRVUZMTEZOQlFWTXNTVUZCU1N4TFFVRkpMRU5CUVVNc2FVSkJRV2xDTEV0QlFVc3NTVUZCU1N4RlFVRkZPMmRDUVVONlJTeExRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCUXl4TlFVRk5PMjlDUVVOcVF5eFBRVUZQTEV0QlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkROME1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVVNc1owSkJRWEZDTzI5Q1FVTXhRaXhMUVVGSkxFTkJRVU1zYVVKQlFXbENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdiMEpCUXpGRExFOUJRVThzUTBGQlF5eExRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGQlF6dG5Ra0ZEY0VNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFVTXNRMEZCUXp0dlFrRkRVQ3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJRc1EwRkJReXhEUVVGRExFTkJRVU03WVVGRFRqdHBRa0ZCVFR0blFrRkRTQ3hQUVVGUExFTkJRVU1zUzBGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRVU03WVVGRGJrTTdVVUZEVEN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOUUxFTkJRVU03U1VGRlV5d3dRa0ZCVnl4SFFVRnlRaXhWUVVGelFpeExRVUZMTzFGQlFUTkNMR2xDUVZWRE8xRkJWRWNzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRkRMRTlCUVc5Q0xFVkJRVVVzVFVGQmJVSTdXVUZEZWtRc1MwRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZPMmxDUVVOc1FpeEpRVUZKTEVOQlFVTXNWVUZCUXl4blFrRkJaMEk3WjBKQlEyNUNMRWxCUVVrc1NVRkJTU3hIUVVGSExFdEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZEZWtNc1EwRkJReXhEUVVGRExFdEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlF6bENMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVU51UWl4RFFVRkRMRU5CUVVNN2FVSkJRMFFzUzBGQlN5eERRVUZETEZWQlFVTXNRMEZCUXl4SlFVRlBMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlExQXNRMEZCUXp0SlFVTk1MRmRCUVVNN1FVRkJSQ3hEUVdoR1FTeEJRV2RHUXl4RFFXaEdhMElzTkVKQlFWa3NSMEZuUmpsQ08wRkJSVkVzYjBKQlFVa2lMQ0ptYVd4bElqb2labkpoYldWM2IzSnJMM1pwWlhjdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THk4Z1BISmxabVZ5Wlc1alpTQndZWFJvUFZ3aUxpOXBiblJsY21aaFkyVnpMblJ6WENJZ0x6NWNjbHh1THk4dklEeHlaV1psY21WdVkyVWdjR0YwYUQxY0lpNHVMeTR1TDI1dlpHVmZiVzlrZFd4bGN5OUFkSGx3WlhNdmFHRnVaR3hsWW1GeWN5OXBibVJsZUM1a0xuUnpYQ0lnTHo1Y2NseHVYSEpjYm1sdGNHOXlkQ0I3SUVWMlpXNTBSVzFwZEhSbGNpQjlJR1p5YjIwZ0p5NHZaWFpsYm5SZlpXMXBkSFJsY2ljN1hISmNibWx0Y0c5eWRDQjdJRUZ3Y0VWMlpXNTBJSDBnWm5KdmJTQW5MaTloY0hCZlpYWmxiblFuTzF4eVhHNWNjbHh1Wm5WdVkzUnBiMjRnVm1sbGQxTmxkSFJwYm1kektIUmxiWEJzWVhSbFZYSnNPaUJ6ZEhKcGJtY3NJR052Ym5SaGFXNWxjam9nYzNSeWFXNW5LVG9nWVc1NUlIdGNjbHh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2RHRnlaMlYwT2lCaGJua3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdiM0pwWjJsdVlXdzZJR0Z1ZVNBOUlIUmhjbWRsZER0Y2NseHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQmpiMjV6ZEhKMVkzUW9ZMjl1YzNSeWRXTjBiM0k2SUdGdWVTd2dZWEpuY3lrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZeUE2SUdGdWVTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyNXpkSEoxWTNSdmNpNWhjSEJzZVNoMGFHbHpMQ0JoY21kektUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1l5NXdjbTkwYjNSNWNHVWdQU0JqYjI1emRISjFZM1J2Y2k1d2NtOTBiM1I1Y0dVN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnBibk4wWVc1alpUb2dZVzU1SUQwZ2JtVjNJR01vS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1WDJOdmJuUmhhVzVsY2lBOUlHTnZiblJoYVc1bGNqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdVgzUmxiWEJzWVhSbFZYSnNJRDBnZEdWdGNHeGhkR1ZWY213N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJwYm5OMFlXNWpaVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNibHh5WEc0Z0lDQWdJQ0FnSUhaaGNpQm1PaUJoYm5rZ1BTQm1kVzVqZEdsdmJpQW9MaTR1WVhKbmN6b2dZVzU1VzEwcE9pQmhibmtnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl1YzNSeWRXTjBLRzl5YVdkcGJtRnNMQ0JoY21kektUdGNjbHh1SUNBZ0lDQWdJQ0I5TzF4eVhHNWNjbHh1SUNBZ0lDQWdJQ0JtTG5CeWIzUnZkSGx3WlNBOUlHOXlhV2RwYm1Gc0xuQnliM1J2ZEhsd1pUdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaanRjY2x4dUlDQWdJSDFjY2x4dWZWeHlYRzVjY2x4dVkyeGhjM01nVm1sbGR5QmxlSFJsYm1SeklFVjJaVzUwUlcxcGRIUmxjaUJwYlhCc1pXMWxiblJ6SUVsV2FXVjNJSHRjY2x4dUlDQWdJSEJ5YjNSbFkzUmxaQ0JmWTI5dWRHRnBibVZ5T2lCemRISnBibWM3WEhKY2JpQWdJQ0J3Y21sMllYUmxJRjkwWlcxd2JHRjBaVlZ5YkRvZ2MzUnlhVzVuTzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmZEdWdGNHeGhkR1ZFWld4bFoyRjBaVG9nU0dGdVpHeGxZbUZ5YzFSbGJYQnNZWFJsUkdWc1pXZGhkR1U3WEhKY2JseHlYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9iV1YwYVdGMGIzSTZJRWxOWldScFlYUnZjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0cxbGRHbGhkRzl5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ2FXNXBkR2xoYkdsNlpTZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFacFpYY3VjSEp2ZEc5MGVYQmxMbWx1YVhScFlXeHBlbVVvS1NCcGN5QmhZbk4wY21GamRDQmhibVFnYlhWemRDQnBiWEJzWlcxbGJuUmxaQzRuS1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndkV0pzYVdNZ1pHbHpjRzl6WlNncElIdGNjbHh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMVpwWlhjdWNISnZkRzkwZVhCbExtUnBjM0J2YzJVb0tTQnBjeUJoWW5OMGNtRmpkQ0JoYm1RZ2JYVnpkQ0JwYlhCc1pXMWxiblJsWkM0bktUdGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0J3Y205MFpXTjBaV1FnWW1sdVpFUnZiVVYyWlc1MGN5aHRiMlJsYkRvZ1lXNTVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkV2FXVjNMbkJ5YjNSdmRIbHdaUzVpYVc1a1JHOXRSWFpsYm5SektDa2dhWE1nWVdKemRISmhZM1FnWVc1a0lHMTFjM1FnYVcxd2JHVnRaVzUwWldRdUp5azdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKdmRHVmpkR1ZrSUhWdVltbHVaRVJ2YlVWMlpXNTBjeWdwSUh0Y2NseHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxWnBaWGN1Y0hKdmRHOTBlWEJsTG5WdVltbHVaRVJ2YlVWMlpXNTBjeWdwSUdseklHRmljM1J5WVdOMElHRnVaQ0J0ZFhOMElHbHRjR3hsYldWdWRHVmtMaWNwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2JHOWhaRlJsYlhCc1lYUmxRWE41Ym1Nb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsT2lBb2Npa2dQVDRnZG05cFpDd2djbVZxWldOME9pQW9aU2tnUFQ0Z2RtOXBaQ2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBa0xtRnFZWGdvZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrT2lBblIwVlVKeXhjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhWeWJEb2dkR2hwY3k1ZmRHVnRjR3hoZEdWVmNtd3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaFZIbHdaVG9nSjNSbGVIUW5MRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNWalkyVnpjem9nS0hKbGMzQnZibk5sS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpiMngyWlNoeVpYTndiMjV6WlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhKeWIzSTZJQ2d1TGk1aGNtZHpPaUJoYm5sYlhTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYW1WamRDaGhjbWR6S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYSEpjYmlBZ0lDQWdJQ0FnZlNrN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmpiMjF3YVd4bFZHVnRjR3hoZEdWQmMzbHVZeWh6YjNWeVkyVTZJSE4wY21sdVp5a2dlMXh5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpiMngyWlRvZ0tISXBJRDArSUhadmFXUXNJSEpsYW1WamREb2dLR1VwSUQwK0lIWnZhV1FwSUQwK0lIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RISjVJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQjBaVzF3YkdGMFpTQTlJRWhoYm1Sc1pXSmhjbk11WTI5dGNHbHNaU2h6YjNWeVkyVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2gwWlcxd2JHRjBaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWTJGMFkyZ2dLR1VwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxhbVZqZENobEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ0lDQWdJSDBwTzF4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ1oyVjBWR1Z0Y0d4aGRHVkJjM2x1WXlncElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVU2SUNoeUtTQTlQaUIyYjJsa0xDQnlaV3BsWTNRNklDaGxLU0E5UGlCMmIybGtLU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5MFpXMXdiR0YwWlVSbGJHVm5ZWFJsSUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnZEdocGN5NWZkR1Z0Y0d4aGRHVkVaV3hsWjJGMFpTQTlQVDBnYm5Wc2JDa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXNiMkZrVkdWdGNHeGhkR1ZCYzNsdVl5Z3BMblJvWlc0b0tITnZkWEpqWlNrZ1BUNGdlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU52YlhCcGJHVlVaVzF3YkdGMFpVRnplVzVqS0hOdmRYSmpaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtTNTBhR1Z1S0NoMFpXMXdiR0YwWlVSbGJHVm5ZWFJsT2lCaGJua3BJRDArSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTBaVzF3YkdGMFpVUmxiR1ZuWVhSbElEMGdkR1Z0Y0d4aGRHVkVaV3hsWjJGMFpUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hSb2FYTXVYM1JsYlhCc1lYUmxSR1ZzWldkaGRHVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrdVkyRjBZMmdvS0dVcElEMCtJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaV3BsWTNRb1pTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvZEdocGN5NWZkR1Z0Y0d4aGRHVkVaV3hsWjJGMFpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQndjbTkwWldOMFpXUWdjbVZ1WkdWeVFYTjVibU1vYlc5a1pXd3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1VNklDaHlLU0E5UGlCMmIybGtMQ0J5WldwbFkzUTZJQ2hsS1NBOVBpQjJiMmxrS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WjJWMFZHVnRjR3hoZEdWQmMzbHVZeWdwWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdWRHaGxiaWdvZEdWdGNHeGhkR1ZFWld4bFoyRjBaU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQm9kRzFzSUQwZ2RHaHBjeTVmZEdWdGNHeGhkR1ZFWld4bFoyRjBaU2h0YjJSbGJDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pDaDBhR2x6TGw5amIyNTBZV2x1WlhJcExtaDBiV3dvYUhSdGJDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnpiMngyWlNodGIyUmxiQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMbU5oZEdOb0tDaGxLU0E5UGlCN0lISmxhbVZqZENobEtTQjlLVHRjY2x4dUlDQWdJQ0FnSUNCOUtUdGNjbHh1SUNBZ0lIMWNjbHh1ZlZ4eVhHNWNjbHh1Wlhod2IzSjBJSHNnVm1sbGR5d2dWbWxsZDFObGRIUnBibWR6SUgwN0lsMTlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFxmcmFtZXdvcmtcXFxcdmlldy5qc1wiLFwiLy4uXFxcXGZyYW1ld29ya1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbnZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cdHZhciBQTFVTX1VSTF9TQUZFID0gJy0nLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIX1VSTF9TQUZFID0gJ18nLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUyB8fFxuXHRcdCAgICBjb2RlID09PSBQTFVTX1VSTF9TQUZFKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSCB8fFxuXHRcdCAgICBjb2RlID09PSBTTEFTSF9VUkxfU0FGRSlcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcInl3MjhUMFwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxndWxwLWJyb3dzZXJpZnlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhc2U2NC1qc1xcXFxsaWJcXFxcYjY0LmpzXCIsXCIvLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYmFzZTY0LWpzXFxcXGxpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXFxcXGluZGV4LmpzXCIsXCIvLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxcYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwieXcyOFQwXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxccHJvY2Vzc1xcXFxicm93c2VyLmpzXCIsXCIvLi5cXFxcLi5cXFxcLi5cXFxcbm9kZV9tb2R1bGVzXFxcXGd1bHAtYnJvd3NlcmlmeVxcXFxub2RlX21vZHVsZXNcXFxccHJvY2Vzc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbmV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJ5dzI4VDBcIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLlxcXFwuLlxcXFwuLlxcXFxub2RlX21vZHVsZXNcXFxcaWVlZTc1NFxcXFxpbmRleC5qc1wiLFwiLy4uXFxcXC4uXFxcXC4uXFxcXG5vZGVfbW9kdWxlc1xcXFxpZWVlNzU0XCIpIl19
