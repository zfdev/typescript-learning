/// <reference path="../../framework/interfaces.ts" />
/// <reference path="../../../node_modules/@types/highcharts/index.d.ts" />

import { View, AppEvent, ViewSettings } from "../../framework/framework";

@ViewSettings(null, "#chart_container")
class ChartView extends View implements IView {
    constructor(metiator: IMediator) {
        super(metiator);
    }

    initialize(): void {
        this.subscribeToEvents([
            new AppEvent("app.view.chart.render", null, (e, model: any) => {
                this.renderChart(model);
                this.bindDomEvents(model);
            })
        ]);
    }

    public dispose(): void {
        this.unbindDomEvents();
        this.unsubscribeToEvents();
    }

    protected bindDomEvents(model: any) {
        var scope = $(this._container);

    }

    protected unbindDomEvents(){
        var scope = this._container;

    }

    private renderChart(model){
        $(this._container).highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: model.title
            },
            subtitle:{
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
                    marker:{
                        radius: 0
                    },
                    lineWidth: 0.1,
                    threshold: null
                }
            },
            series: model.series
        });
    }
}

export { ChartView }