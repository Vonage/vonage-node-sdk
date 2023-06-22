import { CallWithAnswerURL } from './CallWithAnswerURL';
import { CallWithNCCO } from './CallWithNCCO';

export type OutboundCall = CallWithNCCO | CallWithAnswerURL;
