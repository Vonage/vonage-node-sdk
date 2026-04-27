/**
 * Represents parameters for a verification request.
 *
 * @typedef {Object} VerificationParameters
 * @property {string} number - The mobile or landline phone number to verify. Unless you are setting country explicitly, this number must be in E.164 format.
 * @property {string} brand - An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your Acme Inc PIN is ..."
 * @property {string} [country] - (Optional) The two-character country code if the number is not provided in international format or if you are not sure if the number is correctly formatted. Verify will then format the number for you.
 * @property {string} [senderId] - (Optional) An 11-character alphanumeric string that represents the identity of the sender of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
 * @property {number} [codeLength] - (Optional) The length of the verification code.
 * @property {VerifyLanguages} [lg] - (Optional) The language used for the Verify request.
 * @property {number} [pinExpiry] - (Optional) How long the generated verification code is valid for, in seconds.
 * @property {number} [nextEventWait] - (Optional) The wait time in seconds between attempts to deliver the verification code.
 * @property {VerifyWorkflows} [workflowId] - (Optional) Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user.
 * @property {string} [pinCode] - (Optional) A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. This feature is not enabled by default - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status 20 will be returned.
 */

export {};
