import { XOR } from 'ts-xor';
import { NCCOAction } from '../NCCO/index';

type TransferWithURL = {
  ncco: Array<NCCOAction>;
};

type TransferWithNCCO = {
  url: Array<string>;
};

export type TransferCallParameters = {
  action: 'transfer';
  destination: {
    type: 'ncco';
  } & XOR<TransferWithURL, TransferWithNCCO>;
};
