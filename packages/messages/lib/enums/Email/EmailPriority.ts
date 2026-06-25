/**
 * The priority of the email message. This will be mapped to the Priority header
 * in the email received by the end user, which may affect how the email is
 * filtered and displayed by email clients.
 */
export enum EmailPriority {
  NON_URGENT = 'Non-Urgent',
  NORMAL = 'Normal',
  URGENT = 'Urgent',
};
