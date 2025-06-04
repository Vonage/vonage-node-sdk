/**
 * Interface representing options for captions.
 */
export type CaptionOptions = {
  /**
   * The language code for captions (e.g., "en-us").
   */
  languageCode?: 'en-US' | 'en-AU' | 'en-GB' | 'es-US' | 'zh-CN' | 'fr-FR' | 'fr-CA' | 'de-DE' | 'hi-IN' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pt-BR' | 'th-TH';

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
