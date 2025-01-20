
/**
 * Connect the call to a RTC capable application
 */
export type AppEndpoint = {
  /**
   * Specifies the type of endpoint, which is 'app' for RTC capable
   * applications.
   */
  type: 'app';

  /**
   * The username of ther user to connect too.
   *
   * The username must have been added using
   * {@link https://developer.nexmo.com/api/conversation#createUser}
   */
  user: string;
} & Record<string, unknown>;
