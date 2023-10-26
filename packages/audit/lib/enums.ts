/**
 * Audit Events are generated automatically by Vonage as the user interacts with
 * either a Vonage API or the Vonage Dashboard. Each Audit Event object has a
 * type and associated metadata.
 *
 * @remarks
 *
 * The list of supported event types does change from time to time. For
 * this reason the OPTIONS method is provided to return event types. You can
 * see how to return the definitive list of event types from the {@link https://developer.vonage.com/en/audit/code-snippets/get-event-types}
 *
 * @see Documentation {@link https://developer.vonage.com/en/audit/concepts/audit-events}
 */
export enum AuditEventTypes {
  /**
   * User status updated.
   */
  USER_STATUS = 'USER_STATUS',

  /**
   * User updated.
   */
  USER_UPDATE = 'USER_UPDATE',

  /**
   * User billing updated.
   */
  USER_BILLING_UPDATE = 'USER_BILLING_UPDATE',

  /**
   * User created.
   */
  USER_CREATE = 'USER_CREATE',

  /**
   * User login (Premium Support only).
   */
  USER_LOGIN = 'USER_LOGIN',

  /**
   * User logout (Premium Support only).
   */
  USER_LOGOUT = 'USER_LOGOUT',

  /**
   * Relates to searching for CDRs or logs in Dashboard.
   */
  USER_PRODUCT_SEARCH = 'USER_PRODUCT_SEARCH',

  /**
   * Sub-accounts for user updated.
   */
  USER_API_KEYS_UPDATE = 'USER_API_KEYS_UPDATE',

  /**
   * Secret Rotation operation.
   */
  ACCOUNT_SECRET_DELETE = 'ACCOUNT_SECRET_DELETE',

  /**
   * Secret Rotation operation.
   */
  ACCOUNT_SECRET_CREATE = 'ACCOUNT_SECRET_CREATE',

  /**
   * Account Settings updated via API.
   */
  ACCOUNT_UPDATE_SPAMMER = 'ACCOUNT_UPDATE_SPAMMER',

  /**
   * Account Settings updated via API.
   */
  ACCOUNT_UPDATE_SETTINGS_API = 'ACCOUNT_UPDATE_SETTINGS_API',

  /**
   * Number assigned.
   */
  NUMBER_ASSIGN = 'NUMBER_ASSIGN',

  /**
   * Number updated.
   */
  NUMBER_UPDATED = 'NUMBER_UPDATED',

  /**
   * Number released.
   */
  NUMBER_RELEASE = 'NUMBER_RELEASE',

  /**
   * Number linked to Vonage application.
   */
  NUMBER_LINKED = 'NUMBER_LINKED',

  /**
   * Number unlinked from Vonage application.
   */
  NUMBER_UNLINKED = 'NUMBER_UNLINKED',

  /**
   * App created.
   */
  APP_CREATE = 'APP_CREATE',

  /**
   * App updated.
   */
  APP_UPDATE = 'APP_UPDATE',

  /**
   * App deleted.
   */
  APP_DELETE = 'APP_DELETE',

  /**
   * App disabled.
   */
  APP_DISABLE = 'APP_DISABLE',

  /**
   * App enabled.
   */
  APP_ENABLE = 'APP_ENABLE',

  /**
   * Whitelist IP added.
   */
  IP_WHITELIST_CREATE = 'IP_WHITELIST_CREATE',

  /**
   * Whitelist IP deleted.
   */
  IP_WHITELIST_DELETE = 'IP_WHITELIST_DELETE',

  /**
   * Automatic reload enabled.
   */
  AUTORELOAD_ENABLE = 'AUTORELOAD_ENABLE',

  /**
   * Automatic reload settings updated.
   */
  AUTORELOAD_UPDATE = 'AUTORELOAD_UPDATE',

  /**
   * Automatic reload disabled.
   */
  AUTORELOAD_DISABLE = 'AUTORELOAD_DISABLE',
}
