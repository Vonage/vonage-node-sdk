import { isNCCOSerializable } from '../../interfaces/NCCO/Serializable';
import { Action } from '../../ncco';
import debug from 'debug';

debug('@vonage/voice')(
  'This class is deprecated. Please update to use the appropriate type',
);

/**
 * @deprecated This class is deprecated. Please update to use the
 *             appropriate type
 */
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
