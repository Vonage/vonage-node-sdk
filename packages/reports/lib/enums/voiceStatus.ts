/**
 * Final status of a Voice API call.
 */
export enum VoiceStatus {
  /**
   * The call was answered by a person.
   */
  ANSWERED = 'ANSWERED',

  /**
   * The call was answered by an answering machine.
   */
  MACHINE = 'MACHINE',

  /**
   * The call encountered an error.
   */
  ERROR = 'ERROR',
}
