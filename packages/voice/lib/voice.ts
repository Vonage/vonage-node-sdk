import { AuthenticationType, Client, FileClient } from '@vonage/server-client';
import { NCCOActions } from './enums';
import {
  GetCallDetailsParameters,
  CallPageResponse,
  CallDetailResponse,
  CallDetail,
  CreateCallResponse,
  CallResult,
  CallUpdateResult,
  UpdateCallResponse,
  Action,
  TalkAction,
  OutboundCall,
} from './types';

import { ResponseTypes } from '@vonage/vetch';

const apiCallsToCalls = (call: CallDetailResponse): CallDetail => {
  delete call._links;
  const transformedCall = Client.transformers.camelCaseObjectKeys(
    call,
    true,
    true,
  );
  delete transformedCall.conversationUuid;
  return {
    ...transformedCall,
    conversationUUID: call.conversation_uuid,
  } as CallDetail;
};

type NCCODestination = {
  type: 'ncco';
  url?: Array<string>;
  ncco?: Array<Action>;
};

/**
 * A Clint to make calls to the Vonage Voice API.
 *
 * @remarks
 * Vonage API's will return information using `snake_case`. This represents the
 * pure response before the client will transform the keys into `camelCase`.
 *
 * @example
 * Create a standalone Voice client
 *
 * ```ts
 * import { Voice } from '@vonage/voice';
 *
 * const voiceClient = new Voice({
 *  apiKey: VONAGE_API_KEY,
 *  apiSecret: VONAGE_API_SECRET
 * });
 * ```
 *
 * @example
 * Create an Voice client from the Vonage client
 *
 * ```ts
 * import { Vonage } from '@vonage/server-client';
 *
 * const vonage = new Vonage({
 *   apiKey: VONAGE_API_KEY,
 *   apiSecret: VONAGE_API_SECRET
 * });
 *
 * const voiceClient = vonage.voice;
 * ```
 */
export class Voice extends Client {
  protected authType = AuthenticationType.JWT;

  /**
   * Retrieves details of all calls using pagination.
   *
   * @param {GetCallDetailsParameters} params - Optional parameters for filtering and pagination.
   * @return {AsyncGenerator<CallDetail, void, undefined>} An async generator that yields call details or void when there are no more results.
   *
   * @example
   * ```ts
   * for await (const call of voiceClient.getAllCalls()) {
   *   console.log(call.startTime);
   * }
   * ```
   */
  async *getAllCalls(
    params: GetCallDetailsParameters = {},
  ): AsyncGenerator<CallDetail, void & CallDetail, undefined> {
    let next: URL | null = null;
    params.recordIndex = params?.recordIndex || 0;
    do {
      const resp = await this.getCallsPage(params);

      yield* resp?._embedded?.calls.map(apiCallsToCalls);
      next = resp?._links?.next ? new URL(resp._links.next.href) : null;
      if (next) {
        params.recordIndex = parseInt(
          next.searchParams.get('record_index') as string,
        );
      }
    } while (next);
  }

  /**
   * Retrieves a page of call details based on the specified parameters.
   *
   * @param {GetCallDetailsParameters} params - Optional parameters for filtering and pagination.
   * @return {Promise<CallPageResponse>} A promise that resolves to a page of call details.
   *
   * @example
   * ```ts
   * const page = await voiceClient.getCallsPage();
   * for (const call of page._embedded.calls) {
   *   console.log(call.startTime);
   * }
   * ```
   *
   * @example
   * Get the next page of call details
   * ```ts
   * const page = await voiceClient.getCallsPage({
   *   pageSize: 4,
   *   recordIndex: 10,
   * });
   * for (const call of page._embedded.calls) {
   *   console.log(call.startTime);
   * }
   * ```
   *
   * @example
   * Get all started calls
   * ```ts
   * import { CallStatus } from '@vonage/voice';
   *
   * const page = await voiceClient.getCallsPage({
   *   pageSize: 4,
   *   recordIndex: 10,
   *   status: CallStatus.STARTED,
   * });
   * for (const call of page._embedded.calls) {
   *   console.log(call.startTime);
   * }
   * ```
   */
  async getCallsPage(
    params: GetCallDetailsParameters,
  ): Promise<CallPageResponse> {
    const resp = await this.sendGetRequest<CallPageResponse>(
      `${this.config.apiHost}/v1/calls`,
      Client.transformers.snakeCaseObjectKeys(params),
    );
    return {
      ...resp.data,
    };
  }

