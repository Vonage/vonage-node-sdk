/**
 * Represents the details of a single stream layout.
 */
export type SingleStreamLayoutResponse = {
  /**
   * The unique identifier of the stream layout.
   */
  id: string;

  /**
   * The type of video associated with the stream layout.
   */
  videoType: string;

  /**
   * The name of the stream layout.
   */
  name: string;

  /**
   * An array of CSS class names associated with the layout.
   */
  layoutClassList: string[];
}
