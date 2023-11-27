/**
 * Represents the details of a project.
 */
export type ProjectDetailsResponse = {
  /**
   * The unique identifier of the project.
   */
  id: string;

  /**
   * The secret associated with the project.
   */
  secret: string;

  /**
   * The status of the project.
   */
  status: string;

  /**
   * The name of the project.
   */
  name: string;

  /**
   * The environment of the project.
   */
  environment: string;

  /**
   * The timestamp when the project was created, expressed in milliseconds since the Unix epoch.
   */
  createdAt: number;
}
