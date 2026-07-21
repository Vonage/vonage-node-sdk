import { BaseReportParams } from './baseReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Voice Text-to-Speech (TTS) product report.
 */
export type VoiceTTSReportParams = {
  /**
   * Must be {@link Product.VOICE_TTS}.
   */
  product: Product.VOICE_TTS,
} & BaseReportParams;
