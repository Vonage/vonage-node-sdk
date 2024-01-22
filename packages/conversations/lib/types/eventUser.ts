export type EventUser = {
  /**
   * The user's ID.
   */
  id: string;

  /**
   * The user's name.
   */
  name: string;

  /**
   * The user's display name.
   */
  displayName: string;

  /**
   * The user's avatar URL.
   */
  imageUrl?: string;

  /**
   * The user's custom data.
   */
  customData?: Record<string, unknown>;
}
