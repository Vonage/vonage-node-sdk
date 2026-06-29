/**
 * The sensitivity of the email message. This will be mapped to the Sensitivity
 * header in the email received by the end user, which may affect how the email
 * filtered and displayed by email clients.
 */
export enum EmailSensitivity {
  PERSONAL = 'Personal',
  PRIVATE = 'Private',
  COMPANY_CONFIDENTIAL = 'Company-Confidential',
};
