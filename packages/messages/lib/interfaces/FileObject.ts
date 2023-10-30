/**
 * Represents a file object.
 *
 * A file object typically includes a URL pointing to a file and an optional caption.
 *
 * @deprecated Please use types instead of interfaces.
 * @ignore
 */
export interface FileObject {
  /**
   * The URL of the file.
   */
  url: string;

  /**
   * An optional caption to accompany the file.
   */
  caption?: string;
}
