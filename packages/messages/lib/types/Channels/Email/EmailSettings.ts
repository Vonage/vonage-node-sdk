import {
  EmailImportance,
  EmailPriority,
  EmailSensitivity
} from '../../../enums/Email/index.js';

/**
 * Represents the settings for an email message
 *
 * @group Email
 * @category Parameters
 */
export type EmailSettings = {
  /**
   * The subject of the email. This will appear in the subject line of the email
   * received by the end user.
   */
  subject: string;

  /**
   * The importance of the email message. This will be mapped to the Importance
   * header in the email received by the end user, which may affect how the
   * email is filtered and displayed by email clients.
   */
  importance?: EmailImportance;

  /**
   * The priority of the email message. This will be mapped to the Priority
   * header in the email received by the end user, which may affect how the
   * email is filtered and displayed by email clients.
   */
  priority?: EmailPriority;

  /**
   * The sensitivity of the email message. This will be mapped to the Sensitivity
   * header in the email received by the end user, which may affect how the
   * email is filtered and displayed by email clients.
   */
  sensitivity?: EmailSensitivity;
}
