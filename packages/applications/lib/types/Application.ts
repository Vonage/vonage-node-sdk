import { CapabilityBulk } from './CapabilityBulk';
import { CapabilityMeetings } from './CapabilityMeetings';
import { CapabilityMessages } from './CapabilityMessages';
import { CapabilityRTC } from './CapabilityRTC';
import { CapabilityVerify } from './CapabilityVerify';
import { CapabilityVoice } from './CapabilityVoice';

/**
 * Represents an application configuration.
 */
export type Application = {
  /**
   * The application's unique ID.
   */
  id?: string;

  /**
   * Friendly identifier for the application.
   *
   * @remarks
   * This is not unique.
   */
  name: string;
  /**
   * Represents the keys associated with an application.
   *

   */
  keys?: {
    /**
     * The public key for the application.
     *
     * @remarks
     * You can find this value in your Vonage developer dashboard [https://dashboard.nexmo.com/applications]
     *
     */
    publicKey?: string;
    /**
     * The public key for the application.
     *
     * @remarks
     * Store this value securely.
     *
     */
    privateKey?: string;
  };

  /**
   * Represents the privacy configuration for an application
   */
  privacy?: {
    /**
     * Share content
     *
     * @remarks
     * If set to true, Vonage may store and use your content and data for the
     * improvement of Vonage's AI-based services and technologies.
     */
    improveAi: boolean;
  };

  /**
   * Represents the capabilities configuration for an application.
   */
  capabilities: {
    /**
     * Bulk related configuration.
     */
    bulk?: CapabilityBulk;

    /**
     * Meetings related configuration.
     */
    meetings?: CapabilityMeetings;

    /**
     * Messages/Dispatch related configuration.
     */
    messages?: CapabilityMessages;

    /**
     * RTC/Conversation Service related configuration.
     */
    rtc?: CapabilityRTC;

    /**
     * Specify the vbc capability to enable zero-rated calls for VBC number
     * programmability service applications. This is always an empty object.
     */
    vbc?: unknown;

    /**
     * Verify related configuration.
     */
    verify?: CapabilityVerify;

    /**
     * Voice related configuration.
     */
    voice?: CapabilityVoice;
  };
};
