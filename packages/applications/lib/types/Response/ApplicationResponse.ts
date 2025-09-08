import { APILinks } from '@vonage/server-client';
import { Application } from '../Application.js';
import { CapabilityVerifyResponse } from './CapabilityVerifyResponse.js';
import { CapabilityRTCResponse } from './CapabilityRTCResponse.js';
import { CapabilityVoiceResponse } from './CapabilityVoiceResponse.js';
import { CapabilityMeetingsResponse } from './CapabilityMeetingsResponse.js';
import { CapabilityBulkResponse } from './CapabilityBulkResponse.js';
import { CapabilityMessagesResponse } from './CapabilityMessagesResponse.js';

/**
 * Represents a response containing application information.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @link https://developer.vonage.com/en/api/application.v2#getApplication
 *
 * @see {@link Application}
 */
export type ApplicationResponse = {
  /**
   * Keys associated with the application.
   */
  keys: {
    /**
     * The public key for the application.
     */
    public_key?: string | undefined;
    /**
     * The private key for the application.
     */
    private_key?: string | undefined;
  };
  /**
   * Privacy configuration for the application.
   */
  privacy: {
    /**
     * If set to true, Vonage may store and use your content and data for the
     * improvement of Vonage's AI-based services and technologies.
     */
    improve_ai?: boolean;
  };

  /**
   * Capabilities configuration for the application.
   */
  capabilities: {
    /**
     * RTC/Conversation Service related configuration.
     */
    rtc: CapabilityRTCResponse;

    /**
     * Voice related configuration.
     */
    voice: CapabilityVoiceResponse;

    /**
     * Meetings related configuration.
     */
    meetings: CapabilityMeetingsResponse;

    /**
     * Bulk related configuration.
     */
    bulk: CapabilityBulkResponse;

    /**
     * Messages/Dispatch related configuration.
     */
    messages: CapabilityMessagesResponse;

    /**
     * Verify related configuration.
     */
    verify: CapabilityVerifyResponse;

    /**
     * Specify the vbc capability to enable zero-rated calls for VBC number
     * programmability service applications. This is always an empty object.
     */
    vbc: unknown;
  };
} & Application & APILinks;
