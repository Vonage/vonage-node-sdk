import { NCCOAction } from './NCCO';
import { CommonOutboundCall } from './CommonOutboundCall';

export type CallWithNCCO = CommonOutboundCall & {
  ncco: Array<NCCOAction>;
};
