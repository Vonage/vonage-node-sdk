import { ExperienceComposerResolution } from '../enums';

/**
 * Interface representing options for creating an Experience Composer.
 */
export type ExperienceComposerOptions = {
  /**
   * The URL of the Experience Composer.
   */
  url: string;

  /**
   * Optional properties for the Experience Composer.
   */
  properties?: {
    /**
     * The name of the Experience Composer.
     */
    name?: string;
  };

  /**
   * The maximum duration for the Experience Composer (optional).
   */
  maxDuration?: number;

  /**
   * The resolution of the Experience Composer (optional).
   */
  resolution?: ExperienceComposerResolution;

  /**
   * The callback URL for status updates (optional).
   */
  statusCallbackUrl?: string;
}
