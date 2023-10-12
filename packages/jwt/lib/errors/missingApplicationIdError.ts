/**
 * `MissingApplicationIdError` class for throwing an error when the
 * application id is missing. You can get the application ID from your developer
 * dashboard. The ID will be a UUID that was generated when you created the
 * application.
 *
 * @extends {Error}
 */
export class MissingApplicationIdError extends Error {
  constructor() {
    super('Missing application id');
  }
}
