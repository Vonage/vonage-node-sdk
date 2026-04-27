/**
 * Represents an application configuration.
 *
 * @typedef {Object} Application
 * @property {string} [id] - The application's unique ID.
 * @property {string} name - Friendly identifier for the application. @remarks This is not unique.
 * @property {Object} [keys] - Represents the keys associated with an application. The public key for the application. @remarks You can find this value in your Vonage developer dashboard [https://dashboard.nexmo.com/applications] The private key for the application. @remarks This will only be present when the application is created, or when you cycle the public key when doing an update.
 * @property {Object} [privacy] - Represents the privacy configuration for an application Share content @remarks If set to true, Vonage may store and use your content and data for the improvement of Vonage's AI-based services and technologies.
 * @property {Object} capabilities - Represents the capabilities configuration for an application. Bulk related configuration. Meetings related configuration. Messages/Dispatch related configuration. RTC/Conversation Service related configuration. Specify the vbc capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object. Verify related configuration. Voice related configuration.
 */

export {};
