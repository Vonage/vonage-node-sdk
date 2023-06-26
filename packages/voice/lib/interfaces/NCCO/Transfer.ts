import { Action } from '../../ncco';
import debug from 'debug';

debug('@vonage/voice')(
  'This interface is deprecated. Please update to use the appropriate type',
);

export interface NCCOTransfer {
  action: string;
  destination: {
    type: string;
    ncco: Action[];
  };
}

export interface URLTransfer {
  action: string;
  destination: {
    type: string;
    url: string[];
  };
}
