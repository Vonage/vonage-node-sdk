/**
 * Represents an action associated with a Viber message.
 *
 * @group Viber
 * @category Parameters
 */
export type ViberAction = {
  /**
   * The URL to be opened when the action is triggered.
   */
  url: string;

  /**
   * The text displayed for the action.
   */
  text: string;
};
