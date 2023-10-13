import { Status } from '../enums/';

export type SimSwap = {
  status: Status;
  swapped?: boolean;
  reason?: string;
};
