/**
 * Enumeration representing possible SMS status codes.
 *
 * Defines different status codes that can be associated with SMS messages.
 *
 * @remarks This matches SMSErrors. Since Enums can't be joined, this is here
 * to help check valid statuses
 *
 * @enum {string}
 * @readonly
 */
export enum SMSStatus {
  /**
   * Success: The message was sent successfully.
   */
  SUCCESS = '0',

  /**
   * Throttled: Sending SMS faster than the account limit.
   */
  THROTTLED = '1',

  /**
   * Missing Required Parameter: One or more required parameters are missing.
   */
  MISSING_REQUIRED_PARAM = '2',

  /**
   * Invalid Parameter: The value of one or more parameters is invalid.
   */
  INVALID_PARAM = '3',

  /**
   * Invalid Credentials: API key and/or secret are incorrect, invalid, or disabled.
   */
  INVALID_CREDENTIALS = '4',

  /**
   * Internal Error: An error occurred while processing the message.
   */
  INTERNAL_ERROR = '5',

  /**
   * Invalid Message: The platform was unable to process the message.
   */
  INVALID_MESSAGE = '6',

  /**
   * Barred Number: The number you're trying to send messages to is blacklisted.
   */
  BARRED_NUMBER = '7',

  /**
   * Partner Account Barred: Your Vonage account has been suspended.
   */
  PARTNER_ACCOUNT_BARRED = '7',

  /**
   * Partner Quota Violation: Insufficient credit to send the message.
   */
  PARTNER_QUOTA_VIOLATION = '9',

  /**
   * Too Many Existing Binds: Number of simultaneous connections exceeds account allocation.
   */
  TOO_MANY_EXISTING_BINDS = '10',

  /**
   * Account Not Enabled For HTTP: Account is not provisioned for the SMS API.
   */
  ACCOUNT_NOT_ENABLED = '11',

  /**
   * Message Too Long: Message length exceeds the maximum allowed.
   */
  MESSAGE_TOO_LONG = '12',

  /**
   * Invalid Signature: The supplied signature could not be verified.
   */
  INVALID_SIGNATURE = '14',

  /**
   * Invalid Sender Address: Using a non-authorized sender ID in the 'from' field.
   */
  INVALID_SENDER_ADDRESS = '15',

  /**
   * Invalid Network Code: Network code is unrecognized or doesn't match the destination.
   */
  INVALID_NETWORK_CODE = '22',

  /**
   * Invalid Callback URL: Callback URL is too long or contains illegal characters.
   */
  INVALID_CALLBACK_URL = '23',

  /**
   * Non-Whitelisted Destination: Vonage account is in demo mode and requires whitelisted numbers.
   */
  NON_WHITELISTED_DESTINATION = '29',

  /**
   * Signature And API Secret Disallowed: A signed request may not present an API secret.
   */
  SIGNATURE_AND_API_SECRET_DISALLOWED = '32',

  /**
   * Number Deactivated: The number you're trying to send messages to is deactivated.
   */
  NUMBER_DEACTIVATED = '33',
}
