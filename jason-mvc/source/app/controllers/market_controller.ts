/// <reference path="../../framework/interfaces.ts" />

import { Controller, AppEvent } from "../../framework/framework";
import { MarketView } from "../views/market_view";
import { NasdaqModel } from "../models/nasdaq_model";
import { NyseModel } from "../models/nyse_model";

class MarketController extends Controller implements IController{
    private _marketView: IView;
    private _nasdaqModel: IModel;
    private _nyseModel: IModel;
    constructor(metiator: IMediator){
        super(metiator);
        this._marketView = new MarketView(metiator);
        this._nasdaqModel = new NasdaqModel(metiator);
        this._nyseModel = new NyseModel(metiator);
    }

    public initialize(): void{
        this.subscribeToEvents([
            new AppEvent("app.controller.market.nasdaq", null, (e, args: string[]) => {
                this.nasdaq(args);
            }),
            new AppEvent("app.controller.market.nyse", null, (e, args: string[]) => {
                this.nyse(args);
            })
        ]);
        this._marketView.initialize();
        this._nasdaqModel.initialize();
        this._nyseModel.initialize();
    }

    public dispose(): void{
        this.unsubscribeToEvents();
        this._marketView.dispose();
        this._nasdaqModel.dispose();
        this._nyseModel.dispose();
    }

    public nasdaq(args: string[]){
        this._metiator.publish(new AppEvent("app.model.nasdaq.change", null, null));
    }

    public nyse(args: string[]){
        this._metiator.publish(new AppEvent("app.model.nyse.change", null, null));
    }    
}

export {MarketController}