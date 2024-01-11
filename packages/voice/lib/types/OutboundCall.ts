import { CallWithAnswerURL } from './CallWithAnswerURL';
import { CallWithNCCO } from './CallWithNCCO';

/**
 * Represents an outbound call, which can either include an answer URL (for simple call scenarios)
 * or an NCCO (Nexmo Call Control Object) for more complex call scenarios. Depending on the use case,
 * it can be either a `CallWithAnswerURL` or a `CallWithNCCO`.
 */
export type OutboundCall = CallWithNCCO | CallWithAnswerURL;
