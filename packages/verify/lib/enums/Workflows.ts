/**
 * Enum representing predefined Verify workflows.
 */
export enum VerifyWorkflows {
  /**
   * Workflow: SMS - TTS - TTS
   */
  SMS_TTS_TTS = '1',

  /**
   * Workflow: SMS - SMS - TTS
   */
  SMS_SMS_TTS = '2',

  /**
   * Workflow: TTS - TTS
   */
  TTS_TTS = '3',

  /**
   * Workflow: SMS - SMS
   */
  SMS_SMS = '4',

  /**
   * Workflow: SMS - TTS
   */
  SMS_TTS = '5',

  /**
   * Workflow: SMS
   */
  SMS = '6',

  /**
   * Workflow: TTS
   */
  TTS = '7',
}
