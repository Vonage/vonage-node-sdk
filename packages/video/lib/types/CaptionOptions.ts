/**
 * Interface representing options for captions.
 */
export type CaptionOptions = {
  /**
   * The language code for captions (e.g., "en-us").
   */
  languageCode?: 'en-us';

  /**
   * The maximum duration for captions.
   */
  maxDuration?: number;

  /**
   * Whether to generate partial captions.
   */
  partialCaptions?: 'true' | 'false';

  /**
   * The URL for the status callback of captions.
   */
  statusCallbackUrl?: string;
}