  /**
   * Searches for call details based on the provided filter.
   *
   * @param {GetCallDetailsParameters} [filter] - Optional filter criteria to narrow down the search.
   * @return {Promise<CallPageResponse>} A promise that resolves to a page of call details matching the filter.
   *
   * @example
   * ```ts
   * const page = await voiceClient.search({
   *   pageSize: 4,
   * });
   *
   * for (const call of page._embedded.calls) {
   *   console.log(call.startTime);
   *   console.log(call.status);
   *   console.log(call.direction);
   *   console.log(call.duration);
   * };
   * ```
   */
  async search(filter: GetCallDetailsParameters): Promise<CallPageResponse> {
    return this.getCallsPage(filter);
  }

  /**
   * Retrieves detailed information about a specific call using its UUID.
   *
   * @param {string} uuid - The UUID of the call to retrieve details for.
   * @return {Promise<CallDetail>} A promise that resolves to detailed information about the call.
   *
   * @example
   * ```ts
   * const call = await voiceClient.getCall('CALL_UUID');
   * console.log(call.startTime);
   * ```
   */
  async getCall(uuid: string): Promise<CallDetail> {
    const resp = await this.sendGetRequest<CallDetailResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}`,
    );
    return apiCallsToCalls(resp.data);
  }

  /**
   * Initiates an outbound call with the specified configuration.
   *
   * @param {OutboundCall} call - The configuration for the outbound call.
   * @return {Promise<CallResult>} A promise that resolves to the result of the outbound call initiation.
   *
   * @example
   * Create a call with answer NCCO
   * ```ts
   * const call = await voiceClient.createOutboundCall({
   *   to: [{
   *     type: 'phone',
   *     number: TO_NUMBER
   *   }],
   *   asnwer_url: ['https://example.com/answer'],
   * });
   *
   * console.log(call.uuid);
   *
   * ```
   * @example
   * Create a call with answer URL
   * ```ts
   * const call = await voiceClient.createOutboundCall({
   *   to: [{
   *     type: 'phone',
   *     number: TO_NUMBER
   *   }],
   *   ncco: [{
   *     action: 'talk',
   *     text: 'This is a text to speech call from Vonage'
   *   }]
   * });
   *
   * console.log(call.uuid);
   * ```
   */
  async createOutboundCall(call: OutboundCall): Promise<CallResult> {
    const resp = await this.sendPostRequest<CreateCallResponse>(
      `${this.config.apiHost}/v1/calls`,
      Client.transformers.snakeCaseObjectKeys(call, true),
    );
    const result = Client.transformers.camelCaseObjectKeys(
      resp.data,
      true,
      true,
    );
    delete result.conversationUuid;
    result.conversationUUID = resp.data.conversation_uuid;
    return result as CallResult;
  }

  /**
   * Plays DTMF (Dual-Tone Multi-Frequency) tones on an active call.
   *
   * @param {string} uuid - The UUID of the call on which to play DTMF tones.
   * @param {string} digits - The DTMF tones to play.
   * @return {Promise<CallUpdateResult>} A promise that resolves to the result of playing DTMF tones on the call.
   *
   * @example
   * ```ts
   * const result = await voiceClient.playDTMF('CALL_UUID', '1234');
   * console.log(result.status);
   * ```
   */
  async playDTMF(uuid: string, digits: string): Promise<CallUpdateResult> {
    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/dtmf`,
      { digits: digits },
    );
    return Client.transformers.snakeCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as CallUpdateResult;
  }

  /**
   * Plays text-to-speech (TTS) audio on an active call.
   *
   * @param {string} uuid - The UUID of the call on which to play TTS audio.
   * @param {TalkAction} action - The TTS action configuration.
   * @return {Promise<CallUpdateResult>} A promise that resolves to the result of playing TTS audio on the call.
   *
   * @example
   * ```ts
   * const result = await voiceClient.playTTS(
   *   CALL_UUID,
   *   {
   *     text: 'This is a text to speech call from Vonage',
   *   },
   * );
   *
   * console.log(result.status);
   * ```
   */
  async playTTS(uuid: string, action: TalkAction): Promise<CallUpdateResult> {
    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/talk`,
      {
        text: action.text,
        loop: action.loop,
        level: action.level,
        language: action.language,
        style: action.style,
        premium: action.premium,
      },
    );

    return Client.transformers.snakeCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as CallUpdateResult;
  }

  /**
   * Stops any ongoing text-to-speech (TTS) audio playback on an active call.
   *
   * @param {string} uuid - The UUID of the call on which to stop TTS audio playback.
   * @return {Promise<CallUpdateResult>} A promise that resolves to the result of stopping TTS audio playback on the call.
   *
   * @example
   *
   * ```ts
   * const result = await voiceClient.stopTTS(CALL_UUID);
   * console.log(result.status);
   * ```
   */
  async stopTTS(uuid: string): Promise<CallUpdateResult> {
    const resp = await this.sendDeleteRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/talk`,
    );
    return Client.transformers.snakeCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as CallUpdateResult;
  }

  /**
   * Stream audio to an active call, allowing you to play audio files or live audio streams.
   *
   * @param {string} uuid - The UUID of the call to which to stream audio.
   * @param {string} url - The URL of the audio stream to play.
   * @param {number} [loop=1] - The number of times to loop the audio stream (default is 1).
   * @param {number} [volumeLevel=0.0] - The volume level of the audio stream (0.0 to 1.0, default is 0.0).
   * @return {Promise<UpdateCallResponse>} A promise that resolves to the result of streaming audio to the call.
   *
   *
   * @example
   * ```ts
   * const result = await voiceClient.streamAudio(CALL_UUID, 'https://example.com/audio.mp3');
   * console.log(result.message);
   * ```
   */
  async streamAudio(
    uuid: string,
    url: string,
    loop = 1,
    volumeLevel = 0.0,
  ): Promise<UpdateCallResponse> {
    const resp = await this.sendPutRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/stream`,
      {
        stream_url: [url],
        loop,
        level: String(volumeLevel),
      },
    );
    return Client.transformers.snakeCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as UpdateCallResponse;
  }

  /**
   * Stop streaming audio to an active call.
   *
   * @param {string} uuid - The UUID of the call from which to stop streaming audio.
   * @return {Promise<CallUpdateResult>} A promise that resolves to the result of stopping audio streaming to the call.
   *
   * @example
   * ```ts
   * const result = await voiceClient.stopStreamAudio(CALL_UUID);
   * console.log(result.message);
   * ```
   */
  async stopStreamAudio(uuid: string): Promise<CallUpdateResult> {
    const resp = await this.sendDeleteRequest<UpdateCallResponse>(
      `${this.config.apiHost}/v1/calls/${uuid}/stream`,
    );
    return Client.transformers.snakeCaseObjectKeys(
      resp.data,
      true,
      true,
    ) as CallUpdateResult;
  }

  /**
   * Transfer an active call to a new destination using a Nexmo Call Control Object (NCCO).
   *
   * @param {string} uuid - The UUID of the call to transfer.
   * @param {Action[]} ncco - The NCCO actions defining the transfer destination.
   * @return {Promise<void>} A promise that resolves when the call has been successfully transferred.
   *
   * @example
   * ```ts
   * await voiceClient.transferCallWithNCCO(
   *   CALL_UUID,
   *   [{
   *     action: 'talk',
   *     text: 'You will now be transferred to a new destination''
   *   }],
   * )
   * ```
   */
  async transferCallWithNCCO(uuid: string, ncco: Action[]): Promise<void> {
    return this.callAction(uuid, 'transfer', {
      type: 'ncco',
      ncco: ncco,
    });
  }

  /**
   * Transfer an active call to a new destination using a URL.
   *
   * @param {string} uuid - The UUID of the call to transfer.
   * @param {string} url - The URL of the transfer destination.
   * @return {Promise<void>} A promise that resolves when the call has been successfully transferred.
   *
   * @example
   * ```ts
   * await voiceClient.transferCallWithURL(
   *   CALL_UUID,
   *   'https://example.com/transfer',
   * );
   * ```
   */
  async transferCallWithURL(uuid: string, url: string): Promise<void> {
    return this.callAction(uuid, 'transfer', {
      type: 'ncco',
      url: [url],
    });
  }

  /**
   * Hang up an active call.
   *
   * @param {string} uuid - The UUID of the call to hang up.
   * @return {Promise<void>} A promise that resolves when the call has been successfully hung up.
   * @example
   * ```ts
   * await voiceClient.hangupCall(CALL_UUID);
   * ```
   */
  async hangupCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'hangup');
  }

  /**
   * Mute an active call.
   *
   * @param {string} uuid - The UUID of the call to mute.
   * @return {Promise<void>} A promise that resolves when the call has been successfully muted.
   *
   * @example
   * ```ts
   * await voiceClient.muteCall(CALL_UUID);
   * ```
   */
  async muteCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'mute');
  }

  /**
   * Unmute a muted call, allowing audio to be transmitted again.
   *
   * @param {string} uuid - The UUID of the call to unmute.
   * @return {Promise<void>} A promise that resolves when the call has been successfully unmuted.
   *
   * @example
   * ```ts
   * await voiceClient.unmuteCall(CALL_UUID);
   * ```
   */
  async unmuteCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'unmute');
  }

  /**
   * Places a call on earmuff, muting the audio for all participants except the user.
   *
   * @param {string} uuid - The UUID of the call to earmuff.
   * @return {Promise<void>} A promise that resolves when the call has been successfully earmuffed.
   *
   * @example
   * ```ts
   * await voiceClient.earmuffCall(CALL_UUID);
   * ```
   */
  async earmuffCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'earmuff');
  }

  /**
   * Remove an earmuff from a call, allowing all participants to hear each other again.
   *
   * @param {string} uuid - The UUID of the call to unearmuff.
   * @return {Promise<void>} A promise that resolves when the call has been successfully unearmuffed.
   *
   * @example
   * ```ts
   * await voiceClient.unearmuffCall(CALL_UUID);
   * ```
   */
  async unearmuffCall(uuid: string): Promise<void> {
    return this.callAction(uuid, 'unearmuff');
  }

  /**
   * Download the recording of a call to the specified file path.
   *
   * @param {string} file - The name of the recording file to download.
   * @param {string} path - The local file path where the recording will be saved.
   * @return {Promise<void>} A promise that resolves when the recording has been successfully downloaded.
   *
   * @example
   * ```ts
   * await voiceClient.downloadRecording(RECORDING_UUID, './recording.mp3');
   * ```
   */
  async downloadRecording(file: string, path: string): Promise<void> {
    const config = this.config;
    config.responseType = ResponseTypes.stream;

    const client = new FileClient(this.auth, config);
    return await client.downloadFile(file, path);
  }

  /**
   * Download the transcription of a call to the specified file path.
   *
   * @param {string} file - The name of the transcription file to download.
   * @param {string} path - The local file path where the transcription will be saved.
   * @return {Promise<void>} A promise that resolves when the transcription has been successfully downloaded.
   *
   * @example
   * ```ts
   * await voiceClient.downloadTranscription(TRANSCRIPTION_UUID, './transcription.txt');
   * ```
   */
  async downloadTranscription(file: string, path: string): Promise<void> {
    const config = this.config;
    config.responseType = ResponseTypes.text;

    const client = new FileClient(this.auth, config);
    return await client.downloadFile(file, path);
  }

  /**
   * Send a call action to a specific call identified by its UUID.
   *
   * @param {string} uuid - The UUID of the call to which the action should be applied.
   * @param {string} action - The action to perform on the call (e.g., 'hangup', 'mute', 'unmute').
   * @param {NCCODestination} [destination] - The destination details for transfer actions.
   * @return {Promise<void>} A promise that resolves when the call action has been successfully executed.
   *
   * @example
   * ```ts
   * await voiceClient.callAction(CALL_UUID, 'mute');
   * ```
   */
  protected async callAction(
    uuid: string,
    action: string,
    destination?: NCCODestination,
  ): Promise<void> {
    await this.sendPutRequest<void>(`${this.config.apiHost}/v1/calls/${uuid}`, {
      action: action,
      ...(destination ? { destination: destination } : {}),
    });
  }
}
