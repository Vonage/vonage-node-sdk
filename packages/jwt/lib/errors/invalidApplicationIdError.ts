/**
 * InvalidMissingApplicationIdError` class for throwing an error when the
 * application id is not a valid string. You can get the application ID from
 * your developer dashboard. The ID will be a UUID that was generated when you
 * created the application.
 *
 * @extends {Error}
 */
export class InvalidApplicationIdError extends Error {
  constructor() {
    super('Invalid Application Id');
  }
}
