/// <reference path="../../framework/interfaces.ts" />
/// <reference path="../../../node_modules/@types/datatables.net/index.d.ts" />

import { View, AppEvent, ViewSettings, Route } from "../../framework/framework";

@ViewSettings("./source/app/templates/market.hbs", "#outlet")
class MarketView extends View implements IView {
    constructor(metiator: IMediator) {
        super(metiator);
    }

    initialize(): void {
        this.subscribeToEvents([
            new AppEvent("app.view.market.render", null, (e, args: any) => {
                this.renderAsync(args)
                    .then((model) => {
                        this.bindDomEvents(model);
                    })
                    .catch((e) => {
                        this.triggerEvent(new AppEvent("app.error", e, null))
                    })
            })
        ]);
    }

    public dispose(): void {
        this.unbindDomEvents();
        this.unsubscribeToEvents();
    }

    protected bindDomEvents(model: any) {
        var scope = $(this._container);
        $(".getQuote").on("click", scope, (e) => {
            var symbol = $(e.currentTarget).data("symbol");
            this.getStockQuote(symbol)
        })
        $(scope).find('table').DataTable();
    }

    protected unbindDomEvents() {
        var scope = this._container;
        $(".getQuote").off("click", scope);
        var table = $(scope).find("table").DataTable();
        table.destroy();
    }

    protected getStockQuote(symbol: string) {
        this.triggerEvent(new AppEvent("app.route", new Route("symbol", "quote", [symbol]), null));
    }
}

export { MarketView }