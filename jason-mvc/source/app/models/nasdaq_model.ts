/// <reference path="../../framework/interfaces.ts" />

import { Model, AppEvent, ModelSettings } from "../../framework/framework";

@ModelSettings("./data/nasdaq.json")
class NasdaqModel extends Model implements IModel {
    constructor(metiator: IMediator) {
        super(metiator);
    }

    public initialize() {
        this.subscribeToEvents([
            new AppEvent("app.model.nasdaq.change", null, (e, args) => {
                this.onChange(args);
            })
        ]);
    }

    public dispose(){
        this.unsubscribeToEvents();
    }

    private onChange(args): void{
        this.getAsync("json", args)
            .then((data)=>{
                var stocks = {
                    items: data,
                    market: "NASDAQ"
                };
                this.triggerEvent(new AppEvent("app.view.market.render", stocks, null));
            })
            .catch((e)=>{
                this.triggerEvent(new AppEvent("app.error", e, null));
            });
    }

}

export { NasdaqModel };