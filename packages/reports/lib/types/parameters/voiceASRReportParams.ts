import { Product } from '../../enums/index.js';
import { BaseReportParams } from './baseReportParams.js';
import { DirectionReportParams } from './directionReportParams.js';
import { SenderReportParams } from './senderReportParams.js';
import { RecipientReportParams } from './recipientReportParams.js';
import { DateReportParams } from './dateReportParams.js';

/**
 * Parameters for requesting an Automatic Speech Recognition (ASR)
 * product report.
 */
export type VoiceASRReportParams = {
  /**
   * Must be {@link Product.ASR}.
   */
  product: Product.ASR,
} & BaseReportParams
  & DirectionReportParams
  & SenderReportParams
  & RecipientReportParams
  & DateReportParams;
