import { BaseReportParams } from './baseReportParams.js';
import { DateReportParams } from './dateReportParams.js';
import { Product, VoiceStatus } from '../../enums/index.js';
import { DirectionReportParams } from './directionReportParams.js';
import { SenderReportParams } from './senderReportParams.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { CountryReportParams } from './countryReportParams.js';
import { NetworkReportParams } from './networkReportParams.js';

/**
 * Parameters for requesting a Voice Call product report.
 */
export type VoiceAPIReportParams = {
  /**
   * Must be {@link Product.VOICE_CALL}.
   */
  product: Product.VOICE_CALL,

  /**
   * Unique call identifier (UUID) to filter records by.
   */
  callId?: string,

  /**
   * Final call status to filter records by.
   */
  status?: VoiceStatus,
} & BaseReportParams
  & DateReportParams
  & DirectionReportParams
  & NetworkReportParams
  & RecipientReportParams
  & SenderReportParams
  & CountryReportParams;
