/**
 * Represents the response when importing data from a file.
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 */
export type ImportFileResponse = {
  /**
   * The number of items successfully inserted during the import process.
   */
  inserted?: number;

  /**
   * The number of items updated during the import process.
   */
  updated?: number;

  /**
   * The number of items deleted during the import process.
   */
  deleted?: number;
};
