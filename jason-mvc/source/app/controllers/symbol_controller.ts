/// <reference path="../../framework/interfaces.ts" />
import { Controller, AppEvent } from "../../framework/framework";
import { SymbolView } from "../views/symbol_view";
import { ChartView } from "../views/chart_view";
import { QuoteModel } from "../models/quote_model";
import { ChartModel } from "../models/chart_model";

class SymbolController extends Controller implements IController{
    private _quoteModel: IModel;
    private _chartModel: IModel;
    private _symbolView: IView;
    private _chartView: IView;

    constructor(metiator: IMediator) {
        super(metiator);
        this._quoteModel = new QuoteModel(metiator);
        this._chartModel = new ChartModel(metiator);
        this._symbolView = new SymbolView(metiator);
        this._chartView = new ChartView(metiator);
    }

    public initialize(): void{
        this.subscribeToEvents([
            new AppEvent("app.controller.symbol.quote", null, (e, symbol: string) => {
                this.quote(symbol);
            })
        ]);
        this._quoteModel.initialize();
        this._chartModel.initialize();
        this._symbolView.initialize();
        this._chartView.initialize();
    }

    public dispose(): void{
        this.unsubscribeToEvents();
        this._symbolView.dispose();
        this._quoteModel.dispose();
        this._chartView.dispose();
        this._chartModel.dispose();
    }

    public quote(symbol: string){
        this.triggerEvent(new AppEvent("app.model.quote.change", symbol, null));
    }
}

export { SymbolController }