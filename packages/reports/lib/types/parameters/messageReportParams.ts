import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product, MessageStatus, MessageProvider } from '../../enums/index.js';
import { DirectionReportParams } from './directionReportParams.js';
import { SenderReportParams } from './senderReportParams.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { CountryReportParams } from './countryReportParams.js';

/**
 * Parameters for requesting a Messages API product report.
 */
export type MessageReportParams = {
  /**
   * Must be {@link Product.MESSAGES}.
   */
  product: Product.MESSAGES,

  /**
   * Message delivery status to filter records by.
   */
  status?: MessageStatus,

  /**
   * Messaging provider to filter records by.
   */
  provider?: MessageProvider,

  /**
   * When true, includes the message body in returned records.
   */
  includeMessage?: boolean,
} & BaseReportParams
  & DateReportParams
  & DirectionReportParams
  & SenderReportParams
  & RecipientReportParams
  & CountryReportParams;
