import { CommonOutboundCall } from './CommonOutboundCall';
import { HttpMethod } from '../enums/index';

export type CallWithAnswerURL = CommonOutboundCall & {
  answerUrl: string[];
  answerMethod?: HttpMethod;
};
