import { Product, SMSStatus } from '../../enums/index.js';
import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { DirectionReportParams } from './directionReportParams.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { SenderReportParams } from './senderReportParams.js';

/**
 * Parameters for requesting an SMS product report.
 */
export type SMSReportParams = {
  /**
   * Must be {@link Product.SMS}.
   */
  product: Product.SMS,

  /**
   * SMS delivery status to filter records by.
   */
  status?: SMSStatus,

  /**
   * Mobile network code (MCC/MNC) to filter records by.
   */
  network?: string,

  /**
   * Client reference used in the original SMS request to filter by.
   */
  clientRef?: string,

  /**
   * Account reference to filter records by.
   */
  accountRef?: string,

  /**
   * When true, includes the message body in returned records.
   */
  includeMessage?: boolean,

  /**
   * When true, includes the `concatenated` field in outbound records
   * to indicate whether the SMS was split into multiple parts.
   */
  showConcatenated?: boolean,
} & BaseReportParams & SenderReportParams & RecipientReportParams & DateReportParams & DirectionReportParams;
