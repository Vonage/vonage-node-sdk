/**
 * The importance of the email message. This will be mapped to the Importance
 * header in the email received by the end user, which may affect how the email
 * is filtered and displayed by email clients.
 */
export enum EmailImportance {
  HIGH = 'High',
  NORMAL = 'Normal',
  LOW = 'Low',
}
