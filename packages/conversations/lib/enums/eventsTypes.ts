/**
 * Enum representing various types of events and their descriptions.
 */
export enum EventType {
  /**
   * Audio: Play audio
   */
  AUDIO_PLAY = 'audio:play',

  /**
   * Audio: Stop currently playing audio
   */
  AUDIO_PLAY_STOP = 'audio:play:stop',

  /**
   * Audio: Use TTS to speak the given text
   */
  AUDIO_SAY = 'audio:say',

  /**
   * Audio: Stop currently playing TTS
   */
  AUDIO_SAY_STOP = 'audio:say:stop',

  /**
   * Audio: Play DTMF audio
   */
  AUDIO_DTMF = 'audio:dtmf',

  /**
   * Audio: Record the audio in the conversation
   */
  AUDIO_RECORD = 'audio:record',

  /**
   * Audio: Stop current recording of audio
   */
  AUDIO_RECORD_STOP = 'audio:record:stop',

  /**
   * Audio: Mute audio
   */
  AUDIO_MUTE_ON = 'audio:mute:on',

  /**
   * Audio: Unmute audio
   */
  AUDIO_MUTE_OFF = 'audio:mute:off',

  /**
   * Audio: Earmuff audio
   */
  AUDIO_EAR_MUFF_ON = 'audio:earmuff:on',

  /**
   * Audio: Earmuff audio
   */
  AUDIO_EAR_MUFF_OFF = 'audio:earmuff:off',

  /**
   * Audio: Speaking on
   */
  AUDIO_SPEAKING_ON = 'audio:speaking:on',

  /**
   * Audio: Speaking on
   */
  AUDIO_SPEAKING_OFF = 'audio:speaking:off',

  /**
   * Custom: Custom event
   */
  CUSTOM = 'custom',

  /**
   * Ephemeral: Ephemeral
   */
  EPHEMERAL = 'ephemeral',

  /**
   * Message: Message (Text, Image, Audio, Video, File, Template, Custom, VCard, Location, Random)
   */
  MESSAGE = 'message',

  /**
   * Message: Message submitted
   */
  MESSAGE_SUBMITTED = 'message:submitted',

  /**
   * Message: Message rejected
   */
  MESSAGE_REJECTED = 'message:rejected',

  /**
   * Message: Message undeliverable
   */
  MESSAGE_UNDELIVERABLE = 'message:undeliverable',

  /**
   * Message: Message seen
   */
  MESSAGE_SEEN = 'message:seen',

  /**
   * Message: Message delivered
   */
  MESSAGE_DELIVERED = 'message:delivered',
}

