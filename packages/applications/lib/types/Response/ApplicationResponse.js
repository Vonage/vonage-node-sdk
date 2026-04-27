/**
 * Represents a response containing application information.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`
 *
 * @typedef {Object} ApplicationResponse
 * @property {Object} keys - Keys associated with the application. The public key for the application. The private key for the application.
 * @property {Object} privacy - Privacy configuration for the application. If set to true, Vonage may store and use your content and data for the improvement of Vonage's AI-based services and technologies.
 * @property {Object} capabilities - Capabilities configuration for the application. RTC/Conversation Service related configuration. Voice related configuration. Meetings related configuration. Bulk related configuration. Messages/Dispatch related configuration. Verify related configuration. Specify the vbc capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object.
 */

export {};
