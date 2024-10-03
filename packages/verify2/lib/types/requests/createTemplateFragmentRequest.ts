/**
 * Represents the request body for creating a template fragment.
 */
export type CreateTemplateFragmentRequest = {
  /**
   * The communication channel for the fragment (e.g., sms, voice, email).
   * @example "sms"
   */
  channel: 'sms' | 'voice';

  /**
   * Locale in IETF BCP 47 format.
   * @example "en-us"
   */
  locale: string;

  /**
   * Text content of the template fragment.
   * @example "Text content of the template. May contain 4 reserved variables: `${code}`, `${brand}`, `${time-limit}` and `${time-limit-unit}`"
   */
  text: string;
};
