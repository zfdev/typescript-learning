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
