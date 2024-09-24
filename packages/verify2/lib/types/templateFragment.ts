/**
 * Represents a template fragment
 */
export type TemplateFragment = {
  /**
   * Unique identifier for the template fragment.
   * @example "c70f446e-997a-4313-a081-60a02a31dc19"
   */
  templateFragmentId: string;

  /**
   * The communication channel for the fragment (e.g., sms, voice).
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

  /**
   * The date when the template fragment was last updated, in ISO 8601 format.
   * @example "2023-08-30T15:20:15.17865735Z"
   */
  dateUpdated: string;

  /**
   * The date when the template fragment was created, in ISO 8601 format.
   * @example "2021-08-30T20:12:15.17865735Z"
   */
  dateCreated: string;
};
