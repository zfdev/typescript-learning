/// <reference path="../../framework/interfaces.ts" />
/// <reference path="../../../node_modules/@types/datatables.net/index.d.ts" />

import { View, AppEvent, ViewSettings } from "../../framework/framework";

@ViewSettings("./source/app/templates/symbol.hbs", "#outlet")
class SymbolView extends View implements IView {
    constructor(metiator: IMediator) {
        super(metiator);
    }

    initialize(): void {
        this.subscribeToEvents([
            new AppEvent("app.view.symbol.render", null, (e, model: any) => {
                this.renderAsync(model)
                    .then((model) => {
                        this.bindDomEvents(model);
                        this.triggerEvent(new AppEvent("app.model.chart.change", model.quote.Symbol, null));
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

    }

    protected unbindDomEvents() {
        var scope = this._container;

    }

}

export { SymbolView }