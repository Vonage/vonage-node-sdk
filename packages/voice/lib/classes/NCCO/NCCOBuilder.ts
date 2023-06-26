import { isNCCOSerializable } from '../../interfaces/NCCO/Serializable';
import { Action } from '../../ncco';

export class NCCOBuilder {
  protected actions = [];

  public addAction(action: Action) {
    this.actions.push(action);
    return this;
  }

  public build() {
    return this.actions.map((action) =>
      isNCCOSerializable(action) ? action.serializeToNCCO() : action,
    );
  }
}
