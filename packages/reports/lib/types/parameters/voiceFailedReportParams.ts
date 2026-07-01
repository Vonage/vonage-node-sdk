import { VoiceAPIReportParams } from './voiceAPIReportParams.js';
import { Product } from '../../enums/index.js';

/**
 * Parameters for requesting a Voice Failed (rejected call) product report.
 * Extends {@link VoiceAPIReportParams} with the product set to
 * {@link Product.VOICE_FAILED}.
 */
export type VoiceFailedReportParams = {
  /**
   * Must be {@link Product.VOICE_FAILED}.
   */
  product: Product.VOICE_FAILED,
} & VoiceAPIReportParams;
