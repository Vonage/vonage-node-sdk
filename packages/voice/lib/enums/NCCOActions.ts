/**
 * Enum representing the available actions in a Nexmo Call Control Object (NCCO).
 */
export enum NCCOActions {
  /**
   * Connect the call to an endpoint or multiple endpoints.
   */
  CONNECT = 'connect',

  /**
   * Start a conversation that can include multiple participants.
   */
  CONVERSATION = 'conversation',

  /**
   * Collect input from the caller, including DTMF tones or speech.
   */
  INPUT = 'input',

  /**
   * Send a notification or message to a specified endpoint.
   */
  NOTIFY = 'notify',

  /**
   * Record the audio of a call.
   */
  RECORD = 'record',

  /**
   * Stream audio to a call.
   */
  STREAM = 'stream',

  /**
   * Play a text-to-speech message to the caller.
   */
  TALK = 'talk',
}
