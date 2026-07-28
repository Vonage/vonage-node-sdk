import { Product } from '../../enums/index.js';
import { VoiceASRReportParams } from './voiceASRReportParams.js';

/**
 * Parameters for requesting an Answering Machine Detection (AMD)
 * product report. Extends {@link VoiceASRReportParams} with the product
 * set to {@link Product.AMD}.
 */
export type VoiceAMDReportParams = {
  /**
   * Must be {@link Product.AMD}.
   */
  product: Product.AMD,
} & VoiceASRReportParams;
