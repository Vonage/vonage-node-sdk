/**
 * Represents the request payload for creating a call, including various call settings.
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @typedef {Object} CreateCallRequest
 * @property {boolean} [random_from_number] - Specifies whether to use a random caller number for the call.
 * @property {Array} [event_url] - An array of URLs for event callbacks during the call's lifecycle.
 * @property {MachineDetection} [machine_detection] - The type of machine detection to use for the call.
 * @property {Object} advanced_machine_detection - Advanced machine detection settings, including beep timeout. The beep timeout setting for advanced machine detection.
 * @property {number} [length_timer] - The length timer setting for the call.
 * @property {number} [ringing_timer] - The ringing timer setting for the call.
 */

export {};
