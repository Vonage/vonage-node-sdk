import { isNCCOSerializable } from "../../interfaces/NCCO/Serializable";
import { Action } from "../../ncco";
import { Serializable } from "../../ncco";

export class NCCOBuilder {
    protected actions = [];

    public addAction(action: Action) {
        this.actions.push(action);
        return this;
    }

    public build() {
        let data = [];
        for(const action in this.actions) {
            if (isNCCOSerializable(action)) {
                data.push(action.serializeToNCCO());
            } else {
                data.push(action);
            }
        }
        return this.actions;
    }
}