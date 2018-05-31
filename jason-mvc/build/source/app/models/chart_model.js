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
