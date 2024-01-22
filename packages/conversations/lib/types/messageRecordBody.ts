export type MessageRecordBody = {
  /**
   * Recording ID
   */
  recordId: string;

  /**
   * Recording URL
   */
  validity: number;

  /**
   * Audio is streamed
   */
  streamed: boolean;

  /**
   * Audio format
   */
  format: string;

  /**
   * Play beep at the beginning of the recording
   */
  beepStart: boolean;

  /**
   * Play beep at the end of the recording
   */
  beepEnd: boolean;

  /**
   * Detect speech
   */
  detectSpeach: boolean;

  /**
   * Split the audio
   */
  split: boolean;

  /**
   * Recording has multiple tracks
   */
  multiTrack: boolean;

  /**
   * Number of channels
   */
  channels: number;

  /**
   * Transcription settings
   */
  transcription: {
    /**
     * Transcription language
     */
    language: string;

    /**
     * Include sentiment analysis
     */
    sentimentAnalysis: boolean;
  }
};
